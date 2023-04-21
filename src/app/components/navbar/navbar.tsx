"use client";

import { useEffect, useState } from "react";

import { Button } from "../button";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { NavbarTabs } from "./tabs";
import classNames from "classnames";
import { usePathname } from "next/navigation";
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
  const [modalOpened, setModalOpened] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(0);

  const selectedTabIndex = tabs.findIndex(
    (tab) => tab.id === pathname ?? initialTabId
  );

  const navbarScrollDelay = 30;
  const isMediumScreen = width > 768;

  useEffect(() => {
    // Show navbar on page change
    setShowNav(true);
  }, [pathname]);

  const handleScroll = () => {
    const lastScrollY = scrollY;
    setScrollY(window.pageYOffset);

    if (Math.abs(window.pageYOffset - lastScrollY) >= navbarScrollDelay) {
      return;
    }

    // Close modal if user scrolls down
    if (window.pageYOffset > navbarScrollDelay) {
      modalOpened && setModalOpened(false);
    }

    setShowNav(window.pageYOffset < lastScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={classNames(
        "w-full fixed transition-all z-10",
        showNav || isMediumScreen ? "translate-y-0" : "-translate-y-[100%]",
        scrollY > navbarScrollDelay || modalOpened ? "bg-neutral-100" : "",
        scrollY > 0 ? "shadow-md" : ""
      )}
    >
      <nav className="flex flex-row items-center content-center justify-between px-5 py-3 mx-auto max-w-7xl">
        <Link href={{ pathname: "/" }}>
          <h1 className="text-2xl font-bold">Jens Becker</h1>
        </Link>

        <div className="hidden md:block">
          <div className="flex flex-col items-center justify-center max-w-6xl space-y-24 ">
            <NavbarTabs tabs={tabs} selectedTabIndex={selectedTabIndex} />
          </div>
        </div>

        <div className="block md:hidden">
          <Hamburger
            toggled={modalOpened}
            toggle={setModalOpened}
            rounded
            size={26}
          />
        </div>
      </nav>

      {modalOpened && (
        <div
          className={
            "absolute flex flex-col w-full gap-3 bg-neutral-100 shadow-md pb-4"
          }
        >
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
