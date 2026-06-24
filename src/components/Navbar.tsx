"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "http://localhost:3001";

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Certifications", href: "#certifications" },
    { name: "Academy", href: "#training" },
    { name: "Reservar Aula", href: bookingUrl, isExternal: true },
    { name: "Leadership", href: "#leadership" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/50 py-3.5 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <svg
              width="34"
              height="34"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-105 transition-transform duration-300 shrink-0"
            >
              <rect x="2" y="22" width="10" height="10" rx="2" fill="#10b981" />
              <rect x="13" y="11" width="10" height="10" rx="2" fill="#34d399" />
              <rect x="24" y="2" width="10" height="10" rx="2" fill="#10b981" className="animate-pulse" />
              <path d="M12 27H13M23 16H24" stroke="rgba(9,13,22,0.1)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="font-black text-xl tracking-tight text-slate-900">
                  <span className="text-primary">bit</span>
                  <span className="font-light text-slate-600">consulting</span>
                </span>
                <span className="text-[9px] font-mono text-secondary ml-1 font-bold">S.R.L.</span>
              </div>
              <span className="text-[9px] tracking-widest text-slate-500 font-mono -mt-0.5 uppercase hidden sm:block">
                We deliver high impact solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 flex items-center gap-1.5 group shadow-md shadow-primary/10 hover:shadow-primary/20"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
 
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full justify-between pt-24 pb-10 px-7">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl font-bold text-slate-900 hover:text-primary transition-colors py-3 border-b border-slate-100 last:border-0"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
 
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex flex-col gap-5"
              >
                <div className="flex flex-col gap-1.5 font-mono text-xs text-slate-500">
                  <span>Santa Cruz, Bolivia</span>
                  <span>info@bit-consulting.bo</span>
                  <span>+591 - 68928888</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary transition-all duration-300 min-h-[54px] flex items-center justify-center"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
