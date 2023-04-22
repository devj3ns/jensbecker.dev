import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Footer } from "./components/footer";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import classNames from "classnames";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
  title: {
    default: "Jens Becker",
    template: "%s | Jens Becker",
  },
  description: "Software Developer",
  icons: {
    shortcut: "/images/favicon/favicon.ico",
    icon: "images/favicon/icon.png",
    apple: "images/favicon/icon.png",
  },
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const boxedWidthClasses = "px-3 mx-auto max-w-7xl 7xl:px-0";

  return (
    <html lang="de" className={font.className}>
      <body
        className="min-h-screen md:flex-col md:flex bg-neutral-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.025)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        }}
      >
        <Navbar boxedWidthClasses={boxedWidthClasses} />
        <main className={classNames(boxedWidthClasses, "prose mt-24")}>
          {children}
        </main>
        <Footer boxedWidthClasses={boxedWidthClasses} />
      </body>
    </html>
  );
}
