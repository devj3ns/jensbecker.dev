import Image from "next/image";
import { LinkButton } from "../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Webentwicklung",
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
          <li>Automatisierungslösungen</li>
          <li>Kunden-Dashboard</li>
          <li>Webshop</li>
          <li>Buchungsplattform</li>
          <li>und vieles mehr</li>
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
          Wenn wir von Webanwendungen sprechen, meinen wir damit interaktive
          Webseiten, die nicht nur statische Inhalte anzeigen, sondern auch mit
          dem Nutzer interagieren können. <br />
          Diese Webanwendung kann beispielsweise mit einem Server verbunden
          sein, der im Hintergrund automatisiert Daten verarbeitet und auf der
          Benutzeroberfläche (UI) der Website anzeigt. Beispiele für
          Webanwendungen sind Webshops, Dashboards oder auch interne Tools zur
          Automatisierung von Unternehmensprozessen.
        </p>
        <p>
          Auch wenn wir uns auf die Entwicklung von Webanwendungen spezialisiert
          haben, können wir auch statische Websites entwickeln und diese auf
          optimale Performance und Suchmaschinenoptimierung bringen. <br />
        </p>
      </section>

      <section>
        <h2>Optimale Plattformabdeckung</h2>
        <p>
          Webanwendungen haben den Vorteil, dass sie auf allen Plattformen
          problemlos aufrufbar sind, ohne dass eine App installiert werden muss.
        </p>
      </section>

      <section>
        <h2>Wir begleiten Dich von der Idee bis zum Release</h2>
        <ol>
          <li>
            Wir besprechen Deine Idee und erarbeiten gemeinsam die Anforderungen
            an die Webanwendung.
          </li>
          <li>
            Wir entwickeln einen Prototyp, der die Funktionalität der
            Webanwendung zeigt.
          </li>
          <li>
            Wir besprechen den Prototypen und erarbeiten gemeinsam die finale
            Funktionalität.
          </li>
          <li>
            Wir entwickeln die Webanwendung und sind im ständigen Kontakt zur
            weiteren Verbesserung des Produkts.
          </li>
          <li>
            Wir testen die Webanwendung und bereiten sie für den Release vor.
          </li>
          <li>
            Wir veröffentlichen die Webanwendung und stehen für Support und
            Wartung zur Verfügung.
          </li>
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
