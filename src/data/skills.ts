export interface SkillCategory {
  title: string;
  description: string;
  iconName: "layout" | "server" | "database" | "smartphone" | "check-circle" | "cloud";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern, and accessible user interfaces with state management and caching.",
    iconName: "layout",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Query",
      "React Hook Form",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Architecting modular server-side applications, DTO validation, GraphQL, and secure REST APIs.",
    iconName: "server",
    skills: [
      "NestJS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT Authentication",
      "Swagger",
      "Prisma ORM",
    ],
  },
  {
    title: "UI Systems & Styling",
    description: "Modern component architectures, design tokens, glassmorphism, and fluid responsiveness.",
    iconName: "layout",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "NextUI / HeroUI",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Database & CMS",
    description: "Relational and document persistence, schema migrations, and headless CMS integrations.",
    iconName: "database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Strapi CMS",
    ],
  },
  {
    title: "Testing, Cloud & Tools",
    description: "Automated test suites, Azure cloud deployment, version control, and Agile workflows.",
    iconName: "cloud",
    skills: [
      "Azure",
      "AWS",
      "Git",
      "Jest",
      "Playwright",
      "Cypress",
      "Storybook",
      "JIRA",
      "Agile",
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native audio playback, storage, and device integrations.",
    iconName: "smartphone",
    skills: [
      "React Native",
      "Expo",
    ],
  },
];
