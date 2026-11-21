#!/usr/bin/env python3
"""Builds the site from src/index.html.

Output (ready to upload as-is):
  index.html, fr/index.html, ar/index.html   one real page per language, already translated
  app.css, app.js                            the three stylesheets / scripts bundled (fewer requests)
  sitemap.xml, robots.txt, llms.txt          for search engines and AI assistants

Per page it also:
  - swaps every photo for resized WebP copies with srcset/sizes (see tools/optimize_images.py)
  - writes title, description, canonical, hreflang, Open Graph and JSON-LD for that language
  - builds the FAQ and case-study structured data from the page itself, so it always matches what people see
"""
import re, os, json, html, hashlib, subprocess, datetime

SITE = 'https://webloo.com/'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = lambda *a: os.path.join(ROOT, *a)
read = lambda p: open(P(p), encoding='utf-8').read()

def write(p, s):
    os.makedirs(os.path.dirname(P(p)) or ROOT, exist_ok=True)
    open(P(p), 'w', encoding='utf-8').write(s)

LANGS = {
    'en': dict(path='', locale='en_US', dir='ltr', idx=0),
    'fr': dict(path='fr/', locale='fr_FR', dir='ltr', idx=1),
    'ar': dict(path='ar/', locale='ar_MA', dir='rtl', idx=2),
}
TODAY = datetime.date.today().isoformat()
IMGS = json.load(open(P('assets/img/w/manifest.json')))

# ---------- dictionary: reuse the one the page already uses (i18n.js) ----------
NODE = r"""
const s = require('fs').readFileSync(process.argv[1], 'utf8');
const cut = (a, b) => s.slice(s.indexOf(a) + a.length, s.indexOf(b)).trim().replace(/;$/, '');
const D = eval('(' + cut('const D = ', '\n  const META') + ')');
const M = eval('(' + cut('const META = ', '\n  const IDX') + ')');
process.stdout.write(JSON.stringify({ D, M }));
"""
_dm = json.loads(subprocess.check_output(['node', '-e', NODE, P('i18n.js')]))
D, META = _dm['D'], _dm['M']
norm = lambda s: re.sub(r'\s+', ' ', s).strip()

def tr(en, lang):
    if lang == 'en':
        return en
    row = D.get(norm(en))
    return row[LANGS[lang]['idx'] - 1] if row else en

# ---------- bundles ----------
def min_css(s):
    s = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
    s = re.sub(r'\s+', ' ', s)
    s = re.sub(r'\s*([{};,])\s*', r'\1', s)
    return s.replace(';}', '}').strip()

css = min_css('\n'.join(read(f) for f in ('styles.css', 'chat.css', 'theme.css')))
js = '\n;\n'.join(read(f) for f in ('i18n.js', 'main.js', 'chat.js'))
ver = lambda s: hashlib.sha1(s.encode()).hexdigest()[:10]
write('app.css', css)
write('app.js', js)

# ---------- page source ----------
src = read('src/index.html').replace('{{LOGO}}', read('assets/logo-inline.svg'))
src = re.sub(r'<link rel="stylesheet" href="styles\.css">\s*<link rel="stylesheet" href="chat\.css">\s*<link rel="stylesheet" href="theme\.css">',
             f'<link rel="stylesheet" href="app.css?v={ver(css)}">', src)
src = re.sub(r'<script src="i18n\.js"></script>\s*<script src="main\.js"></script>\s*<script src="chat\.js"></script>',
             f'<script src="app.js?v={ver(js)}" defer></script>', src)
assert 'app.css' in src and 'app.js' in src, 'bundle tags not found in src/index.html'

