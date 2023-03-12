const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
    scrollRestoration: true,
  },
};

module.exports = withContentlayer(nextConfig);
