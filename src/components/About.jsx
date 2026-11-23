import React from 'react';
import { Award, GraduationCap, Target, Lightbulb, Compass, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Aspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mayuri Mundkar</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Engineering student driven by algorithmic curiosity, hands-on IoT innovation, and the vision of building impactful AI solutions.
          </p>
        </div>

        {/* Top Grid: Bio Card & Academic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Professional Introduction Bio */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800/80 light:border-slate-200">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800 light:border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white light:text-slate-900">Professional Introduction</h3>
                <p className="text-xs text-slate-400 light:text-slate-500">Academic Background & Philosophy</p>
              </div>
            </div>

            {/* Exactly as quoted in prompt */}
            <div className="space-y-4 text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-slate-100 light:text-slate-900 bg-slate-800/40 light:bg-slate-50 p-4 rounded-xl border-l-4 border-cyan-400">
                "{profileData.introduction[0]}"
              </p>
              <p>
                {profileData.introduction[1]}
              </p>
              <p>
                {profileData.introduction[2]}
              </p>
              <p className="font-semibold text-cyan-300 light:text-blue-700">
                "{profileData.introduction[3]}"
              </p>
            </div>

            {/* Career Goal Callout */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/30 via-slate-900/50 to-purple-900/30 border border-blue-500/30 flex items-start gap-3">
              <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 light:text-blue-600">Career Horizon</h4>
                <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 mt-0.5">
                  {profileData.careerObjective}
                </p>
              </div>
            </div>
          </div>

          {/* Academic Achievement & CGPA Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Elegant CGPA Component */}
            <div className="relative rounded-2xl overflow-hidden p-6 sm:p-7 bg-gradient-to-br from-[#0e172e] via-[#101b38] to-[#152347] light:bg-gradient-to-br light:from-blue-50 light:to-slate-100 border-2 border-cyan-500/30 light:border-blue-300 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 light:text-blue-700 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Official Academic Standing
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Verified
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-display font-black text-white light:text-slate-900 tracking-tight">
                  8.16
                </span>
                <span className="text-lg sm:text-xl font-medium text-slate-400 light:text-slate-600">
                  / 10.00 CGPA
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-200 light:text-slate-800 mb-3">
                B.Tech in Computer Engineering • Second Year
              </p>

              <div className="space-y-2 text-xs text-slate-300 light:text-slate-600 pb-3 border-b border-slate-700/60 light:border-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Institution:</strong> Dr. D. Y. Patil College of Engineering and Innovation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Campus:</strong> Varale Campus, Talegaon Dabhade, Pune</span>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-lg bg-slate-900/60 light:bg-white/80 border border-slate-800 light:border-slate-200 text-[11px] text-slate-400 light:text-slate-600 italic">
                {profileData.academicHighlight.note}
              </div>
            </div>

            {/* Learning Philosophy Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 light:border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <h4 className="text-sm font-bold text-white light:text-slate-900">Learning Journey Approach</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Believes in authentic engineering: prioritizing deep algorithmic comprehension in C/C++ and practical hardware integration before advancing to higher-level AI frameworks.
              </p>
            </div>

          </div>

        </div>

        {/* 6 Personal Brand Values Cards */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white light:text-slate-900">
              Personal Brand Attributes
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-500 mt-1">
              The core principles defining Mayuri's work ethic, technical exploration, and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-2">
            {profileData.brandValues.map((value, idx) => (
              <div
                key={value.title}
                className="glass-card rounded-xl p-4 text-center hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 mx-auto rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                    <span className="text-xs font-mono font-bold">0{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 light:text-slate-900 mb-1">
                    {value.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 light:text-slate-600 leading-snug">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