# ---------- images ----------
def sizes_for(cl, A):
    """How wide (in CSS px) the browser should treat this photo, per layout.
    Frames crop with object-fit: cover, so a photo wider than its frame is drawn wider than the frame:
    each rule is (media query, frame width, frame aspect) and the width is scaled up by photo/frame aspect."""
    def build_sizes(rules):
        out = []
        for media, width, box in rules:
            m = max(1.0, A / box) if box else 1.0
            num, unit = re.match(r'([\d.]+)(vw|vh|px)', width).groups()
            val = f'{round(float(num) * m, 1):g}{unit}'
            out.append(f'{media} {val}'.strip())
        return ', '.join(out)
    if 'hero__bg' in cl:   # full-bleed, and the hero is taller than wide on phones
        return f'(max-aspect-ratio: {A:.2f}) {round(100 * A)}vh, 100vw'
    if 'quote__bg' in cl: return build_sizes([('(max-width: 860px)', '100vw', 0.6), ('', '100vw', 2.0)])
    if 'card--xl' in cl:  return build_sizes([('(max-width: 640px)', '100vw', 1.6), ('(max-width: 1200px)', '100vw', 1.6), ('', '46vw', 0.95)])
    if 'card' in cl:      return build_sizes([('(max-width: 640px)', '100vw', 1.6), ('(max-width: 1200px)', '50vw', 1.6), ('', '23vw', 1.6)])
    if 'station' in cl:   return build_sizes([('(max-width: 860px)', '92px', 0.8), ('', '18vw', 0.8)])
    if 'unit' in cl:      return build_sizes([('(max-width: 860px)', '100vw', 1.3), ('', '25vw', 0.64)])
    if 'ribbon' in cl or 'ribbon__track' in cl:   # fixed height, width follows the photo
        k = max(A, 1.6)   # frames are 4:5, 16:10 or square; the widest needs 1.6 x the height
        return f'(max-width: 900px) {round(200*k)}px, (max-width: 1455px) {round(22*k, 1):g}vw, {round(320*k)}px'
    if 'careers__media' in cl or 'careers' in cl: return build_sizes([('(max-width: 860px)', '100vw', 1.6), ('', '46vw', 1.6)])
    if 'pull__proof' in cl: return build_sizes([('(max-width: 860px)', '90vw', 1.9), ('', '320px', 1.0)])
    return '(max-width: 860px) 100vw, 50vw'

def webp(name, w): return f'assets/img/w/{name}-{w}.webp'
def fallback_w(name): return max([w for w in IMGS[name]['widths'] if w <= 1200] or IMGS[name]['widths'][:1])

def rewrite_img(tag, classes):
    m = re.search(r'\ssrc="assets/img/([^"/]+)\.(?:jpe?g|png|webp)"', tag)
    if not m or m.group(1) not in IMGS:
        return tag
    name, info = m.group(1), IMGS[m.group(1)]
    srcset = ', '.join(f'{webp(name, w)} {w}w' for w in info['widths'])
    tag = tag.replace(m.group(0), f' src="{webp(name, fallback_w(name))}" srcset="{srcset}" sizes="{sizes_for(classes, info["w"] / info["h"])}"')
    if ' width=' not in tag:
        tag = tag.replace('<img', f'<img width="{info["w"]}" height="{info["h"]}"', 1)
    return tag

# ---------- translate + rewrite the whole document ----------
TOK = re.compile(r'<!--.*?-->|<script\b.*?</script>|<style\b.*?</style>|<[^>]+>|[^<]+', re.S)
VOID = set('area base br col embed hr img input link meta source track wbr'.split())

def process(doc, lang):
    out, stack = [], []          # stack: (tag, set(classes))
    def flags(extra=()):
        cl = set(extra)
        for _, c in stack: cl |= c
        names = {t for t, _ in stack}
        skip = bool(cl & {'thread', 'wa', 'wa-fab'}) or ('svg' in names and 'pull__map' not in cl)
        return cl, skip, 'nav' in cl
    for tok in TOK.findall(doc):
        if tok.startswith('<!--'):
            continue
        if tok.startswith('<script') or tok.startswith('<style'):
            out.append(tok); continue
        if tok.startswith('</'):
            name = tok[2:-1].strip().lower()
            while stack:
                if stack.pop()[0] == name: break
            out.append(tok); continue
        if tok.startswith('<!') or tok.startswith('<?'):
            out.append(tok); continue
        if tok.startswith('<'):
            name = re.match(r'<([a-zA-Z0-9:-]+)', tok).group(1).lower()
            own = set((re.search(r'\sclass="([^"]*)"', tok) or [None, ''])[1].split())
            cl, skip, in_nav = flags(own)
            if lang != 'en' and (not skip or in_nav):
                tok = re.sub(r'(\s(?:aria-label|alt|placeholder)=")([^"]*)(")',
                             lambda m: m.group(1) + html.escape(tr(html.unescape(m.group(2)), lang)) + m.group(3), tok)
            if name == 'img':
                tok = rewrite_img(tok, cl)
                if ' loading=' not in tok: tok = tok.replace('<img', '<img loading="lazy" decoding="async"', 1)
            if name not in VOID and not tok.endswith('/>'):
                stack.append((name, own))
            out.append(tok); continue
        # text node
        _, skip, _ = flags()
        if lang != 'en' and not skip and tok.strip():
            t = html.unescape(tok)
            arrow = ' → ' in t and all(norm(x) in D for x in norm(t).split(' → '))
            if norm(t) in D or arrow:
                lead, trail = re.match(r'^\s*', t).group(0), re.search(r'\s*$', t).group(0)
                body = (' ← ' if LANGS[lang]['dir'] == 'rtl' else ' → ').join(tr(x, lang) for x in norm(t).split(' → ')) if arrow and norm(t) not in D else tr(t, lang)
                tok = lead + html.escape(body, quote=False) + trail
        out.append(tok)
    return ''.join(out)

