import React, { useState, useRef } from 'react';
import { 
  Award, ExternalLink, Eye, CheckCircle2, ShieldCheck, 
  Upload, Sparkles, AlertCircle, X, ChevronRight, FileText, Image as ImageIcon 
} from 'lucide-react';
import { certificatesData } from '../data/certificates';

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [userCertificates, setUserCertificates] = useState({});
  const fileInputRef = useRef(null);
  const [selectedForUpload, setSelectedForUpload] = useState(null);

  const handleCustomUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && selectedForUpload) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserCertificates(prev => ({
          ...prev,
          [selectedForUpload.id]: {
            dataUrl: event.target.result,
            fileName: file.name
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const openUploadFor = (cert, e) => {
    e.stopPropagation();
    setSelectedForUpload(cert);
    fileInputRef.current?.click();
  };

  return (
    <section id="certificates" className="py-20 relative bg-[#070b14]/50 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 bg-cyan-500/10 light:bg-blue-50 border border-cyan-500/20 light:border-blue-200">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white light:text-slate-900 tracking-tight">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Achievements</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Technical learning milestones, institutional partnerships, and specialized certifications across core programming and engineering domains.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-xs text-slate-300 light:text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>All certificate tracks represent verified coursework & programs discussed by Mayuri Mundkar.</span>
          </div>
        </div>

        {/* Hidden File Input for User Uploads */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleCustomUpload}
          accept="image/*,application/pdf"
          className="hidden"
        />

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => {
            const uploaded = userCertificates[cert.id];

            return (
              <div
                key={cert.id}
                onClick={() => setActiveCertificate(cert)}
                className="glass-card rounded-2xl p-6 border border-slate-800/90 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {cert.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Confirmed Track</span>
                    </span>
                  </div>

                  {/* Certificate Graphic Card Preview */}
                  <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-[#0c1426] via-[#101b33] to-[#142344] light:bg-gradient-to-br light:from-slate-100 light:to-blue-50 border border-slate-700/60 light:border-slate-300 p-4 mb-4 flex flex-col justify-between overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors blur-xl" />
                    
                    {uploaded ? (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center">
                        <ImageIcon className="w-8 h-8 text-emerald-400 mb-1" />
                        <span className="text-xs font-semibold text-white">{uploaded.fileName}</span>
                        <span className="text-[10px] text-emerald-400">Custom Document Attached</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-cyan-400 font-bold">{cert.issuingOrganization}</span>
                          <Award className="w-5 h-5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white light:text-slate-900 line-clamp-1">{cert.title}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{cert.date}</div>
                        </div>
                        <div className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">
                          Official Technical Track
                        </div>
                      </>
                    )}

                    {/* Hover Prompt */}
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                        <Eye className="w-4 h-4" /> Preview Lightbox
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900 mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-cyan-400 light:text-blue-600 mb-2">
                    {cert.issuingOrganization}
                  </p>

                  <p className="text-xs text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Covered Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-800/70 light:border-slate-200 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveCertificate(cert)}
                    className="font-semibold text-cyan-400 light:text-blue-600 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Certificate</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => openUploadFor(cert, e)}
                    className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    title="Upload or replace actual certificate file"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Attach File</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Image Lightbox / Modal */}
        {activeCertificate && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveCertificate(null)}
          >
            <div 
              className="relative w-full max-w-2xl rounded-3xl bg-[#0c1424] light:bg-white border-2 border-cyan-500/40 shadow-2xl p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveCertificate(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Visual Banner */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#070b14] via-[#0f1b33] to-[#15274d] p-8 border border-cyan-500/30 text-center">
                {userCertificates[activeCertificate.id]?.dataUrl ? (
                  <img
                    src={userCertificates[activeCertificate.id].dataUrl}
                    alt={activeCertificate.title}
                    className="max-h-80 mx-auto object-contain rounded-xl"
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                      <Award className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono">
                        Official Academic & Industry Track
                      </span>
                      <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                        {activeCertificate.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 mt-1">
                        Issuing Authority: {activeCertificate.issuingOrganization}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {activeCertificate.date}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 max-w-md mx-auto text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 inline-block mr-1.5" />
                      <span>{activeCertificate.verificationNote}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Details & Covered Skills */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Competencies & Curriculum Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCertificate.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 light:bg-slate-100 text-slate-200 light:text-slate-800 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lightbox Actions */}
              <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  onClick={(e) => openUploadFor(activeCertificate, e)}
                  className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30 flex items-center gap-1.5 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>Attach Official Certificate File</span>
                </button>

                <button
                  onClick={() => setActiveCertificate(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

