import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-3xl font-bold text-blue-900">
          Individuelle Softwarelösungen für Dein Unternehmen
        </h2>

        <div className="inline-flex items-center justify-center px-3 py-2 mr-auto font-medium text-white transition-all bg-blue-900 rounded-md shadow-md cursor-pointer hover:bg-blue-800">
          Termin vereinbaren
        </div>

        <span>
          Als Inhaber-geführtes Softwareentwicklungsunternehmen entwickeln wir
          zukunftsorientierte und individuelle Software, um Dein Unternehmen
          voranzubringen.
        </span>

        <Image
          className="shadow-md rounded-3xl"
          src="/images/portrait.jpg"
          alt="Portrait of Jens Becker"
          width={225}
          height={225}
        />
      </div>
    </main>
  );
}
