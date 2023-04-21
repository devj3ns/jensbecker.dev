import classnames from "classnames";

export function HoverEffect({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classnames(
        "transition duration-300 ease-in-out transform shadow hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-400/50",
        className
      )}
    >
      {children}
    </div>
  );
}
