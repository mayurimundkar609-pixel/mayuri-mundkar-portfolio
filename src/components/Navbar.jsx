import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Linkedin, Github, ExternalLink, GraduationCap, Code2, Award, Mail, Sparkles, Rocket } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, activeSection, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Career Journey', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-[#070b14]/85 dark:bg-[#070b14]/90 light:bg-white/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/60 light:border-slate-200' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* MM Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group" aria-label="Mayuri Mundkar Home">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-blue">
              <div className="w-full h-full bg-[#070b14] light:bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-lg tracking-wider">
                  MM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 light:text-slate-900 text-base tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
                Mayuri Mundkar
              </span>
              <span className="text-[11px] font-medium text-slate-400 light:text-slate-500 tracking-wide mt-1">
                Aspiring AI Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200'
                      : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/40 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mayuri-mundkar-119822396/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mayuri Mundkar LinkedIn Profile"
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:text-blue-400 light:hover:text-blue-600 hover:bg-blue-500/10 transition-colors"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mayurimundkar609-pixel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mayuri Mundkar GitHub Profile"
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:text-cyan-400 light:hover:text-cyan-600 hover:bg-cyan-500/10 transition-colors"
              title="View GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="ml-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm hover:shadow-glow-cyan hover:opacity-95 transition-all"
            >
              Resume
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Color Theme"
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:text-yellow-400 light:hover:text-amber-600 hover:bg-slate-800/40 light:hover:bg-slate-100 transition-colors ml-1"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Color Theme"
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:bg-slate-800/40"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 light:text-slate-700 hover:bg-slate-800/40"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/98 light:bg-white/98 border-b border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80 light:border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 font-semibold'
                    : 'text-slate-300 light:text-slate-700 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/mayuri-mundkar-119822396/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-blue-400 light:text-blue-600 font-medium px-2 py-1 bg-blue-500/10 rounded-md"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/mayurimundkar609-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-cyan-400 light:text-cyan-700 font-medium px-2 py-1 bg-cyan-500/10 rounded-md"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

