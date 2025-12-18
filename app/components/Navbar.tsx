'use client';

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-5xl ${isScrolled ? 'top-4' : 'top-8'}`}>
      <div className={`px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl flex justify-between items-center transition-all ${isScrolled ? 'bg-black/60 shadow-2xl shadow-black' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">J</div>
          <span className="font-display font-bold text-lg hidden sm:block tracking-tighter">Jahnvi Saxena</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#github" className="hover:text-white transition-colors">Activity</a>
          </div>
          <a href="#footer" className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

