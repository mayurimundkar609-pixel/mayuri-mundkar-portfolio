import React from 'react';
import { MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 left-6 z-40">
      <a
        href={profileData.socials.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/50"
        title="Chat with Mayuri on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
