"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Github, ExternalLink, GitBranch, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const GithubSection: React.FC = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-[#181818]/95 backdrop-blur-2xl border border-white/[0.08] shadow-2xl relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] border border-white/10 text-xs font-mono text-zinc-300">
              <Github className="w-3.5 h-3.5" />
              <span>github.com/{siteConfig.socials.githubUsername}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Open Source & Code
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              Explore my repositories, open source contributions, and engineering experiments on GitHub.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" /> Public Repositories & Utilities
              </span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-zinc-400" /> Production Architecture
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Arun Bharathi N on GitHub"
              className="px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98]"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
