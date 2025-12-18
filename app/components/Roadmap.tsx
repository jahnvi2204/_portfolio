import React from 'react';
import { PROJECTS } from '../../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-bold font-display text-white mb-4">Project Roadmap</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* The glowing vertical line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <div key={project.title} className={`relative flex items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Marker */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-16 md:pl-0">
                <div className={`p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden`}>
                  {/* Hover Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                  
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2 block">{project.date}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed italic">{project.subtitle}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {project.description.slice(0, 2).map((desc, i) => (
                      <li key={i} className="text-slate-300 text-sm flex gap-2">
                        <span className="text-blue-500">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] bg-white/5 text-slate-400 rounded-md border border-white/5 uppercase font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                    >
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 hover:bg-blue-500/30 transition-all"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

