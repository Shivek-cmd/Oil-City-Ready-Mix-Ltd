<script>
/**
 * GLOBAL SCRIPTS — Oil City Ready Mix Ltd.
 * Handles: reveal animations, counter sweep, FAQ accordion,
 *          calculator logic, quote form.
 * Loaded by loader.js after DOM is ready.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
   * 1. REVEAL ON SCROLL (IntersectionObserver)
   * ───────────────────────────────────────────── */
  function initReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }


  /* ─────────────────────────────────────────────
   * 2. COUNTER SWEEP
   * Usage: <span class="counter" data-target="1000" data-suffix="m³">0</span>
   * ───────────────────────────────────────────── */
  function initCounters() {
    var counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el      = entry.target;
        var target  = parseFloat(el.dataset.target) || 0;
        var suffix  = el.dataset.suffix  || '';
        var prefix  = el.dataset.prefix  || '';
        var decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
        var duration = 2000;
        var start    = performance.now();

        function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

        function tick(now) {
          var elapsed  = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var value    = easeOutCubic(progress) * target;
          el.textContent = prefix + value.toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { observer.observe(el); });
  }


  /* ─────────────────────────────────────────────
   * 3. CALCULATOR
   * ───────────────────────────────────────────── */
  function initCalculator() {

    /* ── Tab switching ── */
    var tabs    = document.querySelectorAll('.calc-tab');
    var panels  = document.querySelectorAll('.calc-panel');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.dataset.tab;

        tabs.forEach(function (t) { t.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });

        tab.classList.add('active');
        var panel = document.getElementById('panel-' + target);
        if (panel) panel.classList.add('active');

        /* Reset results */
        document.querySelectorAll('.calc-result-value').forEach(function (r) {
          r.textContent = '—';
        });
      });
    });

    /* ── Flat Area Calculator ── */
    var flatForm = document.getElementById('calc-flat');
    if (flatForm) {
      flatForm.addEventListener('input', calcFlat);
      flatForm.addEventListener('submit', function (e) { e.preventDefault(); calcFlat(); });
    }

    function calcFlat() {
      var length    = parseFloat(document.getElementById('flat-length').value) || 0;
      var width     = parseFloat(document.getElementById('flat-width').value)  || 0;
      var thickness = parseFloat(document.getElementById('flat-thick').value)  || 0;
      var resultEl  = document.getElementById('flat-result');

      if (length > 0 && width > 0 && thickness > 0) {
        /* Convert: length(ft) × width(ft) × thickness(in÷12) × 0.0283168 */
        var cubicFt = length * width * (thickness / 12);
        var cubicM  = cubicFt * 0.0283168;
        /* Add 10% waste factor */
        var withWaste = cubicM * 1.10;
        if (resultEl) resultEl.textContent = withWaste.toFixed(2) + ' m³';
      } else {
        if (resultEl) resultEl.textContent = '—';
      }
    }

    /* ── Pile / Cylinder Calculator ── */
    var pileForm = document.getElementById('calc-pile');
    if (pileForm) {
      pileForm.addEventListener('input', calcPile);
      pileForm.addEventListener('submit', function (e) { e.preventDefault(); calcPile(); });
    }

    function calcPile() {
      var radius = parseFloat(document.getElementById('pile-radius').value) || 0;
      var height = parseFloat(document.getElementById('pile-height').value) || 0;
      var count  = parseFloat(document.getElementById('pile-count').value)  || 0;
      var resultEl = document.getElementById('pile-result');

      if (radius > 0 && height > 0 && count > 0) {
        /* radius in inches → feet = radius / 12 */
        var radiusFt  = radius / 12;
        var volumeFt  = Math.PI * radiusFt * radiusFt * height * count;
        var cubicM    = volumeFt * 0.0283168;
        var withWaste = cubicM * 1.10;
        if (resultEl) resultEl.textContent = withWaste.toFixed(2) + ' m³';
      } else {
        if (resultEl) resultEl.textContent = '—';
      }
    }
  }


  /* ─────────────────────────────────────────────
   * 4. QUOTE FORM SUBMISSION
   * ───────────────────────────────────────────── */
  function initQuoteForm() {
    var form = document.getElementById('quote-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('[type="submit"]');
      var originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      /* Simulate send — replace with real endpoint / GHL form when ready */
      setTimeout(function () {
        btn.textContent = 'Sent! We\'ll be in touch.';
        btn.style.background = '#22c55e';
        btn.style.borderColor = '#22c55e';
        form.reset();

        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 4000);
      }, 1200);
    });
  }


  /* ─────────────────────────────────────────────
   * 5. FAQ ACCORDION
   * ───────────────────────────────────────────── */
  function initFAQ() {
    var triggers = document.querySelectorAll('.faq-trigger');
    if (!triggers.length) return;

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item   = trigger.closest('.faq-item');
        var body   = item.querySelector('.faq-body');
        var isOpen = item.classList.contains('open');

        /* Close all */
        document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          var b = openItem.querySelector('.faq-body');
          b.style.maxHeight = null;
        });

        /* Open clicked (if it was closed) */
        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }


  /* ─────────────────────────────────────────────
   * INIT ALL
   * ───────────────────────────────────────────── */
  function init() {
    initReveal();
    initCounters();
    initCalculator();
    initQuoteForm();
    initFAQ();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

</script>