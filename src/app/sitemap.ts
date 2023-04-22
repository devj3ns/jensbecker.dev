import { allProjects } from "contentlayer/generated";

export default async function sitemap() {
  const projects = allProjects.map((project) => ({
    url: `https://jensbecker.dev/referenzen/${project.slug}`,
    lastModified: project.publishedAt,
    priority: 0.8,
  }));

  const routes = [
    "/appentwicklung",
    "/webentwicklung",
    "/referenzen",
    "/kontakt",
  ].map((route) => ({
    url: `https://jensbecker.dev${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 0.9,
  }));

  return [
    {
      url: `https://jensbecker.dev`,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 1,
    },
    ...routes,
    ...projects,
  ];
}
