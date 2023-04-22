import Image from "next/image";
import { LinkButton } from "../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Appentwicklung",
  description:
    "Wir entwickeln für Dich Deine individuelle mobile App und unterstützen Dich von der Idee bis zum Release.",
};

export default function Appentwicklung() {
  return (
    <main>
      <section className="mb-32 text-center">
        <Image
          className="mx-auto"
          src="/images/appdev.webp"
          alt="Grafische Darstellung der Appentwicklung"
          width={512}
          height={512}
          style={{ height: 125, width: "auto" }}
          priority
        />
        <h1>Dein Partner für Appentwicklung</h1>
        <p>
          Du möchtest Dein Unternehmen um eine mobile App erweitern? Wir
          unterstützen Dich von der Idee bis zum Release.
        </p>
      </section>

      <section>
        <h2>Mobile Applikationen auf Deine Bedürfnisse zugeschnitten</h2>
        <p>
          Wir bieten Dir maßgeschneiderte Lösungen für Deine Herausforderungen.
          Wir entwickeln für Dich Deine individuelle App für verschiedene
          Bedürfnisse in verschiedensten Bereichen.
        </p>
        Beispiele für Apps:
        <ul>
          <li>KiTa Elternkommunikation</li>
          <li>Marketing Automatisierung</li>
          <li>Projektmanagement</li>
          <li>Firmen Chatplattform</li>
          <li>Personalmanagement</li>
          <li>Zeiterfassung</li>
        </ul>
        <LinkButton href="/referenzen" icon={faChevronRight} style="text">
          Erforsche unsere Referenzen
        </LinkButton>
      </section>

      <section>
        <h2>Eine App für alle Plattformen</h2>
        Für die Entwicklung von Apps verwende ich ein weitverbreitetes,
        plattformübergreifendes Framework namens{" "}
        <a href="https://flutter.dev">Flutter</a>.
        <br />
        Der Vorteil daran ist, dass dieselbe Codebasis sowohl für die Android
        als auch die iOS App benutzt werden kann, was den Entwicklungsprozess
        beschleunigt und die Programmierkosten verringert. Zusätzlich kann die
        App auch als Web-App bereitgestellt werden. Somit hast Du die drei
        gängigsten Plattformen mit einer App abgedeckt.
      </section>

      <section>
        <h2>Wir begleiten Dich von der Idee bis zum App-Release</h2>

        <ol>
          <li>Besprechung Deiner Ideen, Anforderungen und Wünschen</li>
          <li>
            Entwicklung eines Prototyps, der die Funktionalität der App zeigt
          </li>
          <li>
            Besprechung des Prototyps und Erarbeitung der finalen
            Funktionalitäten
          </li>
          <li>kontinuierlicher Kontakt während der Entwicklung des Produkts</li>
          <li>Testphase der App und Vorbereitung für den Release</li>
          <li>Veröffentlichung/Release der App</li>
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
