import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-12 px-4 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Let's build something great.</h2>
            <p className="text-slate-500 max-w-sm">
              Open to collaborative projects, hackathons, and high-impact technology innovation.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/jahnvi2204" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jahnvi-saxena-738270247/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:saxenajahnvi7@gmail.com" className="p-3 bg-slate-900 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs border-t border-slate-900 pt-8 gap-4">
          <p>© 2025 Jahnvi Saxena. All rights reserved.</p>
          <div className="flex gap-8">
            <span>English (Fluent)</span>
            <span>Hindi (Native)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

