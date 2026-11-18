(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const el = (tag, props = {}, ...kids) => {
    const n = Object.assign(document.createElement(tag), props);
    kids.flat().forEach(k => n.append(k));
    return n;
  };
  const PLACES = window.PLACES || [], TAGS = window.TAGS || {};
  const norm = t => (t || '').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const tagEl = key => { const t = TAGS[key]; return el('span', { className: 'tag ' + t.cls, textContent: t.icon + ' ' + t.label }); };

  /* ---------- (Navegação) ---------- */
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const section = file === 'lugar.html' ? 'explorar.html' : file;
  $$('.primary-nav .nav-link').forEach(a => {
    const on = (a.getAttribute('href') || '').split('?')[0] === section;
    a.classList.toggle('is-current', on);
    on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
  });
  const menu = $('.menu-toggle'), nav = $('.primary-nav');
  if (menu && nav) {
    const setMenu = o => { menu.setAttribute('aria-expanded', String(o)); menu.setAttribute('aria-label', o ? 'Fechar menu' : 'Abrir menu'); nav.classList.toggle('is-open', o); };
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  }

  /* ---------- (Tema) ---------- */
  const themeBtn = $('.theme-toggle');
  const savedTheme = store.get('pauliceia-theme', null);
  const prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.toggle('night-mode', savedTheme ? savedTheme === 'dark' : prefersDark);
  if (themeBtn) {
    const paint = () => {
      const n = document.body.classList.contains('night-mode');
      themeBtn.setAttribute('aria-pressed', String(n));
      themeBtn.setAttribute('aria-label', n ? 'Ativar tema claro' : 'Ativar tema escuro');
      themeBtn.title = n ? 'Tema claro' : 'Tema escuro';
      themeBtn.textContent = n ? '☀' : '☂';
    };
    paint();
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('night-mode');
      store.set('pauliceia-theme', document.body.classList.contains('night-mode') ? 'dark' : 'light');
      paint();
    });
  }

  /* ---------- (Painel de acessibilidade) ---------- */
  const accBtn = $('.accessibility-toggle');
  if (accBtn) {
    const root = document.documentElement;
    const SIZES = [{p: 88, l: 'Menor'}, {p: 100, l: 'Normal'}, {p: 115, l: 'Grande'}, {p: 130, l: 'Maior'}, {p: 150, l: 'Máximo'}];
    const TOGGLES = [
      {key: 'hc', cls: 'hc', label: 'Alto contraste', icon: '◐'},
      {key: 'invert', cls: 'invert', label: 'Contraste invertido', icon: '◼'},
      {key: 'spacing', cls: 'spacing', label: 'Espaçamento de texto', icon: '↔'},
      {key: 'links', cls: 'links', label: 'Destacar links', icon: '🔗'},
      {key: 'motion', cls: 'reduce-motion', label: 'Reduzir animações', icon: '⚡'}
    ];
    let state;
    try { state = JSON.parse(store.get('pauliceia-a11y', '{}')); } catch (e) { state = {}; }
    state.size = Number.isInteger(state.size) ? Math.min(4, Math.max(0, state.size)) : 1;
    const save = () => store.set('pauliceia-a11y', JSON.stringify(state));

    const sizeLabel = el('b'), readBtn = el('button', {type: 'button', className: 'a11y-btn'});
    const toggleBtns = {};
    const apply = () => {
      root.style.fontSize = SIZES[state.size].p + '%';
      sizeLabel.textContent = SIZES[state.size].l;
      TOGGLES.forEach(t => {
        root.classList.toggle(t.cls, !!state[t.key]);
        const b = toggleBtns[t.key];
        b.setAttribute('aria-pressed', String(!!state[t.key]));
        b.lastChild.textContent = state[t.key] ? 'ON' : 'OFF';
      });
      const dirty = state.size !== 1 || TOGGLES.some(t => state[t.key]);
      accBtn.setAttribute('aria-pressed', String(dirty));
    };
    const stepBtn = (txt, d) => el('button', {type: 'button', className: 'a11y-btn', textContent: txt, onclick: () => { state.size = Math.min(4, Math.max(0, state.size + d)); save(); apply(); }});
    const panel = el('div', {className: 'a11y-panel', id: 'a11y-panel', hidden: true, role: 'dialog', ariaLabel: 'Opções de acessibilidade'},
      el('div', {className: 'a11y-head'}, el('span', {textContent: 'ACESSIBILIDADE'}),
        el('button', {type: 'button', className: 'a11y-close', ariaLabel: 'Fechar painel', textContent: '✕', onclick: () => setOpen(false)})),
      el('div', {className: 'a11y-body'},
        el('div', {className: 'a11y-size'}, el('p', {}, 'TAMANHO DO TEXTO — ', sizeLabel), el('div', {}, stepBtn('A−  Diminuir', -1), stepBtn('A+  Aumentar', 1))),
        ...TOGGLES.map(t => {
          const b = el('button', {type: 'button', className: 'a11y-btn'}, el('span', {textContent: t.icon + '  ' + t.label}), el('span', {className: 'a11y-state', textContent: 'OFF'}));
          b.addEventListener('click', () => { state[t.key] = !state[t.key]; save(); apply(); });
          toggleBtns[t.key] = b; return b;
        }),
        readBtn,
        el('button', {type: 'button', className: 'a11y-btn a11y-reset', textContent: '↩ Restaurar padrão', onclick: () => { state = {size: 1}; save(); stopReading(); apply(); }})));
    accBtn.after(panel);
    accBtn.setAttribute('aria-controls', 'a11y-panel');
    accBtn.setAttribute('aria-expanded', 'false');

    // ----[Leitura do conteúdo (síntese de voz do navegador)]----
    const canSpeak = 'speechSynthesis' in window;
    let reading = false;
    const paintRead = () => { readBtn.replaceChildren(el('span', {textContent: '🔊  Leitura do conteúdo'}), el('span', {className: 'a11y-state', textContent: reading ? 'LENDO' : 'OFF'}));
     readBtn.setAttribute('aria-pressed', String(reading)); };
    function stopReading() { if (canSpeak) speechSynthesis.cancel(); reading = false; paintRead(); }
    readBtn.addEventListener('click', () => {
      if (!canSpeak) { readBtn.title = 'Seu navegador não suporta leitura em voz alta'; return; }
      if (reading) return stopReading();
      const main = $('main'); if (!main) return;
      const u = new SpeechSynthesisUtterance(main.innerText.slice(0, 4000));
      u.lang = 'pt-BR'; u.onend = u.onerror = () => { reading = false; paintRead(); };
      reading = true; paintRead(); speechSynthesis.speak(u);
    });
    paintRead();

    function setOpen(o) { panel.hidden = !o; accBtn.setAttribute('aria-expanded', String(o)); if (o) panel.querySelector('button').focus(); else accBtn.focus(); }
    accBtn.addEventListener('click', () => setOpen(panel.hidden));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) setOpen(false); });
    document.addEventListener('click', e => { if (!panel.hidden && !panel.contains(e.target) && !accBtn.contains(e.target)) panel.hidden = true, accBtn.setAttribute('aria-expanded', 'false'); });
    apply();
  }

  /* ---------- (Explorar) ---------- */
  const grid = $('#place-grid');
  if (grid) {
    const cards = PLACES.map(p => {
      const a = (cls, kids) => el('a', {href: 'lugar.html?id=' + p.id, className: cls}, kids);
      const img = el('img', {src: p.image, alt: p.title, width: 800, height: 600, loading: 'lazy', decoding: 'async'});
      const card = el('article', {className: 'catalog-card'},
        // ( PONTO DE MODI PARA REMOÇÃO DE TEXTO [✨ GRÁTIS])
        el('a', {href: 'lugar.html?id=' + p.id, className: 'catalog-image', tabIndex: -1, ariaHidden: 'true'}, img, p.free ? el('span', {className: 'free-badge', textContent: '✨ GRÁTIS' }) : ''),
        el('div', {className: 'catalog-card-content'},
          el('div', {className: 'card-tags'}, p.tags.map(tagEl)),
          el('h3', {}, el('a', {href: 'lugar.html?id=' + p.id, textContent: p.title})),
          el('div', {className: 'card-city', textContent: '📍 ' + p.city}),
          el('p', {className: 'blurb', textContent: p.blurb}),
          el('div', {className: 'card-meta'}, el('span', {textContent: '◷ ' + p.quick.time}), el('span', {textContent: '🔥 ' + p.quick.cost})),
          a('card-cta', 'Descobrir lugar →')));
      card._p = p;
      card._hay = norm([p.title, p.city, p.blurb, p.tags.map(t => TAGS[t].label).join(' ')].join(' '));
      return card;
    });
    grid.replaceChildren(...cards);
    const search = $('#place-search'), count = $('#result-count'), empty = $('#no-results');
    const params = new URLSearchParams(location.search);
    let cat = params.get('categoria') || 'todos';
    const inCat = p => cat === 'todos' || (cat === 'gratis' ? p.free : cat === 'cultura' ? p.tags.includes('cultura') || p.tags.includes('arte') : p.tags.includes(cat));
    const apply = () => {
      const q = norm((search.value || '').trim());
      let n = 0;
      cards.forEach(c => { const show = inCat(c._p) && (!q || c._hay.includes(q)); c.hidden = !show; if (show) n++; });
      count.textContent = `${n} ${n === 1 ? 'lugar encontrado' : 'lugares encontrados'}`;
      empty.hidden = n !== 0;
    };
    search.addEventListener('input', apply);
    $('#clear-filters')?.addEventListener('click', () => { search.value = ''; cat = 'todos'; history.replaceState(null, '', location.pathname); apply(); });
    apply();
  }

  /* ---------- (Lugar) ---------- */
  if ($('#detail-title')) {
    const id = new URLSearchParams(location.search).get('id');
    const p = PLACES.find(x => x.id === id) || PLACES[0];
    const set = (s, t) => { const n = $(s); if (n) n.textContent = t; };
    document.title = p.title + ' — Pauliceia SP';
    $('#meta-desc')?.setAttribute('content', p.blurb);
    const img = $('#detail-image'); img.src = p.image; img.alt = '';
    $('#detail-tags').replaceChildren(...p.tags.map(tagEl));
    set('#detail-title', p.title); set('#detail-city', '📍 ' + p.city);

    // ----(Painéis)----
    set('#quote', '“' + p.quote + '”');
    set('#history', p.history); set('#about', p.about);
    $('#todo-list').replaceChildren(...p.todo.map(t => el('li', {textContent: t})));
    $('#gallery-grid').replaceChildren(...p.gallery.map((g, i) => el('img', {src: g, alt: `${p.title} — foto ${i + 1}`, loading: 'lazy', width: 600, height: 800})));
    set('#tt-handle', p.tiktok.handle); set('#tt-text', p.tiktok.text); set('#pink-quote', '“' + p.quote + '”');
    $('#tips-list').replaceChildren(...p.tips.map(t => el('li', {textContent: t})));
    const others = PLACES.filter(x => x.id !== p.id);
    const start = PLACES.indexOf(p);
    $('#related-list').replaceChildren(...[1, 2, 3].map(i => PLACES[(start + i) % PLACES.length]).map(o =>
      el('a', {href: 'lugar.html?id=' + o.id}, el('img', {src: o.image, alt: '', loading: 'lazy'}), el('span', {}, o.title, el('small', {textContent: '📍 ' + o.city})))));

    // ----(Sidebar)----
    set('#i-duration', p.info.duration); set('#i-cost', p.info.cost); set('#i-hours', p.info.hours); set('#i-how', p.info.how);
    set('#map-caption', p.city.includes(p.title) ? p.city : p.title.split(' — ')[0] + ' — ' + p.city);

    // ----(Abas)----
    const tabs = $$('.tab'), panels = $$('.panel');
    const show = name => {
      tabs.forEach(t => { const on = t.dataset.tab === name; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
      panels.forEach(pn => pn.hidden = pn.id !== 'panel-' + name);
      if (history.replaceState) history.replaceState(null, '', '#' + name);
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => show(t.dataset.tab));
      t.addEventListener('keydown', e => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return;
        const n = tabs[(i + d + tabs.length) % tabs.length]; n.focus(); show(n.dataset.tab);
      });
    });
    const initial = location.hash.slice(1);
    show(tabs.some(t => t.dataset.tab === initial) ? initial : 'sobre');

    // ----(Ações)----
    const [lat, lng] = p.coords;
    $('#btn-route').href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    $('#btn-map').addEventListener('click', () => $('#map-card').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center'}));
    const fav = $('#favorite-place'); let favs = [];
    try { favs = JSON.parse(store.get('pauliceia-favorites', '[]')); } catch (e) {}
    const paintFav = () => { const y = favs.includes(p.id); fav.setAttribute('aria-pressed', String(y)); fav.textContent = y ? '♥ Salvo' : '♡ Salvar'; };
    paintFav();
    fav.addEventListener('click', () => { favs = favs.includes(p.id) ? favs.filter(x => x !== p.id) : [...favs, p.id]; store.set('pauliceia-favorites', JSON.stringify(favs)); paintFav(); });

    // ----[Clima (Open-Meteo, sem chave de API)]----
    const WX = c => c === 0 ? ['☀️', 'Céu limpo'] : c <= 2 ? ['⛅', 'Parcialmente nublado'] : c === 3 ? ['☁️', 'Nublado'] : c <= 48 ? ['🌫️', 'Névoa'] : c <= 57 ? ['🌦️', 'Garoa'] : c <= 67 ? ['🌧️', 'Chuva'] : c <= 77 ? ['❄️', 'Neve'] : c <= 82 ? ['🌧️', 'Pancadas'] : ['⛈️', 'Tempestade'];
    const [wl, wn] = p.weather;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${wl}&longitude=${wn}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`)
      .then(r => r.ok ? r.json() : Promise.reject()).then(d => {
        const c = d.current, [ico, txt] = WX(c.weather_code);
        set('#w-ico', ico); set('#w-temp', Math.round(c.temperature_2m) + '°C'); set('#w-desc', txt);
        set('#w-wind', '💨 ' + Math.round(c.wind_speed_10m) + ' km/h'); set('#w-hum', '💧 ' + Math.round(c.relative_humidity_2m) + '%');
      }).catch(() => { set('#w-desc', 'Clima indisponível agora'); set('#w-temp', '—'); });

    // ----[Mapa (Leaflet + OpenStreetMap)]----
    const mapBox = $('#map-box');
    const initMap = () => {
      if (!window.L) { mapBox.innerHTML = `<a class="text-link" style="display:block;padding:16px" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}">Abrir no Google Maps ↗</a>`; return; }
      const m = L.map(mapBox, {scrollWheelZoom: false}).setView([lat, lng], 14);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '© OpenStreetMap'}).addTo(m);
      L.marker([lat, lng]).addTo(m).bindPopup(p.title).openPopup();
    };
    window.addEventListener('load', initMap);
  }
})();

