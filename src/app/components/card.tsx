import { HoverEffect } from "./hoverEffect";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <HoverEffect className="px-5 py-5 rounded-md bg-neutral-200/50">
      {children}
    </HoverEffect>
  );
}
