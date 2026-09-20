"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Mail, Linkedin, Github, FileDown, Check, Copy, ArrowUpRight, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.socials.displayPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          [ 06 ] GET IN TOUCH
        </span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something
          </h2>

          <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            <p>
              Have an idea, project or product that you&apos;d like to build?
            </p>
            <p className="text-zinc-400">
              I&apos;m open to discussing full-stack engineering roles, frontend architecture, consulting, and technical collaborations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pt-1">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{siteConfig.location}</span>
          </div>

          {/* Contact Direct Cards */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-4 py-3.5 rounded-xl bg-[#1e1e1e] hover:bg-[#282828] border border-white/10 text-zinc-200 text-sm font-medium flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Copied email!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs text-zinc-300 truncate">{siteConfig.socials.email}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleCopyPhone}
              className="px-4 py-3.5 rounded-xl bg-[#1e1e1e] hover:bg-[#282828] border border-white/10 text-zinc-200 text-sm font-medium flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
              aria-label="Copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Copied phone!</span>
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs text-zinc-300">{siteConfig.socials.displayPhone}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Connect Links & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-[#181818]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Direct Channels & Profile
            </h3>

            {/* LinkedIn */}
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-xl bg-[#1e1e1e]/60 hover:bg-[#252525] border border-white/[0.06] hover:border-white/20 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#222222] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[11px] text-zinc-400">Professional Network</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub */}
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-xl bg-[#1e1e1e]/60 hover:bg-[#252525] border border-white/[0.06] hover:border-white/20 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#222222] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                    GitHub
                  </div>
                  <div className="text-[11px] text-zinc-400">@{siteConfig.socials.githubUsername}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Resume Download */}
            <a
              href={siteConfig.resume.url}
              download={siteConfig.resume.filename}
              className="group p-3.5 rounded-xl bg-[#1e1e1e]/90 hover:bg-[#282828] border border-white/15 hover:border-white/30 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-bold">
                  <FileDown className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                    Download Resume
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">Official PDF Document</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
