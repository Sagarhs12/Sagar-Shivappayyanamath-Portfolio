import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06060a] border-t border-neutral-900 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#12121e] border border-orange-500/40 flex items-center justify-center">
                <span className="font-display font-black text-lg text-orange-500">S</span>
                <span className="font-display font-bold text-xs text-white -ml-0.5">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base tracking-widest text-white uppercase">
                  SAGAR SHIVAPPAYYANAMATH
                </span>
                <span className="text-[9px] font-mono tracking-widest text-orange-400/80 uppercase">
                  AI ENGINEER & DEVOPS SPECIALIST
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm font-light leading-relaxed">
              M.Tech in Computer Science & Engineering (AI & ML) at PES University & Microsoft Certified Azure AI Developer. Bridging deep learning intelligence with production-grade cloud automation.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              QUICK NAVIGATION
            </p>
            <ul className="space-y-1.5 text-xs">
              {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Direct Connect */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-3">
              LET'S CONNECT
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#12121e] hover:bg-orange-500/20 border border-neutral-800 hover:border-orange-500/50 flex items-center justify-center text-neutral-300 hover:text-orange-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#12121e] hover:bg-orange-500/20 border border-neutral-800 hover:border-orange-500/50 flex items-center justify-center text-neutral-300 hover:text-orange-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-[#12121e] hover:bg-orange-500/20 border border-neutral-800 hover:border-orange-500/50 flex items-center justify-center text-neutral-300 hover:text-orange-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-neutral-400">
              {PERSONAL_INFO.email}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
            <span className="font-mono text-neutral-400">Available for Opportunities</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Engineered with <Heart className="w-3 h-3 text-orange-500 fill-orange-500 inline" /> & Azure AI
            </span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#12121e] hover:bg-[#1c1c2e] text-neutral-400 hover:text-white border border-neutral-800 transition-colors flex items-center gap-1 text-xs"
              title="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
