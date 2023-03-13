"use client";
import Link from "next/link";
import { NavbarTabs } from "./tabs";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const selectedTabIndex = tabs.findIndex(
    (tab) => tab.id === pathname ?? initialTabId
  );

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div>
      <nav className="flex flex-row items-center content-center justify-between p-2 mx-auto max-w-7xl">
        <Link href={{ pathname: "/" }}>
          <h1 className="text-2xl font-bold">Jens Becker</h1>
        </Link>

        <div className="hidden md:block">
          <div className="flex flex-col items-center justify-center max-w-6xl space-y-24 ">
            <NavbarTabs tabs={tabs} selectedTabIndex={selectedTabIndex} />
          </div>
        </div>

        <div className="block md:hidden">
          <FontAwesomeIcon
            icon={modalOpened ? faTimes : faBars}
            onClick={() => setModalOpened(!modalOpened)}
            size="xl"
          />
        </div>
      </nav>

      {modalOpened && (
        <div className="absolute flex flex-col w-full gap-3 transition-all bg-white shadow-lg">
          {tabs.map((tab, i) => {
            return (
              <Button
                key={tab.id}
                style="text"
                onClick={() => {
                  router.push(tab.id);
                  setModalOpened(false);
                }}
                className={selectedTabIndex == i ? "text-primary" : ""}
              >
                {tab.label}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
