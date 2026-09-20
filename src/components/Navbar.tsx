"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Github, FileDown, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = siteConfig.navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label={`${siteConfig.name} - Home`}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-md group-hover:border-blue-500/50 transition-colors flex items-center justify-center bg-[#121212]">
            <Image
              src={`${siteConfig.basePath}/favicon-32x32.png`}
              alt={siteConfig.name}
              width={32}
              height={32}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
              {siteConfig.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-[#181818]/90 p-1 rounded-full border border-white/[0.08] backdrop-blur-md">
          {siteConfig.navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-[#1e1e1e] hover:bg-[#252525] border border-white/10 rounded-lg transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={siteConfig.resume.url}
            download={siteConfig.resume.filename}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteConfig.resume.url}
            download={siteConfig.resume.filename}
            aria-label="Download Resume"
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-black bg-white rounded-md"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="text-[11px]">CV</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-300 hover:text-white bg-[#1e1e1e] border border-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#121212]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-5 space-y-4 animate-fade-in z-50">
          <div className="flex flex-col space-y-1">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-zinc-500 text-xs font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-zinc-200 bg-[#1e1e1e] border border-white/10 rounded-lg"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.resume.url}
              download={siteConfig.resume.filename}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-black bg-white rounded-lg shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
