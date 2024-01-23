import { HoverEffect } from "./hoverEffect";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <HoverEffect
      className={"px-5 py-5 rounded-md bg-neutral-100 " + className ?? ""}
    >
      {children}
    </HoverEffect>
  );
}
