import React from 'react';
import { ACHIEVEMENTS } from '../../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">Recognition</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Milestones reached and credentials earned throughout my academic and professional career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div 
              key={item.title}
              className="relative overflow-hidden p-10 rounded-[3rem] bg-slate-900/10 border border-slate-800/80 backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-700 hover:-translate-y-3"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700 rotate-12 group-hover:rotate-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 4L5 19l7-7 7 7"/></svg>
              </div>
              
              <div className="flex justify-between items-center mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 ${idx % 2 === 0 ? 'bg-blue-600 shadow-blue-500/20' : 'bg-purple-600 shadow-purple-500/20'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  {item.year}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors font-display leading-tight">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{item.details}</p>
              
              {item.certificateUrl ? (
                <a 
                  href={item.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 pt-8 border-t border-slate-800/50 flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-500 group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>View Certificate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </a>
              ) : (
                <div className="mt-8 pt-8 border-t border-slate-800/50 flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-500 group-hover:text-white transition-colors">
                  <span>Verification Available</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

