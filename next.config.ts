import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/diamond-woman/out",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
