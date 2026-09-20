"use client";

import React from "react";
import { Project } from "@/data/projects";
import { ProjectGraphic } from "@/components/ProjectGraphic";
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group rounded-2xl bg-[#181818]/90 backdrop-blur-xl border border-white/[0.08] hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between overflow-hidden"
    >
      {/* Visual Top Preview Graphic */}
      <div className="overflow-hidden border-b border-white/[0.06]">
        <ProjectGraphic type={project.previewType} title={project.title} />
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase text-zinc-300 bg-[#222222] border border-white/10 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-mono text-zinc-400">
                ★ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2.5 font-normal">
            {project.description}
          </p>

          {/* Key Features List if present */}
          {project.features && project.features.length > 0 && (
            <div className="mt-4 pt-3 border-t border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Engineering Highlights:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.features.slice(0, 4).map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                    <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tech Stack & Links */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono text-zinc-300 bg-[#222222] border border-white/[0.06] rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-[#222222] hover:bg-[#2a2a2a] border border-white/10 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-zinc-400 py-1.5">
                Production System
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
