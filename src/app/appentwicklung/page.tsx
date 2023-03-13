import Image from "next/image";
import { LinkButton } from "../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Appentwicklung",
};

export default function Appentwicklung() {
  return (
    <main>
      <section className="mb-32 text-center">
        <Image
          className="mx-auto"
          src="/images/appdev.jpg"
          alt="Portrait of Jens Becker"
          width={225}
          height={225}
        />
        <h1>Dein Ansprechpartner für Appentwicklung</h1>
        <p>
          Du möchtest dein Unternehmen um eine mobile App erweitern? Wir
          unterstützen Dich von der Idee bis zum Release.
        </p>
      </section>

      <section>
        <h2>Mobile Applikationen auf Deine Bedürfnisse zugeschnitten</h2>
        <p>
          Wir als Agentur für individuelle-App-Entwicklung bieten Dir
          maßgeschneiderte Lösungen für Deine Herausforderungen. Wir entwickeln
          für Dich Deine individual App für verschiedene Bedürfnisse in
          verschiedensten Bereichen.
        </p>

        <LinkButton href="/referenzen" icon={faChevronRight} style="text">
          Erforsche unsere Referenzen
        </LinkButton>
      </section>

      <section>
        <h2>Eine App für alle Plattformen</h2>
        Für die Entwicklung von Apps verwende ich ein weitverbreitetes
        plattformübergreifendes Framework namens{" "}
        <a href="https://flutter.dev">Flutter</a>.
        <br />
        Der Vorteil daran ist, dass ich dieselbe Codebasis verwenden kann sowohl
        für Android als auch für iOS, was den Entwicklungsprozess erheblich
        beschleunigt und die Programmierkosten verringert. Zusätzlich kann die
        App auch als Web-App bereitgestellt werden. Somit hast Du die drei
        gängisten Plattformen mit einer App abgedeckt.
      </section>

      <section>
        <h2>Wir begleiten Dich von der Idee bis zum Release</h2>

        <ol>
          <li>
            Wir besprechen Deine Idee und erarbeiten gemeinsam die Anforderungen
            an die Webanwendung.
          </li>
          <li>
            Wir entwickeln einen Prototypen, der die Funktionalität der App
            zeigt.
          </li>
          <li>
            Wir besprechen den Prototypen und erarbeiten gemeinsam die finale
            Funktionalität.
          </li>
          <li>
            Wir entwickeln die Webanwendung und sind im ständigen Kontakt zur
            weiteren verbesserung des Produkts.
          </li>
          <li>Wir testen die App und bereiten sie für den Release vor.</li>
          <li>
            Wir veröffentlichen die App und stehen für Support und Wartung zur
            Verfügung.
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
