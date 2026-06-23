"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { UserCheck, Shield, Clock, BookOpen } from "lucide-react";

function useCountUp(target: number, duration = 1400, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startVal = Math.max(0, target - 1200);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(startVal + (target - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return value;
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const examsCount = useCountUp(10000, 1600, inView);

  const metrics = [
    {
      id: "exams",
      value: `+${examsCount.toLocaleString()}`,
      label: "Exams Conducted",
      desc: "Authorized high-stakes examinations successfully administered.",
      icon: BookOpen,
      color: "text-secondary",
      bgGlow: "rgba(116, 184, 0, 0.04)",
      borderHover: "hover:border-primary/20",
    },
    {
      id: "timezone",
      value: "GMT-4",
      label: "Same US Timezone",
      desc: "Zero communication delays. Real-time Slack, Teams & Scrum alignment.",
      icon: Clock,
      color: "text-secondary",
      bgGlow: "rgba(78, 126, 0, 0.04)",
      borderHover: "hover:border-secondary/20",
    },
    {
      id: "bilingual",
      value: "100%",
      label: "Bilingual Engineers",
      desc: "All developers possess advanced professional English proficiency.",
      icon: UserCheck,
      color: "text-secondary",
      bgGlow: "rgba(116, 184, 0, 0.04)",
      borderHover: "hover:border-primary/20",
    },
    {
      id: "environment",
      value: "Class A",
      label: "Testing Infrastructure",
      desc: "Premium air conditioning, silent booths, UPS backup systems.",
      icon: Shield,
      color: "text-secondary",
      bgGlow: "rgba(78, 126, 0, 0.04)",
      borderHover: "hover:border-secondary/20",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden bg-slate-50/40 border-y border-slate-100">
      <div className="absolute inset-0 bg-grid-slate-900/[0.01] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`p-5 md:p-6 rounded-2xl border border-slate-200/60 ${metric.borderHover} bg-white hover:bg-slate-50/40 hover:shadow-xs transition-all duration-300 relative group overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${metric.bgGlow} 0%, transparent 70%)`,
                  }}
                />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl bg-slate-100 ${metric.color}`}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase hidden sm:block">
                    Verified
                  </span>
                </div>

                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1 font-mono">
                  {metric.value}
                </p>
                <p className="text-xs md:text-sm font-semibold text-slate-800 mb-1.5">
                  {metric.label}
                </p>
                <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed hidden sm:block">
                  {metric.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