URL_ATTR = re.compile(r'(\s(?:src|href|data-src|poster|srcset|imagesrcset)=")([^"]*)(")')
def prefix_paths(doc, pre):
    if not pre: return doc
    keep = ('#', 'http:', 'https:', 'mailto:', 'tel:', '/', 'data:', 'javascript:')
    def one(u): return u if u.startswith(keep) else pre + u
    def fix(m):
        attr, v = m.group(1), m.group(2)
        if 'srcset' in attr:
            v = ', '.join(one(part.strip()) for part in v.split(','))
        else:
            v = one(v)
        return attr + v + m.group(3)
    # only inside tags, never inside scripts
    def tag(m):
        if m.group(1):   # <script ...>body</script>: fix the tag's src, leave the code alone
            return URL_ATTR.sub(fix, m.group(1)) + m.group(2)
        return URL_ATTR.sub(fix, m.group(0))
    return re.sub(r'(<script\b[^>]*>)(.*?</script>)|<[^>]+>', tag, doc, flags=re.S)

strip = lambda s: norm(html.unescape(re.sub(r'<[^>]+>', ' ', s)))

def extract(doc):
    faq = [(strip(q), strip(a)) for q, a in re.findall(r'<summary><h3>(.*?)</h3>.*?</summary>\s*<p>(.*?)</p>', doc, re.S)]
    cards = []
    for body in re.findall(r'<article[^>]*class="card[^"]*"[^>]*>(.*?)</article>', doc, re.S):
        g = lambda pat: (re.search(pat, body, re.S) or [None, ''])[1]
        img = re.search(r'assets/img/w/([^"/]+)-\d+\.webp', body)
        cards.append(dict(client=strip(g(r'card__client[^>]*>(.*?)</span>')), title=strip(g(r'<h3>(.*?)</h3>')),
                          did=strip(g(r'card__did">(.*?)</p>')), kpi=strip(g(r'card__kpi">(.*?)</span>')),
                          chips=[strip(c) for c in re.findall(r'<li>(.*?)</li>', g(r'<ul class="chips">(.*?)</ul>'))],
                          img=img.group(1) if img else None))
    return faq, cards

ORG = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', src, re.S).group(1))['@graph'][0]
ORG.update({
    'logo': {'@type': 'ImageObject', 'url': SITE + 'assets/icon-512.png', 'width': 512, 'height': 512},
    'image': SITE + 'assets/img/og-webloo.jpg',
    'areaServed': ['North America', 'Africa', 'Middle East', 'Europe'],
    'contactPoint': {'@type': 'ContactPoint', 'contactType': 'sales', 'email': 'hello@webloo.com',
                     'telephone': '+1-949-392-5241', 'availableLanguage': ['English', 'French', 'Arabic']},
})

