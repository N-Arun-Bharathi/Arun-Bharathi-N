"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Clock, Atom, Globe2, Layers } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Clock,
    value: `${siteConfig.experienceYears}`,
    label: "Years Experience",
    subtext: "Professional Software Engineering",
  },
  {
    icon: Atom,
    value: "React.js",
    label: "Frontend Architecture",
    subtext: "Reusable Systems & Next.js",
  },
  {
    icon: Globe2,
    value: "NestJS",
    label: "Backend & APIs",
    subtext: "REST, GraphQL & PostgreSQL",
  },
  {
    icon: Layers,
    value: "+35%",
    label: "Speed Optimization",
    subtext: "Page Load & Rendering Boost",
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16 z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-[#181818]/90 border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 shadow-xl group backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors font-mono">
                  {stat.value}
                </span>
                <div className="p-2 rounded-lg bg-[#222222] border border-white/[0.06] text-zinc-400 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5 leading-tight">
                {stat.subtext}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
