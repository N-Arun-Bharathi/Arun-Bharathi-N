import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { GithubSection } from "@/components/Github";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#f5f5f5] selection:bg-sky-500/30 selection:text-white relative">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
