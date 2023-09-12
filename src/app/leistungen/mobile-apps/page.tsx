import Image from "next/image";
import { LinkButton } from "../../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Entwicklung mobiler Apps",
  description: `Entwickelung einer individuellen mobilen App zur Erweiterung Deines Unternehmens. 
                Wir begleiten Dich von der Idee bis zum Release und darüber hinaus.`, // 149 of 160 characters
};

// TODO: Beispielprojekt/Referenz einbinden

export default function MobileApps() {
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
        <h1>Entwicklung mobiler Apps</h1>
        <p>
          Du möchtest Dein Unternehmen um eine individuelle mobile App
          erweitern? <br />
          Wir entwickeln deine App für alle gängigen Plattformen und begleiten
          Dich von der Idee bis zum Release und darüber hinaus.
        </p>
      </section>

      <section>
        <h2>Maßgeschneiderte Lösungen</h2>
        <p>
          Wir bieten Dir maßgeschneiderte Lösungen für Deine Herausforderungen.
          Wir entwickeln für Dich Deine individuelle App für verschiedene
          Bedürfnisse in verschiedensten Bereichen.
        </p>
        Beispiele für Apps:
        <ul>
          <li>KiTa Elternkommunikation</li>
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
        Für die Entwicklung von Apps verwenden wir ein weitverbreitetes,
        plattformübergreifendes Framework namens{" "}
        <a href="https://flutter.dev">Flutter</a>. Der Vorteil daran ist, dass
        dieselbe Codebasis sowohl für die Android als auch die iOS-App benutzt
        werden kann, was den Entwicklungsprozess beschleunigt und die
        Programmierkosten verringert. Zusätzlich kann die App auch fürs Web
        bereitgestellt werden. Somit sind die drei gängigsten Plattformen mit
        einer App abgedeckt.
      </section>

      <section>
        <h2>Persönliche Begleitung von der Idee bis zum Release</h2>

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
