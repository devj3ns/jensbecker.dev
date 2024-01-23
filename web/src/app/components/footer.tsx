import { LinkButton } from "./button";
import { SITE_SHORT_TITLE } from "@/shared/constants";
import classNames from "classnames";

export function Footer({ boxedWidthClasses }: { boxedWidthClasses: string }) {
  return (
    <footer
      className={classNames(
        "flex flex-col md:flex-row items-center justify-between py-3 mt-auto w-full gap-3",
        boxedWidthClasses
      )}
    >
      <div className="font-semibold text-gray-700">
        {SITE_SHORT_TITLE} &copy; {new Date().getFullYear()}
      </div>
      <div className="flex flex-col items-center md:gap-3 md:flex-row">
        <LinkButton style="text" href="/impressum">
          Impressum
        </LinkButton>
        <LinkButton style="text" href="/datenschutz">
          Datenschutz
        </LinkButton>
      </div>
    </footer>
  );
}
