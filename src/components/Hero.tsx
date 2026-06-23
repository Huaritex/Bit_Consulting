"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Globe2, Award, Code2, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Background glows */}
      <div className="absolute inset-0 radial-highlight pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200/50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* Left: Text Column */}
          <div className="flex flex-col text-center lg:text-left">

            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-secondary text-xs font-semibold font-mono mb-6 self-center lg:self-start backdrop-blur-sm"
            >
              <Globe2 className="w-3.5 h-3.5 shrink-0" />
              <span>Nearshore Outsourcing & Global Certs</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5"
            >
              Nearshore Software Engineering &{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Elite IT Certification Center
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-base text-slate-600 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Based in Santa Cruz, Bolivia. Delivering world-class agile engineering
              to North America in matching timezones, and authorized global testing
              facilities locally.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#services"
                className="px-7 py-4 rounded-xl text-sm font-semibold tracking-wide bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/25 active:scale-[0.98] min-h-[52px]"
              >
                Explore Tech Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#certifications"
                className="px-7 py-4 rounded-xl text-sm font-semibold tracking-wide border border-slate-200 bg-white/50 hover:bg-slate-50 hover:border-slate-350 text-slate-800 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] backdrop-blur-sm min-h-[52px] shadow-sm"
              >
                Book an Exam Center
                <Calendar className="w-4 h-4 text-primary" />
              </a>
            </motion.div>

            {/* Timezone / Certs info */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5 border-t border-slate-200/60 pt-8"
            >
              <div className="text-left">
                <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  Nearshore Sync
                </p>
                <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-ping" />
                  EST / AST Timezone Matching
                </p>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-left">
                <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  Authorized Space
                </p>
                <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5 mt-1">
                  <Award className="w-4 h-4 text-primary" /> Pearson VUE & PSI Facility
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative w-full items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="w-full max-w-[480px] p-6 rounded-3xl border border-slate-200 bg-white/90 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-slate-900/[0.015] pointer-events-none" />

              {/* Top bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">BIT_INFRA_DASHBOARD v2.4</span>
              </div>

              {/* Dashboard grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-primary/30 hover:bg-white transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-primary/10 text-secondary font-bold">AGILE</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800">Staff Augmentation</p>
                  <p className="text-[10px] text-slate-500 mt-1">SCRUM methodologies with bilingual tech leads.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-secondary/30 hover:bg-white transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-secondary/10 text-secondary font-bold">LABS</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800">Authorized Testing</p>
                  <p className="text-[10px] text-slate-500 mt-1">High-stakes certification exams facility.</p>
                </div>

                {/* Code block */}
                <div className="col-span-2 p-4 rounded-xl border border-slate-200 bg-slate-50/80 font-mono text-[10px] text-slate-700">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/50">
                    <span className="text-slate-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      bolivia-us-nearshore.ts
                    </span>
                    <span className="text-slate-400">UTF-8</span>
                  </div>
                  <div className="space-y-1 text-slate-600 leading-relaxed">
                    <p><span className="text-secondary font-bold">const</span> team = <span className="text-secondary">new</span> <span className="text-primary font-semibold">NearshoreTeam</span>();</p>
                    <p>team.setTimezone(<span className="text-amber-600">{"\"GMT-4\""}</span>); <span className="text-slate-400">{"// US Sync"}</span></p>
                    <p>team.setStack([<span className="text-amber-600">{"\"React\""}</span>, <span className="text-amber-600">{"\"Java\""}</span>, <span className="text-amber-600">{"\"AWS\""}</span>]);</p>
                    <p>await team.deploy(<span className="text-secondary font-bold">{"\"Sprint 1\""}</span>);</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tr from-primary to-secondary rounded-full blur-[30px] opacity-20 pointer-events-none group-hover:scale-150 transition-all duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Mobile: Compact stat grid (hidden on lg+) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-2 gap-3 lg:hidden"
        >
          {[
            { label: "+10,000", sub: "Exams Conducted" },
            { label: "100%", sub: "Bilingual Engineers" },
            { label: "GMT-4", sub: "US Timezone Sync" },
            { label: "Class A", sub: "Testing Infrastructure" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl border border-slate-200 bg-white/70 shadow-xs text-center"
            >
              <p className="text-lg font-black text-slate-900 font-mono tracking-tight">{stat.label}</p>
              <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-wide">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
