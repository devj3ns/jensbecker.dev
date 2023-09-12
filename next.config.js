const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    scrollRestoration: true,
  },
  redirects: async () => {
    return [
      // Abwärtskompatibilität für alte Links zu den Projekten
      {
        source: "/projects/:path*",
        destination: "/referenzen/:path*",
        permanent: true,
      },
      // Abwärtskompatibilität für alte Links älterer Versionen der Website
      {
        source: "/appentwicklung",
        destination: "/leistungen/mobile-apps",
        permanent: true,
      },
      // Abwärtskompatibilität für alte Links älterer Versionen der Website
      {
        source: "/webentwicklung",
        destination: "leistungen/webanwendungen",
        permanent: true,
      },
      // Vermeidung einer 404-Seite
      {
        source: "/leistungen",
        destination: "/#leistungen",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
