import Image from "next/image";
import Link from "next/link";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "./button";
import { Project } from "contentlayer/generated";

export default function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      key={project.slug}
      className="flex flex-col items-center gap-5 md:gap-8 sm:even:flex-row-reverse sm:odd:flex-row sm:odd:text-right sm:even:text-left"
    >
      <div className="w-full mb-0 sm:basis-7/12">
        <Link href={`/referenzen/${project.slug}`}>
          <Image
            src={`/images/projects/${project.slug}.png`}
            alt="Bild des Projekts"
            width={1920}
            height={1080}
            quality={100}
            priority={index == 0}
            className="my-0 rounded-xl"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-5 sm:basis-5/12">
        <h2 className="my-0">{project.title}</h2>

        <div className="p-5 text-white bg-gray-500 rounded-md shadow-md">
          {project.description}
        </div>

        <div>
          {project.tags.map((tag) => (
            <span className="mx-2" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div>
          <LinkButton
            href={`/referenzen/${project.slug}`}
            style="light"
            icon={faChevronRight}
          >
            Mehr erfahren
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
