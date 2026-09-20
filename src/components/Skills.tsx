"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import { Layout, Server, Database, Smartphone, CheckCircle, Cloud, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  smartphone: Smartphone,
  "check-circle": CheckCircle,
  cloud: Cloud,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          [ 03 ] EXPERTISE
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
        Technical Skills & Tools
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mb-12 font-normal">
        A structured breakdown of core frameworks, backend architectures, databases and cloud infrastructure.
      </p>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, idx) => {
          const Icon = iconMap[cat.iconName] || Terminal;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-6 rounded-2xl bg-[#181818]/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#222222] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-5 font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-[#222222] hover:bg-[#2a2a2a] hover:text-white border border-white/[0.06] rounded-md transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
