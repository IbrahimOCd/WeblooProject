/* Webloo assistant: "Talk to Webloo" (help) and "Start a project" (brief builder).
   One overlay, two entry points. Scripted for the prototype: no server, no AI calls.
   The brief is sent through the visitor's own email app (mailto). */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = (s, v) => (window.WebI18n ? WebI18n.t(s, v) : s);   // translate text this script creates
  const rtl = () => document.documentElement.dir === 'rtl';
  const EMAIL = 'hello@webloo.com';
  const PHONE = '+1 (949) 392-5241';

  // The Webloo mark (the "oo" loop from the logo), used for the launcher and as the assistant's face.
  const MARK = 'M95.9168 12.536C95.6076 12.3021 95.3461 12.1033 95.0845 11.9045C93.2653 10.4896 90.6614 10.2674 88.652 11.3549C86.5713 12.4775 85.3229 14.7578 85.5488 16.9914C86.0244 21.5988 91.1846 23.844 95.0726 21.131C96.2497 20.3007 97.1533 19.1664 97.6884 17.845C98.3066 16.395 98.9249 14.9332 99.5313 13.4598C101.006 9.88148 103.538 7.47254 107.426 6.54873C113.062 5.21563 118.924 9.03953 119.851 14.6643C120.838 20.6632 116.843 25.9255 110.684 26.6271C107.664 26.9779 105.06 25.984 102.777 23.9726L105.108 20.3826C105.381 20.558 105.631 20.71 105.857 20.8854C107.664 22.3238 109.685 22.7448 111.861 21.8911C114.037 21.0374 115.178 19.3769 115.571 17.1317C116.177 13.6469 112.919 10.6299 109.911 10.6182C107.842 10.6065 106.106 11.4602 104.787 13.0505C103.776 14.2667 103.241 15.7284 102.635 17.1551C102.123 18.3595 101.66 19.5874 101.053 20.7334C98.8892 24.838 95.3817 26.7674 90.7328 26.6388C86.2741 26.5102 82.172 22.8851 81.3516 18.4882C80.3053 12.9336 83.6821 7.78828 89.2346 6.53703C92.4806 5.81201 95.3936 6.53703 97.9618 8.61854C98.0807 8.7121 98.1996 9.00444 98.1402 9.09799C97.4268 10.244 96.6896 11.3549 95.9168 12.536Z';
  const markSvg = cls => `<svg class="${cls}" viewBox="79.6 -4.5 42 42" aria-hidden="true"><path d="${MARK}"/></svg>`;

  const GOALS = {
    store:    { label: 'Open an official store', units: ['Digital', 'Retail', 'Experiences'] },
    stadium:  { label: 'Fill a stadium',         units: ['Digital', 'Sports', 'Experiences'] },
    sponsors: { label: 'Win sponsors',           units: ['Digital', 'Sports', 'Experiences'] },
    brand:    { label: 'Launch a brand',         units: ['Digital', 'Experiences'] },
    online:   { label: 'Grow online',            units: ['Digital', 'Retail'] },
    venue:    { label: 'Launch a live venue',    units: ['Digital', 'Sports', 'Retail', 'Experiences'] },
  };
  const WHERE = {
    'Morocco & Africa': ['Rabat'], 'Middle East': ['Rabat'], 'Europe': ['Skopje', 'Rabat'],
    'North America': ['Newport Beach', 'Miami'], 'Global': ['Newport Beach', 'Miami', 'Rabat', 'Skopje'],
  };
  // Most specific topics first; the general "what is Webloo" answer comes last.
  const FAQ = [
    { k: /where|office|based|location|cit(y|ies)|europe|america|africa|morocco|miami|rabat|skopje|newport|où|bureau|basé|maroc|afrique|أين|مكتب|مكاتب|مقر|المغرب|أوروبا/i, a: 'We are 250+ people in <b>Newport Beach</b> and <b>Miami</b> (USA), <b>Rabat</b> (Morocco) and <b>Skopje</b> (North Macedonia).' },
    { k: /client|worked|work with|portfolio|case|proof|example|référence|travaillé|عملاء|عملتم|عملت|زبائن/i, a: 'FRMF, CAF, the Basketball Africa League, Haier Europe, Rabat Live Arena, Wydad AC, Miami Concours, duPont Registry, Retromobile and Catalyst Health Group, among others.' },
    { k: /job|career|hiring|join|cv|intern|emploi|carrière|recrut|stage|وظيف|توظيف|عمل معكم|تدريب/i, a: `We are always glad to meet good people. Send your CV and portfolio to <a href="mailto:${EMAIL}?subject=Careers">${EMAIL}</a>.` },
    { k: /price|cost|budget|fee|how much|rate|prix|coût|tarif|combien|سعر|تكلفة|ميزانية|كم/i, a: 'It depends on the outcome and the units involved. We work by scope, by time and materials, or as a partner sharing the result. The fastest way to a number is a 60-second brief.' },
    { k: /what (do|is|are)|units?|services?|offer|ecosystem|agency|digital|sports|retail|experiences|que fait|qu'est|faites|unité|écosystème|agence|ماذا|ما هي|خدمات|وحدات|منظومة|وكالة/i, a: 'Webloo is a growth ecosystem, not an agency. Four business units work as one team: <b>Digital</b> (brand, platforms, media), <b>Sports</b> (sponsorship, rights, fans), <b>Retail</b> (official stores, merchandise) and <b>Experiences</b> (content, live events, fan zones).' },
  ];

  /* ---------- markup ---------- */
  const fab = document.createElement('button');
  fab.className = 'wa-fab'; fab.type = 'button'; fab.setAttribute('aria-label', 'Talk to Webloo');
  fab.innerHTML = `<span class="wa-fab__icon">${markSvg('wa-mark')}<i class="wa-fab__live"></i></span><span class="wa-fab__txt"><span class="wa-fab__msg">${T('Ask Webloo anything')}</span></span><span class="wa-fab__hint mono">Pull ↑</span>`;
  document.body.appendChild(fab);

  const ov = document.createElement('div');
  ov.className = 'wa'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Webloo assistant'); ov.hidden = true;
  ov.innerHTML = `
    <div class="wa__chat">
      <header class="wa__head">
        <span class="wa__avatar">${markSvg('wa-mark')}<i></i></span>
        <div><b>Webloo</b><span class="wa__status"><i></i><span data-en="Usually replies within one business day">Usually replies within one business day</span></span></div>
        <button type="button" class="wa__close" aria-label="Close">✕</button>
      </header>
      <div class="wa__log" aria-live="polite"></div>
      <div class="wa__dock">
        <div class="wa__chips"></div>
        <form class="wa__form" autocomplete="on" novalidate>
          <input class="wa__input" type="text" placeholder="Type a message…" aria-label="Message">
          <button class="wa__send" type="submit" aria-label="Send">→</button>
        </form>
      </div>
    </div>
    <aside class="wa__thread" aria-label="Your thread">
      <p class="mono wa__thread-k" data-en="Your thread">Your thread</p>
      <h2 class="wa__thread-title" data-en="Every answer adds to it.">Every answer adds to it.</h2>
      <ol class="wa__steps">
        ${['Goal', 'For', 'Where', 'When', 'You'].map(s => `<li data-step="${s}"><span class="mono" data-en="${s}">${s}</span><p>…</p></li>`).join('')}
      </ol>
      <div class="wa__group"><p class="mono" data-en="Business units">Business units</p><div class="wa__pills" data-pills="units">${['Digital', 'Sports', 'Retail', 'Experiences'].map(u => `<span data-en="${u}">${u}</span>`).join('')}</div></div>
      <div class="wa__group"><p class="mono" data-en="Your team, from">Your team, from</p><div class="wa__pills" data-pills="offices">${['Newport Beach', 'Miami', 'Rabat', 'Skopje'].map(u => `<span data-en="${u}">${u}</span>`).join('')}</div></div>
      <p class="wa__zero mono"><span data-en="1 team · ">1 team · </span><em data-en="0 hand-offs">0 hand-offs</em></p>
    </aside>`;
  document.body.appendChild(ov);

  // Re-label the fixed parts of the assistant in the current language.
  function translateShell() {
    ov.querySelectorAll('[data-en]').forEach(el => { el.textContent = T(el.dataset.en); });
    ov.setAttribute('aria-label', T('Webloo assistant'));
    ov.querySelector('.wa__close').setAttribute('aria-label', T('Close'));
    ov.querySelector('.wa__input').setAttribute('aria-label', T('Message'));
    ov.querySelector('.wa__input').placeholder = T('Type a message…');
    ov.querySelector('.wa__send').setAttribute('aria-label', T('Send'));
    ov.querySelector('.wa__thread').setAttribute('aria-label', T('Your thread'));
    fab.querySelector('.wa-fab__hint').textContent = T('Pull ↑');
  }
  translateShell();

  const log = ov.querySelector('.wa__log'), chips = ov.querySelector('.wa__chips');
  const form = ov.querySelector('.wa__form'), input = ov.querySelector('.wa__input');
  const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms));
  let session = 0, onText = null, lastFocus = null;
  const brief = {};

  /* ---------- open / close with a circle reveal from the click point ---------- */
  function open(mode, evt, preset) {
    lastFocus = document.activeElement;
    const x = evt && evt.clientX ? evt.clientX : innerWidth - 50, y = evt && evt.clientY ? evt.clientY : innerHeight - 50;
    ov.style.setProperty('--ox', x + 'px'); ov.style.setProperty('--oy', y + 'px');
    ov.hidden = false; ov.classList.toggle('is-brief', mode === 'brief');
    document.documentElement.classList.add('wa-lock');
    requestAnimationFrame(() => ov.classList.add('is-open'));
    reset();
    (mode === 'brief' ? runBrief(preset) : runHelp());
    setTimeout(() => input.focus({ preventScroll: true }), reduce ? 0 : 500);
  }
  function close() {
    session++;
    ov.classList.remove('is-open');
    document.documentElement.classList.remove('wa-lock');
    setTimeout(() => { ov.hidden = true; }, reduce ? 0 : 500);
    lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
  }
  ov.querySelector('.wa__close').addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && !ov.hidden) close(); });

  function reset() {
    session++; log.innerHTML = ''; chips.innerHTML = ''; onText = null;
    Object.keys(brief).forEach(k => delete brief[k]);
    ov.querySelectorAll('.wa__steps li').forEach(li => { li.classList.remove('is-set'); li.querySelector('p').textContent = '…'; });
    ov.querySelectorAll('.wa__pills span').forEach(s => s.classList.remove('is-on'));
    ov.classList.remove('is-done');
  }

  /* ---------- conversation helpers ---------- */
  async function say(html, delay = 650) {
    const id = session;
    const row = document.createElement('div'); row.className = 'wa-row wa-row--bot';
    const prev = log.lastElementChild;
    if (prev && prev.classList.contains('wa-row--bot')) prev.classList.add('is-cont');   // avatar only on the last of a group
    row.innerHTML = `<span class="wa-row__av">${markSvg('wa-mark')}</span><div class="wa-msg wa-msg--bot wa-msg--typing"><i></i><i></i><i></i></div>`;
    log.appendChild(row); scroll();
    await wait(delay);
    if (id !== session) return false;
    const msg = row.querySelector('.wa-msg');
    msg.classList.remove('wa-msg--typing'); msg.innerHTML = html; scroll();
    return true;
  }
  function me(text) {
    log.querySelectorAll('.wa-seen').forEach(x => x.remove());
    const row = document.createElement('div'); row.className = 'wa-row wa-row--me';
    const m = document.createElement('div'); m.className = 'wa-msg wa-msg--me'; m.textContent = text;
    const seen = document.createElement('span'); seen.className = 'wa-seen mono'; seen.textContent = T('Seen');
    row.append(m, seen); log.appendChild(row); scroll();
  }
  function scroll() { log.scrollTo({ top: log.scrollHeight, behavior: reduce ? 'auto' : 'smooth' }); }
  function ask(options, { free = T('Type your answer…'), type = 'text', auto = 'off', check = null } = {}) {
    return new Promise(resolve => {
      const id = session;
      chips.innerHTML = '';
      options.forEach(o => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'wa-chip'; b.textContent = o.label || o;
        b.addEventListener('click', () => { if (id !== session) return; chips.innerHTML = ''; onText = null; me(b.textContent); done(o.value !== undefined ? o.value : (o.label || o)); });
        chips.appendChild(b);
      });
      input.placeholder = free; input.type = type; input.setAttribute('autocomplete', auto);
      input.dir = type === 'email' ? 'ltr' : '';
      const done = v => { input.type = 'text'; input.setAttribute('autocomplete', 'off'); input.dir = ''; input.placeholder = T('Type a message…'); resolve(v); };
      onText = async text => {
        me(text);
        if (check && !check(text)) { await say(check.msg, 450); return; }   // ask again, keep listening
        chips.innerHTML = ''; onText = null; done(text);
      };
      input.focus({ preventScroll: true });
    });
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const t = input.value.trim(); if (!t) return;
    input.value = '';
    if (onText) onText(t); else { me(t); helpAnswer(t); }
  });
  function setStep(step, text) {
    const li = ov.querySelector(`.wa__steps li[data-step="${step}"]`);
    li.querySelector('p').textContent = text; li.classList.add('is-set');
  }
  function light(group, names) {
    ov.querySelectorAll(`[data-pills="${group}"] span`).forEach(s => { if (names.includes(s.dataset.en)) s.classList.add('is-on'); });
  }

  /* ---------- brief mode ---------- */
  async function runBrief(preset) {
    const id = session;
    if (!await say(T("Hi, I'm Webloo. Let's pull your thread in under a minute. <b>What do you want to grow?</b>"), 500)) return;
    let goal;
    if (preset && GOALS[preset]) { me(T(GOALS[preset].label)); goal = preset; }
    else goal = await ask(Object.entries(GOALS).map(([k, g]) => ({ label: T(g.label), value: k })), { free: T('Or describe it in your words…') });
    if (id !== session) return;
    const g = GOALS[goal] || { label: goal, units: ['Digital', 'Sports', 'Retail', 'Experiences'] };
    brief.goal = g.label; setStep('Goal', T(g.label)); light('units', g.units); brief.units = g.units;

    if (!await say(T('Good. That brings in <b>{units}</b>. <b>Who is it for?</b>', { units: g.units.map(u => T(u)).join(rtl() ? '، ' : ', ') }))) return;
    const who = await ask(['Federation or league', 'Club', 'A brand', 'Venue or event', 'Healthcare', 'Other'].map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.for = who; setStep('For', T(who));

    if (!await say(T('<b>Where are your fans or customers?</b>'))) return;
    const where = await ask(Object.keys(WHERE).map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.where = where; setStep('Where', T(where));
    const offices = WHERE[where] || ['Newport Beach', 'Miami', 'Rabat', 'Skopje']; light('offices', offices); brief.offices = offices;

    if (!await say(T('Your team would come from <b>{offices}</b>. <b>When does it need to be live?</b>', { offices: offices.map(o => T(o)).join(T(' + ')) }))) return;
    const when = await ask(['This quarter', 'In 3 to 6 months', 'Later this year', 'Just exploring'].map(x => ({ label: T(x), value: x })));
    if (id !== session) return; brief.when = when; setStep('When', T(when));

    if (!await say(T('Almost there. <b>What should we call you?</b>'))) return;
    const name = await ask([], { free: T('Your name'), auto: 'name' });
    if (id !== session) return;
    setStep('You', name);
    const first = escapeHtml(name.split(' ')[0]);
    if (!await say(T('Nice to meet you, {name}. <b>Your work email?</b> That is where the team will reply.', { name: first }))) return;
    const isEmail = t => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t);
    isEmail.msg = T('Hmm, that email does not look right. <b>Could you check it?</b>');
    const email = await ask([], { free: 'name@company.com', type: 'email', auto: 'email', check: isEmail });
    if (id !== session) return;
    if (!await say(T('And the company or organisation? <i>(optional)</i>'))) return;
    const company = await ask([{ label: T('Skip'), value: '' }], { free: T('Company'), auto: 'organization' });
    if (id !== session) return;
    brief.name = name; brief.email = email; brief.company = company;
    setStep('You', [name, company].filter(Boolean).join(' · '));
    ov.classList.add('is-done');

    const body = [
      `Goal: ${brief.goal}`, `For: ${brief.for}`, `Where: ${brief.where}`, `When: ${brief.when}`,
      `Units: ${brief.units.join(', ')}`, `Team from: ${brief.offices.join(', ')}`, '',
      `Name: ${brief.name}`, `Email: ${brief.email}`, brief.company ? `Company: ${brief.company}` : '',
    ].filter(l => l !== null).join('\n');
    const mail = `mailto:${EMAIL}?subject=${encodeURIComponent('Start a project: ' + brief.goal)}&body=${encodeURIComponent(body)}`;
    await say(T('Your thread is ready, {name}. <b>One team, {n} units, zero hand-offs.</b> We reply within one business day.', { name: escapeHtml(brief.name.split(' ')[0]), n: brief.units.length }) +
      `<div class="wa-actions"><a class="wa-btn" href="${mail}">${T('Send my thread →')}</a><button type="button" class="wa-btn wa-btn--ghost" data-copy>${T('Copy it')}</button></div>`, 900);
    const copyBtn = log.querySelector('[data-copy]');
    copyBtn && copyBtn.addEventListener('click', () => { navigator.clipboard && navigator.clipboard.writeText(body); copyBtn.textContent = T('Copied'); });
  }

  /* ---------- help mode ---------- */
  async function runHelp() {
    if (!await say(T("Hi, I'm Webloo. <b>How can we help?</b>"), 450)) return;
    helpChips();
  }
  function helpChips() {
    const id = session;
    chips.innerHTML = '';
    [['Start a project', () => { reset(); ov.classList.add('is-brief'); runBrief(); }],
     ['What does Webloo do?', () => helpAnswer('what do you do')],
     ['Where are you based?', () => helpAnswer('where are you')],
     ['Who have you worked with?', () => helpAnswer('clients')],
     ['Talk to a human', () => human()]].forEach(([label, fn]) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'wa-chip'; b.textContent = T(label);
      b.addEventListener('click', () => { if (id !== session) return; if (label !== 'Start a project') me(T(label)); fn(); });
      chips.appendChild(b);
    });
    input.placeholder = T('Ask anything…');
  }
  async function helpAnswer(text) {
    if (/start|project|brief|quote|proposal|projet|lancer|devis|مشروع|ابدأ|عرض/i.test(text)) { reset(); ov.classList.add('is-brief'); return runBrief(); }
    if (/human|person|call|phone|talk|support|contact|whatsapp|humain|appeler|téléphone|parler|شخص|اتصال|هاتف|تواصل|تحدث|واتساب/i.test(text)) return human();
    const hit = FAQ.find(f => f.k.test(text));
    await say(T(hit ? hit.a : "Good question. I'm a simple assistant for now, so let me connect you with the team, or we can start a 60-second brief."));
    helpChips();
  }
  async function human() {
    await say(T(`Of course. Email <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:+19493925241">${PHONE}</a>. A real person replies within one business day.`));
    helpChips();
  }
  const escapeHtml = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- entry points ---------- */
  /* ---------- it reads the page: message + action follow the section in view ---------- */
  const CONTEXT = [
    ['.hero',    'Ask Webloo anything',      'help'],
    ['.problem', 'Skip the hand-offs',        'brief'],
    ['.pull',    'Brief this in 60 seconds',  'brief-pull'],
    ['.eco',     'Which unit do I need?',     'help'],
    ['.work',    'Want results like these?',  'brief'],
    ['.proof',   'Talk to a human',           'help'],
    ['.quote',   'Talk to a human',           'help'],
    ['.faq',     'Still have a question?',    'help'],
  ];
  let ctxAction = 'help', sayTimer = 0;
  const msgWrap = fab.querySelector('.wa-fab__txt');
  function setMessage(text) {
    msgWrap.querySelectorAll('.wa-fab__msg.is-out').forEach(m => m.remove());   // never stack more than two
    const cur = msgWrap.querySelector('.wa-fab__msg');
    if (cur && cur.textContent === text) return;
    const next = document.createElement('span'); next.className = 'wa-fab__msg is-in'; next.textContent = text;
    if (cur) { cur.classList.add('is-out'); cur.addEventListener('transitionend', () => cur.remove(), { once: true }); setTimeout(() => cur.remove(), 600); }
    msgWrap.appendChild(next);
    // the circle slides open for a moment to say it, then folds back
    if (cur) { fab.classList.add('is-say'); clearTimeout(sayTimer); sayTimer = setTimeout(() => fab.classList.remove('is-say'), 3200); }
    next.getBoundingClientRect();            // commit the start position, then slide in
    next.classList.remove('is-in');
    fab.setAttribute('aria-label', text);
  }
  function readPage() {
    const mid = innerHeight * 0.45;
    const hit = CONTEXT.find(([sel]) => { const el = document.querySelector(sel); if (!el) return false; const r = el.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
    if (hit) { setMessage(T(hit[1])); ctxAction = hit[2]; }
    const cta = document.querySelector('.cta__btn'), r = cta && cta.getBoundingClientRect();
    fab.classList.toggle('is-away', !!r && r.top < innerHeight && r.bottom > 0);
  }
  let reading = false;
  addEventListener('scroll', () => { if (reading) return; reading = true; requestAnimationFrame(() => { readPage(); reading = false; }); }, { passive: true });
  addEventListener('resize', readPage);
  readPage();
  setTimeout(() => { fab.classList.add('is-say'); sayTimer = setTimeout(() => fab.classList.remove('is-say'), 3200); }, 1800);  // say hello once

  function openFromFab(e) {
    if (ctxAction === 'brief') return open('brief', e);
    if (ctxAction === 'brief-pull') { const on = document.querySelector('.pull__opt.is-on'); return open('brief', e, on && on.dataset.route); }
    open('help', e);
  }
  // Pull it up to open (a click works too).
  let pullStart = null, pulled = false;
  fab.addEventListener('pointerdown', e => { pullStart = { y: e.clientY, x: e.clientX }; pulled = false; fab.setPointerCapture(e.pointerId); });
  fab.addEventListener('pointermove', e => {
    if (!pullStart) return;
    const dy = Math.min(0, e.clientY - pullStart.y);
    fab.style.setProperty('--pull', `${Math.max(dy, -90) * 0.55}px`);
    if (dy < -55 && !pulled) { pulled = true; pullStart = null; fab.style.setProperty('--pull', '0px'); openFromFab(e); }
  });
  const endPull = () => { pullStart = null; fab.style.setProperty('--pull', '0px'); };
  fab.addEventListener('pointerup', endPull); fab.addEventListener('pointercancel', endPull);
  fab.addEventListener('click', e => { if (pulled) { pulled = false; return; } openFromFab(e); });
  // Final button and the Pull-your-thread button open the brief straight away, from where you clicked.
  // Any other "Start a project" link first scrolls down so the line races into the final button,
  // then the brief opens out of that button.
  document.addEventListener('click', async e => {
    const a = e.target.closest('a[href="#start"], .cta__btn, .pull__cta, .peek__cta');
    if (!a) return;
    e.preventDefault();
    if (a.classList.contains('pull__cta')) {
      const on = document.querySelector('.pull__opt.is-on');
      return open('brief', e, on && on.dataset.route);
    }
    if (a.classList.contains('cta__btn')) return open('brief', e);
    if (a.classList.contains('peek__cta')) { window.WebPeek && WebPeek.close(); return open('brief', e); }
    const btn = document.querySelector('.cta__btn');
    btn.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    const t0 = performance.now();
    while (!btn.classList.contains('is-reached') && performance.now() - t0 < 2200) await wait(80);
    await wait(350);
    const r = btn.getBoundingClientRect();
    open('brief', { clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 });
  });
  addEventListener('langchange', () => { if (!ov.hidden) close(); translateShell(); readPage(); });
})();
