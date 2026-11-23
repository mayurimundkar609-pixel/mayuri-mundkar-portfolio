import React from 'react';
import { Linkedin, Github, Mail, ArrowUp, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05080f] light:bg-slate-100 border-t border-slate-800/80 light:border-slate-300 text-slate-400 text-xs sm:text-sm py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800 light:border-slate-200">
          
          {/* Brand Left */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 p-[1.5px] shadow-glow-blue">
                <div className="w-full h-full bg-[#05080f] light:bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-sm">
                    MM
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-white light:text-slate-900 text-base">
                  {profileData.name}
                </h4>
                <p className="text-xs text-cyan-400 light:text-blue-600 font-medium">
                  {profileData.role}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              Second-year B.Tech Computer Engineering student at Dr. D. Y. Patil College of Engineering and Innovation, Varale Campus. Dedicated to authentic engineering, low-level programming, IoT, and AI.
            </p>
          </div>

          {/* Quick Links Middle */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-cyan-400 transition-colors">Certificates</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top Right */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-slate-300 light:text-slate-700 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.socials.email}`}
              className="p-2.5 rounded-xl bg-slate-900 light:bg-white border border-slate-800 light:border-slate-300 text-slate-300 light:text-slate-700 hover:text-rose-400 transition-colors"
              aria-label="Email"
              title="Send an Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors ml-2"
              aria-label="Back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Verification Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>© {currentYear} Mayuri Mundkar. All verified rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Designed & Engineered with React + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

