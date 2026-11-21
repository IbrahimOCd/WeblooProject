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
for f in sorted(os.listdir(SRC)):
    name, ext = os.path.splitext(f)
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp') or name.startswith('og-'):
        continue
    im = Image.open(os.path.join(SRC, f)).convert('RGB')
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
