import Image from "next/image";
import { LinkButton } from "../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Webentwicklung",
  description:
    "Wir entwickeln für Dich Deine individuelle Web-App und unterstützen Dich von der Idee bis zum Release.",
};

export default function Webentwicklung() {
  return (
    <main>
      <section className="mb-32 text-center">
        <Image
          className="mx-auto"
          src="/images/webdev.webp"
          alt="Grafische Darstellung der Webentwicklung"
          width={512}
          height={512}
          style={{ height: 125, width: "auto" }}
          priority
        />
        <h1>Dein Partner für Webentwicklung</h1>
        <p>
          Du möchtest Dein Unternehmen um eine Webanwendung erweitern? Wir
          unterstützen Dich von der Idee bis zum Release.
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
          <li>Webshop</li>
          <li>Buchungsplattform</li>
          <li>Videoplattform</li>
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
        <h2>Webanwendung vs. Website</h2>
        <p>
          Webanwendungen sind interaktive Websysteme, die nicht nur statische
          Inhalte anzeigen, sondern mit dem Nutzer interagieren und im
          Hintergrund Prozesse anstoßen oder verarbeitete Daten anzeigen.
        </p>
        <p>
          Auch wenn wir uns auf die Entwicklung von Webanwendungen spezialisiert
          haben, können wir auch statische Websites entwickeln und diese auf
          optimale Performance und Suchmaschinenoptimierung bringen. <br />
        </p>
      </section>

      <section>
        <h2>Vorteile von Webanwendungen</h2>
        Webanwendungen haben im Vergleich zu Apps bestimmte Vorteile bieten, die
        nicht zu unterschätzen sind:
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
        <h2>Wir begleiten Dich von der Idee bis zum Web-Release</h2>

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
