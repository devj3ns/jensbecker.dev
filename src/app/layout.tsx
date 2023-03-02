import "./globals.css";

import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/navbar";

export const metadata = {
  title: {
    default: "Jens Becker",
    template: "%s | Jens Becker",
  },
  description: "Software Developer",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={font.className}>
        <Navbar />
        <div className="px-2 mx-auto my-10 max-w-7xl">{children}</div>
      </body>
    </html>
  );
}
