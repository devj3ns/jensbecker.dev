import { DOMAIN_URL } from "@/shared/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
    host: DOMAIN_URL,
  };
}
