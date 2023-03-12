"use client";

import Link from "next/link";
import { NavbarTabs } from "./tabs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const tabs = [
    {
      label: "Startseite",
      id: "/",
    },
    {
      label: "App Entwicklung",
      id: "/appentwicklung",
    },
    {
      label: "Web Entwicklung",
      id: "/webentwicklung",
    },
    {
      label: "Referenzen",
      id: "/referenzen",
    },
    {
      label: "Kontakt",
      id: "/kontakt",
    },
  ];
  const initialTabId = "Startseite";

  const pathname = usePathname();

  const selectedTabIndex = tabs.findIndex(
    (tab) => tab.id === pathname ?? initialTabId
  );

  return (
    <nav className="flex flex-row items-center content-center justify-between p-2 mx-auto max-w-7xl">
      <Link href={{ pathname: "/" }}>
        <h1 className="text-2xl font-bold">Jens Becker</h1>
      </Link>

      <div className="flex flex-col items-center justify-center max-w-6xl space-y-24">
        <NavbarTabs tabs={tabs} selectedTabIndex={selectedTabIndex} />
      </div>
    </nav>
  );
}
