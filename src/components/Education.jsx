import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen, ShieldCheck, Cpu } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Academic Standing</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Structured Computer Engineering curriculum emphasizing algorithmic rigor, hardware interfacing, and foundational engineering principles.
          </p>
        </div>

        {/* Top Highlight Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {educationData.academicHighlights.map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-5 border border-slate-800/80 light:border-slate-200 text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white light:text-slate-900 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400 light:text-slate-500 mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Elegant CGPA Component & Vertical Academic Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Academic Credentials Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden p-7 bg-gradient-to-br from-[#0c1426] via-[#101b33] to-[#152345] light:bg-gradient-to-br light:from-white light:to-blue-50 border-2 border-cyan-500/30 light:border-blue-300 shadow-2xl">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Academic Merit
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  SY B.Tech
                </span>
              </div>

              {/* CGPA Display */}
              <div className="my-3">
                <span className="text-6xl sm:text-7xl font-display font-black text-white light:text-slate-900 tracking-tight">
                  8.16
                </span>
                <span className="text-xl font-medium text-slate-400 light:text-slate-600 ml-2">
                  / 10.00
                </span>
              </div>

              <h3 className="text-lg font-bold text-white light:text-slate-900 mb-1">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-sm font-semibold text-cyan-400 light:text-blue-600 mb-3">
                Computer Engineering • Second Year
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-700/60 light:border-slate-200 text-xs text-slate-300 light:text-slate-700">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-100 light:text-slate-900">Dr. D. Y. Patil College of Engineering and Innovation</span>
                    <span className="text-slate-400 light:text-slate-500">Varale Campus, Talegaon Dabhade, Pune, Maharashtra</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-100 light:text-slate-900">Academic Tenure</span>
                    <span className="text-slate-400 light:text-slate-500">2023 – 2027 (Expected Graduation)</span>
                  </div>
                </div>
              </div>

              {/* Exact Formula Compliance Note */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-[11px] text-slate-400 light:text-slate-600 leading-relaxed">
                <strong>Authenticity Note:</strong> {educationData.cgpaNote}
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Academic Timeline */}
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 light:border-slate-300 space-y-10">
              
              {educationData.timeline.map((item, index) => (
                <div key={item.title} className="relative group">
                  
                  {/* Timeline Node Dot */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 ${
                    index === 0 
                      ? 'bg-cyan-500 border-cyan-300 shadow-glow-cyan' 
                      : 'bg-slate-800 border-slate-600'
                  } flex items-center justify-center`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 border border-slate-800 light:border-slate-200 hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {item.period}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white light:text-slate-900">
                      {item.title}
                    </h4>

                    <p className="text-xs font-medium text-slate-400 light:text-slate-500 mb-3">
                      {item.institution}
                    </p>

                    <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 light:border-slate-200">
                      {item.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

