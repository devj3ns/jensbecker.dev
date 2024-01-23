import {
  faBarsStaggered,
  faChevronRight,
  faDisplay,
  faMobileScreen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Balancer from "react-wrap-balancer";
import { Card } from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HoverEffect } from "../components/hoverEffect";
import Image from "next/image";
import { LinkButton } from "../components/button";
import Testimonials from "../components/Testimonials";
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

        <Balancer as="h1" className="text-primary">
          Individuelle Softwarelösungen für Dein Unternehmen
        </Balancer>

        <Balancer>
          Als Inhaber-geführtes Softwareentwicklungsunternehmen entwickeln wir
          zukunftsorientierte Individualsoftware, um Dein Unternehmen
          voranzubringen.
        </Balancer>

        <div className="flex flex-row justify-center gap-3 mt-5 md:gap-5">
          <LinkButton
            href="/referenzen"
            icon={faBarsStaggered}
            style="light-primary"
          >
            Referenzen
          </LinkButton>

          <LinkButton href="/kontakt" icon={faUser} style="light-primary">
            Kontakt
          </LinkButton>
        </div>
      </div>

      <Section title="Leistungen" id="leistungen" grayBackground>
        <p>
          Wir haben uns auf die Entwicklung von maßgeschneiderter Software in
          Form von mobilen Apps, Websites und Webanwendungen spezialisiert.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon icon={faMobileScreen} size="lg" />
              <h3 className="m-0">Mobile Apps</h3>
            </div>

            <p>
              Entwickelung einer individuellen mobilen App zur Erweiterung
              Deines Unternehmens. Wir begleiten Dich von der Idee bis zum
              Release und darüber hinaus.
            </p>
            <LinkButton
              icon={faChevronRight}
              href="leistungen/mobile-apps"
              style="text-primary"
            >
              Mehr Entdecken
            </LinkButton>
          </Card>

          <Card>
            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon icon={faDisplay} size="lg" />
              <h3 className="m-0">Websites & SEO</h3>
            </div>

            <p>
              Entwicklung einer attraktiven Website inklusive
              Suchmaschinenoptimierung (SEO), um Dein Unternehmen Online zu
              präsentieren und Kunden zu erreichen.
            </p>
            <LinkButton
              icon={faChevronRight}
              href="leistungen/websites-seo"
              style="text-primary"
            >
              Mehr Entdecken
            </LinkButton>
          </Card>

          <Card>
            <div className="flex flex-row items-center gap-3">
              <FontAwesomeIcon icon={faDisplay} size="lg" />
              <h3 className="m-0">Webanwendungen</h3>
            </div>

            <p>
              Flexible Entwicklung einer maßgeschneiderten Webanwendung.
              Individuelle Websysteme zum Automatisieren oder vereinfachen von
              Unternehmensprozessen.
            </p>
            <LinkButton
              icon={faChevronRight}
              href="leistungen/webanwendungen"
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
        <Testimonials />
      </Section>
    </div>
  );
}

function Section({
  title,
  id,
  grayBackground,
  children,
}: {
  title: string;
  id?: string;
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
      id={id}
    >
      <div className={classNames(grayBackground && boxedWidthClasses)}>
        <h2 className="mt-0 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}
