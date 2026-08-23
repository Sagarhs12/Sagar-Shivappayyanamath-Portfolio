import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, Copy, AlertCircle, Phone, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      // 1. Send via Formspree direct endpoint to sagar03sh@gmail.com
      const res = await fetch('https://formspree.io/f/mqaejvyb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          opportunity_type: formData.projectType || 'General Opportunity / Inquiry',
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.projectType || 'New Opportunity'} from ${formData.name}`,
        }),
      });

      // Local API notification
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch (localErr) {
        // silent fallback for static hosts
      }

      if (res.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ea580c', '#f97316', '#fbbf24', '#ffffff'],
        });
      } else {
        triggerDirectMailto();
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error('Contact error fallback:', err);
      triggerDirectMailto();
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerDirectMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.projectType || 'General'} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOpportunity / Inquiry Type: ${formData.projectType || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#090910] border-t border-neutral-800/80 overflow-hidden">
      
      {/* Background Amber Flare */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Direct Contact Meta */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono tracking-widest uppercase">
              <span>⚡ LET'S CONNECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              LET'S CREATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                SOMETHING EPIC
              </span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Have a full-time engineering opportunity, graduate position, internship, or innovative project in mind? Let's connect and engineer scalable solutions together.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Direct Email Card with Copy button */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0c16] border border-neutral-800 hover:border-orange-500/40 transition-all flex items-center justify-between group shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">DIRECT EMAIL</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors block mt-0.5"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#141424] text-neutral-400 hover:text-white border border-neutral-700/80 hover:border-orange-500/50 transition-all shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-[#0c0c16] border border-neutral-800 hover:border-blue-500/40 transition-all flex items-center justify-between group shadow-lg block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">LINKEDIN NETWORK</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors mt-0.5">
                      sagar-shivappayyanamath
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-orange-400 group-hover:text-orange-300 shrink-0 ml-2">CONNECT ↗</span>
              </a>

              {/* Location Badge */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0c16] border border-neutral-800 flex items-center gap-3.5 shadow-lg">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold">CURRENT LOCATION</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    {PERSONAL_INFO.location} (Open to Relocate / Remote)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c16] border border-orange-500/40 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Sagar will review your inquiry and get back to you promptly at{' '}
                    <span className="text-orange-400 font-mono font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#141426] border border-neutral-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1e1e36] transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                        Your Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#121220] border border-neutral-800 focus:border-orange-500 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                        Your Email <span className="text-orange-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#121220] border border-neutral-800 focus:border-orange-500 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors"
                      />
                    </div>

                  </div>

                  {/* Inquiry / Opportunity Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                      Opportunity / Inquiry Type
                    </label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      placeholder="e.g., Full-Time Role, Project Collaboration, Internship, Research, Coffee Chat..."
                      className="w-full px-4 py-3 rounded-xl bg-[#121220] border border-neutral-800 focus:border-orange-500 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-bold">
                      Your Message <span className="text-orange-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sagar, we were impressed by your Azure AI certification and deep learning projects..."
                      className="w-full px-4 py-3 rounded-xl bg-[#121220] border border-neutral-800 focus:border-orange-500 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-neutral-400 pt-1">
                    Direct delivery to <span className="text-orange-400 font-semibold">{PERSONAL_INFO.email}</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
