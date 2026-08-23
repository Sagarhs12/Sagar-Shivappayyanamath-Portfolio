import React from 'react';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, CheckCircle2, Play, Download, ExternalLink, Github, Mail, GraduationCap, Award, GitBranch } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center">
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Top Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420]/90 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-wider w-fit shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold uppercase tracking-wider text-emerald-300">OPEN TO ALL ROLES</span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-300">AZURE CERTIFIED</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                I ARCHITECT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  INTELLIGENT AI
                </span> <br />
                & CLOUD SYSTEMS
              </h1>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-neutral-300/90 max-w-2xl leading-relaxed font-light">
              I am <strong className="text-white font-medium">Sagar Shivappayyanamath</strong>, currently pursuing an <span className="text-orange-300 font-medium">M.Tech in Computer Science & Engineering (AI & ML) at PES University</span> and a Microsoft Certified Azure AI Developer. I engineer deep learning systems, automated cloud DevOps pipelines, and intelligent software architectures.
            </p>

            {/* Tech Badges / Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Azure AI Foundry', 'Generative AI & LLMs', 'Docker & Jenkins', 'TensorFlow / OpenCV', 'OCI Cloud', 'Python & React'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#101018] border border-neutral-800 text-neutral-400 text-xs font-mono hover:border-orange-500/40 hover:text-orange-300 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-semibold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(234,88,12,0.45)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>EXPLORE PROJECTS</span>
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl bg-[#12121c] hover:bg-[#181826] border border-orange-500/40 hover:border-orange-400 text-orange-300 hover:text-white text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(249,115,22,0.15)]"
              >
                <Download className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </button>

              <a
                id="hero-github-btn"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl bg-[#12121c] hover:bg-white/5 border border-neutral-800 hover:border-orange-500/40 text-neutral-300 hover:text-white text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4 text-orange-400" />
                <span>GITHUB</span>
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white text-xs font-semibold tracking-wider transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Cyber Profile Photo & Rotating HUD Rings */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0 w-full overflow-hidden sm:overflow-visible">
            <div className="relative w-[280px] min-[380px]:w-[320px] sm:w-[380px] md:w-[420px] max-w-full aspect-square flex items-center justify-center">
              
              {/* Outer Rotating Cyber Ring with Tick Marks */}
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/25 animate-spin-slow pointer-events-none" />
              
              {/* Secondary Concentric Ring */}
              <div className="absolute inset-3 sm:inset-4 rounded-full border border-orange-500/30 animate-spin-reverse pointer-events-none" />
              
              {/* Inner Glowing Ring */}
              <div className="absolute inset-7 sm:inset-10 rounded-full border-2 border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.3)] animate-pulse-glow pointer-events-none" />

              {/* Glowing Ambient Core */}
              <div className="absolute w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-tr from-orange-600/30 to-amber-500/20 blur-2xl -z-10" />

              {/* Central Holographic Avatar Frame featuring Sagar's Profile */}
              <div className="relative w-56 min-[380px]:w-64 sm:w-72 md:w-80 h-72 min-[380px]:h-80 sm:h-96 md:h-[420px] rounded-2xl bg-[#0c0c14] border border-orange-500/50 overflow-hidden shadow-[0_0_50px_rgba(234,88,12,0.35)] group">
                
                {/* Full-bleed Portrait Image */}
                <img
                  src={PERSONAL_INFO.avatar || '/sagarprofile.jpg'}
                  alt="Sagar Shivappayyanamath"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080f] via-[#08080f]/40 to-transparent pointer-events-none" />

                {/* Cyber Scanlines & Grids */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(234,88,12,0.1)_51%)] bg-[length:100%_4px] pointer-events-none opacity-60" />
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Profile Information Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-center flex flex-col items-center">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide leading-tight drop-shadow-md">
                    SAGAR SHIVAPPAYYANAMATH
                  </h3>
                  <p className="text-[11px] font-mono text-orange-400 mt-0.5 font-semibold tracking-wider">
                    AI & DEVOPS ENGINEER
                  </p>
                  
                  {/* Open to all roles badge */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a0a14]/90 backdrop-blur-md border border-emerald-500/60 text-emerald-300 text-[11px] font-mono font-bold shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN TO ALL ROLES
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Highlights & Metrics Grid */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Card 1: CS Graduate (2025) */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0e0e1a] border border-neutral-800/90 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-105 group-hover:border-orange-400 transition-all">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400 group-hover:to-amber-400 transition-colors">
                    2025
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  CS Graduate
                </h3>
                <p className="text-xs font-mono text-orange-400/90 font-medium mt-0.5">
                  Visvesvaraya Technological University
                </p>
              </div>
              <p className="text-xs text-neutral-400 font-light mt-3 pt-3 border-t border-neutral-800/70 leading-relaxed">
                BE Computer Science & Engineering • Pursuing M.Tech AI/ML at PES University
              </p>
            </div>

            {/* Card 2: Industry Certifications (20+) */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0e0e1a] border border-neutral-800/90 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 group-hover:to-orange-400 transition-colors">
                    20+
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  Industry Certs
                </h3>
                <p className="text-xs font-mono text-amber-400/90 font-medium mt-0.5">
                  Microsoft, Oracle & Forage
                </p>
              </div>
              <p className="text-xs text-neutral-400 font-light mt-3 pt-3 border-t border-neutral-800/70 leading-relaxed">
                Certified Azure AI Developer, OCI Cloud Foundations & Global Virtual Job Simulations
              </p>
            </div>

            {/* Card 3: Pipeline Automation (100%) */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0e0e1a] border border-neutral-800/90 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-400 group-hover:to-teal-300 transition-colors">
                    100%
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  Pipeline Automation
                </h3>
                <p className="text-xs font-mono text-emerald-400/90 font-medium mt-0.5">
                  Docker & Jenkins Deployments
                </p>
              </div>
              <p className="text-xs text-neutral-400 font-light mt-3 pt-3 border-t border-neutral-800/70 leading-relaxed">
                End-to-end continuous integration, containerization & reproducible cloud deployments
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
