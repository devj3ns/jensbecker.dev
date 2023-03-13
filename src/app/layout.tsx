import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
  title: {
    default: "Jens Becker",
    template: "%s | Jens Becker",
  },
  description: "Software Developer",
  icons: {
    shortcut: "/images/favicon.ico",
  },
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={font.className}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        }}
      >
        <Navbar />
        <div className="px-5 mx-auto my-10 mt-24 prose max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
