'use client';

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GithubSection: React.FC = () => {
  return (
    <section id="github" className="pt-24">
      <div className="group relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700"></div>
        
        <div className="flex flex-col items-center justify-center mb-16 relative z-10">
          <h2 className="text-4xl font-black text-white font-display mb-4 text-center">
            Days I <strong className="text-blue-500">Code</strong>
          </h2>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-hide relative z-10 flex justify-center">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
            <GitHubCalendar username="jahnvi2204" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          <a 
            href="https://github.com/jahnvi2204" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
              <img src="https://github.com/jahnvi2204.png" alt="GitHub" className="w-full h-full object-cover" />
            </div>
            <span>github.com/jahnvi2204</span>
          </a>
          <div className="flex items-center gap-3">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(i => {
                const colors = ['bg-white/[0.02]', 'bg-blue-900/40', 'bg-blue-700/60', 'bg-blue-500/80', 'bg-blue-400'];
                return <div key={i} className={`w-3.5 h-3.5 rounded-[2px] ${colors[i]}`} />;
              })}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;

