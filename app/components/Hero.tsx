import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        
        <h1 className="text-6xl md:text-[100px] font-black tracking-tighter font-display text-white mb-8 leading-[0.9]">
          ENGINEERING <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            FUTURE-PROOF
          </span>
          <br />
          <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">SYSTEMS.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          I'm <span className="text-white font-semibold">Jahnvi Saxena</span>. Crafting high-performance software and machine learning models at the intersection of efficiency and innovation.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#projects" className="group relative px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Explore My Work
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </a>
          <a href="https://github.com/jahnvi2204" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all active:scale-95">
            GitHub
          </a>
          <a href="https://leetcode.com/u/jahnvi2204/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all active:scale-95">
            LeetCode
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

