"""Makes the web-ready images. Run once after adding photos to assets/img.
- every JPG/WebP in assets/img -> assets/img/w/<name>-<width>.webp at 480/800/1200/1800 px (never upscaled)
- shrinks raster images embedded inside logo SVGs (they shipped at 4096 px)"""
import re, io, os, base64, json
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, OUT = os.path.join(ROOT, 'assets/img'), os.path.join(ROOT, 'assets/img/w')
WIDTHS = [480, 800, 1200, 1800]
os.makedirs(OUT, exist_ok=True)
manifest = {}
def trim_white(im):
    """Some exported photos have white rounded corners or a white edge baked in: cut them off."""
    W = lambda p: sum(p) > 700
    px = im.load(); w, h = im.size
    edge = lambda pts: sum(W(px[x, y]) for x, y in pts) / len(pts) > 0.5
    l = t = r = b = 0
    while l < w // 10 and edge([(l, y) for y in range(0, h, 4)]): l += 1
    while r < w // 10 and edge([(w - 1 - r, y) for y in range(0, h, 4)]): r += 1
    while t < h // 10 and edge([(x, t) for x in range(0, w, 4)]): t += 1
    while b < h // 10 and edge([(x, h - 1 - b) for x in range(0, w, 4)]): b += 1
    im = im.crop((l, t, w - r, h - b)); px = im.load(); w, h = im.size
    # rounded corners: the white run along an edge from a corner is about the radius R;
    # cutting 0.3 R from every side clears the whole arc
    runs = []
    for (x0, y0, dx) in [(0, 0, 1), (w - 1, 0, -1), (0, h - 1, 1), (w - 1, h - 1, -1)]:
        k = 0
        while k < min(w, h) // 6 and W(px[x0 + dx * k, y0]): k += 1
        runs.append(k)
    c = int(0.3 * max(runs)) + 3 if max(runs) else 0
    return im.crop((c, c, w - c, h - c)) if c else im

for f in sorted(os.listdir(SRC)):
    name, ext = os.path.splitext(f)
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp') or name.startswith('og-'):
        continue
    im = trim_white(Image.open(os.path.join(SRC, f)).convert('RGB'))
    w0, h0 = im.size
    ws = [w for w in WIDTHS if w < w0] + [min(w0, 2400)]
    ws = sorted(set(ws))
    for w in ws:
        h = round(h0 * w / w0)
        im.resize((w, h), Image.LANCZOS).save(os.path.join(OUT, f'{name}-{w}.webp'), 'WEBP', quality=74, method=6)
    manifest[name] = {'w': w0, 'h': h0, 'widths': ws}
json.dump(manifest, open(os.path.join(OUT, 'manifest.json'), 'w'), indent=0)

def shrink(m, max_w=600):
    im = Image.open(io.BytesIO(base64.b64decode(m.group(2))))
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    b = io.BytesIO(); im.save(b, 'WEBP', quality=88, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(b.getvalue()).decode()
for f in os.listdir(os.path.join(ROOT, 'assets/logos')):
    p = os.path.join(ROOT, 'assets/logos', f)
    s = open(p).read()
    if 'data:image/png;base64' in s:
        open(p, 'w').write(re.sub(r'data:image/(png);base64,([A-Za-z0-9+/=]+)', shrink, s))
print(len(manifest), 'photos')
