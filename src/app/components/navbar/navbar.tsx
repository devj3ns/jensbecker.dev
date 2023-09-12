"use client";

import { useEffect, useState } from "react";

import { Button } from "../button";
import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { NavbarTabs } from "./tabs";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navbar({
  boxedWidthClasses,
}: {
  boxedWidthClasses: string;
}) {
  const tabs = [
    {
      label: "Startseite",
      id: "/",
    },
    {
      label: "Mobile Apps",
      id: "/leistungen/mobile-apps",
    },
    {
      label: "Websites & SEO",
      id: "/leistungen/websites-seo",
    },
    {
      label: "Webanwendungen",
      id: "/leistungen/webanwendungen",
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
  const isMediumScreen = width > 768; // 768px = TailwindCSS md breakpoint

  useEffect(() => {
    // Show navbar on page change and update scrollY
    setShowNav(true);
    setScrollY(window.scrollY);
  }, [pathname]);

  const handleScroll = () => {
    const lastScrollY = scrollY;
    setScrollY(window.scrollY);

    if (Math.abs(window.scrollY - lastScrollY) >= navbarScrollDelay) {
      return;
    }

    // Close modal if user scrolls down
    if (window.scrollY > navbarScrollDelay) {
      modalOpened && setModalOpened(false);
    }

    setShowNav(window.scrollY < lastScrollY);
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
        scrollY > navbarScrollDelay || modalOpened
          ? "bg-neutral-100 shadow-md"
          : ""
      )}
    >
      <nav
        className={classNames(
          "flex flex-row items-center justify-between py-3",
          boxedWidthClasses
        )}
      >
        <Link href={{ pathname: "/" }}>
          <Image
            src="/images/logo.webp"
            alt="JHB Software Logo"
            width={170}
            height={40}
            quality={100}
            priority
          />
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
                  // TODO: fix this type error, so that there is no conversion needed
                  router.push(
                    tab.id as __next_route_internal_types__.RouteImpl<string>
                  );
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
