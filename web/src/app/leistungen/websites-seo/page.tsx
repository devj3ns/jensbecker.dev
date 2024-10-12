import Image from "next/image";
import { LinkButton } from "../../components/button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Entwicklung von Websites & SEO",
  description: `Entwicklung einer attraktiven Website inklusive
  Suchmaschinenoptimierung (SEO), um Dein Unternehmen Online zu
  präsentieren und Kunden zu erreichen.`, // 147 of 160 characters
};

// TODO: Beispielprojekt/Referenz einbinden

export default function WebsitesAndSEO() {
  return (
    <main>
      <section className="mb-32 text-center">
        <Image
          className="mx-auto"
          src="/images/websitedev.webp"
          alt="Grafische Darstellung der Webentwicklung"
          width={512}
          height={512}
          style={{ height: 125, width: "auto" }}
          priority
        />
        <h1>Entwicklung von Websites & SEO</h1>
        <p>
          Du möchtest Dein Unternehmen online bestmöglich präsentieren und
          Kunden erreichen? <br />
          Wir entwickeln für Dich Deine individuelle Website und optimieren sie
          für Suchmaschinen.
        </p>
      </section>

      <section>
        <h2>Individuelle Entwicklung</h2>
        <p>
          Egal, ob Dein Unternehmen schon eine Website hat, oder noch keine
          vorhanden ist. Wir entwickeln für Dich eine individuelle Website, die
          Deine Unternehmensziele unterstützt. Egal, ob kleine Landingpage oder
          größere mehrsprachige Website, wir entwickeln für Dich die passende
          Lösung.
        </p>
        Beispiele für Leistungen:
        <ul>
          <li>
            Entwicklung einer neuen Website inklusive Suchmaschinenoptimierung
          </li>
          <li>Modernisierung einer bestehenden Website</li>
          <li>Suchmaschinenoptimierung einer bestehenden Website</li>
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
        <h2>Suchmaschinenoptimierung</h2>
        <p>
          Wir legen großen Wert auf die Optimierung der Website für
          Suchmaschinen (SEO). Schon lange ist bei Websites nicht nur das
          wichtig, was der Kunde sieht. Hinter den Kulissen gibt es viele
          Stellschrauben, die gedreht werden müssen, um die Website für
          Suchmaschinen so zu präsentieren, dass diese möglichst viele Menschen
          erreicht. Wir kümmern uns um die technische und die inhaltliche
          Optimierung Deiner Website, sodass sie von potenziellen Kunden
          bestmöglich gefunden wird.
        </p>
      </section>

      <section>
        <h2>Pflege, Wartung & Änderungen</h2>
        <p>
          Weil sich viele Kunden eine langfristige Betreuung der Website
          wünschen, bieten wir ein jährliches Wartungspaket an, das folgende
          Leistungen beinhaltet:
          <ul>
            <li>kleinere inhaltliche Anpassungen (eine Stunde inklusive)</li>
            <li>Regelmäßige WordPress Core und Plug-in Updates</li>
            <li>Regelmäßige Datensicherung</li>
            <li>Aktuell halten der Datenschutzerklärung</li>
          </ul>
          Das Wartungspaket wird pro Kalenderjahr im Voraus in Rechnung
          gestellt. Wir verstehen, dass sich die Bedürfnisse ändern können.
          Daher kann das Paket jederzeit abbestellt werden und wird dann am
          Anfang des nächsten Jahres nicht mehr in Rechnung gestellt.
        </p>
      </section>

      <section>
        <h2>Umsetzung</h2>
        <p>
          Zur technischen Umsetzung Deiner Website verwenden wir das bekannte
          Content-Management-System{" "}
          <a href="https://de.wordpress.org/">WordPress</a> in Kombination mit
          dem leistungsstarken Page-Builder{" "}
          <a href="https://elementor.com/">Elementor</a>. Mit dieser Kombination
          können wir Dir schnellstmöglich eine Website entwickeln, die Deine
          Unternehmensziele unterstützt und gleichzeitig einfach zu verwalten
          ist.
        </p>
      </section>

      <section>
        <h2>Persönliche Begleitung von der Idee bis zum Release</h2>

        <ol>
          <li>
            Kennenlernen Deines Unternehmens und Besprechung Deiner Ideen und
            Wünsche
          </li>
          <li>Entwicklung eines visuellen Entwurfs</li>
          <li>Besprechung des Entwurfs und Erarbeitung des finalen Designs</li>
          <li>kontinuierlicher Kontakt während der Entwicklung der Website</li>
          <li>Veröffentlichung/Release der Website</li>
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
