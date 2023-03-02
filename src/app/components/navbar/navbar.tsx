"use client";

import { CSSTabs } from "./tabs";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const tabs = [
    {
      label: "Startseite",
      id: "/",
    },
    {
      label: "Leistungen",
      id: "/services",
    },
    {
      label: "Projekte",
      id: "/projects",
    },
    {
      label: "Kontakt",
      id: "/contact",
    },
  ];
  const initialTabId = "Startseite";

  const pathname = usePathname();

  const selectedTabIndex = tabs.findIndex(
    (tab) => tab.id === pathname ?? initialTabId
  );

  return (
    <nav className="flex flex-row items-center content-center justify-between p-2 mx-auto max-w-7xl">
      <h1 className="text-2xl font-semibold">Jens Becker</h1>

      <div className="flex flex-col items-center justify-center max-w-6xl space-y-24">
        <CSSTabs tabs={tabs} selectedTabIndex={selectedTabIndex} />
      </div>
    </nav>
  );
}
