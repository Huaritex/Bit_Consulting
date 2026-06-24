import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://bit-consulting-reservas--bitconsulting-4e25e.us-east4.hosted.app/";

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 relative overflow-hidden">
      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-100">
        
        {/* Brand Column (5 Cols) */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 group mb-4">
              <div className="flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="22" width="10" height="10" rx="2" fill="#10b981" />
                  <rect x="13" y="11" width="10" height="10" rx="2" fill="#34d399" />
                  <rect x="24" y="2" width="10" height="10" rx="2" fill="#10b981" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="font-black text-lg tracking-tight text-slate-900">
                  <span className="text-primary">bit</span>
                  <span className="font-light text-slate-600">consulting</span>
                </span>
                <span className="text-[8px] font-mono text-secondary ml-1 font-bold">S.R.L.</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Delivering secure, scalable nearshore engineering services to North American businesses and hosting global high-stakes IT certifications in Bolivia.
            </p>
          </div>
          
          <div className="mt-6">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
              Timezone Sync
            </span>
            <span className="text-xs font-semibold text-slate-700 mt-1 inline-block">
              GMT-4 Bolivia (EST / AST Matching)
            </span>
          </div>
        </div>

        {/* Links Column (3 Cols) */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">
            Operations
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600">
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Staff Augmentation
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Agile Engineering
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-primary transition-colors">
                Official Certification Center
              </a>
            </li>
            <li>
              <a href="#training" className="hover:text-primary transition-colors">
                Corporate Training & Labs
              </a>
            </li>
            <li>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Reservas de Aulas
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Coordinates Column (4 Cols) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-2">
            Get in Touch
          </h4>
          
          <div className="flex gap-3 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span className="leading-snug">
              Calle Los Tiluchis #2420, Santa Cruz de la Sierra, Bolivia.
            </span>
          </div>

          <div className="flex gap-3 text-xs text-slate-600 items-center">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span>+591 - 68928888</span>
          </div>

          <div className="flex gap-3 text-xs text-slate-600 items-center">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span>info@bit-consulting.bo</span>
          </div>
        </div>

      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
        <div>
          &copy; {currentYear} BIT Consulting S.R.L. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Stitch MCP Pipeline</a>
        </div>
      </div>
    </footer>
  );
}
