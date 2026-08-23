import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Calendar, X, Sparkles, Building2, Cloud, Terminal, CheckCircle2, Check } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'CLOUD & AI',
    'CYBERSECURITY & RISK',
    'JOB SIMULATIONS',
    'AWARDS & RECOGNITION',
  ];

  const getFilteredCertifications = () => {
    if (filterCategory === 'ALL') return CERTIFICATIONS;
    if (filterCategory === 'CLOUD & AI') {
      return CERTIFICATIONS.filter((c) =>
        ['microsoft', 'cloud', 'oracle', 'aws', 'ibm', 'nasscom'].includes(c.badgeType)
      );
    }
    if (filterCategory === 'CYBERSECURITY & RISK') {
      return CERTIFICATIONS.filter((c) =>
        ['cybersecurity', 'deloitte', 'mastercard', 'ey'].includes(c.badgeType) &&
        (c.title.toLowerCase().includes('cyber') || c.title.toLowerCase().includes('forensic') || c.title.toLowerCase().includes('security'))
      );
    }
    if (filterCategory === 'JOB SIMULATIONS') {
      return CERTIFICATIONS.filter((c) =>
        c.title.toLowerCase().includes('simulation') || ['forage', 'deloitte', 'mastercard', 'jpmorgan', 'ey', 'aws'].includes(c.badgeType)
      );
    }
    if (filterCategory === 'AWARDS & RECOGNITION') {
      return CERTIFICATIONS.filter((c) => c.badgeType === 'award' || c.title.toLowerCase().includes('first place') || c.title.toLowerCase().includes('best performer'));
    }
    return CERTIFICATIONS;
  };

  const filteredCerts = getFilteredCertifications();

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'microsoft':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'cybersecurity':
      case 'mastercard':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'oracle':
      case 'aws':
      case 'cloud':
        return <Cloud className="w-5 h-5 text-orange-400" />;
      case 'deloitte':
      case 'ey':
      case 'jpmorgan':
      case 'forage':
        return <Building2 className="w-5 h-5 text-amber-400" />;
      case 'ibm':
      case 'nasscom':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-yellow-400" />;
      default:
        return <Award className="w-5 h-5 text-orange-400" />;
    }
  };

  const isExpired = (dateStr: string) => {
    return dateStr.toLowerCase().includes('expired');
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#090910] border-t border-neutral-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-widest uppercase">
              <span>⚡ INDUSTRY CREDENTIALS ({CERTIFICATIONS.length} TOTAL)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              LICENSES, CERTS & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                JOB SIMULATIONS
              </span>
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl font-light">
              Verified certifications in Microsoft Azure AI Apps & Agents, Oracle Cloud, DevOps, enterprise cybersecurity, and global financial engineering simulations.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  filterCategory === cat
                    ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                    : 'bg-[#12121e] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const expired = isExpired(cert.date);
            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group relative p-6 rounded-2xl bg-[#0c0c18] border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(234,88,12,0.18)]"
              >
                <div>
                  {/* Top Metadata Bar: Date Status & Issuer */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span 
                      className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${
                        expired 
                          ? 'bg-neutral-900/80 border-neutral-700 text-neutral-400' 
                          : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                      }`}
                    >
                      <Calendar className="w-3 h-3" />
                      {cert.date.split('·')[0].trim()}
                    </span>

                    <span className="text-xs font-mono uppercase text-orange-400/90 font-bold bg-[#141424] px-2.5 py-1 rounded-md border border-neutral-800/80 truncate max-w-[140px]">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                      {getBadgeIcon(cert.badgeType)}
                    </div>

                    <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-[#141426] border border-neutral-800/90 text-[10px] font-mono text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsLearned.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-[#141426] border border-neutral-800/90 text-[10px] font-mono text-orange-400">
                        +{cert.skillsLearned.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 mt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-orange-400 group-hover:text-orange-300">
                  <span>VIEW VERIFICATION DETAILS</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0f0f1e] border border-orange-500/40 p-5 sm:p-7 shadow-2xl space-y-5 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0">
                  {getBadgeIcon(selectedCert.badgeType)}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-orange-400 font-bold">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-[#181828] text-neutral-400 hover:text-white border border-neutral-700 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Credential Reference Box */}
            <div className="p-4 rounded-xl bg-[#141424] border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Credential Reference:</span>
                <span className="text-orange-400 font-bold">{selectedCert.credentialId || 'VERIFIED-ACCREDITATION'}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Awarded To:</span>
                <span className="text-white font-semibold">Sagar Shivappayyanamath</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Timeline / Status:</span>
                <span className={`font-bold ${isExpired(selectedCert.date) ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {selectedCert.date}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
              {selectedCert.description}
            </p>

            {/* Tested Competencies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                Core Competencies Tested & Certified:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-[#16162c] border border-orange-500/30 text-xs font-mono text-orange-300 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              {selectedCert.verifyUrl ? (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-orange-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Verify on Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono text-neutral-400">Verified Academic Record</span>
              )}

              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider transition-colors ml-auto"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
