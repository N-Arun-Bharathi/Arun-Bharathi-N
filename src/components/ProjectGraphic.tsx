"use client";

import React from "react";
import { Music, Play, SkipForward, Disc3, BarChart3, TrendingUp, Share2, BookOpen, Globe2, Trophy, Flame, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectGraphicProps {
  type: "music-app" | "myna-ai" | "vajiram-ravi" | "fast-track";
  title?: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ type }) => {
  switch (type) {
    case "music-app":
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-violet-950/40 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5 select-none">
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />
          {/* Top Mock Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300">
                <Music className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-200">Aruvi Play Mobile</div>
                <div className="text-[9px] text-violet-300/80">Local Player · Offline & Sync</div>
              </div>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Active Audio
            </span>
          </div>

          {/* Center Graphic */}
          <div className="flex items-center gap-3 my-auto z-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-950/50 border border-white/10 shrink-0">
              <Disc3 className="w-7 h-7 text-white animate-spin" style={{ animationDuration: "8s" }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white truncate">Atmospheric Synthetics</div>
              <div className="text-[10px] text-slate-400 truncate">React Native & Expo Player</div>
              {/* Audio visualizer bars */}
              <div className="flex items-end gap-1 mt-2 h-4">
                {[40, 75, 55, 95, 60, 85, 45, 90, 70, 60, 80, 50, 65].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-violet-400/70 rounded-full"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Controls Preview */}
          <div className="flex items-center justify-between text-slate-400 text-[10px] pt-2 border-t border-white/5 z-10">
            <span className="font-mono text-slate-400">02:45 / 04:12</span>
            <div className="flex items-center gap-2">
              <Play className="w-3 h-3 text-violet-300 fill-violet-300" />
              <SkipForward className="w-3 h-3" />
            </div>
            <span className="text-[10px] font-mono text-violet-300">Supabase Auth</span>
          </div>
        </div>
      );

    case "myna-ai":
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-blue-950/60 via-slate-900 to-cyan-950/40 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5 select-none">
          <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl pointer-events-none" />
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[11px] font-semibold text-slate-200">Myna AI Analytics</div>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              React Query Cached
            </span>
          </div>

          {/* Analytics metrics preview */}
          <div className="grid grid-cols-3 gap-2 my-auto z-10">
            <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2">
              <div className="text-[9px] text-slate-400">Instagram</div>
              <div className="text-sm font-bold text-white mt-0.5">248.5K</div>
              <div className="text-[8px] text-emerald-400 font-mono flex items-center gap-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> +14.2%
              </div>
            </div>
            <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2">
              <div className="text-[9px] text-slate-400">Facebook</div>
              <div className="text-sm font-bold text-cyan-400 mt-0.5">182.0K</div>
              <div className="text-[8px] text-cyan-300 font-mono">Sync OK</div>
            </div>
            <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2">
              <div className="text-[9px] text-slate-400">Google Ads</div>
              <div className="text-sm font-bold text-white mt-0.5">99.2%</div>
              <div className="text-[8px] text-slate-400 font-mono">API latency ↓</div>
            </div>
          </div>

          {/* Bottom Data Pipeline */}
          <div className="bg-slate-950/60 border border-white/5 rounded px-2 py-1 flex items-center justify-between text-[9px] font-mono text-slate-300 z-10">
            <span className="flex items-center gap-1"><Share2 className="w-3 h-3 text-cyan-400" /> Multi-Channel Ingestion Pipeline</span>
            <span className="text-emerald-400 font-semibold">200ms Cached</span>
          </div>
        </div>
      );

    case "vajiram-ravi":
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-purple-950/60 via-slate-900 to-indigo-950/40 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5 select-none">
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-slate-200">Vajiram & Ravi Platform</span>
            </div>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Strapi CMS · GraphQL
            </span>
          </div>

          {/* Course Module Preview */}
          <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2.5 space-y-2 my-auto z-10">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-semibold text-white">Next.js SSR Content Pipeline</span>
              <span className="text-purple-400 font-mono font-bold">100 SEO Score</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[95%] rounded-full" />
            </div>
            <div className="flex items-center gap-3 text-[9px] text-slate-400 pt-0.5">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> High-Traffic Pages</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> Reusable UI</span>
              <span className="flex items-center gap-1"><Globe2 className="w-2.5 h-2.5 text-indigo-400" /> Fast Indexing</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 z-10">
            <span>Material UI + Next.js SSR</span>
            <span className="text-purple-300 flex items-center gap-0.5">Explore <ArrowRight className="w-2.5 h-2.5" /></span>
          </div>
        </div>
      );

    case "fast-track":
      return (
        <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-teal-950/40 rounded-t-xl p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5 select-none font-mono">
          <div className="absolute left-1/2 -top-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-semibold text-slate-200">Fast Track 2 Win</span>
            </div>
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
              Azure Cloud
            </span>
          </div>

          {/* Live Racing Cards */}
          <div className="grid grid-cols-2 gap-2 my-auto z-10">
            <div className="bg-slate-950/70 border border-white/5 rounded-lg p-2">
              <div className="text-[9px] text-slate-400 uppercase">Live Race 04 · Derby</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-amber-300 font-bold">
                <Flame className="w-3 h-3 text-amber-400" /> Track Odds: 3.8x
              </div>
              <div className="text-[8px] text-emerald-400 mt-0.5">Real-Time Telemetry</div>
            </div>
            <div className="bg-slate-950/70 border border-emerald-500/30 rounded-lg p-2">
              <div className="text-[9px] text-emerald-300 uppercase font-bold">Blazor & Radzen</div>
              <div className="mt-1 text-xs text-white font-semibold">State Sync Active</div>
              <div className="text-[8px] text-slate-400 mt-0.5">Zero UI Refresh Delays</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-400 z-10">
            <span>REST API Integration</span>
            <span className="text-emerald-400 font-bold">Active Race Feed</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
