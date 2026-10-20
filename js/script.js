(() => {
  const root = document.documentElement;
  const themeKey = 'moments-theme';
  const directionKey = 'moments-direction';
  const media = window.matchMedia?.('(prefers-color-scheme: dark)');
  const read = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Storage can be disabled in private contexts. */ } };
  let theme = read(themeKey, 'system');
  const applyTheme = () => { root.dataset.theme = theme === 'system' ? (media?.matches ? 'dark' : 'light') : theme; };
  applyTheme();
  media?.addEventListener?.('change', () => { if (theme === 'system') { applyTheme(); document.querySelectorAll('[data-theme-toggle]').forEach(btn => { const dark = root.dataset.theme === 'dark'; btn.dataset.mode = dark ? 'dark' : 'light'; btn.setAttribute('aria-pressed', String(dark)); btn.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`); }); } });
  root.dir = read(directionKey, 'ltr');
  const updateDirectionButtons = () => document.querySelectorAll('[data-language]').forEach(btn => { btn.textContent = root.dir.toUpperCase(); btn.setAttribute('aria-label', `Switch layout to ${root.dir === 'rtl' ? 'left to right' : 'right to left'}`); btn.setAttribute('aria-pressed', String(root.dir === 'rtl')); });
  updateDirectionButtons();

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    const update = () => { const dark = root.dataset.theme === 'dark'; btn.dataset.mode = dark ? 'dark' : 'light'; btn.setAttribute('aria-pressed', String(dark)); btn.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`); btn.title = dark ? 'Dark theme' : 'Light theme'; };
    update();
    btn.addEventListener('click', () => { theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; save(themeKey, theme); applyTheme(); update(); });
  });
  document.querySelectorAll('[data-language]').forEach(btn => btn.addEventListener('click', () => {
    root.dir = root.dir === 'rtl' ? 'ltr' : 'rtl'; save(directionKey, root.dir);
    updateDirectionButtons();
    showToast(root.dir === 'rtl' ? 'RTL layout enabled. Page text remains in English.' : 'LTR layout enabled.');
  }));

  const menuBtn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (menuBtn && nav) {
    const closeNav = () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      const homeItem = nav.querySelector('.nav-home');
      homeItem?.classList.remove('open');
      homeItem?.querySelector(':scope > .nav-link')?.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
      if (!open) closeNav();
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (innerWidth <= 800 && !a.matches('.nav-home > .nav-link')) closeNav();
    }));
  }
  document.querySelectorAll('.nav-home > .nav-link').forEach(link => {
    link.setAttribute('aria-haspopup', 'true');
    link.setAttribute('aria-expanded', 'false');
    link.addEventListener('click', e => {
      if (innerWidth <= 800) {
        e.preventDefault();
        const item = link.closest('.nav-home');
        const open = item.classList.toggle('open');
        link.setAttribute('aria-expanded', String(open));
      }
    });
    link.addEventListener('keydown', e => { if (['ArrowDown', 'Enter', ' '].includes(e.key) && innerWidth > 800) { const first = link.parentElement.querySelector('.home-menu a'); if (e.key !== 'ArrowDown') return; e.preventDefault(); first?.focus(); } });
  });
  document.querySelectorAll('.home-menu').forEach(menu => menu.addEventListener('keydown', e => {
    const links = [...menu.querySelectorAll('a')]; const index = links.indexOf(document.activeElement);
    if (e.key === 'Escape') { const home = menu.closest('.nav-home'); home.classList.remove('open'); home.querySelector('.nav-link').setAttribute('aria-expanded', 'false'); home.querySelector('.nav-link').focus(); }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); links[(index + (e.key === 'ArrowDown' ? 1 : links.length - 1)) % links.length]?.focus(); }
  }));

  const galleryItems = [...document.querySelectorAll('[data-gallery-item]')];
  const applyGalleryFilter = filter => {
    const visible = galleryItems.filter(item => {
      const show = filter === 'all' ? item.dataset.featured === 'true' : item.dataset.category === filter;
      item.hidden = !show;
      item.classList.remove('gallery-item--mosaic-tall', 'gallery-item--mosaic-square', 'gallery-item--mosaic-wide', 'gallery-item--mosaic-fill');
      return show;
    });

    // Use a repeating set of photo crops so each of the three masonry columns
    // gets the same mix of heights and ends at a clean, balanced edge.
    visible.forEach((item, index) => {
      const shape = ['tall', 'square', 'wide'][index % 3];
      item.classList.add(`gallery-item--mosaic-${shape}`);
      if (index === visible.length - 1) item.classList.add('gallery-item--mosaic-fill');
    });
  };

  document.querySelectorAll('[data-gallery-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-gallery-filter]').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
    applyGalleryFilter(btn.dataset.galleryFilter);
  }));
  const lightbox = document.querySelector('.lightbox');
  document.querySelectorAll('[data-gallery-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.classList.contains('active'))));
  const initialFilter = document.querySelector('[data-gallery-filter].active')?.dataset.galleryFilter || 'all';
  applyGalleryFilter(initialFilter);
  document.querySelectorAll('img[src^="images/"]').forEach(img => { if (!img.closest('.hero')) { img.loading = 'lazy'; img.decoding = 'async'; } });
  let previouslyFocused = null;
  const closeLightbox = () => { if (!lightbox?.classList.contains('open')) return; lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; previouslyFocused?.focus(); };
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.tabIndex = 0; img.setAttribute('role', 'button'); img.setAttribute('aria-label', `${img.alt}. Open image preview`);
    const open = () => { if (!lightbox) return; previouslyFocused = img; const preview = lightbox.querySelector('img'); preview.src = img.currentSrc || img.src; preview.alt = img.alt; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; lightbox.querySelector('button').focus(); };
    img.addEventListener('click', open); img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  if (lightbox) { lightbox.querySelector('button').addEventListener('click', closeLightbox); lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); }); document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); }); }

  document.querySelectorAll('.faq-question').forEach((btn, i) => {
    const answer = btn.nextElementSibling; if (!btn.id) btn.id = `faq-question-${i + 1}`;
    if (answer) { if (!answer.id) answer.id = `faq-answer-${i + 1}`; btn.setAttribute('aria-controls', answer.id); btn.setAttribute('aria-expanded', 'false'); answer.hidden = true; }
    btn.addEventListener('click', () => { const open = btn.closest('.faq-item').classList.toggle('open'); btn.setAttribute('aria-expanded', String(open)); if (answer) answer.hidden = !open; });
  });
  document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault(); if (!form.reportValidity() || form.dataset.submitting === 'true') return;
    form.dataset.submitting = 'true'; form.setAttribute('aria-busy', 'true'); const submit = form.querySelector('[type="submit"]');
    if (submit) submit.disabled = true;
    showToast('Demo only: your enquiry is valid but has not been sent. Connect a backend or form service to receive it.');
    window.setTimeout(() => { form.reset(); form.dataset.submitting = 'false'; form.removeAttribute('aria-busy'); if (submit) submit.disabled = false; }, 900);
  }));
  function showToast(message) { let toast = document.querySelector('.toast'); if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); toast.setAttribute('aria-live', 'polite'); document.body.appendChild(toast); } toast.textContent = message; toast.classList.add('show'); clearTimeout(window.__toastTimer); window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 5200); }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
