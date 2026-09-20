export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  image?: string;
  previewType: "music-app" | "myna-ai" | "vajiram-ravi" | "fast-track";
  accentColor: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "aruvi-play",
    title: "Aruvi Play",
    category: "Mobile Application",
    description: "A modern local music application built with React Native and Expo, featuring local audio playback, playlists, queue management, search, shuffle, repeat and Supabase authentication.",
    technologies: ["React Native", "Expo", "Supabase", "JavaScript"],
    features: [
      "Local music playback engine",
      "Queue & playlist management",
      "Shuffle, repeat & audio seek",
      "Liked tracks & custom playlists",
      "Supabase cloud authentication",
      "Guest mode & shared listening rooms",
    ],
    previewType: "music-app",
    accentColor: "from-violet-600 to-indigo-600",
    github: "https://github.com/Arun-Bharathi-N",
    live: "",
    featured: true,
  },
  {
    id: "myna-ai",
    title: "Myna AI",
    category: "Analytics & Web Platform",
    description: "Developed a Next.js analytics dashboard unifying data from Instagram, Facebook, and Google services. Improved performance for large API responses using React Query caching and controlled request handling.",
    technologies: ["Next.js", "TypeScript", "React Query", "Tailwind CSS", "REST APIs"],
    features: [
      "Unified multi-platform social analytics",
      "React Query aggressive caching pipeline",
      "Optimized large payload responses",
      "Interactive time-series charts & metrics",
    ],
    previewType: "myna-ai",
    accentColor: "from-blue-600 to-cyan-600",
    github: "https://github.com/Arun-Bharathi-N",
    live: "",
    featured: true,
  },
  {
    id: "vajiram-ravi",
    title: "Vajiram & Ravi",
    category: "Education & Learning Platform",
    description: "Built SEO-friendly learning pages and reusable interfaces using Next.js, GraphQL, and Strapi CMS. Balanced server-side rendering with CMS-driven content to improve page speed, indexing, and maintainability.",
    technologies: ["Next.js", "GraphQL", "Strapi CMS", "Material UI", "TypeScript"],
    features: [
      "High-traffic SEO-first architecture",
      "Strapi headless CMS integration",
      "GraphQL query pipelines & SSR",
      "Modular reusable UI component library",
    ],
    previewType: "vajiram-ravi",
    accentColor: "from-indigo-600 to-purple-600",
    github: "https://github.com/Arun-Bharathi-N",
    live: "",
    featured: true,
  },
  {
    id: "fast-track-2-win",
    title: "Fast Track 2 Win",
    category: "Real-Time Web Application",
    description: "Built responsive horse-racing and betting interfaces using Blazor, Radzen, and Azure-integrated services. Resolved UI refresh and state-inconsistency issues by redesigning data handling, component updates, and error management.",
    technologies: ["Blazor", "Radzen", "Azure", "REST APIs"],
    features: [
      "Responsive live race & betting interface",
      "Fixed UI refresh & state synchronization",
      "Azure cloud service integration",
      "Resilient error handling & component architecture",
    ],
    previewType: "fast-track",
    accentColor: "from-emerald-600 to-teal-600",
    github: "https://github.com/Arun-Bharathi-N",
    live: "",
    featured: true,
  },
];
