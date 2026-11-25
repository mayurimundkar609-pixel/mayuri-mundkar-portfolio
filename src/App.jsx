import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import CareerJourney from './components/CareerJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ResumeModal from './components/ResumeModal';

export default function App() {
  // Theme state with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('mm_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync theme with <html> class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('mm_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('mm_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Scrollspy: IntersectionObserver for active section highlighting
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'education', 'roadmap', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.25, rootMargin: '-20% 0px -40% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] light:bg-[#f8fafc] text-slate-100 light:text-slate-800 transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections in exact order */}
      <main>
        {/* B. HERO SECTION */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* C. ABOUT ME */}
        <About />

        {/* D. SKILLS */}
        <Skills />

        {/* E. PROJECTS */}
        <Projects />

        {/* F. CERTIFICATES */}
        <Certificates />

        {/* G. EDUCATION */}
        <Education />

        {/* H. CAREER JOURNEY */}
        <CareerJourney />

        {/* I. CONTACT */}
        <Contact />
      </main>

      {/* J. FOOTER */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />

      {/* Official Verified Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}

