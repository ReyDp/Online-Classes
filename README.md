# Online Classes — Interactive Infographic

A modern, accessible, and interactive digital educational infographic poster explaining the foundational concepts, delivery models, benefits, challenges, and success strategies of **Online Classes**.

Created as an academic English activity evaluated for comprehension and writing skills.

**Student Author & Researcher:** Reynaldo José Durán Pertuz  
**Course Context:** Academic English Presentation  
**Live GitHub Pages URL:** [https://reydp.github.io/Online-Classes/](https://reydp.github.io/Online-Classes/)

---

## Description

Unlike conventional multi-page websites, commercial landing pages, or blogs, this project is crafted strictly as a **Vertical Digital Educational Infographic**. It combines academic rigor with modern web interactions—featuring dynamic modal explorations, synchronous vs. asynchronous comparative switchers, accessible tooltips on hover and touch, an interactive glossary inspector, an educational fact carousel, and a self-scoring comprehension quiz.

All design choices emphasize clarity, visual hierarchy, high color contrast (WCAG AAA compliant), and zero third-party framework dependencies.

---

## Features

- **Interactive Tooltips**: Accessible, non-intrusive insight bubbles available on desktop (hover/focus) and mobile (tap/click) across benefits, challenges, and tips.
- **Synchronous vs. Asynchronous Comparison**: Interactive tabbed switcher highlighting real-time vs. self-scheduled digital learning characteristics and examples.
- **Benefits of Online Classes**: Exactly 3 core advantages (Flexibility, Accessibility, Self-Paced Learning) with vector SVG icons and supplementary insight.
- **Challenges of Online Learning**: Exactly 3 realistic obstacles (Technical Problems, Time Management, Limited Social Interaction) with mitigation tooltips.
- **Online vs. Traditional Classes**: Balanced side-by-side comparison matrix objectively framing both delivery environments without claiming universal superiority.
- **3 Tips for Success**: High-impact numbered steps (Study Schedule, Active Participation, Avoiding Distractions) with strategic recommendations.
- **Key Concepts Glossary**: Interactive 8-term chips grid updating a live definition inspector spotlight.
- **Did You Know? Fact Carousel**: Dynamic educational trivia cards cycling through pedagogical insights without fabricated metrics.
- **Interactive Quick Quiz**: 3-question evaluation calculating real scores (`3/3 — Excellent!`, `2/3 — Good job!`, `1/3 — Keep learning!`) with explanations and reset capability.
- **Dark / Light Mode**: Session-only theme toggle maintaining high-contrast educational palettes without persistent localStorage.
- **Reading Progress & Section Tracker**: Sticky miniature navigation bar updating in real time as the reader scrolls.
- **Print & PDF Export**: Dedicated print stylesheet optimizing the infographic for paper and clean PDF presentations.
- **Responsive Design**: Fluid layout adapting seamlessly across 320px, 375px, 768px, 1024px, and 1440px displays.

---

## Technologies

- **HTML5**: Semantic landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<footer>`), structured ARIA attributes (`aria-expanded`, `aria-describedby`, `aria-live`), and fully accessible buttons.
- **CSS3**: Custom design tokens, CSS Grid and Flexbox, ambient glow effects, responsive `clamp()` typography, `prefers-reduced-motion` compliance, and dedicated `@media print` styles.
- **JavaScript (Vanilla)**: 100% dependency-free vanilla script powering themes, progress tracking, accessible tooltips, trivia carousels, and quiz scoring logic.

---

## Project Structure

```text
Online-Classes/
│
├── index.html                   # Semantic infographic markup and inline SVG artwork
├── style.css                    # Professional poster styling, dark/light themes & print CSS
├── script.js                    # Vanilla JS interactions, tooltips, carousel & quiz engine
├── README.md                    # Academic documentation, sources & deployment guide
├── LICENSE                      # Project license
└── assets/
    ├── icons/                   # Directory reserved for icon assets
    └── images/                  # Directory reserved for graphic assets
```

---

## Run Locally

To explore or evaluate the infographic locally on your computer:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/ReyDp/Online-Classes.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Online-Classes
   ```
3. Open `index.html` directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari):
   - **Windows**: Double-click `index.html` or run:
     ```powershell
     Start-Process index.html
     ```
   - **macOS**: `open index.html`
   - **Linux**: `xdg-open index.html`

No local server, node packages, or build compilers are required.

---

## Deploy with GitHub Pages

Follow these exact steps to publish the infographic to GitHub Pages:

1. **Create GitHub repository**: Go to [github.com/new](https://github.com/new) and create a repository named `Online-Classes`.
2. **Upload project files**: Push `index.html`, `style.css`, `script.js`, `README.md`, and the `assets/` folder to the repository.
   ```bash
   git add .
   git commit -m "feat: complete interactive online classes infographic V2"
   git push origin main
   ```
3. **Go to Settings**: Open your repository on GitHub and click on the **Settings** tab located at the top right.
4. **Open Pages**: In the left sidebar navigation under "Code and automation", click on **Pages**.
5. **Select deployment from branch**: Under the "Build and deployment" section, ensure **Source** is set to **Deploy from a branch**.
6. **Select main**: In the **Branch** dropdown menu, select `main`.
7. **Select root folder**: Keep the folder dropdown set to `/(root)`.
8. **Save**: Click the **Save** button.
9. **Wait for deployment**: GitHub Actions will automatically process and deploy your site within 1–2 minutes.
10. **Open generated URL**: Visit your live published site at:
    `https://reydp.github.io/Online-Classes/`

---

## Sources

The content of this infographic was conceptually informed by established educational research and international open-learning frameworks:

1. **UNESCO (United Nations Educational, Scientific and Cultural Organization)**: *Guidance for open, distance and digital learning (ODL)* and policy guidelines on mobile learning and digital literacy.
2. **Bates, A. W. (Tony)** (2019): *Teaching in a Digital Age: Guidelines for designing teaching and learning*. Vancouver, BC: Tony Bates Associates Ltd. (Covers synchronous vs. asynchronous taxonomy, student self-discipline, and flexible course design).
3. **Moore, M. G., & Kearsley, G.** (2011): *Distance Education: A Systems View of Online Learning*. Wadsworth Cengage Learning. (Covers autonomous pacing, interaction models, and technological infrastructure).
4. **Garrison, D. R., Anderson, T., & Archer, W.** (2000): *Critical Inquiry in a Text-Based Environment: Computer Conferencing in Higher Education*. The Internet and Higher Education, 2(2-3), 87-105. (The Community of Inquiry framework: cognitive, social, and teaching presence in virtual education).

*Note: Content informed by UNESCO and academic research on online learning without fabricated empirical claims or invented statistics.*

---

&copy; Reynaldo José Durán Pertuz. All educational rights reserved.
