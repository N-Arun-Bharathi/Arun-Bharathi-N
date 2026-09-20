"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Download, Terminal, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Dots & Radial Spotlight */}
      <div className="absolute inset-0 bg-dots-modern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Avatar & Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          {/* Profile Photo with Minimalist Ring */}
          <div className="relative mb-5 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#282828] bg-[#181818] shadow-2xl">
              <Image
                src={siteConfig.avatar}
                alt={siteConfig.name}
                width={112}
                height={112}
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition duration-300"
                priority
              />
            </div>
          </div>

          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1e1e] border border-white/10 backdrop-blur-md text-xs text-zinc-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-zinc-200">Available for Opportunities</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400 font-mono text-[11px] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-400" /> {siteConfig.location}
            </span>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            {siteConfig.name}
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500 bg-clip-text text-transparent">
            {siteConfig.role}
          </div>
        </motion.div>

        {/* Main & Supporting Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto space-y-3"
        >
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            {siteConfig.headline}
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto font-normal">
            {siteConfig.subheadline}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="group px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/5 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-lg bg-[#1e1e1e] hover:bg-[#282828] border border-white/10 text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
          </button>

          <a
            href={siteConfig.resume.url}
            download={siteConfig.resume.filename}
            className="px-4 py-3 rounded-lg bg-[#1e1e1e]/80 hover:bg-[#282828] border border-white/10 text-zinc-300 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </motion.div>

        {/* Tech Stack Subtitle Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400"
        >
          <Terminal className="w-3.5 h-3.5 text-sky-400" />
          <span>{siteConfig.techStackLine}</span>
        </motion.div>
      </div>
    </section>
  );
};