def head(doc, lang):
    L = LANGS[lang]; url = SITE + L['path']; i = L['idx']
    title, desc = META['title'][i], META['desc'][i]
    og_title = 'Webloo: ' + tr('No hand‑offs.', lang) if lang != 'en' else 'Webloo: No hand-offs.'
    attrs = f'lang="{lang}" dir="{L["dir"]}" data-theme="light" data-base="{"../" if L["path"] else ""}"' + (' data-page="root"' if lang == 'en' else '')
    doc = re.sub(r'<html[^>]*>', f'<html {attrs}>', doc, count=1)
    doc = re.sub(r'<title>.*?</title>', f'<title>{html.escape(title)}</title>', doc, count=1)
    doc = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{html.escape(desc)}">', doc, count=1)
    doc = re.sub(r'<link rel="canonical"[^>]*>', f'<link rel="canonical" href="{url}">\n' + '\n'.join(
        f'<link rel="alternate" hreflang="{l}" href="{SITE + LANGS[l]["path"]}">' for l in LANGS) +
        f'\n<link rel="alternate" hreflang="x-default" href="{SITE}">', doc, count=1)
    doc = re.sub(r'<meta property="og:title"[^>]*>', f'<meta property="og:title" content="{html.escape(og_title)}">', doc, count=1)
    doc = re.sub(r'<meta property="og:description"[^>]*>', f'<meta property="og:description" content="{html.escape(desc)}">', doc, count=1)
    doc = re.sub(r'<meta property="og:url"[^>]*>', f'<meta property="og:url" content="{url}">\n<meta property="og:locale" content="{L["locale"]}">\n' +
                 '\n'.join(f'<meta property="og:locale:alternate" content="{LANGS[l]["locale"]}">' for l in LANGS if l != lang), doc, count=1)
    doc = re.sub(r'(<meta property="og:image"[^>]*>)', r'\1\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'
                 f'<meta property="og:image:alt" content="{html.escape(og_title)}">', doc, count=1)
    doc = re.sub(r'(<meta name="twitter:card"[^>]*>)', r'\1' + f'\n<meta name="twitter:title" content="{html.escape(og_title)}">\n'
                 f'<meta name="twitter:description" content="{html.escape(desc)}">\n<meta name="twitter:image" content="{SITE}assets/img/og-webloo.jpg">', doc, count=1)
    hero = 'hero-webloo-stage'
    hero_sizes = sizes_for({'hero__bg'}, IMGS[hero]['w'] / IMGS[hero]['h'])
    doc = re.sub(r'<link rel="preload" as="image"[^>]*>',
                 f'<link rel="preload" as="image" href="{webp(hero, fallback_w(hero))}" imagesrcset="' +
                 ', '.join(f'{webp(hero, w)} {w}w' for w in IMGS[hero]['widths']) + '" imagesizes="' + hero_sizes + '" fetchpriority="high">', doc, count=1)

    if lang != 'ar':
        # only the language switch shows Arabic here (ع, العربية): load just those letters, not the whole family
        from urllib.parse import quote
        doc = doc.replace('&family=IBM+Plex+Sans+Arabic:wght@400;500;600', '')
        sub = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600&text=' + quote('عالربية') + '&display=swap'
        doc = doc.replace('<noscript>', f'<link rel="stylesheet" href="{sub}" media="print" onload="this.media=\'all\'">\n<noscript>', 1)

    faq, cards = extract(doc)
    page = {'@type': 'WebPage', '@id': url + '#page', 'url': url, 'name': title, 'description': desc, 'inLanguage': lang,
            'isPartOf': {'@id': SITE + '#site'}, 'about': {'@id': SITE + '#org'},
            'primaryImageOfPage': {'@type': 'ImageObject', 'url': SITE + webp(hero, fallback_w(hero))}, 'dateModified': TODAY}
    graph = [ORG,
             {'@type': 'WebSite', '@id': SITE + '#site', 'url': SITE, 'name': 'Webloo', 'publisher': {'@id': SITE + '#org'}, 'inLanguage': list(LANGS)},
             page,
             {'@type': 'FAQPage', '@id': url + '#faq', 'inLanguage': lang, 'isPartOf': {'@id': url + '#page'},
              'mainEntity': [{'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in faq]},
             {'@type': 'ItemList', '@id': url + '#work', 'name': strip(tr('Where the thread has run.', lang)), 'inLanguage': lang,
              'itemListElement': [{'@type': 'ListItem', 'position': n + 1, 'item': {
                  '@type': 'CreativeWork', 'name': c['title'], 'description': ' '.join(x for x in (c['did'], c['kpi']) if x),
                  'about': {'@type': 'Organization', 'name': c['client'].split(' · ')[0]}, 'keywords': ', '.join(c['chips']),
                  'creator': {'@id': SITE + '#org'}, **({'image': SITE + webp(c['img'], fallback_w(c['img']))} if c['img'] else {})}}
                  for n, c in enumerate(cards)]}]
    ld = json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False).replace('</', '<\\/')
    doc = re.sub(r'<script type="application/ld\+json">.*?</script>', lambda m: f'<script type="application/ld+json">{ld}</script>', doc, count=1, flags=re.S)
    return doc, faq, cards

pages = {}
for lang, L in LANGS.items():
    doc = process(src, lang)
    doc, faq, cards = head(doc, lang)
    doc = prefix_paths(doc, '../' if L['path'] else '')
    write(L['path'] + 'index.html', doc)
    pages[lang] = (faq, cards)

# ---------- sitemap ----------
alts = ''.join(f'\n    <xhtml:link rel="alternate" hreflang="{l}" href="{SITE + LANGS[l]["path"]}"/>' for l in LANGS) + \
       f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{SITE}"/>'
_, cards_en = pages['en']
imgs = ['hero-webloo-stage'] + [c['img'] for c in cards_en if c['img']]
img_xml = ''.join(f'\n    <image:image><image:loc>{SITE + webp(n, fallback_w(n))}</image:loc></image:image>' for n in imgs)
urls = ''.join(f'''
  <url>
    <loc>{SITE + L["path"]}</loc>
    <lastmod>{TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>{"1.0" if lang == "en" else "0.9"}</priority>{alts}{img_xml}
  </url>''' for lang, L in LANGS.items())
write('sitemap.xml', f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">{urls}
</urlset>
''')

# ---------- robots ----------
write('robots.txt', f'''# Webloo: everyone is welcome, search engines and AI assistants alike.
User-agent: *
Allow: /
Disallow: /src/
Disallow: /tools/
Disallow: /brand-assets/

# AI search and assistants (listed explicitly so the intent is clear)
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Allow: /

Sitemap: {SITE}sitemap.xml
''')

# ---------- llms.txt: a plain-text brief for AI assistants, built from the page ----------
faq_en, cards = pages['en']
work = '\n'.join(f"- {c['client']}: {c['title']} {c['did']}" + (f" Result: {c['kpi']}." if c['kpi'] else '') +
                 (f" Units: {', '.join(c['chips'])}." if c['chips'] else '') for c in cards)
qa = '\n\n'.join(f'### {q}\n{a}' for q, a in faq_en)
write('llms.txt', f'''# Webloo

> {faq_en[0][1]}

Webloo's promise is "No hand-offs": one partner and one team from brand to stadium, instead of a brief passed between five agencies.

## Pages
- [Home (English)]({SITE}): the whole story on one page, from the hand-off problem to selected work.
- [Accueil (Français)]({SITE}fr/): the same page in French.
- [الصفحة الرئيسية (العربية)]({SITE}ar/): the same page in Arabic.
- [Start a project]({SITE}#start): a 60-second brief; a team replies within one business day.

## Business units
{faq_en[1][1]}

## Offices
Newport Beach (California, USA; 620 Newport Center Drive, CA 92660), Miami (Florida, USA), Rabat (Morocco), Skopje (North Macedonia).

## Selected work
{work}

## Questions and answers
{qa}

## Contact
- Email: hello@webloo.com
- Phone: +1 (949) 392-5241
- Languages: English, French, Arabic
''')
print('built', ', '.join(L['path'] + 'index.html' for L in LANGS.values()), '+ app.css', len(css), 'B, app.js', len(js), 'B')

# ---------- dist/: exactly what gets published (nothing from src/, tools/, brand-assets/ or the original photos) ----------
import shutil, glob
DIST = P('dist')
shutil.rmtree(DIST, ignore_errors=True)
def put(rel):
    src_p, dst = P(rel), os.path.join(DIST, rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    (shutil.copytree if os.path.isdir(src_p) else shutil.copy2)(src_p, dst)
for rel in ['index.html', 'fr/index.html', 'ar/index.html', 'app.css', 'app.js', '404.html', 'favicon.svg', 'favicon.ico',
            'site.webmanifest', 'robots.txt', 'sitemap.xml', 'llms.txt', '_headers',
            'assets/apple-touch-icon.png', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/img/og-webloo.jpg',
            'assets/logos', 'assets/video']:
    put(rel)
for f in glob.glob(P('assets/img/w/*.webp')):
    put(os.path.relpath(f, ROOT))
size = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(DIST) for f in fs)
print(f'dist/ ready: {size / 1e6:.1f} MB')
