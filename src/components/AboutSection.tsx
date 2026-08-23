import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Languages, MapPin, Mail, Calendar, Check, ExternalLink, Sparkles, BookOpen, Code2 } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  const filteredTimeline = TIMELINE.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#090910] border-t border-b border-neutral-800/60 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-widest uppercase">
            <span>⚡ ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            I TURN COMPLEX IDEAS INTO <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              SCALABLE AI & CLOUD REALITIES
            </span>
          </h2>
        </div>

        {/* 2-Column Grid: Bio & Core Facts + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Detailed Bio & Profile Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c16] border border-neutral-800 hover:border-orange-500/40 transition-all space-y-6 shadow-xl">
              
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <span>Engineering Intelligent Systems</span>
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  {PERSONAL_INFO.bio}
                </p>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mt-4 font-light pt-4 border-t border-neutral-800/80">
                  {PERSONAL_INFO.extendedBio}
                </p>
              </div>

              {/* Location & Contact Meta */}
              <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-neutral-300 p-2.5 rounded-lg bg-[#121220] border border-neutral-800">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300 p-2.5 rounded-lg bg-[#121220] border border-neutral-800">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="truncate hover:text-orange-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Languages Spoken */}
              <div className="pt-4 border-t border-neutral-800/80">
                <p className="text-xs font-mono text-neutral-400 uppercase mb-2.5 flex items-center gap-1.5 font-bold">
                  <Languages className="w-4 h-4 text-orange-400" />
                  <span>Languages</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PERSONAL_INFO.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-2 rounded-lg bg-[#121220] border border-neutral-800 text-center"
                    >
                      <strong className="text-white text-xs block">{lang.name}</strong>
                      <span className="text-[11px] font-mono text-orange-400/90">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature Style Block & Resume PDF */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 italic tracking-wider">
                    Sagar.S
                  </span>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase">
                    AI & DEVOPS ENGINEER
                  </p>
                </div>

                <button
                  onClick={onOpenResume}
                  className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold font-mono tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                >
                  <span>RESUME PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Experience & Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Timeline Filter Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-2 border-b border-neutral-800">
              <h3 className="font-display font-bold text-xl text-white">
                Career Journey & Academic Foundations
              </h3>

              <div className="inline-flex rounded-xl bg-[#12121e] p-1 border border-neutral-800 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all ${
                    activeTab === 'all'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  ALL
                </button>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'experience'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>EXPERIENCE</span>
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === 'education'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>EDUCATION</span>
                </button>
              </div>
            </div>

            {/* Timeline Stream */}
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-orange-500 before:via-amber-500/50 before:to-neutral-800">
              {filteredTimeline.map((item) => (
                <div key={item.id} className="relative group">
                  
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-6 h-6 rounded-full bg-[#090910] border-2 border-orange-500 flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.6)] group-hover:scale-110 transition-transform">
                    {item.type === 'experience' ? (
                      <Briefcase className="w-2.5 h-2.5 text-orange-400" />
                    ) : (
                      <GraduationCap className="w-2.5 h-2.5 text-amber-400" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0c18] border border-neutral-800/90 group-hover:border-orange-500/50 transition-all duration-200 space-y-3 shadow-lg">
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold">
                          {item.type === 'experience' ? 'PROFESSIONAL EXPERIENCE' : 'ACADEMIC DEGREE'}
                        </span>
                        <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                          {item.role}
                        </h4>
                        <p className="text-xs sm:text-sm font-medium text-neutral-300 mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-300 bg-[#141424] px-2.5 py-1 rounded-md border border-neutral-800 w-fit shrink-0 mt-1 sm:mt-0 font-medium">
                        <Calendar className="w-3 h-3 text-orange-400" />
                        {item.period}
                      </span>
                    </div>

                    {/* Highlights Bullet points */}
                    <ul className="space-y-1.5 pt-2 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {item.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags if any */}
                    {item.techStack && item.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-[#141426] border border-neutral-800 text-[11px] font-mono text-neutral-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
