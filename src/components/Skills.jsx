import React, { useState } from 'react';
import { 
  Terminal, Code2, FileCode, GitBranch, Grid, Layers, Link, 
  ChevronsLeftRight, Cpu, Binary, Brain, Sparkles, Wifi, Laptop, 
  Globe, Microchip, CheckCircle2, AlertCircle, Info
} from 'lucide-react';
import { skillsData } from '../data/skills';

// Map icon string to component
const iconMap = {
  Terminal, Code2, FileCode, GitBranch, Grid, Layers, Link, 
  ChevronsLeftRight, Cpu, Binary, Brain, Sparkles, Wifi, Laptop, 
  Globe, Microchip
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#070b14]/50 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Skills & Foundations</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Structured into programming core, computer science theory, and active technology interests. Transparently presented with truthful proficiency levels.
          </p>

          {/* Important Authenticity Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/40 light:bg-blue-50 border border-blue-800/60 light:border-blue-200 text-xs text-blue-300 light:text-blue-700 text-left max-w-2xl mx-auto mt-2">
            <Info className="w-4 h-4 shrink-0 text-cyan-400" />
            <span>
              <strong>Authenticity Note:</strong> Python is represented honestly at beginner level. Technology interests (AI, ML, IoT) represent active academic study and exploration rather than claimed mastery.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan'
                : 'bg-slate-800/70 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:bg-slate-800'
            }`}
          >
            All Competencies
          </button>
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan'
                  : 'bg-slate-800/70 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:bg-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-slate-800 light:border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-500 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-400 light:text-blue-600 mt-1 sm:mt-0">
                  {category.skills.length} items
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className={`glass-card rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                        skill.isBeginner 
                          ? 'border-amber-500/30 bg-amber-950/10' 
                          : 'border-slate-800/80 light:border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            skill.isBeginner 
                              ? 'bg-amber-500/15 text-amber-400' 
                              : 'bg-cyan-500/10 text-cyan-400 light:bg-blue-100 light:text-blue-600'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>

                          {skill.badge && (
                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                              skill.isBeginner
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                            }`}>
                              {skill.badge}
                            </span>
                          )}

                          {skill.status && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                              {skill.status}
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-bold text-white light:text-slate-900">
                          {skill.name}
                        </h4>
                        
                        <p className="text-xs font-medium text-slate-400 light:text-slate-500 mt-0.5">
                          {skill.level || "Technology Interest"}
                        </p>

                        <p className="text-xs text-slate-300 light:text-slate-600 mt-2.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {/* Progress Bar (Only when supported by actual skill levels) */}
                      {skill.confidence && (
                        <div className="mt-4 pt-3 border-t border-slate-800/60 light:border-slate-200">
                          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                            <span>Proficiency Track</span>
                            <span>{skill.confidence}%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                skill.isBeginner
                                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                                  : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                              }`}
                              style={{ width: `${skill.confidence}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

