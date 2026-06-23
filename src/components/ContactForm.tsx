"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useActionState } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions";
import { Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-24 relative overflow-hidden bg-slate-50/40 border-t border-slate-100"
    >
      <div className="absolute inset-0 bg-grid-slate-900/[0.01] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <p className="text-xs font-mono tracking-widest text-secondary font-semibold uppercase mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-5">
                Let{"'"}s Build Something Engineered to Last
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
                Whether you need a dedicated nearshore agile engineering team or want to organize
                high-stakes team certifications, we have the facility and experts ready.
              </p>

              {/* Office Details */}
              <div className="space-y-5">
                {[
                  {
                    code: "LOC",
                    label: "Headquarters",
                    value: "Calle Los Tiluchis #2420,\nSanta Cruz de la Sierra, Bolivia.",
                    multiline: true,
                  },
                  {
                    code: "TEL",
                    label: "Direct Phone",
                    value: "+591 - 68928888",
                    multiline: false,
                  },
                  {
                    code: "NET",
                    label: "General Inquiry",
                    value: "info@bit-consulting.bo",
                    multiline: false,
                  },
                ].map((item) => (
                  <div key={item.code} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/60 flex items-center justify-center text-secondary shrink-0">
                      <span className="text-[10px] font-mono font-bold">{item.code}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-700 mt-1 leading-snug whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-7 md:p-10 rounded-3xl border border-slate-250 shadow-2xl relative">
              <div className="mb-7">
                <h3 className="text-xl font-bold text-slate-900">Inquiry Form</h3>
                <p className="text-xs text-slate-500 mt-1">We&apos;ll get back to you within one business day.</p>
              </div>

              {/* Status Banner */}
              {state.success && (
                <div className="mb-6 p-4 rounded-xl border border-secondary/20 bg-secondary/5 text-secondary text-xs flex gap-3 items-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="leading-snug">{state.message}</p>
                </div>
              )}
              {!state.success && state.message && (
                <div className="mb-6 p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-600 text-xs flex gap-3 items-center">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <p className="leading-snug">{state.message}</p>
                </div>
              )}

              <form
                action={formAction}
                toolname="submit-contact-form"
                tooldescription="Submit contact information, interest, and message for BIT Consulting S.R.L."
                className="space-y-5"
              >
                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    disabled={isPending}
                    className="peer block w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 focus:border-primary/50 rounded-xl text-sm text-slate-800 placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 min-h-[56px]"
                    toolparamdescription="Full name of the contact person"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-4 text-xs text-slate-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-secondary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
                  >
                    Your Name
                  </label>
                  {state.errors?.name && (
                    <p className="text-[11px] text-rose-600 mt-1 font-mono">{state.errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    disabled={isPending}
                    className="peer block w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 focus:border-primary/50 rounded-xl text-sm text-slate-800 placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 min-h-[56px]"
                    toolparamdescription="Corporate email address for response correspondence"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-4 text-xs text-slate-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-secondary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
                  >
                    Corporate Email
                  </label>
                  {state.errors?.email && (
                    <p className="text-[11px] text-rose-600 mt-1 font-mono">{state.errors.email}</p>
                  )}
                </div>

                {/* Interest */}
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    required
                    disabled={isPending}
                    defaultValue="outsourcing"
                    className="block w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-primary/50 rounded-xl text-sm text-slate-700 focus:outline-none focus:bg-white transition-all duration-300 min-h-[52px]"
                    toolparamdescription="Primary operational requirement interest category"
                  >
                    <option value="outsourcing" className="bg-white text-slate-800">Nearshore Software Outsourcing (US/Canada)</option>
                    <option value="certification" className="bg-white text-slate-800">Schedule IT Certification Exam Center</option>
                    <option value="training" className="bg-white text-slate-800">Corporate Academy Training & Room Rentals</option>
                    <option value="other" className="bg-white text-slate-800">Other Consultation / Business Inquiry</option>
                  </select>
                  {state.errors?.interest && (
                    <p className="text-[11px] text-rose-600 mt-1 font-mono">{state.errors.interest}</p>
                  )}
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder=" "
                    disabled={isPending}
                    className="peer block w-full px-4 pt-6 pb-2 bg-slate-50 border border-slate-200 focus:border-primary/50 rounded-xl text-sm text-slate-800 placeholder-transparent focus:outline-none focus:bg-white transition-all duration-300 resize-none"
                    toolparamdescription="Detailed description of client project requirement or exam date inquiries"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-xs text-slate-500 pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-2 peer-focus:text-secondary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
                  >
                    Detailed Requirements
                  </label>
                  {state.errors?.message && (
                    <p className="text-[11px] text-rose-600 mt-1 font-mono">{state.errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl text-sm font-semibold tracking-wider text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 min-h-[54px] active:scale-[0.98] shadow-md shadow-primary/10"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Project Details
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
