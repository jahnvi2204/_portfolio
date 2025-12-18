import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jahnvi Saxena | Portfolio',
  description: 'Portfolio of Jahnvi Saxena - Software Developer and ML Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen bg-[#020202] text-slate-300 selection:bg-blue-500/30 font-sans antialiased">
          {/* High-end Noise Texture Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] noise-overlay"></div>
          
          {/* Background Atmosphere */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full"></div>
            <div className="absolute top-[20%] right-[20%] w-[1px] h-[40%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          </div>

          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

