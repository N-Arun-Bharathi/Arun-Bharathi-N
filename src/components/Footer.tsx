"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#121212] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & Tech */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="text-sm font-semibold text-zinc-200">
            © 2026 {siteConfig.name}
          </div>
          <div className="text-xs text-zinc-400 font-mono">
            Full Stack Developer · Built with Next.js & Tailwind CSS
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1e1e1e] border border-transparent hover:border-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1e1e1e] border border-transparent hover:border-white/10 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${siteConfig.socials.email}`}
            aria-label="Email"
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1e1e1e] border border-transparent hover:border-white/10 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-mono transition-colors p-2 rounded-lg hover:bg-[#1e1e1e] border border-transparent hover:border-white/10"
          aria-label="Scroll to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
