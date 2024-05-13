export const metadata = {
  title: "Impressum",
  description: "",
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};

export default function Contact() {
  return (
    <>
      <h1 className="mb-0 text-center">Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Jens Becker
        <br />
        Ehranger Str. 212
        <br />
        54293 Trier
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 1522 8461402
        <br />
        E-Mail: info@jhb.software
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </>
  );
}
