# Mayuri Mundkar — Premium Personal Portfolio

![Mayuri Mundkar Portfolio](public/assets/favicon.svg)

> **Official Personal Portfolio Website for Mayuri Mundkar**  
> Aspiring AI Software Engineer | Second-Year B.Tech Computer Engineering Student  
> Dr. D. Y. Patil College of Engineering and Innovation, Varale Campus, Talegaon Dabhade, Pune.

---

## 🌟 Overview & Brand Identity

This portfolio website is designed to industry standards, presenting an authentic, sophisticated, and technically rigorous profile of **Mayuri Mundkar**. Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, it showcases academic excellence, IoT hardware prototyping, software systems, and career aspirations without hyperbole or fabricated claims.

### Key Highlights
- **100% Authentic:** Python is transparently identified as *Beginner*, AI/ML as active learning interests, and academic credentials verified (CGPA 8.16 / 10.00).
- **Responsive & Accessible:** Seamless viewing experience across Mobile (iOS/Android), Tablet, Laptop, and High-DPI Desktop screens.
- **Dynamic Theme Switching:** Deep navy/dark tech mode with electric blue, cyan, and purple accents, alongside a high-contrast clean light mode.
- **Live Integrations:**
  - Real LinkedIn Profile: [linkedin.com/in/mayuri-mundkar-119822396](https://www.linkedin.com/in/mayuri-mundkar-119822396/)
  - Real GitHub Profile: [github.com/mayurimundkar609-pixel](https://github.com/mayurimundkar609-pixel)
  - Real IoT Project Site: [io-t-l8e9.vercel.app](https://io-t-l8e9.vercel.app/)
  - Live GitHub API integration for repository synchronization with static fallback.
  - Interactive Project and Certificate Lightboxes.
  - Printable / Downloadable verified engineering resume generator.

---

## 📐 Website Architecture (Section Order)

1. **Navigation Bar:** MM Monogram logo, smooth-scroll links, social icons (LinkedIn, GitHub), Resume modal trigger, and theme toggle.
2. **Hero Section:** High-impact introduction, headline, supporting text, 4 primary CTAs, quick statistics bar (8.16 CGPA, 2nd Year, 4+ Projects), and professional portrait placeholder with interactive photo upload.
3. **About Me:** Verified professional statement, educational summary, academic philosophy, career goal, and 6 core personal brand values.
4. **Technical Skills:** Categorized competencies (Programming Languages, Computer Science & DSA, Technology Interests) with realistic proficiency indicators.
5. **Projects Portfolio:** 4 core academic & IoT projects (IoT Smart Waste, Water Pollution Alarm, Traffic Management, EcoSmart Campus) with interactive architecture modals, plus a dedicated public GitHub repository showcase.
6. **Certificates & Achievements:** Verified certificate tracks (C/C++, Cisco, NASSCOM, Bajaj, Adobe, LinkedIn Learning) with document lightbox and upload simulator.
7. **Education:** Academic credentials spotlight (CGPA 8.16 / 10.00 at DYPCOEI) and vertical academic timeline.
8. **Career Journey:** 7-stage learning roadmap tracing progression from foundational engineering to AI Software Engineer.
9. **Contact Section:** Form with direct mailto integration, verified email copy button, LinkedIn button, and GitHub button.
10. **Footer:** Monogram logo, dynamic copyright year, quick links, and social links.

---

## 🚀 How to Run Locally

### Prerequisites
Node.js (v18+) is included in your environment or installable via standard node distribution.

### 1. Navigate to Project Directory
```powershell
cd C:\Users\ADMIN\.gemini\antigravity\scratch\mayuri-mundkar-portfolio
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Start Development Server
```powershell
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```powershell
npm run build
```
The optimized bundle will be created in the `dist/` directory.

### 5. Preview Production Build
```powershell
npm run preview
```

---

## 📂 Project Directory Structure

```
mayuri-mundkar-portfolio/
├── dist/                      # Production build output
├── public/
│   └── assets/
│       ├── favicon.svg        # MM Monogram vector icon
│       └── ...
├── src/
│   ├── assets/                # Static assets & images
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation, mobile menu & theme toggle
│   │   ├── Hero.jsx           # Hero visual identity & CTAs
│   │   ├── About.jsx          # Professional introduction & brand values
│   │   ├── Skills.jsx         # Categorized skills & learning levels
│   │   ├── Projects.jsx       # Project gallery & live GitHub API feed
│   │   ├── ProjectModal.jsx   # Detailed architecture popup
│   │   ├── Certificates.jsx   # Certificate lightbox & upload simulator
│   │   ├── Education.jsx      # Academic timeline & CGPA badge
│   │   ├── CareerJourney.jsx  # 7-step learning roadmap
│   │   ├── Contact.jsx        # Mailto form & social links
│   │   ├── Footer.jsx         # Dynamic footer & back-to-top
│   │   ├── ResumeModal.jsx    # Verified printable resume generator
│   │   └── BackToTop.jsx      # Smooth scroll-to-top button
│   ├── data/
│   │   ├── profile.js         # Verified personal bio & links
│   │   ├── skills.js          # Categorized skills data
│   │   ├── projects.js        # Core projects & static repo fallback
│   │   ├── certificates.js    # Verified certification tracks
│   │   ├── education.js       # Academic milestone records
│   │   └── roadmap.js         # Learning milestones
│   ├── styles/
│   │   └── index.css          # Tailwind directives, animations & glassmorphism
│   ├── App.jsx                # App layout & scrollspy observer
│   └── main.jsx               # Entry point
├── index.html                 # Semantic HTML5 & SEO metadata
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom design system colors & typography
└── vite.config.js             # Vite configuration
```

---

## 📝 Customization & Asset Upload Guide

1. **Professional Photo:** Drop your portrait image (`profile.jpg` or `profile.png`) into `src/assets/` or use the on-page "Upload Photo" button in the Hero section.
2. **Official Certificate Documents:** When your PDF or image scans are ready, place them in `src/assets/certificates/` or click "Attach File" in the Certificates section to preview them immediately.
3. **Resume Updates:** Update `src/data/profile.js` and `src/components/ResumeModal.jsx` as you achieve new semester grades or publish new research.

