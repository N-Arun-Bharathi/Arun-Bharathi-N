export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "numentica-ui",
    company: "Numentica UI",
    role: "Software Engineer – Full Stack",
    location: "Chennai, Tamil Nadu, India",
    period: "Feb 2022 – Present",
    isCurrent: true,
    description: "Architecting and shipping scalable production applications using React.js, Next.js, NestJS, Node.js, and TypeScript.",
    metrics: [
      { label: "Page-load speed boost", value: "+35%" },
      { label: "Redundant API call reduction", value: "-25%" },
      { label: "Production Web Apps Delivered", value: "5 Apps" },
      { label: "Design System Components", value: "20+ UI Components" },
    ],
    responsibilities: [
      "Architected and delivered five production web applications using React.js, Next.js, and TypeScript, ensuring responsive experiences across desktop, tablet, and mobile devices.",
      "Engineered 20+ reusable components with Material UI and Tailwind CSS, standardizing visual design and reducing duplicate development effort across projects.",
      "Integrated REST APIs, GraphQL services, Strapi CMS, authentication flows, and dynamic content into customer-facing applications.",
      "Built NestJS backend modules — including controllers, services, DTO validation, Prisma ORM, and PostgreSQL — with full Swagger documentation.",
      "Implemented complex forms with React Hook Form and reusable validation rules, streamlining error handling across user workflows.",
      "Boosted page-load performance by approximately 35% and reduced redundant API requests by approximately 25% through rendering, caching, and data-fetching optimizations.",
      "Supported Azure deployments, led code reviews, conducted cross-browser testing, and resolved production issues within Agile sprints.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Prisma ORM",
      "GraphQL",
      "Strapi CMS",
      "Tailwind CSS",
      "Material UI",
      "React Query",
      "React Hook Form",
      "Azure",
      "Swagger",
    ],
  },
];
