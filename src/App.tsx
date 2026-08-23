import React, { useState } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsShowreel } from './components/ProjectsShowreel';
import { SkillsMatrix } from './components/SkillsMatrix';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects') || document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080c] text-[#eceef2] relative selection:bg-orange-500/30 selection:text-orange-200">
      {/* Dynamic Background Particles & Cyber Grid */}
      <BackgroundParticles />

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onExploreProjects={handleExploreProjects}
        />

        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        <ProjectsShowreel />

        <SkillsMatrix />

        <CertificationsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
