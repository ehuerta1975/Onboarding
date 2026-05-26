/* =============================================================
   ESCALA — Onboarding interactivity
   ============================================================= */
(function () {
  'use strict';

  const STORAGE_KEY = 'escala-onboarding-progress';

  /* ------------------------------------------------------------
     1. CHECKLIST DE PROGRESO PERSONAL (localStorage)
     ------------------------------------------------------------ */
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function updateProgressUI() {
    const state = loadProgress();
    const units = document.querySelectorAll('.unit[id]');
    let total = 0, done = 0;

    units.forEach((u) => {
      total++;
      const id = u.id;
      const isDone = !!state[id];
      if (isDone) done++;

      // Update button state inside unit
      const btn = u.querySelector('.unit-check__btn');
      if (btn) {
        btn.classList.toggle('done', isDone);
        btn.textContent = isDone ? '✓ Completado' : 'Marcar como completado';
      }

      // Update sidebar
      const link = document.querySelector('.side__units a[href="#' + id + '"]');
      if (link) link.classList.toggle('done', isDone);
    });

    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const barEl = document.querySelector('.top__progress-bar > span');
    const textEl = document.querySelector('.top__progress-text');
    if (barEl) barEl.style.width = pct + '%';
    if (textEl) textEl.textContent = pct + '%';
  }

  function toggleUnitDone(unitId) {
    const state = loadProgress();
    state[unitId] = !state[unitId];
    if (!state[unitId]) delete state[unitId];
    saveProgress(state);
    updateProgressUI();
  }

  // Wire up unit check buttons
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.unit-check__btn');
    if (!btn) return;
    const unit = btn.closest('.unit');
    if (unit && unit.id) toggleUnitDone(unit.id);
  });

  /* ------------------------------------------------------------
     2. SCROLL-SPY (sidebar activo)
     ------------------------------------------------------------ */
  function initScrollSpy() {
    const units = document.querySelectorAll('.unit[id]');
    if (!units.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          // Clear all actives
          document.querySelectorAll('.side__units a.active')
            .forEach(function (a) { a.classList.remove('active'); });
          document.querySelectorAll('.side__block-title.active')
            .forEach(function (a) { a.classList.remove('active'); });

          // Set current
          const link = document.querySelector('.side__units a[href="#' + id + '"]');
          if (link) {
            link.classList.add('active');
            // Find parent block in sidebar
            const block = link.closest('.side__block');
            if (block) {
              const title = block.querySelector('.side__block-title');
              if (title) title.classList.add('active');
            }
            // Scroll sidebar to keep active visible
            const side = document.querySelector('.side');
            if (side) {
              const linkTop = link.offsetTop;
              const sideHeight = side.clientHeight;
              const sideScroll = side.scrollTop;
              if (linkTop < sideScroll + 40 || linkTop > sideScroll + sideHeight - 80) {
                side.scrollTo({ top: linkTop - sideHeight / 3, behavior: 'smooth' });
              }
            }
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    units.forEach(function (u) { observer.observe(u); });
  }

  /* ------------------------------------------------------------
     3. FILTROS EN GRID DE PROYECTOS
     ------------------------------------------------------------ */
  function initProjectFilters() {
    document.querySelectorAll('.proj-filters').forEach(function (group) {
      const targetSelector = group.getAttribute('data-target');
      const grid = document.querySelector(targetSelector);
      if (!grid) return;

      group.addEventListener('click', function (e) {
        const btn = e.target.closest('.proj-filter');
        if (!btn) return;

        group.querySelectorAll('.proj-filter').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = grid.querySelectorAll('.proj-card');
        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-sector') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------
     4. LIGHTBOX DE PROYECTOS
     ------------------------------------------------------------ */
  function initLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    const lbImg = lb.querySelector('.lightbox__img');
    const lbInfo = lb.querySelector('.lightbox__info');

    document.querySelectorAll('.proj-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const img = card.querySelector('img');
        if (!img) return;
        lbImg.src = img.src;
        lbImg.alt = img.alt || '';

        const client = card.getAttribute('data-client') || '';
        const meters = card.getAttribute('data-meters') || '';
        const location = card.getAttribute('data-location') || '';
        const service = card.getAttribute('data-service') || '';

        lbInfo.innerHTML =
          '<div><dt>Cliente</dt><dd class="big">' + client + '</dd></div>' +
          '<div><dt>m²</dt><dd>' + meters + '</dd></div>' +
          '<div><dt>Ubicación</dt><dd>' + location + '</dd></div>' +
          '<div><dt>Servicio</dt><dd>' + service + '</dd></div>';

        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLB() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    lb.querySelector('.lightbox__close').addEventListener('click', closeLB);
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLB();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('open')) closeLB();
    });
  }

  /* ------------------------------------------------------------
     5. TIMELINE TABS
     ------------------------------------------------------------ */
  function initTimelineTabs() {
    document.querySelectorAll('.timeline-tabs').forEach(function (tabs) {
      const targetSelector = tabs.getAttribute('data-target');
      const img = document.querySelector(targetSelector);
      if (!img) return;

      tabs.addEventListener('click', function (e) {
        const btn = e.target.closest('.timeline-tab');
        if (!btn) return;

        tabs.querySelectorAll('.timeline-tab').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        const src = btn.getAttribute('data-src');
        if (src) img.src = src;
      });
    });
  }

  /* ------------------------------------------------------------
     INIT
     ------------------------------------------------------------ */
  function init() {
    initScrollSpy();
    initProjectFilters();
    initLightbox();
    initTimelineTabs();
    updateProgressUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
