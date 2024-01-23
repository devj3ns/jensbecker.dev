"use client";

import { Project } from "contentlayer/generated";
import { useState } from "react";
import { Button } from "./button";
import ProjectListItem from "./ProjectListItem";
import { tags } from "../../contentlayerTypes";

const filters: filters[] = ["all", ...tags];
type filters = "all" | tags;

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<filters>("all");

  const projectsFiltered = projects
    .filter((project) => filter == "all" || project.tags.includes(filter))
    .toSorted((a, b) =>
      (a.endDate ?? a.startDate) > (b.endDate ?? b.startDate) ? -1 : 1
    );

  const tagFilterLabelMap: Record<filters, String> = {
    all: "Alle",
    website: "Websites",
    webapp: "Webapps",
    mobileapp: "Apps",
    seo: "", // dont show a seo filter
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2">
          {filters.map(
            (tag) =>
              tagFilterLabelMap[tag] && (
                <Button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  style={tag == filter ? "primary" : "light"}
                >
                  {tagFilterLabelMap[tag]}
                </Button>
              )
          )}
        </div>

        <span>
          {projectsFiltered.length}{" "}
          {projectsFiltered.length == 1 ? "Projekt" : "Projekte"}
        </span>
      </div>

      <div className="flex flex-col gap-3 mt-4 mb-16">
        {projectsFiltered.forEach((project) => console.log(project.tags))}
        {projectsFiltered.map((project, index) => (
          <ProjectListItem key={project._id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
