export type Testimonial = {
  author: {
    name: string;
    companyName: string;
    comanyURL: URL;
    avatarFileName: string;
  };
  date: Date;
  text: string;
};

export const testimonials: Testimonial[][] = [
  // First column
  [
    {
      author: {
        name: "René Schäfer",
        companyName: "Nestwärme e.V.",
        comanyURL: new URL("https://nestwaerme.de/"),
        avatarFileName: "rene-schaefer.webp",
      },
      date: new Date("2021-03-01"),
      text: `Dank der Nestwärme KiTa App sind jetzt alle relevanten Informationen
        wie Elternbriefe oder Termine jederzeit in App abrufbar. Endlich
        Schluss mit der Zettelwirtschaft.`,
    },
    {
      author: {
        name: "Kati Rucker",
        companyName: "The Lighthaus",
        comanyURL: new URL("https://www.thelighthaus.de/"),
        avatarFileName: "kati-rucker.webp",
      },
      date: new Date("2023-04-06"),
      text: `Trotz der teilweisen hohen Komplexität unserer Anforderungen hat
        Jens immer sofort eine Lösung und arbeitet sich in die verschiedenen
        Thematiken ein. Dabei sieht er nicht einfach nur einzelne
        Anforderung, sondern betrachtet alle Facetten und bringt dabei
        eigenständig Idee und mögliche weitere Ansätze ein.`,
    },
  ],
  // Second column
  [
    {
      author: {
        name: "Moritz Liederbach",
        companyName: "The Lighthaus",
        comanyURL: new URL("https://www.thelighthaus.de/"),
        avatarFileName: "moritz-liederbach.webp",
      },
      date: new Date("2023-04-06"),
      text: `Es macht einfach nur unglaublich viel Freude, mit Jens zusammen
        zuarbeiten. Mit seiner Hilfe konnten wir neue Funktionen auf unserer
        Website integrieren und wichtige Prozesse perfekt optimieren.`,
    },
    {
      author: {
        name: "Sandra Küfner",
        companyName: "Kreativeria",
        comanyURL: new URL("https://kreativeria.com/"),
        avatarFileName: "sandra-kuefner.webp",
      },
      date: new Date("2023-04-20"),
      text: `Die Zusammenarbeit mit Jens war angenehm und unkompliziert. Er hat
        tolle Ideen und versucht alles umzusetzen, was man selbst an
        Vorschlägen mitbringt. Unsere Zusammenarbeit hat mir sehr viel Spaß
        gemacht und ich liebe meine neue Website!`,
    },

    {
      author: {
        name: "Jacqueline Baasch",
        companyName: "Wertvolle Impulse",
        comanyURL: new URL("https://wertvolle-impulse.de/"),
        avatarFileName: "jacqueline-baasch.webp",
      },
      date: new Date("2023-08-31"),
      text: `Jens hat für meine Praxis die Website erstellt und betreut diese regelmäßig. 
        Er hilft mir schnell und unkompliziert bei allen Fragen und Anliegen. Sein Engagement und Kompetenz 
        sind einfach bemerkenswert. Ich fühle mich stets gut betreut und unterstützt. 
        Sein Einfühlungsvermögen hat mir geholfen die richtige Darstellung für meine Arbeit zu finden. DANKE!`,
    },
  ],
  // Third column
  [
    {
      author: {
        name: "Syvlia Zimmerer",
        companyName: "Mighty Way",
        comanyURL: new URL("https://mighty-way.com/de/"),
        avatarFileName: "sylvia-zimmerer.webp",
      },
      date: new Date("2023-09-07"),
      text: `Ich bin begeistert von Jens brillanten Ideen und Lösungen. 
        In kürzester Zeit hat er aus meinen Wünschen, Ideen und Texten eine grandiose Website geschaffen. 
        Dabei wurden meine Erwartungen weit übertroffen. Die Zusammenarbeit war erstklassig und ich kann 
        JHB-Software wärmstens weiterempfehlen.`,
    },
    {
      author: {
        name: "Christoph Paterok",
        companyName: "seo.care",
        comanyURL: new URL("https://seo.care"),
        avatarFileName: "christoph-paterok.webp",
      },
      date: new Date("2023-09-08"),
      text: `Jens ist schnell, pragmatisch und sehr genau – das macht das Zusammenarbeiten mit ihm für mich sehr einfach und ich kann mich total auf das Ergebnis verlassen. 
    Wir haben bereits in unterschiedlichen Projekten zusammengearbeitet und überall war Jens ein absoluter Gewinn für das Ergebnis. Freue mich auf viele weitere Projekte. :)`,
    },
  ],
];
