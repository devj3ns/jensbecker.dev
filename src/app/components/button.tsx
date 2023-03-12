import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export function LinkButton({
  className,
  children,
  href,
  icon,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  icon?: IconProp;
  style?: "primary" | "text" | "text-primary";
}) {
  return (
    <Link
      href={{ pathname: href }}
      className={
        "gap-5 btn " +
        " " +
        className +
        " " +
        ((style ?? "primary") == "primary"
          ? "btn-primary text-slate-50"
          : style == "text"
          ? "btn-ghost"
          : "btn-ghost text-primary")
      }
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
  style?: "primary" | "text";
  loading?: boolean;
  type?: "submit" | "button" | "reset";
}) {
  style = style || "primary";

  return (
    <button
      type={type ?? "button"}
      className={
        "gap-5 btn " +
        " " +
        className +
        " " +
        (style == "primary" ? "btn-primary text-slate-50" : "btn-ghost")
      }
      onClick={onClick}
    >
      {children}
      {icon && !loading && <FontAwesomeIcon icon={icon} />}
      {loading && <FontAwesomeIcon icon={faSpinner} spin />}
    </button>
  );
}
