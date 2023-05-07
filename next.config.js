const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    scrollRestoration: true,
  },
  redirects: async () => {
    // Redirects to make sure that urls from the old site (now at https://v2.jensbecker.dev)
    // which are still indexed by Google are redirected to the new site correctly.
    return [
      {
        source: "/services/app-development",
        destination: "/appentwicklung",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/webentwicklung",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/referenzen/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
