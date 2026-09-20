export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "globe" | "layers" | "palette" | "server" | "smartphone" | "sparkles";
  highlights: string[];
}

export const services: ServiceItem[] = [
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Modern, responsive web applications using React, Next.js and TypeScript.",
    iconName: "globe",
    highlights: ["Next.js App Router", "TypeScript Type Safety", "Performance & SEO Optimized"],
  },
  {
    id: "full-stack-applications",
    title: "Full-Stack Applications",
    description: "Complete products with frontend, backend APIs, authentication and database integration.",
    iconName: "layers",
    highlights: ["End-to-end Architecture", "Auth & RBAC Security", "Database & ORM Integration"],
  },
  {
    id: "ui-development",
    title: "UI Development",
    description: "Clean, responsive and reusable interfaces built with modern component libraries and design systems.",
    iconName: "palette",
    highlights: ["Design Systems & Tokens", "Tailwind & HeroUI / MUI", "Accessible & Polished UX"],
  },
  {
    id: "backend-apis",
    title: "Backend & APIs",
    description: "Scalable REST APIs and backend services using Node.js, Express and NestJS.",
    iconName: "server",
    highlights: ["RESTful Architecture", "JWT & Middleware Security", "PostgreSQL & MongoDB"],
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Cross-platform mobile applications using React Native and Expo.",
    iconName: "smartphone",
    highlights: ["React Native & Expo", "Offline & Local Storage", "Native Navigation & Audio"],
  },
  {
    id: "ai-powered-applications",
    title: "AI-Powered Applications",
    description: "Modern applications enhanced with AI-powered features, automation and intelligent workflows.",
    iconName: "sparkles",
    highlights: ["AI API Integrations", "Intelligent Workflows", "Structured Data Pipelines"],
  },
];
