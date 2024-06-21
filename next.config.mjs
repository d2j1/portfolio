/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  basePath: "/portfolio",
  assetPrefix: "/repository",
  reactStrictMode: true,
};

export default nextConfig;
