"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          [ 02 ] CAREER
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
        Professional Experience
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mb-12 font-normal">
        My engineering track record building scalable web interfaces, APIs and production systems.
      </p>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-zinc-700/60 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#121212] border-2 border-zinc-600 flex items-center justify-center text-zinc-300 shadow-xl group-hover:scale-110 group-hover:border-white transition-all">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181818]/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-2xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      Present
                    </span>
                  </div>
                  <div className="text-base font-semibold text-zinc-300 mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Key Quantitative Impact */}
              {exp.metrics && (
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-[#222222] border border-white/[0.06]">
                      <div className="text-base font-bold text-white font-mono">{m.value}</div>
                      <div className="text-[10px] text-zinc-400 leading-tight mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Responsibilities */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Engineering Contributions:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-normal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-2.5">
                <span className="text-xs font-mono text-zinc-400 block">
                  Technologies Utilized:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-[#222222] border border-white/[0.08] rounded-md hover:border-white/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
