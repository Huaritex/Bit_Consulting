"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, MonitorPlay, Users, ShieldAlert, Cpu, BookOpen, Key, CalendarCheck } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function BentoGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });

  return (
    <section id="services" ref={ref} className="py-20 md:py-24 relative overflow-hidden bg-slate-50/50 border-y border-slate-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-mono tracking-widest text-secondary font-semibold uppercase mb-3">Our Operations</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Modern Tech Solutions & Certified Competency
          </h2>
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">
            We operate at the intersection of engineering excellence and global professional credentials.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">

          {/* Pillar 1: Software Dev */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 glass-panel p-6 md:p-8 rounded-3xl flex flex-col justify-between group glass-panel-hover relative overflow-hidden"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-5">
                <div className="p-3 rounded-2xl bg-primary/10 text-secondary group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-secondary font-bold tracking-wider uppercase">Pillar 01</span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    Software Development & Nearshore Engineering
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-7">
                Your tech hub for dedicated Staff Augmentation and custom system development.
                Operating under rigorous Scrum agile methodologies, our 100% bilingual engineers
                sync directly with North American time zones.
              </p>

              {/* Stack grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Web Dev", tech: "Java · Python · PHP · .NET" },
                  { label: "UI/UX Design", tech: "Figma · Prototypes · Audit" },
                  { label: "SQA & Testing", tech: "Automated · Mobile · Manual" },
                  { label: "Cloud Systems", tech: "AWS · Azure Integration" },
                ].map((item) => (
                  <div key={item.label} className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-xs">
                    <p className="text-xs font-semibold text-slate-700">{item.label}</p>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono leading-snug">{item.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              <Cpu className="w-40 h-40 text-primary" />
            </div>
          </motion.div>

          {/* Pillar 2: Certification Center */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id="certifications"
            className="lg:row-span-2 glass-panel p-6 md:p-8 rounded-3xl flex flex-col justify-between group glass-panel-hover relative overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Key className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-secondary font-bold tracking-wider uppercase">Pillar 02</span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">Official Testing Center</h3>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Authorized high-stakes exam venue catering to international IT and professional
                  certification bodies. Built for concentration and absolute security.
                </p>

                <div className="space-y-4 my-6">
                  {[
                    {
                      title: "Extended Test Ready",
                      desc: "Perfected ventilation & seating for long-form exams (up to 5 hours).",
                    },
                    {
                      title: "Constant Vigilance",
                      desc: "Active monitoring & secure individual lockers for candidate compliance.",
                    },
                    {
                      title: "Redundant Connectivity",
                      desc: "Fiber optics with failover lines to ensure zero exam disruption.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/80 mt-2 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-slate-100">
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300 min-h-[48px] shadow-sm hover:shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Schedule Exam Date
                </a>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Corporate Academy */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id="training"
            className="lg:col-span-2 glass-panel p-6 md:p-8 rounded-3xl flex flex-col justify-between group glass-panel-hover relative overflow-hidden"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-5">
                <div className="p-3 rounded-2xl bg-primary/10 text-secondary group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-secondary font-bold tracking-wider uppercase">Pillar 03</span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    Corporate Academy & Lab Rentals
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-7">
                Empower your local teams with certified curricula. We distribute official courseware,
                practice exams, and interactive video libraries. Additionally, we lease premium
                training classrooms equipped with state-of-the-art workstations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: MonitorPlay, label: "Practice Labs & Videos" },
                  { icon: Users, label: "Classroom & PC Lease" },
                  { icon: ShieldAlert, label: "Official MS Courses" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-slate-100 bg-white shadow-xs min-h-[52px]">
                    <Icon className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-xs text-slate-700 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
