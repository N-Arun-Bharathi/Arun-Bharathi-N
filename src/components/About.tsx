"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Code, Server, Database, GraduationCap, MapPin, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          [ 01 ] OVERVIEW
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-12">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Narrative & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1e1e] border border-white/10 text-xs font-mono text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{siteConfig.location}</span>
          </div>

          <p className="text-zinc-100 font-medium text-base sm:text-lg leading-relaxed">
            {siteConfig.about.p1}
          </p>

          <p>
            {siteConfig.about.p2}
          </p>

          <p>
            {siteConfig.about.p3}
          </p>

          <p className="text-zinc-300">
            {siteConfig.about.p4}
          </p>

          {/* Performance Callouts */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-[#181818]/90 border border-white/[0.08] flex items-start gap-3 hover:border-white/20 transition-colors">
              <div className="p-2 rounded-lg bg-[#222222] text-emerald-400 mt-0.5 border border-white/5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">+35% Speed Boost</h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">Optimized rendering, caching & bundle sizes</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#181818]/90 border border-white/[0.08] flex items-start gap-3 hover:border-white/20 transition-colors">
              <div className="p-2 rounded-lg bg-[#222222] text-sky-400 mt-0.5 border border-white/5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">-25% API Redundancy</h3>
                <p className="text-[11px] text-zinc-400 mt-0.5">Streamlined query caching with React Query</p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-4 rounded-xl bg-[#181818]/90 border border-white/[0.08] flex items-start gap-3.5 hover:border-white/20 transition-colors">
            <div className="p-2.5 rounded-lg bg-[#222222] text-zinc-300 shrink-0 border border-white/5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                Academic Background
              </div>
              <h4 className="text-sm font-bold text-white mt-0.5">
                {siteConfig.education.degree}
              </h4>
              <div className="text-xs text-zinc-400 mt-0.5">
                {siteConfig.education.institution}, {siteConfig.education.location} · {siteConfig.education.year}
              </div>
              <div className="text-[11px] font-mono text-zinc-300 mt-1">
                CGPA: <span className="font-semibold text-white">{siteConfig.education.cgpa}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Technical Stack Side Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="p-6 rounded-2xl bg-[#181818]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl relative overflow-hidden space-y-6">
            {/* Top header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="text-xs font-mono text-zinc-400 ml-2">stack.config.ts</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-300 bg-[#242424] px-2 py-0.5 rounded border border-white/10">
                Core Stack
              </span>
            </div>

            {/* Frontend */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                <Code className="w-3.5 h-3.5 text-sky-400" />
                <span>Frontend & UI</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Next.js", "TypeScript", "React Query", "Tailwind CSS", "Material UI", "HeroUI"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-[#222222] hover:bg-[#2a2a2a] border border-white/[0.08] rounded-md transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                <Server className="w-3.5 h-3.5 text-indigo-400" />
                <span>Backend & APIs</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["NestJS", "Node.js", "Express.js", "GraphQL", "REST APIs", "Swagger"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-[#222222] hover:bg-[#2a2a2a] border border-white/[0.08] rounded-md transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Databases & Cloud</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "MongoDB", "Prisma ORM", "Strapi CMS", "Azure", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-[#222222] hover:bg-[#2a2a2a] border border-white/[0.08] rounded-md transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
