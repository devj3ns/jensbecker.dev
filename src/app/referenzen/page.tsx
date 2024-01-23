import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Balancer from "react-wrap-balancer";
import { LinkButton } from "../components/button";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { allProjects } from "contentlayer/generated";
import ProjectList from "../components/ProjectsList";

export const metadata = {
  title: "Referenzen",
  description:
    "Überzeuge Dich von unseren vielfältigen Referenzen: Eine Auswahl der zuletzt für diverse Unternehmen umgesetzten Projekte.",
};

export default function Referenzen() {
  const featuredProjectIds = [
    "thelighthaus-webinars",
    "nestwaerme-kita-app",
    "blumen-greif",
  ];

  const featuredProjects = allProjects
    .filter((project) => featuredProjectIds.includes(project.slug))
    .toSorted(
      (a, b) =>
        featuredProjectIds.indexOf(a.slug) - featuredProjectIds.indexOf(b.slug)
    );

  return (
    <>
      <section className="text-center">
        <Balancer as="h1" className="mb-0">
          Überzeuge Dich von unseren Referenzen
        </Balancer>

        <p>
          Eine Auswahl der zuletzt für diverse Unternehmen umgesetzten Projekte
        </p>
      </section>

      <div className="flex flex-col gap-12 my-16">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project._id}
            project={project}
            index={index}
          />
        ))}
      </div>

      <h2>Alle Projekte</h2>

      <ProjectList projects={allProjects} />

      <section className="mb-16 text-center">
        <p className="mb-5 text-2xl font-bold">Interesse geweckt?</p>
        <LinkButton href={`/kontakt`} icon={faChevronRight}>
          Eigenes Projekt anfragen
        </LinkButton>
      </section>
    </>
  );
}
