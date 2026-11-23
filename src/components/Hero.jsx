import React, { useState, useRef } from 'react';
import { ArrowRight, FileText, Linkedin, Github, Sparkles, Award, MapPin, CheckCircle2, Upload, Camera, Code2, Cpu, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResume }) {
  const [userPhoto, setUserPhoto] = useState(profileData.photo);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Cyber Grid Lines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 text-xs font-medium text-slate-300 light:text-slate-700 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Technical Internships & Projects</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  {profileData.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 light:text-slate-800 max-w-2xl leading-snug">
                {profileData.headline}
              </p>
            </div>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* College & Location Indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 light:text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Dr. D. Y. Patil College of Engg. & Innovation</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Varale, Talegaon Dabhade</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              {/* Primary: Explore My Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700/80 light:hover:bg-slate-200 border border-slate-700 light:border-slate-300 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400 light:text-blue-600" />
                <span>Download Resume</span>
              </button>

              {/* Connect on WhatsApp */}
              <a
                href={profileData.socials.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 light:text-emerald-700 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all transform hover:-translate-y-0.5"
                title="Chat directly on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>

              {/* Connect on LinkedIn */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-blue-400 light:text-blue-700 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">Connect on</span> LinkedIn
              </a>

              {/* Explore My Code on GitHub */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 light:text-slate-700 bg-slate-800/50 light:bg-slate-100 hover:bg-slate-800 border border-slate-700/70 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Explore My Code</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 light:border-slate-200 max-w-xl">
              <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 light:text-blue-600">8.16</div>
                <div className="text-xs text-slate-400 light:text-slate-500 font-medium">B.Tech CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-blue-400 light:text-blue-600">2nd Year</div>
                <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Computer Engg.</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-purple-400 light:text-purple-600">4+ Core</div>
                <div className="text-xs text-slate-400 light:text-slate-500 font-medium">IoT & SW Projects</div>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              
              {/* Outer Cyber Glow Rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 rounded-3xl opacity-35 group-hover:opacity-55 blur-xl transition-all duration-500 animate-pulse-slow pointer-events-none" />
              
              {/* Main Card Frame */}
              <div className="relative w-72 sm:w-80 md:w-88 rounded-3xl bg-[#0d1527] light:bg-white border-2 border-slate-700/80 light:border-slate-200 shadow-2xl p-4 flex flex-col items-center justify-between overflow-hidden">
                
                {/* Tech Accent Lines */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
                <div className="w-full flex items-center justify-between text-[11px] text-slate-400 light:text-slate-500 font-mono mb-3">
                  <span>ID: MM-2026-ENG</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERIFIED CANDIDATE
                  </span>
                </div>

                {/* Professional Photo Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#101b33] to-[#132242] border-2 border-cyan-500/40 shadow-inner group/photo">
                  <img
                    src={userPhoto}
                    alt="Mayuri Mundkar"
                    className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Quick Photo Change Overlay */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover/photo:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-4 text-center"
                    title="Click to select and upload your photo"
                  >
                    <Camera className="w-6 h-6 text-cyan-400 mb-1" />
                    <span className="text-xs font-semibold text-white">Change Portrait Photo</span>
                    <span className="text-[10px] text-slate-300 mt-1">PNG, JPG or WebP</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Bottom Identity Card Banner */}
                <div className="w-full bg-slate-900/90 light:bg-slate-50 border border-slate-800 light:border-slate-200 rounded-xl p-3 text-center mt-3">
                  <div className="text-sm font-bold text-slate-100 light:text-slate-900">
                    Mayuri Mundkar
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 light:text-blue-600 mt-0.5">
                    Aspiring AI Software Engineer
                  </div>
                  <div className="text-[11px] text-slate-400 light:text-slate-500 mt-0.5">
                    Dr. D. Y. Patil College of Engineering and Innovation
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Badge Below Card */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 light:text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Official Portrait • Authentic Academic Profile</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
