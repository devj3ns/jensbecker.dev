import { DOMAIN_URL } from "@/shared/constants";
import { allProjects } from "contentlayer/generated";

export default async function sitemap() {
  const projects = allProjects.map((project) => ({
    url: `${DOMAIN_URL}/referenzen/${project.slug}`,
    lastModified: project.articleUpdatedAt,
    priority: 0.8,
  }));

  const routes = [
    "leistungen/mobile-apps",
    "leistungen/websites-seo",
    "leistungen/webanwendungen",
    "referenzen",
    "kontakt",
  ].map((route) => ({
    url: `${DOMAIN_URL}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.9,
  }));

  return [
    {
      url: DOMAIN_URL,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 1,
    },
    ...routes,
    ...projects,
  ];
}
