import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import classNames from "classnames";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function buttonStyles(style: ButtonStyle) {
  const defaultStyles =
    "gap-3 flex inline-flex items-center text-sm rounded-md px-4 py-3 uppercase no-underline font-semibold transition-all duration-200";

  switch (style) {
    case "primary":
      return classNames(
        defaultStyles,
        "bg-primary text-neutral-100 hover:bg-primary hover:bg-primaryDark"
      );
    case "text":
      return classNames(defaultStyles, "text-gray-700 hover:bg-neutral-200");
    case "text-primary":
      return classNames(defaultStyles, "text-primary hover:bg-neutral-200");
    case "light":
      return classNames(
        defaultStyles,
        "bg-neutral-200 hover:bg-neutral-300 text-gray-700"
      );
    case "light-primary":
      return classNames(
        defaultStyles,
        "bg-neutral-200 hover:bg-neutral-300 text-primary"
      );
  }
}

type ButtonStyle =
  | "primary"
  | "text"
  | "text-primary"
  | "light"
  | "light-primary";

export function LinkButton({
  className,
  children,
  href,
  searchParams,
  icon,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  searchParams?: string;
  icon?: IconProp;
  style?: ButtonStyle;
}) {
  style ??= "primary";

  return (
    <Link
      href={!href.startsWith("?") ? { pathname: href } : { search: href }}
      className={classNames(buttonStyles(style), className)}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </Link>
  );
}

export function Button({
  className,
  children,
  onClick,
  icon,
  style,
  loading,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: IconProp;
  style?: ButtonStyle;
  loading?: boolean;
  type?: "submit" | "button" | "reset";
}) {
  style ??= "primary";
  type ??= "button";

  return (
    <button
      type={type}
      className={classNames(buttonStyles(style), className)}
      onClick={onClick}
    >
      {children}
      {icon && !loading && <FontAwesomeIcon icon={icon} />}
      {loading && <FontAwesomeIcon icon={faSpinner} spin />}
    </button>
  );
}
