"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappUrl =
    "https://wa.me/59168928888?text=Hello%20BIT%20Consulting,%20I%20would%20like%20to%20schedule%20an%20exam.";

  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-cta flex items-center gap-2.5 px-5 py-4 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs tracking-wider shadow-lg shadow-emerald-500/30 active:scale-95 transition-transform duration-150 border border-emerald-400/30 min-h-[52px]"
        aria-label="Schedule exam via WhatsApp"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>Schedule Exam</span>
      </a>
    </div>
  );
}
