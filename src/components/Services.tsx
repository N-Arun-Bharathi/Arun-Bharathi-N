"use client";

import React from "react";
import { services } from "@/data/services";
import { Globe, Layers, Palette, Server, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  globe: Globe,
  layers: Layers,
  palette: Palette,
  server: Server,
  smartphone: Smartphone,
  sparkles: Sparkles,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
          [ 05 ] SERVICES
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
        What I Build
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mb-12 font-normal">
        Delivering end-to-end engineering capabilities across modern web, mobile, and full-stack ecosystems.
      </p>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, idx) => {
          const Icon = iconMap[service.iconName] || Globe;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="p-6 rounded-2xl bg-[#181818]/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#222222] border border-white/[0.08] flex items-center justify-center text-zinc-300 mb-5 group-hover:text-white group-hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-zinc-200 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                {service.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
