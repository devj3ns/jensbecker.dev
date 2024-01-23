import Image from "next/image";
import { LinkButton } from "./components/button";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFoundPage() {
  return (
    <section className="mb-32 text-center">
      <h1 className="mb-0">Seite nicht gefunden</h1>

      <p>Diese Seite existiert nicht.</p>

      <Image
        src="/images/404.webp"
        alt="404 - Seite nicht gefunden"
        width={1920}
        height={1080}
        quality={100}
        className="max-w-md mx-auto md:max-w-lg"
      />

      <LinkButton href="/" icon={faHome}>
        Zur Startseite
      </LinkButton>
    </section>
  );
}
