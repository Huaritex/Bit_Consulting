"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Leadership() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });

  const members = [
    {
      name: "Edwin Guarachi",
      role: "Chief Executive Officer",
      abbr: "CEO",
      bio: "Leads BIT Consulting's strategic vision, cultivating global client relationships and national certification frameworks.",
      initials: "EG",
      linkedin: "https://www.linkedin.com/in/edwin-guarachi-1aba4417",
    },
    {
      name: "Henry Guarachi",
      role: "Chief Technology Officer",
      abbr: "CTO",
      bio: "Oversees engineering operations, software architecture, Scrum agile development compliance, and cloud structures.",
      initials: "HG",
      linkedin: "https://www.linkedin.com/in/henry-guarachi-guzm%C3%A1n-aa12971b5",
    },
    {
      name: "David Ramer",
      role: "Chief Information Officer",
      abbr: "CIO",
      bio: "Directs internal infrastructure, certification center security audits, and redundant enterprise network compliance.",
      initials: "DR",
      linkedin: "https://www.linkedin.com/in/dramer",
    },
  ];

  return (
    <section id="leadership" ref={ref} className="py-20 md:py-24 relative overflow-hidden bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-mono tracking-widest text-secondary font-semibold uppercase mb-3">Executive Team</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Executive Leadership
          </h2>
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">
            Meet the engineers and managers driving technology adoption and secure examination operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between group glass-panel-hover"
            >
              <div>
                {/* Avatar */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10 border border-slate-200/50 flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <span className="text-base font-bold text-slate-700 tracking-wider group-hover:text-secondary transition-colors relative z-10">
                    {member.initials}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex items-start gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/60 text-[9px] font-mono text-slate-600 mt-1 shrink-0">
                    {member.abbr}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {member.role}
                </p>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">BIT_EXECUTIVE</span>
                <div className="flex gap-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-slate-100 hover:bg-primary/10 text-slate-500 hover:text-secondary transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="#contact"
                    className="p-2.5 rounded-lg bg-slate-100 hover:bg-secondary/10 text-slate-500 hover:text-secondary transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
