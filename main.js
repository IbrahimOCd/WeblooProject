/* Webloo — the thread.
   One SVG path is built through every .t-anchor on the page, in DOM order,
   and drawn as you scroll. The tip sits a little below the middle of the screen. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = (s, v) => (window.WebI18n ? WebI18n.t(s, v) : s);   // translate text this script creates
  const svg = document.querySelector('.thread');
  const line = svg.querySelector('.thread__line');
  const ghost = svg.querySelector('.thread__ghost');
  const tip = svg.querySelector('.thread__tip');
  const stations = [...document.querySelectorAll('.station')];
  const ctaBtn = document.querySelector('.cta__btn');
  const halo = svg.querySelector('.thread__halo');
  const litEls = [...document.querySelectorAll('[data-lit]')];
  // built pages serve resized WebP copies (assets/img/w/<name>-<width>.webp); /fr/ and /ar/ pages sit one folder down
  const BASE = document.documentElement.dataset.base || '';
  const pic = p => document.documentElement.hasAttribute('data-base') ? BASE + p.replace(/^assets\/img\/(.+)\.\w+$/, 'assets/img/w/$1-800.webp') : p;
  let litLens = [];

  let lastDocH = 0, lastDocW = 0, probes = [];
  // Safety net: if any anchor has moved since the path was built (late images, fonts, jumps), rebuild.
  function layoutMoved() {
    if (document.documentElement.clientWidth !== lastDocW) return true;
    return probes.some(([el, x, y]) => { const p = pos(el); return Math.abs(p.x - x) > 2 || Math.abs(p.y - y) > 8; });
  }
  let total = 0, marks = [], introLen = 0, intro = reduce ? 1 : 0, stationLens = [];

  const visible = el => el.getClientRects().length > 0;
  // Anchors inside the fixed nav live at the top of the page, not at the current scroll position.
  const pos = el => {
    const r = el.getBoundingClientRect();
    if (el.closest('.nav')) {
      const shrink = document.querySelector('.nav').classList.contains('is-scrolled') ? 6 : 0;
      return { x: r.left, y: r.top + shrink, el };
    }
    return { x: r.left + scrollX, y: r.top + scrollY, el };
  };

  function segment(a, b, vh) {
    const dy = b.y - a.y;
    if (Math.abs(dy) < 4) return `L ${b.x} ${b.y}`;               // same row: straight run
    let s = '', start = a;
    if (dy > vh * 1.2) {                                            // long drop: fall straight, then curve
      const mid = { x: a.x, y: b.y - vh * 0.45 };
      s += `L ${mid.x} ${mid.y} `; start = mid;
    }
    const h = (b.y - start.y) / 2;
    return s + `C ${start.x} ${start.y + h} ${b.x} ${b.y - h} ${b.x} ${b.y}`;
  }

  function build() {
    const vh = innerHeight;
    const pts = [...document.querySelectorAll('.t-anchor')].filter(visible).map(pos);
    // page height = bottom of the footer (measuring scrollHeight would include this layer itself)
    const foot = document.querySelector('.foot');
    const docH = Math.ceil(foot.getBoundingClientRect().bottom + scrollY);
    const docW = document.documentElement.clientWidth;
    // exact pixel size, no scaling, so the line always sits on its anchors
    svg.setAttribute('width', docW); svg.setAttribute('height', docH);
    svg.setAttribute('viewBox', `0 0 ${docW} ${docH}`);
    svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
    svg.style.width = docW + 'px'; svg.style.height = docH + 'px';
    lastDocH = docH; lastDocW = docW;

    // cumulative lengths at each anchor
    const probe = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.appendChild(probe);
    let d = `M ${pts[0].x} ${pts[0].y}`;
    marks = [{ y: pts[0].y, len: 0, el: pts[0].el }];
    for (let i = 1; i < pts.length; i++) {
      d += ' ' + segment(pts[i - 1], pts[i], vh);
      probe.setAttribute('d', d);
      marks.push({ y: pts[i].y, len: probe.getTotalLength(), el: pts[i].el });
    }
    probe.remove();
    probes = pts.map(p => [p.el, p.x, p.y]);
    // Horizontal runs (anchors on one row) are spread over a slice of scroll,
    // so the line visibly travels across the row instead of appearing at once.
    const k = vh * 0.18;
    for (let i = 1; i < marks.length; i++) {
      if (Math.abs(pts[i].y - pts[i - 1].y) >= 4) continue;
      let j2 = i; while (j2 + 1 < marks.length && Math.abs(pts[j2 + 1].y - pts[i].y) < 4) j2++;
      const y0 = pts[i].y - k, y1 = pts[i].y + k, n = j2 - (i - 1);
      for (let m = i - 1; m <= j2; m++) marks[m].y = y0 + (y1 - y0) * (m - (i - 1)) / n;
      i = j2;
    }
    for (let i = 1; i < marks.length; i++) marks[i].y = Math.max(marks[i].y, marks[i - 1].y + 0.01);
    line.setAttribute('d', d);
    ghost.setAttribute('d', d);
    total = line.getTotalLength();
    line.style.strokeDasharray = `${total} ${total}`;

    stationLens = stations.map(s => (marks.find(m => s.contains(m.el)) || { len: Infinity }).len);
    introLen = stationLens.filter(isFinite).pop() || 0;

    // Elements that light up when the thread passes them: nearest point on the path.
    // coarse pass every 30px, then refine around the best hit (5x fewer path lookups than a fine scan)
    const samples = [];
    for (let l = 0; l <= total; l += 30) { const p = line.getPointAtLength(l); samples.push([l, p.x, p.y]); }
    litLens = litEls.map(el => {
      const si = stations.indexOf(el);                       // stations light exactly when the line reaches their dot
      if (si >= 0 && isFinite(stationLens[si])) return stationLens[si];
      const r = el.getBoundingClientRect(), x = r.left + scrollX + r.width / 2, y = r.top + scrollY;
      const score = (px, py) => Math.abs(py - y) * 3 + Math.abs(px - x) * 0.2 + Math.max(0, Math.abs(px - x) - r.width / 2) * 5;
      let best = Infinity, bl = Infinity;
      for (const [l, px, py] of samples) { const dd = score(px, py); if (dd < best) { best = dd; bl = l; } }
      for (let l = Math.max(0, bl - 30); l <= Math.min(total, bl + 30); l += 3) { const p = line.getPointAtLength(l), dd = score(p.x, p.y); if (dd < best) { best = dd; bl = l; } }
      return best < 260 ? bl : -1;
    });
    draw();
  }

  function scrollLen() {
    const target = scrollY + innerHeight * 0.62;
    if (target <= marks[0].y) return 0;
    for (let i = 1; i < marks.length; i++) {
      const a = marks[i - 1], b = marks[i];
      if (target <= b.y) {
        const t = b.y === a.y ? 1 : (target - a.y) / (b.y - a.y);
        return a.len + (b.len - a.len) * t;
      }
    }
    return total;
  }

  // Where the line should be: scroll position, intro, or the very end once the last button is on screen.
  function targetLen() {
    if (reduce) return total;
    // at the very top the intro owns the line (logo → stations); scrolling takes over from there.
    // Without this, a tall screen already "scrolls" past the first stations and the line starts mid-row.
    let t = Math.max(introLen * ease(intro), scrollY < 4 ? 0 : scrollLen());
    const r = ctaBtn.getBoundingClientRect();
    const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 4;
    if ((r.top >= 0 && r.bottom <= innerHeight) || atBottom) t = total;
    return Math.min(total, t);
  }
  let shown = -1, raf = 0;
  function render(len) {
    line.style.strokeDashoffset = total - len;
    const p = line.getPointAtLength(len);
    tip.setAttribute('cx', p.x); tip.setAttribute('cy', p.y);
    tip.style.opacity = len < 2 || len >= total - 1 ? 0 : 1;
    litEls.forEach((el, i) => el.classList.toggle('is-lit', litLens[i] < 0 || len >= litLens[i] - 1));
    halo.setAttribute('cx', p.x); halo.setAttribute('cy', p.y); halo.style.display = tip.style.opacity === '0' ? 'none' : '';
    ctaBtn.classList.toggle('is-reached', len >= total - 1);
  }
  // The line eases toward its target, so jumps (menu links, the end button) animate instead of snapping.
  function draw() {
    if (!total) return;
    if (shown < 0) { shown = targetLen(); render(shown); }
    if (raf) return;
    let last = performance.now();
    const step = now => {
      const t = targetLen(), d = t - shown, dt = Math.min(250, now - last); last = now;
      if (Math.abs(d) < 0.6) { shown = t; render(shown); raf = 0; return; }
      // time-based easing: ~90% of the way in 250ms (big jumps) or 120ms (normal scrolling)
      const tau = Math.abs(d) > innerHeight ? 110 : 50;
      shown += d * (1 - Math.exp(-dt / tau));
      render(shown);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }
  const ease = t => 1 - Math.pow(1 - t, 3);

  // intro: draw logo → five stations on load
  function playIntro() {
    if (reduce) return;
    const t0 = performance.now() + 250, dur = 1600;
    let n = 0;
    const step = now => {
      // fonts and images can still shift the hero while the intro runs: keep the line on its stations
      if (++n % 8 === 0 && layoutMoved()) build();
      intro = Math.min(1, Math.max(0, (now - t0) / dur)); draw(); if (intro < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Pull your thread: interactive growth map ---------- */
  const ROUTES = {
    store:    { nodes: ['brand', 'platform', 'store', 'live'], client: 'Royal Moroccan Football Federation',
                title: 'Platform, official store and fan moments, run as one programme.', kpi: '<b>10B</b> impressions a year',
                img: 'assets/img/frmf-store-banner.jpg', alt: 'FRMF official store campaign' },
    stadium:  { nodes: ['platform', 'media', 'sponsor', 'live'], client: 'Basketball Africa League · NBA × FIBA',
                title: 'A new tournament, sold out in Morocco.', kpi: '<b>91%</b> sell-through in 12 weeks',
                img: 'assets/img/bal-team.jpg', alt: 'Basketball Africa League players' },
    sponsors: { nodes: ['brand', 'sponsor', 'media', 'live'], client: 'Haier Europe × Morocco national team',
                title: 'A brand new to football, activated at the top level.', kpi: 'Content · PR · OOH · app',
                img: 'assets/img/haier-app.jpg', alt: 'Haier x Morocco: Play with the number ones' },
    brand:    { nodes: ['brand', 'live', 'media', 'platform'], client: 'CAF · AFCON 2025',
                title: 'The official logo reveal film, from casting to soundtrack.', kpi: '<b>2</b> weeks, brief to launch',
                img: 'assets/img/caf-trophy.jpg', alt: 'AFCON 2025 logo craft' },
    online:   { nodes: ['platform', 'media', 'store'], client: 'duPont Registry',
                title: 'The luxury car marketplace, rebuilt and put in front of buyers.', kpi: 'Platform · growth marketing',
                img: 'assets/img/dupont-site.jpg', alt: 'duPont Registry website' },
    venue:    { nodes: ['brand', 'media', 'sponsor', 'store', 'live'], client: 'Rabat Live Arena',
                title: "Morocco's biggest stage: the match, the music, the roar.", kpi: 'Brand · campaign · ticketing · live',
                img: 'assets/img/rla-stage.jpg', alt: 'Rabat Live Arena concert' },
  };
  const UNIT = { brand: 'Digital', platform: 'Digital', media: 'Digital', sponsor: 'Sports', store: 'Retail', live: 'Experiences' };
  const pullSec = document.querySelector('.pull');
  const map = pullSec.querySelector('.pull__map');
  const route = map.querySelector('.pull__route');
  const nodeEls = Object.fromEntries([...map.querySelectorAll('.node')].map(n => [n.dataset.node, n]));
  // Node positions: landscape on desktop, portrait on phones so labels stay readable.
  const LAYOUT = {
    wide: { vb: '0 0 650 400', pos: { brand: [90, 92], platform: [320, 62], media: [560, 104], sponsor: [120, 300], store: [340, 322], live: [560, 290] } },
    tall: { vb: '0 0 400 470', pos: { brand: [80, 60], platform: [300, 90], media: [110, 210], sponsor: [300, 240], store: [90, 380], live: [300, 390] } },
  };
  let P = {};
  const mesh = map.querySelector('.pull__mesh');
  function layoutMap() {
    const L = matchMedia('(max-width: 860px)').matches ? LAYOUT.tall : LAYOUT.wide;
    map.setAttribute('viewBox', L.vb);
    P = L.pos;
    Object.entries(nodeEls).forEach(([k, n]) => n.setAttribute('transform', `translate(${P[k][0]} ${P[k][1]})`));
    // faint mesh: every unit is connected to every other one
    mesh.innerHTML = '';
    const keys = Object.keys(P);
    keys.forEach((a, i) => keys.slice(i + 1).forEach(b => {
      const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      l.setAttribute('x1', P[a][0]); l.setAttribute('y1', P[a][1]); l.setAttribute('x2', P[b][0]); l.setAttribute('y2', P[b][1]);
      mesh.appendChild(l);
    }));
  }
  layoutMap();
  // smooth curve through points (Catmull-Rom → Bézier)
  function curve(pts) {
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]} ${p2[1]}`;
    }
    return d;
  }
  const label = { brand: 'Brand', platform: 'Platform', media: 'Media', sponsor: 'Sponsorship', store: 'Store', live: 'Live & content' };
  const opts = [...pullSec.querySelectorAll('.pull__opt')];
  const proof = pullSec.querySelector('.pull__proof');
  const pullCta = pullSec.querySelector('.pull__cta');
  let hitTimers = [];
  function pick(key, animate = true) {
    const r = ROUTES[key];
    opts.forEach(o => { const on = o.dataset.route === key; o.classList.toggle('is-on', on); o.setAttribute('aria-pressed', on); });
    Object.values(nodeEls).forEach(n => { n.classList.remove('is-on', 'is-hit'); n.querySelector('.node__n').textContent = ''; });
    hitTimers.forEach(clearTimeout); hitTimers = [];
    route.setAttribute('d', curve(r.nodes.map(k => P[k])));
    const len = route.getTotalLength(), dur = reduce || !animate ? 0 : 1100;
    route.style.transition = 'none'; route.style.strokeDasharray = len; route.style.strokeDashoffset = dur ? len : 0;
    route.getBoundingClientRect();
    if (dur) { route.style.transition = `stroke-dashoffset ${dur}ms cubic-bezier(.6,.05,.2,1)`; route.style.strokeDashoffset = 0; }
    // light each node as the line reaches it
    let acc = 0; const probe = document.createElementNS('http://www.w3.org/2000/svg', 'path'); map.appendChild(probe);
    r.nodes.forEach((k, i) => {
      if (i) { probe.setAttribute('d', curve(r.nodes.slice(0, i + 1).map(n => P[n]))); acc = probe.getTotalLength(); }
      const t = dur ? (acc / len) * dur : 0;
      hitTimers.push(setTimeout(() => { const n = nodeEls[k]; n.classList.add('is-on', 'is-hit'); n.querySelector('.node__n').textContent = i + 1; }, t));
    });
    probe.remove();
    pullSec.querySelector('.pull__path').textContent = r.nodes.map(k => T(label[k])).join(document.documentElement.dir === 'rtl' ? ' ← ' : ' → ');
    const units = new Set(r.nodes.map(k => UNIT[k])).size;
    pullSec.querySelector('.pull__units').textContent = T(units === 1 ? '1 business unit' : `${units} business units`);
    proof.classList.add('is-swap');
    setTimeout(() => {
      const img = proof.querySelector('img'); img.removeAttribute('srcset'); img.removeAttribute('sizes'); img.src = pic(r.img); img.alt = T(r.alt);
      proof.querySelector('.pull__client').textContent = T('Proof · ') + T(r.client);
      proof.querySelector('.pull__title').textContent = T(r.title);
      proof.querySelector('.pull__kpi').innerHTML = T(r.kpi);
      proof.classList.remove('is-swap');
    }, dur ? 250 : 0);
    const thread = r.nodes.map(k => label[k]).join(' > ');
    pullCta.href = `mailto:hello@webloo.com?subject=${encodeURIComponent('Start a project: ' + opts.find(o => o.dataset.route === key).textContent.replace(/^\d+/, '').trim())}&body=${encodeURIComponent('Our thread: ' + thread + '\n\nAbout the project:\n')}`;
  }
  opts.forEach(o => o.addEventListener('click', () => pick(o.dataset.route)));
  pick('store', false);
  addEventListener('langchange', () => { const on = opts.find(o => o.classList.contains('is-on')); pick(on ? on.dataset.route : 'store', false); });
  matchMedia('(max-width: 860px)').addEventListener('change', () => { layoutMap(); pick(opts.find(o => o.classList.contains('is-on')).dataset.route, false); });
  // draw the default route the first time the map comes into view
  new IntersectionObserver(([e], ob) => { if (e.isIntersecting) { pick(opts.find(o => o.classList.contains('is-on')).dataset.route); ob.disconnect(); } }, { threshold: 0.4 }).observe(map);

  /* ---------- The hand-off game ---------- */
  const relay = document.querySelector('.relay');
  if (relay) {
    const BRIEF = relay.querySelector('.relay__brief p').textContent.trim();
    const rows = [...relay.querySelectorAll('.relay__row')];
    const modes = [...document.querySelectorAll('.relay__mode')];
    const result = relay.querySelector('.relay__result'), resultV = relay.querySelector('.relay__result-v');
    let run = 0, playedUsual = false;
    const wait = ms => new Promise(r => setTimeout(r, ms));
    async function type(el, text, speed, id) {
      el.style.minHeight = ''; el.textContent = text; el.style.minHeight = el.offsetHeight + 'px'; // reserve the final height so nothing below jumps
      el.textContent = ''; el.classList.add('is-typing');
      for (let i = 1; i <= text.length; i++) { if (id !== run) return; el.textContent = text.slice(0, i); await wait(speed); }
      el.classList.remove('is-typing');
    }
    // Show a mode instantly, fully written out (reduced motion, or after a language change).
    function settle(mode) {
      run++;
      relay.dataset.mode = mode; relay.classList.remove('relay--armed');
      modes.forEach(b => { const on = b.dataset.mode === mode; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); b.classList.remove('is-hint'); });
      rows.forEach(r => {
        const m = r.querySelector('.relay__msg');
        m.style.minHeight = ''; m.classList.remove('is-typing');
        r.classList.add('is-in', 'is-done');
        r.querySelector('.relay__who').textContent = T(mode === 'usual' ? r.dataset.whoU : r.dataset.whoW);
        m.textContent = T(mode === 'usual' ? r.dataset.usual : r.dataset.webloo);
      });
      resultV.textContent = T(resultV.dataset[mode]); result.classList.add('is-in');
      relay.querySelector('.relay__again').firstChild.textContent = T(mode === 'usual' ? 'Now run it with Webloo' : 'Replay the usual way') + ' ';
    }
    addEventListener('langchange', () => settle(relay.dataset.mode || 'usual'));
    async function play(mode) {
      const id = ++run;
      relay.dataset.mode = mode;
      modes.forEach(b => { const on = b.dataset.mode === mode; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); b.classList.remove('is-hint'); });
      if (reduce) { settle(mode); return; }
      relay.classList.add('relay--armed');
      rows.forEach(r => { r.classList.remove('is-in', 'is-done');
        // every row switches to the chosen story at once, including the faded ones not reached yet
        r.querySelector('.relay__who').textContent = T(mode === 'usual' ? r.dataset.whoU : (r.dataset.whoW || r.dataset.whoU));
        const m = r.querySelector('.relay__msg'); m.style.minHeight = ''; m.textContent = T(mode === 'usual' ? r.dataset.usual : r.dataset.webloo); m.style.minHeight = m.offsetHeight + 'px'; m.textContent = ''; });
      result.classList.remove('is-in');
      resultV.textContent = T(resultV.dataset[mode]);
      await wait(250);
      for (const r of rows) {
        if (id !== run) return;
        if (mode === 'webloo' && !r.dataset.webloo) continue;
        r.querySelector('.relay__who').textContent = T(mode === 'usual' ? r.dataset.whoU : r.dataset.whoW);
        r.classList.add('is-in');
        await type(r.querySelector('.relay__msg'), T(mode === 'usual' ? r.dataset.usual : r.dataset.webloo), mode === 'usual' ? 26 : 14, id);
        if (id !== run) return;
        r.classList.add('is-done');
        await wait(mode === 'usual' ? 380 : 160);
      }
      resultV.textContent = T(resultV.dataset[mode]);
      relay.querySelector('.relay__again').firstChild.textContent = T(mode === 'usual' ? 'Now run it with Webloo' : 'Replay the usual way') + ' ';
      result.classList.add('is-in');
      if (mode === 'usual' && !playedUsual) { playedUsual = true; await wait(700); if (id === run) modes.find(b => b.dataset.mode === 'webloo').classList.add('is-hint'); }
    }
    modes.forEach(b => b.addEventListener('click', () => play(b.dataset.mode)));
    const again = relay.querySelector('.relay__again');
    again.addEventListener('click', () => play(relay.dataset.mode === 'usual' ? 'webloo' : 'usual'));
    new IntersectionObserver(([e], ob) => { if (e.isIntersecting) { ob.disconnect(); play('usual'); } }, { threshold: 0.35 }).observe(relay);
  }

  /* ---------- misc ---------- */
  const nav = document.querySelector('.nav');
  const darkSecs = [...document.querySelectorAll('.hero, .pull, .eco, .quote, .foot')];
  const mcta = document.querySelector('.mcta');
  const hero = document.querySelector('.hero');
  const cta = document.querySelector('.cta');
  // header shows where you are: the link of the section under the top third of the screen
  const spy = [...document.querySelectorAll('.nav__links a, .menu nav a')].map(a => [a, document.querySelector(a.getAttribute('href'))]).filter(x => x[1]);
  function spyNav() {
    const line = innerHeight * 0.35;
    const cur = spy.find(([, sec]) => { const r = sec.getBoundingClientRect(); return r.top <= line && r.bottom > line; });
    spy.forEach(([a, sec]) => {
      const on = !!cur && cur[1] === sec;
      a.classList.toggle('is-active', on);
      on ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current');
    });
  }
  function chrome() {
    spyNav();
    nav.classList.toggle('is-scrolled', scrollY > 20);
    nav.classList.toggle('on-dark', darkSecs.some(sec => { const r = sec.getBoundingClientRect(); return r.top < 36 && r.bottom > 36; }));
    const pastHero = hero.getBoundingClientRect().bottom < innerHeight * 0.3;
    const atCta = cta.getBoundingClientRect().top < innerHeight;
    const pr = document.querySelector('.pull__cta').getBoundingClientRect();
    const pullCtaVisible = pr.top < innerHeight && pr.bottom > 0;
    mcta.classList.toggle('is-on', pastHero && !atCta && !pullCtaVisible);
  }

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count;
    if (reduce) return;
    const t0 = performance.now(), dur = 1400;
    const tick = now => { const t = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * ease(t)); if (t < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  function clocks() {
    document.querySelectorAll('time[data-tz]').forEach(t => {
      t.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: t.dataset.tz }).format(new Date());
    });
  }
  clocks(); setInterval(clocks, 15000);

  /* ---------- work-card video: hover on desktop, in-view on touch ---------- */
  document.querySelectorAll('.card--video').forEach(card => {
    const v = card.querySelector('video');
    const play = () => { if (reduce) return; if (!v.src) v.src = v.dataset.src;   /* data-src is rewritten by the build for /fr/ and /ar/ */ v.play().then(() => card.classList.add('is-playing')).catch(() => {}); };
    const stop = () => { v.pause(); card.classList.remove('is-playing'); };
    if (matchMedia('(hover: hover)').matches) {
      card.addEventListener('mouseenter', play); card.addEventListener('mouseleave', stop);
      card.addEventListener('focus', play); card.addEventListener('blur', stop);
    } else {
      new IntersectionObserver(([e]) => e.isIntersecting ? play() : stop(), { threshold: 0.6 }).observe(card);
    }
  });

  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      // layout changed since the last build (late images, fonts, jump links): rebuild first
      if (layoutMoved()) build();
      chrome(); draw(); ticking = false;   // reads first, then writes
    });
  }, { passive: true });

  let rz;
  // rebuild only when something actually moved (images, fonts and resizes fire often while loading)
  const footBottom = () => Math.ceil(document.querySelector('.foot').getBoundingClientRect().bottom + scrollY);
  const rebuild = () => { clearTimeout(rz); rz = setTimeout(() => { if (layoutMoved() || footBottom() !== lastDocH) build(); }, 120); };
  addEventListener('resize', rebuild);
  new ResizeObserver(rebuild).observe(document.body);
  document.querySelectorAll('img').forEach(im => { if (!im.complete) im.addEventListener('load', rebuild, { once: true }); });
  addEventListener('hashchange', rebuild);


  /* ---------- phone menu ---------- */
  const menuBtn = document.querySelector('.nav__menu'), menu = document.getElementById('menu');
  function setMenu(open) {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.toggle('is-open', open));
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.setAttribute('aria-label', T(open ? 'Close menu' : 'Menu'));
    document.documentElement.classList.toggle('menu-lock', open);
    if (!open) setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 400);
    else menu.querySelector('a').focus({ preventScroll: true });
  }
  menuBtn && menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  menu && menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

  /* ---------- units filter the work ---------- */
  const grid = document.querySelector('.work__grid'), cards = [...grid.querySelectorAll('.card')];
  const bar = document.querySelector('.work__filter');
  const chipsOf = el => [...el.querySelectorAll('.chips li')].map(l => l.textContent.trim());
  let unitFilter = '';
  function filterWork(unit) {
    unitFilter = unit;
    grid.classList.toggle('is-filtered', !!unit);
    cards.forEach(c => c.classList.toggle('is-match', !!unit && chipsOf(c).includes(unit)));
    bar.hidden = !unit; bar.querySelector('b').textContent = unit;
  }
  const hookUnits = () => {
  document.querySelectorAll('.unit[data-unit]').forEach(u => u.addEventListener('click', e => {
    const unit = u.dataset.unit;
    if (cards.some(c => chipsOf(c).includes(unit))) return filterWork(unit);
    // no card for this unit in the grid (e.g. Retail): show its projects from the hero stations instead
    const list = stations.filter(st => chipsOf(st.dataset.case ? document.getElementById(st.dataset.case) : st).includes(unit));
    if (list.length) { e.preventDefault(); openPeek(list, list[0]); }
  }));
  };
  bar.querySelector('button').addEventListener('click', () => filterWork(''));

  /* ---------- project pop-ups: stations and work cards ---------- */
  const box = document.querySelector('.peekbox');
  const media = box.querySelector('.peekbox__media');
  let group = [], gi = 0, lastFocus = null;
  function dataOf(el) {
    // a station points to a work card, or carries its own short story (.peek)
    const card = el.dataset.case && document.getElementById(el.dataset.case);
    const src = card || el.querySelector('.peek') || el;
    const q = sel => src.querySelector(sel);
    return {
      img: (card || el).querySelector('img'),
      client: (q('.card__client') || q('.peek__k') || {}).textContent || '',
      title: (q('h3') || {}).textContent || '',
      did: (q('.card__did') || q('.peek p') || {}).textContent || '',
      kpi: (q('.card__kpi') || {}).innerHTML || '',
      chips: chipsOf(src),
    };
  }
  function show(i) {
    gi = (i + group.length) % group.length;
    const d = dataOf(group[gi]);
    media.innerHTML = '';
    if (d.img) {
      // whole picture in front (never cropped), a blurred copy behind fills the frame
      const im = d.img.cloneNode(); im.loading = 'eager'; im.removeAttribute('style'); im.className = 'peekbox__img';
      if (im.srcset) im.sizes = '(max-width: 860px) 100vw, 56vw';
      const bg = im.cloneNode(); bg.className = 'peekbox__bg'; bg.alt = ''; bg.setAttribute('aria-hidden', 'true');
      if (bg.srcset) bg.sizes = '400px';
      media.append(bg, im);
    }
    box.querySelector('.peekbox__k').textContent = d.client;
    box.querySelector('.peekbox__title').textContent = d.title;
    box.querySelector('.peekbox__did').textContent = d.did;
    const k = box.querySelector('.peekbox__kpi'); k.innerHTML = d.kpi; k.hidden = !d.kpi;
    box.querySelector('.peekbox__chips').innerHTML = d.chips.map(c => `<li>${c}</li>`).join('');
    box.querySelector('.peekbox__count').textContent = `${String(gi + 1).padStart(2, '0')} / ${String(group.length).padStart(2, '0')}`;
    box.querySelector('.peekbox__panel').classList.remove('is-swap'); void box.offsetWidth;
    box.querySelector('.peekbox__panel').classList.add('is-swap');
  }
  function openPeek(list, el) {
    lastFocus = document.activeElement;
    group = list; box.hidden = false;
    document.documentElement.classList.add('peek-lock');
    show(list.indexOf(el));
    requestAnimationFrame(() => box.classList.add('is-open'));
    box.querySelector('.peekbox__close').focus({ preventScroll: true });
  }
  function closePeek() {
    if (box.hidden) return;
    box.classList.remove('is-open');
    document.documentElement.classList.remove('peek-lock');
    setTimeout(() => { if (!box.classList.contains('is-open')) box.hidden = true; }, reduce ? 0 : 350);
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  }
  window.WebPeek = { close: closePeek };
  hookUnits();
  const openable = (el, list) => {
    el.tabIndex = 0; el.setAttribute('role', 'button');
    el.setAttribute('aria-haspopup', 'dialog');
    el.setAttribute('aria-label', T('Open project: {title}', { title: dataOf(el).title }));
    const go = () => openPeek(list(), el);
    el.addEventListener('click', e => { if (!e.target.closest('a')) go(); });
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  };
  stations.forEach(st => openable(st, () => stations));
  cards.forEach(c => openable(c, () => unitFilter ? cards.filter(x => x.classList.contains('is-match')) : cards));
  box.querySelector('.peekbox__close').addEventListener('click', closePeek);
  box.querySelector('.peekbox__prev').addEventListener('click', () => show(gi - 1));
  box.querySelector('.peekbox__next').addEventListener('click', () => show(gi + 1));
  box.addEventListener('click', e => { if (e.target === box) closePeek(); });
  addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePeek(); if (menu && menu.classList.contains('is-open')) setMenu(false); }
    if (box.hidden) return;
    const back = document.documentElement.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') show(gi + (e.key === back ? -1 : 1));
    if (e.key === 'Tab') {   // keep focus inside the pop-up
      const f = [...box.querySelectorAll('a, button')], first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  // swipe between projects on phones
  let sx = null;
  box.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) show(gi + ((dx < 0) !== (document.documentElement.dir === 'rtl') ? 1 : -1));
  });

  build(); chrome(); playIntro();
  if (document.fonts) { document.fonts.ready.then(rebuild); document.fonts.addEventListener('loadingdone', rebuild); }
  addEventListener('load', rebuild);
})();
