import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.seo.url),
  icons: {
    icon: [
      { url: `${siteConfig.basePath}/favicon.ico`, sizes: "any" },
      { url: `${siteConfig.basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${siteConfig.basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${siteConfig.basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: `${siteConfig.basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    ],
    shortcut: `${siteConfig.basePath}/favicon.ico`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.seo.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: `${siteConfig.name} - Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: `@${siteConfig.socials.githubUsername}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sansFont.variable} ${monoFont.variable} font-sans bg-[#121212] text-[#f5f5f5] antialiased`}>
        {children}
      </body>
    </html>
  );
}
