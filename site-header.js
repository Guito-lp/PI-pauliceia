(() => {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const get = (key) => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const set = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Storage may be unavailable. */ }
  };
  const make = (tag, properties = {}, ...children) => {
    const node = Object.assign(document.createElement(tag), properties);
    children.flat().forEach((child) => node.append(child));
    return node;
  };

  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const activePage = file === 'lugar.html' ? 'explorar.html' : file;
  document.querySelectorAll('.primary-nav .nav-link').forEach((link) => {
    const current = (link.getAttribute('href') || '').split('?')[0] === activePage;
    link.classList.toggle('is-current', current);
    if (current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  const setMenu = (open) => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('is-open', open);
  };
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  const themeButton = document.querySelector('.theme-toggle');
  const themeIcon = themeButton?.querySelector('img');
  const savedTheme = get('pauliceia-theme');
  const legacyDark = get('pauliceia-dark-mode') === 'true';
  const night = savedTheme ? ['dark', 'night', 'true'].includes(savedTheme) : legacyDark;
  const setTheme = (enabled) => {
    body.classList.toggle('night-mode', enabled);
    if (!themeButton) return;
    themeButton.setAttribute('aria-pressed', String(enabled));
    themeButton.setAttribute('aria-label', enabled ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton.title = enabled ? 'Tema claro' : 'Tema escuro';
    if (themeIcon) {
      themeIcon.src = enabled ? 'assets/light_mode.svg' : 'assets/icon-dark-mode.svg';
      themeIcon.alt = '';
    }
  };
  setTheme(night);
  themeButton?.addEventListener('click', () => {
    const enabled = !body.classList.contains('night-mode');
    setTheme(enabled);
    set('pauliceia-theme', enabled ? 'dark' : 'light');
  });

  const accessibilityButton = document.querySelector('.accessibility-toggle');
  if (!accessibilityButton) return;

  const sizes = [
    { percent: 88, label: 'Menor' },
    { percent: 100, label: 'Normal' },
    { percent: 115, label: 'Grande' },
    { percent: 130, label: 'Maior' },
    { percent: 150, label: 'Máximo' },
  ];
  const toggles = [
    { key: 'hc', className: 'hc', label: 'Alto contraste', icon: '◐' },
    { key: 'invert', className: 'invert', label: 'Contraste invertido', icon: '◼' },
    { key: 'spacing', className: 'spacing', label: 'Espaçamento de texto', icon: '↔' },
    { key: 'links', className: 'links', label: 'Destacar links', icon: '🔗' },
    { key: 'motion', className: 'reduce-motion', label: 'Reduzir animações', icon: '⚡' },
  ];
  let state = {};
  try {
    const storedState = JSON.parse(get('pauliceia-a11y') || '{}');
    if (storedState && typeof storedState === 'object' && !Array.isArray(storedState)) state = storedState;
  } catch { state = {}; }
  if (typeof state.hc !== 'boolean') {
    state.hc = get('pauliceia-high-contrast') === 'true' || get('pauliceia-contrast') === 'on';
  }
  state.size = Number.isInteger(state.size) ? Math.min(4, Math.max(0, state.size)) : 1;
  toggles.forEach(({ key }) => { state[key] = Boolean(state[key]); });

  const sizeLabel = make('b');
  const toggleButtons = {};
  const readButton = make('button', { type: 'button', className: 'a11y-btn' });
  const panel = make('div', {
    className: 'a11y-panel',
    id: 'a11y-panel',
    hidden: true,
    role: 'dialog',
    ariaLabel: 'Opções de acessibilidade',
  },
  make('div', { className: 'a11y-head' },
    make('span', { textContent: 'ACESSIBILIDADE' }),
    make('button', {
      type: 'button',
      className: 'a11y-close',
      ariaLabel: 'Fechar painel',
      textContent: '✕',
      onclick: () => setPanel(false),
    })),
  make('div', { className: 'a11y-body' },
    make('div', { className: 'a11y-size' },
      make('p', {}, 'TAMANHO DO TEXTO — ', sizeLabel),
      make('div', {},
        make('button', { type: 'button', className: 'a11y-btn', textContent: 'A−  Diminuir', onclick: () => changeSize(-1) }),
        make('button', { type: 'button', className: 'a11y-btn', textContent: 'A+  Aumentar', onclick: () => changeSize(1) }))),
    ...toggles.map((item) => {
      const button = make('button', { type: 'button', className: 'a11y-btn' },
        make('span', { textContent: `${item.icon}  ${item.label}` }),
        make('span', { className: 'a11y-state', textContent: 'OFF' }));
      button.addEventListener('click', () => {
        state[item.key] = !state[item.key];
        saveState();
        applyState();
      });
      toggleButtons[item.key] = button;
      return button;
    }),
    readButton,
    make('button', {
      type: 'button',
      className: 'a11y-btn a11y-reset',
      textContent: '↩ Restaurar padrão',
      onclick: () => {
        state = { size: 1 };
        toggles.forEach(({ key }) => { state[key] = false; });
        saveState();
        stopReading();
        applyState();
      },
    })));

  accessibilityButton.after(panel);
  accessibilityButton.setAttribute('aria-controls', panel.id);
  accessibilityButton.setAttribute('aria-expanded', 'false');
  accessibilityButton.setAttribute('aria-label', 'Abrir opções de acessibilidade');

  function saveState() {
    set('pauliceia-a11y', JSON.stringify(state));
  }

  function applyState() {
    root.style.fontSize = `${sizes[state.size].percent}%`;
    sizeLabel.textContent = sizes[state.size].label;
    toggles.forEach(({ key, className }) => {
      root.classList.toggle(className, state[key]);
      toggleButtons[key].setAttribute('aria-pressed', String(state[key]));
      toggleButtons[key].lastChild.textContent = state[key] ? 'ON' : 'OFF';
    });
    accessibilityButton.setAttribute('aria-pressed', String(
      state.size !== 1 || toggles.some(({ key }) => state[key]),
    ));
  }

  function changeSize(delta) {
    state.size = Math.min(4, Math.max(0, state.size + delta));
    saveState();
    applyState();
  }

  function setPanel(open, returnFocus = true) {
    panel.hidden = !open;
    accessibilityButton.setAttribute('aria-expanded', String(open));
    accessibilityButton.setAttribute('aria-label', open ? 'Fechar opções de acessibilidade' : 'Abrir opções de acessibilidade');
    if (open) panel.querySelector('.a11y-close').focus();
    else if (returnFocus) accessibilityButton.focus();
  }

  const canSpeak = 'speechSynthesis' in window;
  let reading = false;
  const paintReadButton = () => {
    readButton.replaceChildren(
      make('span', { textContent: '🔊  Leitura do conteúdo' }),
      make('span', { className: 'a11y-state', textContent: reading ? 'LENDO' : 'OFF' }),
    );
    readButton.setAttribute('aria-pressed', String(reading));
  };
  function stopReading() {
    if (canSpeak) window.speechSynthesis.cancel();
    reading = false;
    paintReadButton();
  }
  readButton.addEventListener('click', () => {
    if (!canSpeak) {
      readButton.title = 'Seu navegador não suporta leitura em voz alta';
      return;
    }
    if (reading) {
      stopReading();
      return;
    }
    const main = document.querySelector('main');
    if (!main) return;
    const utterance = new SpeechSynthesisUtterance(main.innerText.slice(0, 4000));
    utterance.lang = 'pt-BR';
    utterance.onend = utterance.onerror = () => {
      reading = false;
      paintReadButton();
    };
    reading = true;
    paintReadButton();
    window.speechSynthesis.speak(utterance);
  });

  accessibilityButton.addEventListener('click', () => setPanel(panel.hidden));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) setPanel(false);
  });
  document.addEventListener('click', (event) => {
    if (!panel.hidden && !panel.contains(event.target) && !accessibilityButton.contains(event.target)) {
      setPanel(false, false);
    }
  });
  applyState();
  saveState();
  paintReadButton();
})();
