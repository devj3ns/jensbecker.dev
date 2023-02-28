import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={font.className}>
      <h1>Jens Becker</h1>
    </main>
  );
}
