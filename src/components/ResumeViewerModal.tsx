import React from 'react';
import { X, Printer, Mail, MapPin, Linkedin, Github, Phone, Award, Briefcase, GraduationCap, Code2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS, PROJECTS, TIMELINE, SKILLS } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-4 sm:my-8 rounded-2xl bg-[#0c0c16] border border-orange-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Top Control Bar (Screen Only) */}
        <div className="no-print bg-[#121222] px-4 sm:px-6 py-3.5 border-b border-neutral-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <h3 className="font-display font-bold text-xs sm:text-sm md:text-base text-white">
              SAGAR SHIVAPPAYYANAMATH — RESUME
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white border border-orange-400/50 text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(234,88,12,0.35)]"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#18182a] hover:bg-[#22223a] text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div 
          id="resume-print-root" 
          className="flex-1 p-5 sm:p-8 md:p-10 overflow-y-auto bg-[#090910] text-neutral-200 font-sans space-y-6 print:space-y-4 print:p-0 print:bg-white print:text-black"
        >
          
          {/* Header with Info & Right-Corner Portrait */}
          <div className="border-b border-neutral-800 pb-5 print:border-neutral-400 page-break-inside-avoid flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white print:text-black tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-orange-400 font-semibold print:text-orange-800">
                {PERSONAL_INFO.title}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1.5 text-xs font-mono text-neutral-300 print:text-neutral-700">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-orange-400 print:text-orange-700" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400 print:text-amber-700" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 print:text-blue-700" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/sagar-shivappayyanamath</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-neutral-300 print:text-neutral-800" />
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Sagarhs12</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Profile Photo in Right Corner */}
            <div className="shrink-0 self-center sm:self-auto">
              <div className="w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 rounded-xl overflow-hidden border-2 border-orange-500/60 print:border-neutral-800 shadow-md bg-neutral-900">
                <img
                  src={PERSONAL_INFO.avatar || '/sagarprofile.jpg'}
                  alt="Sagar Shivappayyanamath"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5 page-break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-neutral-800 pb-1 print:border-neutral-400 print:text-orange-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              PROFESSIONAL SUMMARY
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-neutral-300 print:text-neutral-800 font-light leading-relaxed">
              <p>{PERSONAL_INFO.bio}</p>
              <p>{PERSONAL_INFO.extendedBio}</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 page-break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-neutral-800 pb-1 print:border-neutral-400 print:text-orange-800 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              EDUCATION
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {TIMELINE.filter(t => t.type === 'education').map((edu) => (
                <div key={edu.id} className="p-2.5 rounded-lg bg-[#121220] border border-neutral-800/80 print:bg-white print:border-neutral-300 print:p-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <strong className="text-white print:text-black font-bold">{edu.role}</strong>
                    <span className="font-mono text-orange-400 print:text-orange-800 text-xs font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-neutral-300 print:text-neutral-700 font-medium text-xs mt-0.5">{edu.organization} — {edu.location}</p>
                  <ul className="list-disc list-inside text-neutral-400 print:text-neutral-600 text-xs mt-1 space-y-0.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 page-break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-neutral-800 pb-1 print:border-neutral-400 print:text-orange-800 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              TECHNICAL SKILLS & COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-[#121220] border border-neutral-800 print:bg-neutral-50 print:border-neutral-300">
                <strong className="text-white print:text-black block mb-0.5 font-semibold">AI & Machine Learning:</strong>
                <span className="text-neutral-300 print:text-neutral-700">Python, Machine Learning, Artificial Intelligence, Computer Vision, TensorFlow, OpenCV, CNNs, Grad-CAM, Azure AI Services & Foundry, Generative AI, AI Agents, LLM Integrations</span>
              </div>
              <div className="p-2 rounded-lg bg-[#121220] border border-neutral-800 print:bg-neutral-50 print:border-neutral-300">
                <strong className="text-white print:text-black block mb-0.5 font-semibold">Cloud & DevOps:</strong>
                <span className="text-neutral-300 print:text-neutral-700">DevOps, CI/CD, Docker, Git, Cloud Computing, Oracle Cloud Infrastructure (OCI), Microsoft Azure, Jenkins Automation, Linux Shell</span>
              </div>
              <div className="p-2 rounded-lg bg-[#121220] border border-neutral-800 print:bg-neutral-50 print:border-neutral-300">
                <strong className="text-white print:text-black block mb-0.5 font-semibold">Languages & Web Frameworks:</strong>
                <span className="text-neutral-300 print:text-neutral-700">Python, React.js, Node.js, JavaScript / TypeScript, Java, REST APIs, Tailwind CSS, Responsive Web Design</span>
              </div>
              <div className="p-2 rounded-lg bg-[#121220] border border-neutral-800 print:bg-neutral-50 print:border-neutral-300">
                <strong className="text-white print:text-black block mb-0.5 font-semibold">Data & Analytics:</strong>
                <span className="text-neutral-300 print:text-neutral-700">Data Analytics, SQL, MySQL, Database Modeling, Query Optimization, Microsoft Business Intelligence (MSBI), Power BI</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2.5 page-break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-neutral-800 pb-1 print:border-neutral-400 print:text-orange-800 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              KEY ENGINEERING PROJECTS
            </h2>
            <div className="space-y-2.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-2.5 sm:p-3 rounded-lg bg-[#121220] border border-neutral-800 print:bg-white print:border-neutral-300 space-y-1 page-break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                      {proj.title} <span className="font-normal text-neutral-400 print:text-neutral-600 text-xs">— {proj.subtitle}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-orange-400 print:text-orange-800 font-semibold">
                      {proj.timeline}
                    </span>
                  </div>
                  {proj.achievement && (
                    <p className="text-[11px] font-mono text-amber-300 print:text-amber-800 font-medium">
                      ★ {proj.achievement}
                    </p>
                  )}
                  <p className="text-xs text-neutral-300 print:text-neutral-700 font-light leading-relaxed">
                    {proj.longDescription || proj.description}
                  </p>
                  <p className="text-[11px] font-mono text-neutral-400 print:text-neutral-600">
                    <strong className="text-neutral-300 print:text-neutral-800">Tech Stack:</strong> {proj.tags.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Job Simulations */}
          <div className="space-y-2 page-break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-neutral-800 pb-1 print:border-neutral-400 print:text-orange-800 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              CERTIFICATIONS & INDUSTRY JOB SIMULATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-2 rounded-lg bg-[#121220] border border-neutral-800 print:bg-neutral-50 print:border-neutral-200 page-break-inside-avoid">
                  <div className="flex items-start justify-between gap-1">
                    <h3 className="text-xs font-bold text-white print:text-black">
                      {cert.title}
                    </h3>
                    <span className="text-[10px] font-mono text-orange-400 print:text-orange-800 font-bold shrink-0 ml-1">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 print:text-neutral-700 mt-0.5">
                    Issuer: <span className="font-semibold">{cert.issuer}</span> {cert.credentialId && `(ID: ${cert.credentialId})`}
                  </p>
                  <p className="text-[10px] text-neutral-400 print:text-neutral-600 mt-0.5">
                    Skills: {cert.skillsLearned.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Leadership */}
          <div className="space-y-2 page-break-inside-avoid">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-orange-400 font-bold border-b border-neutral-800 pb-1 print:border-neutral-400 print:text-orange-800 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              EXPERIENCE & LEADERSHIP
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {TIMELINE.filter(t => t.type === 'experience').map((item) => (
                <div key={item.id} className="p-2.5 rounded-lg bg-[#121220] border border-neutral-800 print:bg-white print:border-neutral-300 page-break-inside-avoid">
                  <div className="flex items-center justify-between">
                    <strong className="text-white print:text-black font-bold">{item.role}</strong>
                    <span className="font-mono text-orange-400 print:text-orange-800 text-xs font-semibold">{item.period}</span>
                  </div>
                  <p className="text-neutral-300 print:text-neutral-700 font-medium text-xs">{item.organization} — {item.location}</p>
                  <ul className="list-disc list-inside text-neutral-400 print:text-neutral-600 text-xs mt-1 space-y-0.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer (Screen Only) */}
        <div className="no-print bg-[#121222] px-6 py-3.5 border-t border-neutral-800 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-neutral-400">
            Open to Full-Time, Graduate & Internship Roles
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold tracking-wider flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#1e1e30] hover:bg-[#282840] text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
