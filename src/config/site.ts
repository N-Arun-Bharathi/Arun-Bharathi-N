const repoName = "Arun-Bharathi-N";
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : "");

export const siteConfig = {
  name: "Arun Bharathi N",
  shortName: "ARUN",
  role: "Full Stack Developer",
  basePath: basePath,
  avatar: `${basePath}/avatar.png`,
  experienceYears: "4+",
  joiningDate: "Feb 2022 – Present",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 78068 85868",
  headline: "Building scalable, high-performance web applications and backend APIs with React.js, Next.js, NestJS, and TypeScript.",
  subheadline: "Full Stack Developer with 4+ years of professional experience architecting reusable frontend systems, optimizing performance (35% speed boost), and shipping production-ready web and backend services.",
  techStackLine: "React.js · Next.js · TypeScript · NestJS · Node.js · PostgreSQL",
  
  about: {
    p1: "I'm a Full Stack Developer based in Chennai, India, with 4+ years of professional experience architecting and shipping scalable production applications using React.js, Next.js, NestJS, Node.js, and TypeScript.",
    p2: "Proven track record of building reusable frontend architecture, integrating REST and GraphQL APIs, and optimizing application performance — improving page-load speed by up to 35% and cutting redundant API calls by 25%.",
    p3: "I enjoy working across the complete development lifecycle — from designing accessible design systems and reusable components with Material UI and Tailwind CSS to building NestJS backend modules with DTO validation, Prisma ORM, and PostgreSQL.",
    p4: "I'm a strong collaborator skilled at translating complex product requirements into reliable, maintainable, production-ready features.",
  },

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Senthamarai College of Arts and Science",
    location: "Madurai, Tamil Nadu",
    year: "2021",
    cgpa: "7.28 / 10",
  },

  socials: {
    email: "arunbharathi6483@gmail.com",
    phone: "+917806885868",
    displayPhone: "+91 78068 85868",
    linkedin: "https://www.linkedin.com/in/arun-bharathi-n-5742b2215/",
    github: "https://github.com/N-Arun-Bharathi",
    githubUsername: "N-Arun-Bharathi",
  },

  resume: {
    url: `${basePath}/resume.pdf`,
    filename: "Arun_Bharathi_N_Resume.pdf",
  },

  navItems: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    title: "Arun Bharathi N | Full Stack Developer",
    description: "Portfolio of Arun Bharathi N, a Full Stack Developer specializing in React.js, Next.js, TypeScript, NestJS, Node.js and PostgreSQL with 4+ years of professional experience.",
    keywords: [
      "Arun Bharathi N",
      "Full Stack Developer",
      "React.js Developer",
      "Next.js Developer",
      "NestJS Developer",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Chennai Developer",
      "Software Engineer",
      "Portfolio",
    ],
    url: "https://n-arun-bharathi.github.io/Arun-Bharathi-N",
    ogImage: `${basePath}/og-image.png`,
  },
};

export type SiteConfig = typeof siteConfig;
