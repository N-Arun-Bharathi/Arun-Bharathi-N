import type { NextConfig } from "next";
import path from "path";

const repoName = "Arun-Bharathi-N";
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
