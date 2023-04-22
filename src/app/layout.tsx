import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Footer } from "./components/footer";
import Navbar from "./components/navbar/navbar";
import classNames from "classnames";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";

config.autoAddCss = false;

const shortTitle = "Jens Becker";
const title = "Jens Becker - Individuelle Softwarelösungen";
const description =
  "Als Inhaber-geführtes Softwareentwicklungsunternehmen entwickeln wir zukunftsorientierte Individualsoftware mit Fokus auf App- & Webentwicklung, um Dein Unternehmen voranzubringen.";
const url = "https://jensbecker.dev";

export const metadata = {
  title: {
    default: title,
    template: `%s | ${shortTitle}`,
  },
  description: description,
  icons: {
    shortcut: "/favicon.ico",
    icon: "images/icon.png",
    apple: "images/icon.png",
  },
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: shortTitle,
    images: [
      {
        url: `${url}/images/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "de-DE",
    type: "website",
  },
  twitter: {
    title: shortTitle,
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const font = localFont({ src: "Montserrat-VariableFont.ttf" });

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
