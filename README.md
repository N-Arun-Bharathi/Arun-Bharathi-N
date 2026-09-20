# Arun Bharathi N — Full Stack Developer Portfolio

A modern, high-performance, dark-first personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, pre-configured for automated zero-cost hosting on **GitHub Pages**.

---

## 🚀 Live Demo & Preview

* **Live Site:** [https://arun-bharathi-n.github.io](https://arun-bharathi-n.github.io)
* **Author:** Arun Bharathi N
* **Role:** Full Stack Developer (React · Next.js · TypeScript · Node.js)

---

## ✨ Key Features

- **Product-Engineer Aesthetic:** Minimalist, dark-first theme with subtle ambient glowing spots, high contrast, clean typography, and zero clutter.
- **Data-Driven Architecture:** Clean separation of data models (`projects.ts`, `skills.ts`, `experience.ts`, `services.ts`) and presentation components.
- **Single Central Configuration:** Personal information (name, social links, email, experience dates, resume path) managed in `src/config/site.ts`.
- **Interactive Project Showcase:** Category filter tabs, custom UI mockups for every project, technology badges, and repository links.
- **Vertical Experience Timeline:** Milestone timeline documenting contributions at Numentica UI with structured responsibilities and stack tags.
- **Categorized Skills Matrix:** Clean skill domain cards across Frontend, Backend, Databases, Mobile, Testing, and Cloud/DevOps.
- **Accessible & Responsive:** Seamless mobile drawer navigation, keyboard focus rings, semantic HTML5, and `prefers-reduced-motion` compliance.
- **Static Export Ready:** Pre-configured with `output: "export"` for hosting directly on GitHub Pages with zero backend required.
- **Automated CI/CD:** Ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically build and publish on every push to `main`.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) via GitHub Actions |

---

## 📂 Project Structure

```text
Arun-Bharathi-N/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated deployment workflow
├── public/
│   ├── resume.pdf              # Downloadable resume document
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css         # Global design tokens, scrollbar & utilities
│   │   ├── layout.tsx          # SEO metadata, Open Graph, fonts & root shell
│   │   ├── page.tsx            # Composition of all portfolio sections
│   │   ├── robots.ts           # Dynamic SEO robots.txt
│   │   └── sitemap.ts          # Dynamic SEO sitemap
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphic navbar & mobile drawer
│   │   ├── Hero.tsx            # Developer hero with animated text & CTAs
│   │   ├── Stats.tsx           # Verifiable experience and expertise stats
│   │   ├── About.tsx           # Narrative bio and core stack side panel
│   │   ├── Experience.tsx      # Vertical milestone timeline for Numentica UI
│   │   ├── Skills.tsx          # Categorized technical skill cards
│   │   ├── Projects.tsx        # Filterable projects grid
│   │   ├── ProjectCard.tsx     # Interactive project card with hover lift
│   │   ├── ProjectGraphic.tsx  # Custom high-fidelity UI previews for projects
│   │   ├── Services.tsx        # "What I Build" 6-card engineering offerings
│   │   ├── Github.tsx          # Open source and repository showcase callout
│   │   ├── Contact.tsx         # Mailto & copy-to-clipboard contact section
│   │   └── Footer.tsx          # Minimal footer with attribution & back-to-top
│   ├── config/
│   │   └── site.ts             # Central site configuration
│   ├── data/
│   │   ├── projects.ts         # Structured data for 5 featured projects
│   │   ├── skills.ts           # Categorized skill sets
│   │   ├── experience.ts       # Work experience & responsibilities
│   │   └── services.ts         # Service offerings
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── next.config.ts              # Next.js static export configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 💻 Local Development

### 1. Prerequisites
- Node.js 18.18+ (Node 20+ or 24 recommended)
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 🏗️ Production Build & Static Export

To verify the production build and generate static HTML in the `out/` directory:

```bash
npm run build
```

This validates all TypeScript types, ESLint rules, and outputs a static website ready for static hosting.

---

## 🌐 Deploying to GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Arun-Bharathi-N/Arun-Bharathi-N.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   * Go to your repository on GitHub.
   * Navigate to **Settings** > **Pages**.
   * Under **Build and deployment** > **Source**, select **GitHub Actions**.
   * The workflow defined in `.github/workflows/deploy.yml` will automatically build and deploy your site on every push!

---

## ⚙️ Customization Guide

### 1. Personal & Social Details
Edit `src/config/site.ts` to update your name, tagline, email, LinkedIn, GitHub username, and resume file name:
```ts
export const siteConfig = {
  name: "Arun Bharathi N",
  role: "Full Stack Developer",
  experienceYears: "4+",
  joiningDate: "2021",
  socials: {
    email: "infystack.admin@gmail.com",
    linkedin: "https://www.linkedin.com/in/arun-bharathi-n-5742b2215/",
    github: "https://github.com/Arun-Bharathi-N",
    githubUsername: "Arun-Bharathi-N",
  },
  resume: {
    url: "/resume.pdf",
    filename: "Arun_Bharathi_N_Resume.pdf",
  },
  // ...
};
```

### 2. Updating Projects
Edit `src/data/projects.ts` to add or modify projects, tags, descriptions, GitHub links, and live URLs.

### 3. Updating Skills
Edit `src/data/skills.ts` to modify categories and skill pills.

### 4. Updating Resume
Replace the file at `public/resume.pdf` with your updated resume PDF.

---

## 📄 License

MIT © 2026 Arun Bharathi N.
