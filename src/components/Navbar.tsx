import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CERTS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080c]/90 backdrop-blur-md border-b border-orange-500/20 shadow-lg shadow-black/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="nav-brand-logo"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-lg bg-[#12121a] border border-orange-500/40 flex items-center justify-center overflow-hidden group-hover:border-orange-400 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-display font-black text-xl text-orange-500 tracking-tighter">S</span>
              <span className="font-display font-bold text-sm text-white -ml-0.5">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-widest text-white uppercase group-hover:text-orange-400 transition-colors">
                SAGAR
              </span>
              <span className="text-[9px] font-mono tracking-widest text-orange-400/80 -mt-1 uppercase">
                AI & CLOUD DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-xs font-semibold tracking-widest transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-orange-400 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* GitHub Link */}
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#14141e] hover:bg-[#1c1c2b] border border-neutral-700/80 hover:border-orange-500/50 text-neutral-300 hover:text-orange-400 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#14141e] hover:bg-[#1c1c2b] border border-neutral-700/80 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs font-semibold tracking-wider transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              <span>RESUME</span>
            </button>

            {/* Let's Work Together CTA */}
            <a
              id="nav-contact-cta"
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all flex items-center gap-1.5"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-[#14141e] border border-neutral-800 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0a0a10]/98 border-b border-orange-500/20 px-6 py-6 mt-3 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-semibold tracking-widest py-2 border-b border-neutral-800/60 ${
                  activeSection === link.href.substring(1)
                    ? 'text-orange-400 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-lg bg-[#161622] border border-neutral-700 text-neutral-200 text-xs font-bold tracking-widest flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-neutral-400" />
                VIEW FULL RESUME
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold tracking-widest text-center uppercase"
              >
                LET'S TALK / GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
