import Image from "next/image";
import { LinkButton } from "../../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Entwicklung von Webanwendungen",
  description: `Flexible Entwicklung einer maßgeschneiderten Webanwendung. 
  Leistungsstarke Websysteme zum Automatisieren und vereinfachen von Unternehmensprozessen.`, // 148 of 160 characters
};

// TODO: Beispielprojekt/Referenz einbinden

export default function WebApps() {
  return (
    <main>
      <section className="mb-32 text-center">
        <Image
          className="mx-auto"
          src="/images/webappdev.webp"
          alt="Grafische Darstellung der Webentwicklung"
          width={512}
          height={512}
          style={{ height: 125, width: "auto" }}
          priority
        />
        <h1>Entwicklung von Webanwendungen</h1>
        <p>
          Du möchtest deine Unternehmensprozesse mit einer maßgeschneiderten
          Webanwendung Automatisieren oder vereinfachen? <br />
          Vom Buchungssystem bis hin zum Onlineshop, wir schaffen individuelle
          Websysteme, die dein Unternehmen voranbringen.
        </p>
      </section>

      <section>
        <h2>Definition Webanwendung</h2>
        <p>
          Webanwendungen oder auch Web-Apps genannt, definieren wir im Gegensatz
          zu Websites, die meist statischen Content anzeigen, als interaktive
          Websysteme, die im Hintergrund Prozesse anstoßen und verarbeitete
          Daten anzeigen. Diese Systeme ermöglichen es Unternehmen, Prozesse zu
          automatisieren oder zu vereinfachen. Dabei können sie sowohl intern im
          Unternehmen als auch extern für Kunden eingesetzt werden.
        </p>
      </section>

      <section>
        <h2>Vielfältige Einsatzmöglichkeiten</h2>
        <p>
          Webanwendungen können vielfältig eingesetzt werden, vom internen Tool
          hin zum Kunden-Dashboard. Wir entwickeln für Dich Deine individuelle
          Webanwendung für verschiedene Bedürfnisse.
        </p>
        Beispiele für Webanwendungen:
        <ul>
          <li>Webinarbuchung Automatisierung</li>
          <li>Kunden-Dashboard</li>
          <li>Buchungsplattform</li>
          <li>Videoplattform</li>
          <li>Webshop</li>
        </ul>
        <LinkButton
          href="/referenzen"
          icon={faChevronRight}
          style="text"
          className="mt-5"
        >
          Erforsche unsere Referenzen
        </LinkButton>
      </section>

      <section>
        <h2>Vorteile von Webanwendungen</h2>
        Webanwendungen haben im Vergleich zu mobilen Apps Vorteile, die nicht zu
        unterschätzen sind:
        <ul>
          <li>Plattformunabhängig</li>
          <li>keine Installation notwendig</li>
          <li>einfache Wartung und Aktualisierung</li>
          <li>keine App Store Gebühren</li>
          <li>hohe Flexibilität</li>
        </ul>
        Noch unsicher, ob eine App oder Webanwendung die richtige Wahl ist? Kein
        Problem, wir beraten Dich gerne.
      </section>

      <section>
        <h2>Umsetzung</h2>
        <p>
          Zur technischen Umsetzung Deiner Webanwendung verwenden wir ein
          bekanntes und weitverbreitetes JavaScript Framework namens{" "}
          <a href="https://nextjs.org/">Next.js</a>. Dieses ermöglicht die
          Erstellung von full-stack Webanwendungen mit modernster Technik.
        </p>
      </section>

      <section>
        <h2>Persönliche Begleitung von der Idee bis zum Release</h2>

        <ol>
          <li>Besprechung Deiner Ideen, Anforderungen und Wünschen</li>
          <li>
            Entwicklung eines Prototyps, der die Funktionalität der Webanwendung
            zeigt
          </li>
          <li>
            Besprechung des Prototyps und Erarbeitung der finalen
            Funktionalitäten
          </li>
          <li>kontinuierlicher Kontakt während der Entwicklung des Produkts</li>
          <li>Testphase der Webanwendung und Vorbereitung für den Release</li>
          <li>Veröffentlichung/Release der Webanwendung</li>
          <li>Nachhaltiger Support und Wartung stehen jederzeit bereit</li>
        </ol>
      </section>

      <div className="my-16 text-center">
        <LinkButton icon={faChevronRight} href="/kontakt">
          Projektanfrage senden
        </LinkButton>
      </div>
    </main>
  );
}
