import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, PhoneCall } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.socials.whatsapp);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mayuri,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;
    
    setFormStatus({ 
      type: 'success', 
      message: 'Opening your default email client to send this message securely. Thank you for reaching out!' 
    });
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Mayuri, My name is ${formData.name || 'a visitor'}. ${formData.message ? `Regarding: ${formData.message}` : 'I came across your portfolio and would like to connect!'}`
    );
    window.open(`https://wa.me/918329810391?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            I am always eager to discuss engineering opportunities, IoT projects, academic collaborations, or AI research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Spotlight */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Integration Spotlight Card */}
            <div className="glass-card rounded-2xl p-6 border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-[#0d1527] to-[#0c1b2f] space-y-4 shadow-lg shadow-emerald-500/10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    Direct WhatsApp
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">WhatsApp Number</span>
                <div className="text-xl sm:text-2xl font-black text-white light:text-slate-900 mt-0.5 flex items-center justify-between">
                  <span>{profileData.socials.whatsapp}</span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-slate-400 light:text-slate-500 mt-1">
                  Available for instant messaging, interview scheduling & project queries.
                </p>
              </div>

              <a
                href={profileData.socials.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 light:border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 light:text-slate-700 bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Email Address</span>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="text-base font-bold text-white light:text-slate-900 block hover:text-cyan-400 transition-colors mt-0.5"
                >
                  {profileData.socials.email}
                </a>
              </div>

              <a
                href={`mailto:${profileData.socials.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email via Mailto</span>
              </a>
            </div>

            {/* LinkedIn & GitHub Two-Column */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-slate-800 light:border-slate-200 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/15 flex items-center justify-center text-blue-400 mb-2">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[10px] text-slate-400">Connect Profile</div>
                </div>
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-2">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    GitHub
                  </div>
                  <div className="text-[10px] text-slate-400">View Repositories</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 light:border-slate-200">
            <h3 className="text-xl font-bold text-white light:text-slate-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 light:text-slate-500 mb-6">
              Fill in your details below. You can send via your email client or trigger a direct WhatsApp message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship Opportunity / Project Collaboration / Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 light:text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              {/* Status Message */}
              {formStatus && (
                <div className={`p-4 rounded-xl flex items-start gap-3 text-xs leading-relaxed ${
                  formStatus.type === 'success' 
                    ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800' 
                    : 'bg-rose-950/40 text-rose-300 border border-rose-800'
                }`}>
                  {formStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-500 hover:to-cyan-400 shadow-glow-cyan transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Send via Email</span>
                  <Send className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-md shadow-emerald-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                🔒 Transparent Form: Triggers direct client mail or WhatsApp protocol to guarantee delivery without third-party data tracking.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
