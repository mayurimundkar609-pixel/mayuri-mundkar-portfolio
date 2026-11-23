import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Cpu, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0c1424] light:bg-white border border-slate-700/80 light:border-slate-200 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} relative text-white`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-sm border border-white/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-white/90 mt-2 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-slate-800 light:border-slate-200">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-glow-cyan transition-all"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 light:text-slate-500 bg-slate-800/50 light:bg-slate-100 border border-slate-700/60">
                Academic Concept / Simulation
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 light:text-slate-800 bg-slate-800 light:bg-slate-100 hover:bg-slate-700 border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 light:text-slate-500 bg-slate-800/40 light:bg-slate-100 border border-slate-800">
                <Github className="w-3.5 h-3.5" />
                <span>{project.repoNote || "Repository coming soon"}</span>
              </span>
            )}
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> The Problem Statement
            </h4>
            <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed bg-slate-900/60 light:bg-slate-50 p-4 rounded-xl border border-slate-800 light:border-slate-200">
              {project.problemStatement}
            </p>
          </div>

          {/* Proposed Solution */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 light:text-blue-600 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Proposed Engineering Solution
            </h4>
            <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed bg-slate-900/60 light:bg-slate-50 p-4 rounded-xl border border-slate-800 light:border-slate-200">
              {project.proposedSolution}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Key Features & Architecture
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Details */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Technical Implementation Scope
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
              {project.implementationDetails}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900/80 light:bg-slate-100 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>Project documentation for Mayuri Mundkar</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

