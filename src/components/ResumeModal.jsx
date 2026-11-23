import React, { useRef } from 'react';
import { X, Printer, Download, ExternalLink, Mail, Linkedin, Github, Award, CheckCircle2, FileText, Upload } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { certificatesData } from '../data/certificates';

export default function ResumeModal({ onClose }) {
  const resumeRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadHtml = () => {
    const resumeElement = resumeRef.current;
    if (!resumeElement) return;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mayuri Mundkar - Engineering Resume</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #1e293b; max-width: 800px; margin: 40px auto; padding: 20px; }
    h1 { margin-bottom: 4px; font-size: 26px; color: #0f172a; }
    .subtitle { font-size: 14px; font-weight: 600; color: #2563eb; margin-bottom: 12px; }
    .contact { font-size: 12px; color: #475569; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0; }
    .section-title { font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 20px; margin-bottom: 10px; }
    .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; margin-top: 8px; }
    .item-sub { font-size: 12px; color: #64748b; font-style: italic; margin-bottom: 4px; }
    ul { margin: 4px 0 12px 18px; padding: 0; font-size: 12px; color: #334155; }
    li { margin-bottom: 3px; }
    .skills-grid { font-size: 12px; display: grid; grid-template-columns: 140px 1fr; row-gap: 6px; }
    .skill-cat { font-weight: 600; color: #1e293b; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 600; }
  </style>
</head>
<body>
  ${resumeElement.innerHTML}
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Mayuri_Mundkar_Resume.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-3.5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-semibold">Official Engineering Resume • Mayuri Mundkar</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-colors"
              title="Print or Save as PDF using browser dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              title="Download standalone HTML resume file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download HTML</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors ml-2"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto bg-white font-sans text-slate-800 leading-normal" ref={resumeRef}>
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-5 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  {profileData.name}
                </h1>
                <p className="text-base font-semibold text-blue-700 mt-0.5">
                  Aspiring AI Software Engineer | B.Tech Computer Engineering Student
                </p>
              </div>

              <div className="text-xs text-slate-600 text-left sm:text-right space-y-1">
                <div>Talegaon Dabhade, Pune, MH, India</div>
                <div>Phone / WhatsApp: <span className="font-semibold text-slate-800">+91 83298 10391</span></div>
                <div><a href={`mailto:${profileData.socials.email}`} className="text-blue-600 font-medium">{profileData.socials.email}</a></div>
                <div><a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/mayuri-mundkar-119822396</a></div>
                <div><a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-blue-600">github.com/mayurimundkar609-pixel</a></div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Second-year Computer Engineering undergraduate at Dr. D. Y. Patil College of Engineering and Innovation with a verified CGPA of <strong>8.16 / 10.00</strong>. Solid foundation in C and C++ programming, object-oriented concepts, and core data structures. Experienced in practical IoT prototyping (ESP32, sensors, web telemetry) and actively expanding into Python scripting and AI/ML algorithms. Dedicated to building impactful, authentic technology solutions that solve real-world problems.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-900">
                  <span>Dr. D. Y. Patil College of Engineering and Innovation (DYPCOEI)</span>
                  <span>2023 – 2027 (Expected)</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600 italic">
                  <span>Bachelor of Technology (B.Tech) — Computer Engineering (Second Year)</span>
                  <span className="font-semibold text-blue-800 not-italic">CGPA: 8.16 / 10.00</span>
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Varale Campus, Talegaon Dabhade, Pune, Maharashtra | SPPU Affiliated / Autonomous
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  • Coursework: Data Structures & Algorithms, C/C++ Programming, Computer Organization, Discrete Mathematics, IoT Fundamentals.
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills & Competencies
            </h2>
            <div className="text-xs space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-900">Programming Languages:</span>
                <span className="sm:col-span-9 text-slate-700">C, C++ (OOP & STL), Python (<span className="text-amber-700 font-semibold">Beginner</span>)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-900">Computer Science & DSA:</span>
                <span className="sm:col-span-9 text-slate-700">Arrays and Matrices, Stack and Queue, Singly Linked List, Doubly Linked List, Algorithmic Problem Solving, Programming Fundamentals</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-900">Hardware & IoT:</span>
                <span className="sm:col-span-9 text-slate-700">ESP32 / NodeMCU Microcontroller Concepts, Ultrasonic Sensors, TDS Sensors, Turbidity Sensors, Telemetry Interfacing</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-semibold text-slate-900">Technology Interests:</span>
                <span className="sm:col-span-9 text-slate-700">Artificial Intelligence, Machine Learning (Foundational Study), Software Development, Web Development, Embedded Systems</span>
              </div>
            </div>
          </div>

          {/* Academic & Technical Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Selected Technical Projects
            </h2>
            <div className="space-y-3 text-xs">
              
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>IoT-Based Plastic Waste Management System for Smart City Application</span>
                  <a href="https://io-t-l8e9.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 underline">io-t-l8e9.vercel.app</a>
                </div>
                <div className="text-slate-600 italic">Technologies: IoT, ESP32 / NodeMCU Concepts, Ultrasonic Sensors, Web Technologies</div>
                <ul className="list-disc ml-5 mt-1 text-slate-700 space-y-0.5">
                  <li>Engineered a smart bin fill-level monitoring system calculating waste levels in real-time across empty, half-full, and full states.</li>
                  <li>Integrated full-bin notifications and designed a centralized smart city waste management dashboard.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Water Pollution Alarm System</span>
                  <span className="text-slate-500 italic">Hardware Prototype</span>
                </div>
                <div className="text-slate-600 italic">Technologies: ESP32 Microcontroller, TDS Sensor, Turbidity Sensor, Electronics, Alert Circuitry</div>
                <ul className="list-disc ml-5 mt-1 text-slate-700 space-y-0.5">
                  <li>Developed continuous water monitoring hardware to sample Total Dissolved Solids (TDS) and turbidity.</li>
                  <li>Configured threshold safety benchmarks to trigger real-time audio-visual alarms on hazardous contamination.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Traffic Management System (Academic Simulation)</span>
                  <span className="text-slate-500 italic">Algorithmic Modeling</span>
                </div>
                <div className="text-slate-600 italic">Technologies: C/C++, Queue Data Structures, Traffic Density Computation</div>
                <ul className="list-disc ml-5 mt-1 text-slate-700 space-y-0.5">
                  <li>Implemented algorithmic models assessing vehicle queue accumulation and congestion index across multi-lane junctions.</li>
                  <li>Simulated signal delay adjustments and clearance times based on variable traffic density metrics.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>FinWise AI – Intelligent Personal Finance Advisor & Wealth Dashboard</span>
                  <a href="https://github.com/mayurimundkar609-pixel/personal-finance-advisor-bot" target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub Repository</a>
                </div>
                <div className="text-slate-600 italic">Technologies: TypeScript, Autonomous Client-Side Engine, Expense Analytics</div>
                <ul className="list-disc ml-5 mt-1 text-slate-700 space-y-0.5">
                  <li>Open-source personal finance dashboard with 50/30/20 budgeting logic, expense analytics, and what-if financial scenario simulation.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Certifications & Training Tracks */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Verified Certifications & Technical Tracks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div>• <strong>C & C++ Programming Specialization</strong> — Academic & Coursework Track</div>
              <div>• <strong>Cisco Networking Fundamentals</strong> — Cisco Networking Academy</div>
              <div>• <strong>Emerging Technologies Skill Track</strong> — NASSCOM FutureSkills</div>
              <div>• <strong>Bajaj Engineering Skill Certification</strong> — Industry-Academia Initiative</div>
              <div>• <strong>Adobe Digital Creativity & Tools</strong> — Adobe Certified Program Track</div>
              <div>• <strong>Professional Development Track</strong> — LinkedIn Learning</div>
            </div>
          </div>

          {/* Authenticity Guarantee Note */}
          <div className="p-3 bg-slate-100 rounded-lg text-[11px] text-slate-600 border border-slate-200">
            <strong>Authenticity & Integrity Guarantee:</strong> All details recorded in this curriculum vitae represent verified coursework, academic credentials, and authentic projects completed by Mayuri Mundkar. Zero unverified employment or exaggerated proficiencies are stated.
          </div>

        </div>

        {/* Modal Bottom Banner */}
        <div className="p-4 bg-slate-100 border-t border-slate-300 flex items-center justify-between text-xs text-slate-600">
          <span>Need custom format? Use Print / Save PDF to export as standard A4 resume.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}

