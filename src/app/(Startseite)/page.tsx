import {
  faChevronRight,
  faDisplay,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import Balancer from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { LinkButton } from "../components/button";

export default function Startseite() {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div className="text-center md:mx-32">
        <Image
          className="mx-auto"
          src="/images/startseite.jpg"
          alt="Portrait of Jens Becker"
          width={225}
          height={225}
        />

        {/* TODO: why does the Balancer add a gap on the left on mobile? */}
        <div className="hidden md:block">
          <Balancer as="h1" className="text-blue-900 ">
            Individuelle Softwarelösungen für Dein Unternehmen
          </Balancer>
        </div>

        <h1 className="block text-blue-900 md:hidden">
          Individuelle Softwarelösungen für Dein Unternehmen
        </h1>

        <Balancer>
          Als Inhaber-geführtes Softwareentwicklungsunternehmen entwickeln wir
          zukunftsorientierte Individualsoftware, um Dein Unternehmen
          voranzubringen.
        </Balancer>
      </div>

      <section>
        <h2 className="text-center">Unsere Leistungen</h2>
        <p>
          Wir haben uns auf die Entwicklung von maßgeschneiderter Software in
          Form von App- und Webanwendungen spezialisiert, welche vielfältig
          eingesetzt werden können.
        </p>
        <div className="flex flex-col gap-10 mt-10 sm:flex-row">
          <div className="basis-6/12">
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
              App Entwicklung entdecken
            </LinkButton>
          </div>

          <div className="basis-6/12">
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
              Web Entwicklung entdecken
            </LinkButton>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center">Kundennah und persönlich</h2>

        <div className="flex flex-col items-center md:gap-10 md:flex-row">
          <Image
            className="shadow-md rounded-3xl"
            src="/images/portrait.jpg"
            alt="Portrait of Jens Becker"
            width={225}
            height={225}
          />
          <div className="my-10">
            <span className="font-bold">Jens Becker</span>
            <ul>
              <li>ausgebildeter Softwareentwickler</li>
              <li>Schwerpunkt Web & App</li>
              <li>Selbständig seit mehreren Jahren</li>
              <li>Studiert Informatik an der Hochschule Trier</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center">Das sagen Kunden</h2>

        <div className="flex flex-col gap-10 mt-10 sm:flex-row">
          <div>
            <span className="font-bold">Kunde A</span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div>
            <span className="font-bold">Kunde B</span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
