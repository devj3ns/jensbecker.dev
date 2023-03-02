import {
  CSSProperties,
  FocusEvent,
  PointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";
import classNames from "classnames";

export type Tab = { label: string; id: string };

export const CSSTabs = ({
  tabs,
  selectedTabIndex,
}: {
  selectedTabIndex: number;
  tabs: Tab[];
}): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true);
  const isInitialRender = useRef(true);

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true);
    setHoveredTabIndex(null);
  };

  const onEnterTab = (
    e: PointerEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (!e.target || !(e.target instanceof HTMLButtonElement)) return;

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false);
      }

      return i;
    });
    setHoveredRect(e.target.getBoundingClientRect());
  };

  let hoverStyles: CSSProperties = { opacity: 0 };
  if (navRect && hoveredRect) {
    hoverStyles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
      hoveredRect.top - navRect.top
    }px,0px)`;
    hoverStyles.width = hoveredRect.width;
    hoverStyles.height = hoveredRect.height;
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`;
  }

  let selectStyles: CSSProperties = { opacity: 0 };
  if (navRect && selectedRect) {
    selectStyles.width = selectedRect.width * 0.8;
    selectStyles.transform = `translateX(calc(${
      selectedRect.left - navRect.left
    }px + 10%))`;
    selectStyles.opacity = 1;
    selectStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`;

    isInitialRender.current = false;
  }

  return (
    <nav
      ref={navRef}
      className="relative z-0 flex items-center justify-center flex-shrink-0 py-2"
      onPointerLeave={onLeaveTabs}
    >
      {tabs.map((item, i) => {
        return (
          <Link key={i} href={{ pathname: item.id }}>
            <button
              className={classNames(
                "text-md relative rounded-md flex items-center h-8 px-4 z-20 bg-transparent text-sm text-slate-500 cursor-pointer select-none transition-colors not-prose font-medium",
                {
                  "text-slate-700":
                    hoveredTabIndex === i || selectedTabIndex === i,
                }
              )}
              ref={(el) => (buttonRefs[i] = el)}
              onPointerEnter={(e) => onEnterTab(e, i)}
              onFocus={(e) => onEnterTab(e, i)}
            >
              {item.label}
            </button>
          </Link>
        );
      })}
      <div
        className="absolute z-10 top-0 left-0 rounded-md bg-gray-200 transition-[width]"
        style={hoverStyles}
      />
      <div
        className={"absolute z-10 bottom-0 left-0 h-0.5 bg-slate-500"}
        style={selectStyles}
      />
    </nav>
  );
};
