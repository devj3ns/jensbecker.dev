import {
  faBuilding,
  faChevronRight,
  faDisplay,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import Balancer from "react-wrap-balancer";
import { Card } from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HoverEffect } from "../components/hoverEffect";
import Image from "next/image";
import { LinkButton } from "../components/button";
import classNames from "classnames";

export default function Startseite() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="mb-20 text-center md:mx-32">
        <Image
          className="mx-auto"
          src="/images/softwaredev.webp"
          alt="Grafische Darstellung der Softwareentwicklung"
          width={512}
          height={512}
          style={{ height: 125, width: "auto" }}
          priority
        />

        {/* Because Balancer left alignes on small screens, only use it on larger screens: */}
        <div className="hidden md:block">
          <Balancer as="h1" className="text-primary">
            Individuelle Softwarelösungen für Dein Unternehmen
          </Balancer>
        </div>

        <h1 className="block md:hidden text-primary">
          Individuelle Softwarelösungen für Dein Unternehmen
        </h1>

        <Balancer>
          Als Inhaber-geführtes Softwareentwicklungsunternehmen entwickeln wir
          zukunftsorientierte Individualsoftware, um Dein Unternehmen
          voranzubringen.
        </Balancer>
      </div>

      <Section title="Leistungen" grayBackground>
        <p>
          Wir haben uns auf die Entwicklung von maßgeschneiderter Software in
          Form von App- und Webanwendungen spezialisiert, welche vielfältig
          eingesetzt werden können.
        </p>
        <div className="grid gap-5 md:grid-cols-2 ">
          <Card>
            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon icon={faMobileScreen} size="lg" />
              <h3 className="m-0">App Entwicklung</h3>
            </div>

            <p>
              Entwicklung moderner Apps für iOS und Android mit dem
              Cross-Plattform Framework Flutter.
            </p>
            <LinkButton
              icon={faChevronRight}
              href="/appentwicklung"
              style="text-primary"
            >
              Mehr Entdecken
            </LinkButton>
          </Card>

          <Card>
            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon icon={faDisplay} size="lg" />
              <h3 className="m-0">Web Entwicklung</h3>
            </div>

            <p>
              Flexible Entwicklung modernen und anspruchsvoller Web Projekte mit
              dem React Framework Next.js.
            </p>
            <LinkButton
              icon={faChevronRight}
              href="/webentwicklung"
              style="text-primary"
            >
              Mehr Entdecken
            </LinkButton>
          </Card>
        </div>
      </Section>

      <Section title="Über den Geschäftsführer">
        <div className="flex flex-col items-center mt-10 md:gap-10 md:flex-row">
          <HoverEffect className="rounded-full">
            <Image
              className="m-0 rounded-full shadow-md"
              src="/images/portrait.webp"
              alt="Portrait von Jens Becker"
              width={225}
              height={225}
              style={{ height: 225, width: "auto" }}
            />
          </HoverEffect>
          <div>
            <span className="text-lg font-bold">Jens Becker</span>
            <ul className="my-0">
              <li>erfahrener Softwareentwickler</li>
              <li>Schwerpunkt App- & Webentwicklung</li>
              <li>Diverse Projekte für Firmen umgesetzt</li>
              <li>Informatikstudium an der Hochschule Trier</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title={"Das sagen Kunden"} grayBackground>
        <div className="grid gap-5 md:grid-cols-3">
          <Testimonial
            name="Kati Rucker"
            companyName="The Lighthaus"
            companyUrl="https://thelighthaus.de"
            imageName="kati-rucker.webp"
          >
            Trotz der teilweisen hohen Komplexität unserer Anforderungen hat
            Jens immer sofort eine Lösung und arbeitet sich in die verschiedenen
            Thematiken ein. Dabei sieht er nicht einfach nur einzelne
            Anforderung, sondern betrachtet alle Facetten und bringt dabei
            eigenständig Idee und mögliche weitere Ansätze ein.
          </Testimonial>
          <Testimonial
            name="Moritz Liederbach"
            companyName="The Lighthaus"
            companyUrl="https://thelighthaus.de"
            imageName="moritz-liederbach.webp"
          >
            Es macht einfach nur unglaublich viel Freude, mit Jens zusammen
            zuarbeiten. Mit seiner Hilfe konnten wir neue Funktionen auf unserer
            Website integrieren und wichtige Prozesse perfekt optimieren.
          </Testimonial>
          <Testimonial
            name="Sandra Küfner"
            companyName="Kreativeria"
            companyUrl="https://kreativeria.com/"
            imageName="sandra-kuefner.webp"
          >
            Die Zusammenarbeit mit Jens war angenehm und unkompliziert. Er hat
            tolle Ideen und versucht alles umzusetzen, was man selbst an
            Vorschlägen mitbringt. Unsere Zusammenarbeit hat mir sehr viel Spaß
            gemacht und ich liebe meine neue Website!
          </Testimonial>
          {/*<Testimonial
            name="René Schäfer"
            companyName="nestwärme E.V."
            companyUrl="https://nestwaerme.de"
            imageName="rene-schaefer.webp"
          >
            Dank der Nestwärme KiTa App sind jetzt alle relevanten Informationen
            wie Elternbriefe oder Termine jederzeit in App abrufbar. Endlich
            Schluss mit der Zettelwirtschaft.
          </Testimonial>*/}
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  grayBackground,
  children,
}: {
  title: string;
  grayBackground?: boolean;
  children: React.ReactNode;
}) {
  const boxedWidthClasses = "px-5 mx-auto max-w-7xl md:px-5";

  return (
    <section
      className={classNames(
        "pt-10 pb-12",
        grayBackground && "bg-neutral-200/40 w-screen"
      )}
    >
      <div className={classNames(grayBackground && boxedWidthClasses)}>
        <h2 className="mt-0 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Testimonial({
  name,
  companyName,
  companyUrl,
  imageName,
  children,
}: {
  name: string;
  companyName: string;
  companyUrl: string;
  imageName: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex flex-row items-center gap-5 md:flex-col lg:flex-row">
        <Image
          src={"/images/testimonials/" + imageName}
          className="m-0 rounded-full aspect-square"
          width={100}
          height={100}
          alt={"Portrait of " + name}
        />

        <div>
          <div className="font-bold">{name}</div>
          <div className="not-prose">
            <a
              href={companyUrl}
              className="flex flex-row items-center gap-2 text-sm text-gray-500"
            >
              <FontAwesomeIcon icon={faBuilding} />
              {companyName}
            </a>
          </div>
        </div>
      </div>

      <p>{children}</p>
    </Card>
  );
}
