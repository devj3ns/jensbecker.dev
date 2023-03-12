export const metadata = {
  title: "Kontakt",
};

import { ContactForm } from "./components/ContactForm";
import { ContactInformation } from "./components/ContactInformation";

export default function Contact() {
  return (
    <main className="md:mx-32">
      <h1 className="mb-0 text-center">Kontakt</h1>
      <p className="mb-10 text-center">
        Du benötigst Unterstützung beim Realisieren Deines Software Projekts?
        Wir helfen dabei, Deine Vision zu verwirklichen. Hinterlasse uns gerne
        eine Nachricht.
      </p>

      <div className="flex flex-col gap-10">
        <ContactInformation />

        <ContactForm />
      </div>
    </main>
  );
}
