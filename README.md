# Arun Bharathi N — Full Stack Developer Portfolio

A modern, high-performance personal portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, pre-configured for automated zero-cost hosting on **GitHub Pages** using **pnpm**.

---

## 🚀 Live Demo & Preview

* **Live Site:** [https://n-arun-bharathi.github.io/Arun-Bharathi-N/](https://n-arun-bharathi.github.io/Arun-Bharathi-N/)
* **Author:** Arun Bharathi N
* **Role:** Full Stack Developer (React.js · Next.js · TypeScript · NestJS · Node.js · PostgreSQL)

---

## ✨ Key Features

- **Deep Neutral Graphite Aesthetic:** Minimalist dark mode (`#121212` / `#181818` / `#1e1e1e`) with clean typography, high contrast, and zero clutter.
- **Bento Grid Architecture:** Translucent dark glass cards, hairline borders, and monospace section indicators.
- **Data-Driven Models:** Structured data models in `src/data/` (`projects.ts`, `skills.ts`, `experience.ts`, `services.ts`).
- **Single Central Configuration:** Personal info, contact details, social links, and resume path in `src/config/site.ts`.
- **Vertical Experience Timeline:** Software Engineer at Numentica UI with verified quantitative impact metrics (+35% page-load speed, -25% redundant API calls, 5 production apps, 20+ UI components).
- **Featured Projects:** Showcase for **Aruvi Play**, **Myna AI**, **Vajiram & Ravi**, and **Fast Track 2 Win** with custom UI preview graphics.
- **Technical Skills Matrix:** Categorized cards across Frontend, Backend & APIs, UI Systems, Databases & CMS, Testing & Cloud, and Mobile.
- **Static Export Ready:** Pre-configured with `output: "export"` for hosting on GitHub Pages or Vercel.
- **Automated CI/CD:** GitHub Actions workflow (`.github/workflows/deploy.yml`) utilizing **pnpm** to build and publish on every push.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) via GitHub Actions / [Vercel](https://vercel.com/) |

---

## 💻 Local Development

### 1. Prerequisites
- Node.js 20+ (Node 22 LTS recommended)
- pnpm (`npm i -g pnpm` or `corepack enable`)

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Run Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 🏗️ Production Build & Static Export

To verify the production build and generate static HTML in the `out/` directory:

```bash
pnpm build
```

To run lint checks:

```bash
pnpm lint
```

---

## 🌐 Deploying to GitHub Pages

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio with pnpm and graphite theme"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   * Go to your repository: **Settings** > **Pages**.
   * Under **Build and deployment** > **Source**, select **GitHub Actions**.
   * The workflow defined in `.github/workflows/deploy.yml` will automatically build with `pnpm` and deploy your site on every push!

---

## 📄 License

MIT © 2026 Arun Bharathi N.
