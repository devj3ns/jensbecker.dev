import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { LinkButton } from "../components/button";

export const metadata = {
  title: "Referenzen",
  description:
    "Überzeuge Dich von unseren vielfältigen Referenzen: Eine Auswahl der zuletzt für diverse Unternehmen umgesetzten Projekte.",
};

export default function Referenzen() {
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
        {allProjects
          .sort((a, b) => (a.startDate < b.startDate ? 1 : -1))
          .map(({ title, description, tags, slug }, index) => (
            <div
              key={slug}
              className="flex flex-col items-center gap-5 md:gap-8 sm:even:flex-row-reverse sm:odd:flex-row sm:odd:text-right sm:even:text-left"
            >
              <div className="w-full mb-0 sm:basis-7/12">
                <Link href={`/referenzen/${slug}`}>
                  <Image
                    src={`/images/projects/${slug}.png`}
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
                <h2 className="my-0">{title}</h2>

                <div className="p-5 text-white bg-gray-500 rounded-md shadow-md">
                  {description}
                </div>

                <div>
                  {tags.map((tag) => (
                    <span className="mx-2" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <LinkButton
                    href={`/referenzen/${slug}`}
                    style="light"
                    icon={faChevronRight}
                  >
                    Mehr erfahren
                  </LinkButton>
                </div>
              </div>
            </div>
          ))}
      </div>

      <section className="mb-16 text-center">
        <p className="mb-5 text-2xl font-bold">Interesse geweckt?</p>
        <LinkButton href={`/kontakt`} icon={faChevronRight}>
          Eigenes Projekt anfragen
        </LinkButton>
      </section>
    </>
  );
}
