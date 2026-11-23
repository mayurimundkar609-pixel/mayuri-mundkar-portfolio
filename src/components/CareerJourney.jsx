import React from 'react';
import { 
  Rocket, GraduationCap, Binary, Code2, Cpu, Brain, 
  Briefcase, ArrowRight, CheckCircle2, Clock, Sparkles, Compass 
} from 'lucide-react';
import { roadmapData } from '../data/roadmap';

const iconMap = {
  GraduationCap, Binary, Code2, Cpu, Brain, Briefcase, Rocket
};

export default function CareerJourney() {
  return (
    <section id="roadmap" className="py-20 relative bg-[#070b14]/50 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <Compass className="w-3.5 h-3.5" />
            <span>Development Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Journey & Learning Roadmap</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            A transparent and realistic progression from engineering foundations to future career horizons as an AI Software Engineer.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/30 light:bg-blue-50 border border-blue-800/40 light:border-blue-200 text-xs text-blue-300 light:text-blue-700">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Presented authentically as a continuous learning roadmap rather than completed senior qualifications.</span>
          </div>
        </div>

        {/* Horizontal & Vertical Roadmap Cards */}
        <div className="relative">
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {roadmapData.map((stage, idx) => {
              const IconComp = iconMap[stage.icon] || Code2;
              const isCompleted = stage.status === 'Completed';
              const isInProgress = stage.status === 'In Progress';

              return (
                <div
                  key={stage.step}
                  className={`glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                    isInProgress
                      ? 'border-cyan-500/50 bg-cyan-950/15 shadow-glow-cyan'
                      : isCompleted
                        ? 'border-emerald-500/30 bg-emerald-950/10'
                        : 'border-slate-800/80 light:border-slate-200 opacity-90'
                  }`}
                >
                  {/* Left: Step Number & Icon */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      isInProgress
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-glow-cyan'
                        : isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800/80 text-slate-400 border border-slate-700'
                    }`}>
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400 light:text-blue-600">
                          Step 0{stage.step}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                          isInProgress
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : isCompleted
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                              : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                        }`}>
                          {stage.status}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-400 light:text-slate-500">
                        {stage.timeframe}
                      </p>
                    </div>
                  </div>

                  {/* Right: Description & Takeaway */}
                  <div className="md:max-w-md lg:max-w-lg space-y-2 border-t md:border-t-0 md:border-l border-slate-800/80 light:border-slate-200 pt-3 md:pt-0 md:pl-6">
                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="text-[11px] font-medium text-cyan-300 light:text-blue-700 bg-slate-900/50 light:bg-slate-100 p-2 rounded-lg border border-slate-800/60 light:border-slate-200">
                      🎯 {stage.keyTakeaway}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

