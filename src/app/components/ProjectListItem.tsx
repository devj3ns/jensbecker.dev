import { Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./button";

export default function ProjectListItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const quartalString = `Q${Math.ceil(
    (new Date(project.endDate ?? project.startDate).getMonth() + 1) / 3
  )} ${new Date(project.endDate ?? project.startDate).getFullYear()}`;

  return (
    <Link href={`/referenzen/${project.slug}`} className="no-underline">
      <div
        key={project.slug}
        className="flex flex-row items-center bg-white rounded-md shadow-sm md:gap-4"
      >
        <div className="w-full mb-0 basis-2/12">
          <Image
            src={`/images/projects/${project.slug}.png`}
            alt="Bild des Projekts"
            width={1920}
            height={1080}
            quality={100}
            priority={index == 0}
            className="my-0 rounded-l-xl"
          />
        </div>

        <div className="flex flex-col pl-2 basis-10/12">
          <h3 className="my-0 font-semibold text-md">{project.title}</h3>

          <div className="flex flex-row gap-5 text-base font-normal">
            <span>{quartalString}</span>

            <span>{project.tags.join(", ")}</span>

            <LinkButton
              href={`/referenzen/${project.slug}`}
              style="light"
              className="mt-2"
            >
              Mehr erfahren
            </LinkButton>

            <LinkButton href="" style="light" className="mt-2">
              Zum Projekt
            </LinkButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
