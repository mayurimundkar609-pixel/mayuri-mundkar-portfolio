import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, ExternalLink, Github, Layers, Sparkles, AlertCircle, 
  ArrowUpRight, Wifi, Droplets, Car, Zap, CheckCircle2, RefreshCw, Star, GitFork 
} from 'lucide-react';
import { projectsData, publicGithubRepos } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubRepos, setGithubRepos] = useState(publicGithubRepos);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [repoError, setRepoError] = useState(false);

  // Fetch live GitHub repos with graceful fallback
  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoadingRepos(true);
        const res = await fetch('https://api.github.com/users/mayurimundkar609-pixel/repos?sort=updated');
        if (!res.ok) throw new Error('GitHub API response not ok');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map(repo => ({
            name: repo.name,
            displayName: repo.name.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
            description: repo.description || 'Public repository by Mayuri Mundkar',
            language: repo.language || 'Code',
            html_url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updatedAt: new Date(repo.updated_at).toLocaleDateString()
          }));
          setGithubRepos(formatted);
        }
      } catch (err) {
        // Graceful fallback to verified repositories
        console.warn('Using verified static GitHub fallback:', err);
        setRepoError(true);
      } finally {
        setLoadingRepos(false);
      }
    }
    fetchRepos();
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'environmental', label: 'Environmental' },
    { id: 'concepts', label: 'System Concepts' },
    { id: 'github', label: 'GitHub Code' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'iot') return p.category.includes('IoT');
    if (activeFilter === 'environmental') return p.category.includes('Environmental');
    if (activeFilter === 'concepts') return p.category.includes('System Concepts');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Engineering & Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            Academic & Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Hands-on prototypes, environmental monitoring solutions, and computational systems engineered with authenticity and measurable impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan'
                  : 'bg-slate-800/60 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:bg-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Core Projects Grid */}
        {activeFilter !== 'github' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 light:border-slate-200 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
              >
                <div>
                  {/* Visual Header / Banner */}
                  <div className={`p-6 bg-gradient-to-r ${project.gradient} relative text-white overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-8 opacity-15 transform translate-x-4 -translate-y-4">
                      {project.id === 'iot-waste-management' && <Wifi className="w-32 h-32" />}
                      {project.id === 'water-pollution-alarm' && <Droplets className="w-32 h-32" />}
                      {project.id === 'traffic-management-system' && <Car className="w-32 h-32" />}
                      {project.id === 'ecosmart-campus' && <Zap className="w-32 h-32" />}
                    </div>

                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md border border-white/20">
                        {project.badge}
                      </span>
                      <span className="text-xs font-medium text-white/80">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="relative z-10 text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed font-medium">
                      {project.summary}
                    </p>

                    {/* Problem / Solution Snippets */}
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                        <span className="font-bold text-cyan-400 light:text-blue-600 uppercase text-[10px] block mb-0.5">Problem</span>
                        <span className="text-slate-300 light:text-slate-700 line-clamp-2">{project.problemStatement}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                        <span className="font-bold text-emerald-400 light:text-emerald-700 uppercase text-[10px] block mb-0.5">Solution</span>
                        <span className="text-slate-300 light:text-slate-700 line-clamp-2">{project.proposedSolution}</span>
                      </div>
                    </div>

                    {/* Key Features Bullet List */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                        Highlighted Features
                      </span>
                      {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/60 light:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] text-slate-400 bg-slate-800/40">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 border-t border-slate-800/60 light:border-slate-200 mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 light:text-blue-600 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
                        title="Open live website"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span 
                        className="text-[11px] text-slate-400 light:text-slate-500 px-2.5 py-1 rounded-md bg-slate-800/50 light:bg-slate-100 border border-slate-800"
                        title="Repository will be published upon academic review"
                      >
                        {project.repoNote}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Dedicated GitHub Projects Section */}
        <div id="github-section" className="mt-14 rounded-3xl glass-panel p-6 sm:p-10 border border-slate-800 light:border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 light:border-slate-200 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 light:text-blue-600">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2">
                  <span>Public GitHub Repositories</span>
                  {loadingRepos && <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-500 mt-0.5">
                  Verified open-source repositories from <span className="font-mono text-cyan-400">@mayurimundkar609-pixel</span>
                </p>
              </div>
            </div>

            <a
              href="https://github.com/mayurimundkar609-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all shrink-0"
            >
              <span>View Full GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* GitHub Repo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {githubRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-slate-800/90 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-cyan-400 font-semibold flex items-center gap-1.5">
                      <FolderGit2 className="w-4 h-4" />
                      {repo.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h4 className="text-sm font-bold text-white light:text-slate-900 group-hover:text-cyan-300 transition-colors mb-2">
                    {repo.displayName || repo.name}
                  </h4>

                  <p className="text-xs text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <span>{repo.language || 'TypeScript'}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Public Repo</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-400 light:text-slate-500">
            <span>Verified GitHub Integration • Dynamically synced via GitHub REST API</span>
          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}

