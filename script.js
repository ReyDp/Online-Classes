/**
 * ONLINE CLASSES — INTERACTIVE ACADEMIC INFOGRAPHIC (V2)
 * Author: Reynaldo José Durán Pertuz
 * Vanilla JavaScript: Production-Grade Educational Interactions
 * Features: Dark/Light Mode, Section Tracking, Tooltips, Quiz, Glossary, Trivia Carousel
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. DYNAMIC FOOTER YEAR
     ========================================================================== */
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     2. THEME ENGINE: DARK / LIGHT MODE (SESSION-ONLY, NO LOCALSTORAGE)
     ========================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  let currentTheme = 'dark'; // Session default

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (themeLabel) {
        themeLabel.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
      }
    });
  }

  /* ==========================================================================
     3. READING PROGRESS & SECTION TRACKER
     ========================================================================== */
  const progressBar = document.getElementById('progressBar');
  const trackerLinks = document.querySelectorAll('.tracker-link');
  const sections = document.querySelectorAll('.hero-section, .infographic-block, .final-conclusion-section');

  const updateScrollProgress = () => {
    // 3.1 Update top bar
    if (progressBar) {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY || window.pageYOffset;
      const progressPercent = scrollTotal > 0 ? Math.min(100, Math.max(0, (currentScroll / scrollTotal) * 100)) : 100;
      progressBar.style.width = `${progressPercent}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(progressPercent));
    }

    // 3.2 Update active section in tracker
    let activeId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = id;
      }
    });

    if (activeId) {
      trackerLinks.forEach((link) => {
        if (link.getAttribute('data-target') === activeId) {
          link.classList.add('active');
          link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          link.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ==========================================================================
     4. PRINT / PDF EXPORT
     ========================================================================== */
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  /* ==========================================================================
     5. DEFINITION EXPANDING PANEL
     ========================================================================== */
  const exploreConceptBtn = document.getElementById('exploreConceptBtn');
  const conceptExpandedPanel = document.getElementById('conceptExpandedPanel');
  const closeConceptBtn = document.getElementById('closeConceptBtn');

  if (exploreConceptBtn && conceptExpandedPanel) {
    exploreConceptBtn.addEventListener('click', () => {
      const isExpanded = exploreConceptBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        conceptExpandedPanel.hidden = true;
        exploreConceptBtn.setAttribute('aria-expanded', 'false');
      } else {
        conceptExpandedPanel.hidden = false;
        exploreConceptBtn.setAttribute('aria-expanded', 'true');
        conceptExpandedPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    if (closeConceptBtn) {
      closeConceptBtn.addEventListener('click', () => {
        conceptExpandedPanel.hidden = true;
        exploreConceptBtn.setAttribute('aria-expanded', 'false');
        exploreConceptBtn.focus();
      });
    }
  }

  /* ==========================================================================
     6. SYNCHRONOUS VS ASYNCHRONOUS SWITCHER
     ========================================================================== */
  const modeTabBtns = document.querySelectorAll('.mode-tab-btn');
  const syncCard = document.getElementById('card-sync');
  const asyncCard = document.getElementById('card-async');

  modeTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeTabBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const view = btn.getAttribute('data-view');
      if (view === 'sync') {
        syncCard.classList.remove('dimmed-mode');
        syncCard.classList.add('active-mode');
        asyncCard.classList.add('dimmed-mode');
        asyncCard.classList.remove('active-mode');
      } else if (view === 'async') {
        asyncCard.classList.remove('dimmed-mode');
        asyncCard.classList.add('active-mode');
        syncCard.classList.add('dimmed-mode');
        syncCard.classList.remove('active-mode');
      } else {
        syncCard.classList.remove('dimmed-mode');
        syncCard.classList.add('active-mode');
        asyncCard.classList.remove('dimmed-mode');
        asyncCard.classList.add('active-mode');
      }
    });
  });

  /* ==========================================================================
     7. UNIVERSAL ACCESSIBLE TOOLTIP SYSTEM
     ========================================================================== */
  const universalTooltip = document.getElementById('universalTooltip');
  const tooltipBubble = document.getElementById('tooltipBubble');
  const tooltipMessage = document.getElementById('tooltipMessage');
  const closeTooltipBtn = document.getElementById('closeTooltipBtn');
  const tooltipTriggers = document.querySelectorAll('.tooltip-trigger-card');

  let activeTrigger = null;

  const showTooltip = (triggerEl) => {
    if (!universalTooltip || !tooltipMessage) return;
    const text = triggerEl.getAttribute('data-tooltip');
    if (!text) return;

    tooltipMessage.textContent = text;
    universalTooltip.hidden = false;
    activeTrigger = triggerEl;

    // Smart positioning calculation
    const rect = triggerEl.getBoundingClientRect();
    const tooltipWidth = 320;
    const padding = 16;

    let left = rect.left + rect.width / 2 - tooltipWidth / 2;
    // Boundary checks
    if (left < padding) left = padding;
    if (left + tooltipWidth > window.innerWidth - padding) {
      left = window.innerWidth - tooltipWidth - padding;
    }

    let top = rect.top - 120;
    // If overflowing top, place beneath
    if (top < 70) {
      top = rect.bottom + 12;
    }

    tooltipBubble.style.position = 'fixed';
    tooltipBubble.style.left = `${left}px`;
    tooltipBubble.style.top = `${top}px`;
    tooltipBubble.style.width = `${tooltipWidth}px`;
  };

  const hideTooltip = () => {
    if (!universalTooltip) return;
    universalTooltip.hidden = true;
    activeTrigger = null;
  };

  if (closeTooltipBtn) {
    closeTooltipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideTooltip();
    });
  }

  tooltipTriggers.forEach((trigger) => {
    // Desktop Hover
    trigger.addEventListener('mouseenter', () => showTooltip(trigger));
    trigger.addEventListener('mouseleave', () => hideTooltip());

    // Keyboard Focus
    trigger.addEventListener('focus', () => showTooltip(trigger));
    trigger.addEventListener('blur', () => hideTooltip());

    // Mobile Tap / Click
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (activeTrigger === trigger && !universalTooltip.hidden) {
        hideTooltip();
      } else {
        showTooltip(trigger);
      }
    });
  });

  // Global dismiss listeners
  document.addEventListener('click', (e) => {
    if (!universalTooltip.hidden && !universalTooltip.contains(e.target)) {
      hideTooltip();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideTooltip();
      if (conceptExpandedPanel && !conceptExpandedPanel.hidden) {
        conceptExpandedPanel.hidden = true;
        exploreConceptBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  /* ==========================================================================
     8. KEY CONCEPTS GLOSSARY
     ========================================================================== */
  const conceptGlossary = {
    'digital-literacy': {
      term: 'DIGITAL LITERACY',
      definition: 'The ability to use digital technologies effectively, safely and responsibly.'
    },
    'flexibility': {
      term: 'FLEXIBILITY',
      definition: 'The freedom to adapt learning times, locations, and schedules to personal routines.'
    },
    'accessibility': {
      term: 'ACCESSIBILITY',
      definition: 'The ability to reach educational materials and instruction across geographic and physical boundaries.'
    },
    'self-discipline': {
      term: 'SELF-DISCIPLINE',
      definition: 'The internal commitment to manage study routines and prioritize learning goals independently.'
    },
    'interaction': {
      term: 'INTERACTION',
      definition: 'Active two-way communication between students, peers, and instructors in virtual spaces.'
    },
    'responsibility': {
      term: 'RESPONSIBILITY',
      definition: 'Personal accountability for meeting assignment deadlines, academic integrity, and participation.'
    },
    'time-management': {
      term: 'TIME MANAGEMENT',
      definition: 'The systematic planning and control of time spent on specific academic tasks to maximize productivity.'
    },
    'self-paced-learning': {
      term: 'SELF-PACED LEARNING',
      definition: 'An educational method where learners navigate content and progress at their own speed.'
    }
  };

  const conceptChipBtns = document.querySelectorAll('.concept-chip-btn');
  const spotlightTerm = document.getElementById('spotlightTerm');
  const spotlightDefinition = document.getElementById('spotlightDefinition');

  const updateConceptSpotlight = (key) => {
    const data = conceptGlossary[key];
    if (!data || !spotlightTerm || !spotlightDefinition) return;

    spotlightTerm.textContent = data.term;
    spotlightDefinition.textContent = `"${data.definition}"`;

    conceptChipBtns.forEach((btn) => {
      const isMatch = btn.getAttribute('data-concept') === key;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      const statusSpan = btn.querySelector('.chip-status');
      if (statusSpan) {
        statusSpan.textContent = isMatch ? 'Active' : 'Explore';
      }
    });
  };

  conceptChipBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-concept');
      updateConceptSpotlight(key);
    });
    btn.addEventListener('mouseenter', () => {
      const key = btn.getAttribute('data-concept');
      updateConceptSpotlight(key);
    });
  });

  /* ==========================================================================
     9. DID YOU KNOW? FACT CAROUSEL
     ========================================================================== */
  const educationalFacts = [
    "Online learning can combine synchronous and asynchronous activities to create balanced, hybrid course experiences.",
    "Self-paced learning can give students more control over when they review learning materials and master complex topics.",
    "Online classes require both technological access and learner responsibility to achieve successful educational outcomes.",
    "Digital discussion boards allow learners to compose well-thought-out reflections compared to rapid impromptu classroom debates."
  ];

  let currentFactIndex = 0;
  const factText = document.getElementById('factText');
  const factCounter = document.getElementById('factCounter');
  const factDots = document.querySelectorAll('#factDots .dot');
  const prevFactBtn = document.getElementById('prevFactBtn');
  const nextFactBtn = document.getElementById('nextFactBtn');

  const renderFact = (index) => {
    if (!factText || !factCounter) return;
    currentFactIndex = (index + educationalFacts.length) % educationalFacts.length;

    factText.textContent = `"${educationalFacts[currentFactIndex]}"`;
    factCounter.textContent = `Fact ${currentFactIndex + 1} of ${educationalFacts.length}`;

    factDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentFactIndex);
    });
  };

  if (nextFactBtn) {
    nextFactBtn.addEventListener('click', () => renderFact(currentFactIndex + 1));
  }
  if (prevFactBtn) {
    prevFactBtn.addEventListener('click', () => renderFact(currentFactIndex - 1));
  }

  /* ==========================================================================
     10. INTERACTIVE QUICK QUIZ APPLICATION
     ========================================================================== */
  const quizAnswersKey = {
    1: {
      correct: 'B',
      explanation: 'Synchronous learning occurs live in real time, such as in webinars, video calls, or live group discussions.'
    },
    2: {
      correct: 'A',
      explanation: 'Flexible access allows students to retrieve course materials and lectures from diverse locations on their own schedule.'
    },
    3: {
      correct: 'C',
      explanation: 'A structured study schedule provides routine, helps manage workload, and ensures assignment deadlines are met.'
    }
  };

  let userScore = 0;
  let questionsAnswered = 0;
  const totalQuestions = 3;

  const quizBoxes = document.querySelectorAll('.quiz-question-box');
  const resultsCard = document.getElementById('quizResultsCard');
  const resultsScoreDisplay = document.getElementById('resultsScoreDisplay');
  const resultsFeedbackText = document.getElementById('resultsFeedbackText');
  const resetQuizBtn = document.getElementById('resetQuizBtn');

  quizBoxes.forEach((box) => {
    const qNum = parseInt(box.getAttribute('data-question'), 10);
    const optionBtns = box.querySelectorAll('.quiz-option-btn');
    const feedbackBox = box.querySelector('.q-feedback');
    const feedbackText = box.querySelector('.feedback-text');

    optionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedChoice = btn.getAttribute('data-option');
        const correctChoice = quizAnswersKey[qNum].correct;
        const explanation = quizAnswersKey[qNum].explanation;

        // Disable options in this question
        optionBtns.forEach((b) => {
          b.disabled = true;
          if (b.getAttribute('data-option') === correctChoice) {
            b.classList.add('correct-choice');
          }
        });

        // Evaluate selection
        if (selectedChoice === correctChoice) {
          userScore++;
          btn.classList.add('correct-choice');
          feedbackBox.className = 'q-feedback feedback-success';
          feedbackText.innerHTML = `<strong>Correct! (Option ${correctChoice})</strong> — ${explanation}`;
        } else {
          btn.classList.add('incorrect-choice');
          feedbackBox.className = 'q-feedback feedback-error';
          feedbackText.innerHTML = `<strong>Incorrect.</strong> The correct answer is <strong>Option ${correctChoice}</strong>. ${explanation}`;
        }

        feedbackBox.hidden = false;
        questionsAnswered++;

        // When all questions answered, calculate and show final score
        if (questionsAnswered === totalQuestions && resultsCard) {
          setTimeout(() => {
            resultsCard.hidden = false;
            let gradeComment = '';

            if (userScore === 3) {
              resultsScoreDisplay.textContent = 'Score: 3/3 — Excellent!';
              gradeComment = 'Outstanding work! You demonstrated comprehensive mastery of online learning concepts.';
            } else if (userScore === 2) {
              resultsScoreDisplay.textContent = 'Score: 2/3 — Good job!';
              gradeComment = 'Great effort! You grasped the majority of foundational online educational principles.';
            } else {
              resultsScoreDisplay.textContent = `Score: ${userScore}/3 — Keep learning!`;
              gradeComment = 'Review the benefits, challenges, and tips above to strengthen your virtual learning comprehension.';
            }

            if (resultsFeedbackText) {
              resultsFeedbackText.textContent = gradeComment;
            }

            resultsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 350);
        }
      });
    });
  });

  // Quiz Reset Functionality
  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      userScore = 0;
      questionsAnswered = 0;

      quizBoxes.forEach((box) => {
        const optionBtns = box.querySelectorAll('.quiz-option-btn');
        const feedbackBox = box.querySelector('.q-feedback');

        optionBtns.forEach((b) => {
          b.disabled = false;
          b.classList.remove('correct-choice', 'incorrect-choice');
        });

        if (feedbackBox) {
          feedbackBox.hidden = true;
          feedbackBox.className = 'q-feedback';
        }
      });

      if (resultsCard) {
        resultsCard.hidden = true;
      }

      // Smooth scroll back to question 1
      const firstQ = document.querySelector('.quiz-question-box[data-question="1"]');
      if (firstQ) {
        firstQ.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

});
