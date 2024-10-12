import { ContactForm } from "./components/ContactForm";
import { ContactInformation } from "./components/ContactInformation";

export const metadata = {
  title: "Kontakt",
  description:
    "Du benötigst Unterstützung beim Realisieren Deines Software Projekts? Wir helfen dabei, Deine Vision zu verwirklichen. Hinterlasse gerne eine Nachrich",
};

export default function Contact() {
  return (
    <main className="md:mx-32">
      <h1 className="mb-0 text-center">Kontakt</h1>
      <p className="mb-10 text-center">
        Du benötigst Unterstützung beim Realisieren Deines Software Projekts?
        <br />
        Wir helfen dabei, Deine Vision zu verwirklichen. Hinterlasse gerne eine
        Nachricht.
      </p>

      <div className="flex flex-col gap-10">
        <ContactInformation />

        <ContactForm />
      </div>
    </main>
  );
}
