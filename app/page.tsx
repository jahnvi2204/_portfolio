'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Skills from './components/Skills';
import GithubSection from './components/GithubSection';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
          <Skills />
          <Roadmap />
          <GithubSection />
          <Achievements />
        </div>
      </main>
      <Footer />
    </>
  );
}

