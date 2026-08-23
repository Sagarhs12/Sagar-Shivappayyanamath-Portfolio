import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, ChevronRight, Check, X, Layers, Award, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsShowreel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Cybersecurity', 'Deep Learning', 'Cloud & DevOps', 'Full-Stack & Web', 'IoT & Automation'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#090910] border-t border-neutral-800/80">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-widest uppercase">
              <span>⚡ FEATURED ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">PROJECTS</span> & SYSTEMS
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-light">
              End-to-end applications spanning AI/ML threat detection, medical image deep learning, automated cloud CI/CD pipelines, and embedded IoT hardware.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    : 'bg-[#12121e] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0c0c16] border border-neutral-800 hover:border-orange-500/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(234,88,12,0.18)]"
            >
              <div>
                {/* Visual Image Banner & Overlays */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#12121e]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c16] via-[#0c0c16]/30 to-transparent" />

                  {/* Top Badges: Category & Timeline */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-md bg-[#08080c]/90 backdrop-blur-md border border-orange-500/40 text-orange-400 text-[11px] font-mono font-bold tracking-wider shadow-sm">
                      {project.category}
                    </span>
                    {project.timeline && (
                      <span className="px-2.5 py-1 rounded-md bg-[#08080c]/90 backdrop-blur-md border border-neutral-700/80 text-neutral-200 text-[11px] font-mono font-medium shadow-sm">
                        {project.timeline}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-5">
                  
                  {/* Header: Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-orange-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-orange-400/90 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Special Recognition / Government Sponsorship Callout */}
                  {project.achievement && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs font-mono flex items-start gap-2.5 leading-relaxed">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{project.achievement}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* 4-Item Structured Highlights Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {project.stats.map((stat, sIdx) => (
                      <div 
                        key={sIdx} 
                        className="bg-[#121220] p-2.5 rounded-xl border border-neutral-800/80 text-center flex flex-col justify-center"
                      >
                        <span className="text-xs font-bold text-orange-400 font-mono tracking-tight">
                          {stat.value}
                        </span>
                        <p className="text-[10px] text-neutral-400 font-mono uppercase mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#141424] border border-neutral-800/90 text-[11px] font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#151526] hover:bg-[#1f1f38] border border-neutral-700 hover:border-orange-500/60 text-white text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-orange-500/40"
                >
                  <span>DETAILS & ARCHITECTURE</span>
                  <ChevronRight className="w-4 h-4 text-orange-400" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-[#121220] hover:bg-[#1a1a2e] border border-neutral-700 hover:border-orange-500/60 text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
                    title="View Source Code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-lg overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl my-auto max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0f0f1d] border border-orange-500/40 p-5 sm:p-7 md:p-8 shadow-2xl space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4 sticky top-0 bg-[#0f0f1d]/95 backdrop-blur-md pt-1 -mt-1 z-10">
              <div className="pr-4">
                <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-[#181828] text-neutral-400 hover:text-white border border-neutral-700 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Achievement Callout if exists */}
            {selectedProject.achievement && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-200 text-xs font-mono flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{selectedProject.achievement}</span>
              </div>
            )}

            {/* Overview / Extended Bio */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                Project Overview
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">
                Key Technical Features & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3 rounded-xl bg-[#141424] border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-orange-400" />
                System Architecture & Dataflow
              </h4>
              <div className="space-y-2 font-mono text-xs">
                {selectedProject.architecture.map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-2.5 rounded-lg bg-[#121220] border border-orange-500/20 text-neutral-300 flex items-center gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] flex items-center justify-center font-bold shrink-0">
                      {aIdx + 1}
                    </span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-[#16162a] border border-neutral-700 text-xs font-mono text-orange-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold font-mono flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-[#1e1e30] hover:bg-[#282840] text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider ml-auto"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
