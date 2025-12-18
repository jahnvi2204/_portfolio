import React from 'react';
import { SKILLS } from '../../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((cat) => (
          <div key={cat.name} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-300 group">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 group-hover:text-blue-400 transition-colors">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 font-medium hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

