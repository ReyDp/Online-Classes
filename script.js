/**
 * ONLINE CLASSES — ACADEMIC INTERACTIVE INFOGRAPHIC
 * Author: Reynaldo José Durán Pertuz
 * Vanilla JavaScript: Lightweight Enhancements (Progress Bar, Scroll Reveal, Print Support)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mark document as JS-enabled for progressive enhancement
  document.documentElement.classList.add('js-enabled');

  // 1. DYNAMIC FOOTER YEAR
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. READING PROGRESS BAR
  const progressBar = document.getElementById('progressBar');
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal <= 0) {
      progressBar.style.width = '100%';
      return;
    }
    const currentScroll = window.scrollY || window.pageYOffset;
    const progressPercent = Math.min(100, Math.max(0, (currentScroll / scrollTotal) * 100));
    progressBar.style.width = `${progressPercent}%`;
    progressBar.setAttribute('aria-valuenow', Math.round(progressPercent));
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  // 3. PRINT / PDF EXPORT HANDLER
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 4. PROGRESSIVE SCROLL REVEAL (INTERSECTION OBSERVER)
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isReducedMotion && 'IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll(
      '.info-section, .final-highlight-card, .definition-card, .infographic-card'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-ready');
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // 5. KEYBOARD ACCESSIBILITY FOR INTERACTIVE CARDS
  const cards = document.querySelectorAll('.infographic-card, .definition-card');
  cards.forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        card.classList.toggle('card-focused');
      }
    });
  });
});
