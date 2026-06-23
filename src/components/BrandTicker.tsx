"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Shield, Network, GraduationCap, Database, Award, CheckCircle, Code, Workflow } from "lucide-react";

export default function BrandTicker() {
  const partners = [
    { name: "Pearson VUE", icon: Award, desc: "Authorized Center" },
    { name: "Certiport", icon: CheckCircle, desc: "Academic Certs" },
    { name: "Microsoft", icon: Cpu, desc: "Official Learning" },
    { name: "Cisco", icon: Network, desc: "Networking Lab" },
    { name: "AWS Partner", icon: Server, desc: "Cloud Operations" },
    { name: "PSI Online", icon: Shield, desc: "High-Stakes Exams" },
    { name: "Kryterion", icon: Database, desc: "Global Testing" },
    { name: "Meazure Learning", icon: GraduationCap, desc: "Professional Certs" },
    { name: "ACT", icon: Code, desc: "Work Readiness" },
    { name: "PAN Testing", icon: Workflow, desc: "Talent Assessment" },
  ];

  const tickerItems = [...partners, ...partners];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full bg-slate-50/50 border-y border-slate-200/50 py-7 overflow-hidden relative"
    >
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-3">
        <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase text-center md:text-left">
          Global Trust & Certification Partnerships
        </p>
      </div>

      <div className="flex w-full overflow-hidden mt-3">
        <div className="animate-ticker flex gap-4 items-center">
          {tickerItems.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-primary/30 hover:bg-slate-50/50 hover:shadow-xs transition-all duration-300 select-none group shrink-0"
              >
                <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold tracking-wide text-slate-700 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 group-hover:text-primary transition-colors uppercase whitespace-nowrap">
                    {partner.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
