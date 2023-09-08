"use client";

import { faBuilding, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect } from "react";

import { Button } from "./button";
import { Card } from "./card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classNames from "classnames";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";

export default function Testimonials() {
  let [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={classNames(
          "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
          !expanded && "max-h-[33rem] overflow-hidden"
        )}
      >
        {testimonials.map((column, i) => (
          <div
            key={i}
            className={classNames(
              "space-y-5",
              // Hide third column on sm and md, because there we need only 2 columns
              // TODO: find a solution without hiding the third column. Using columns-X instead of grid is an option, but then break-inside-avoid-column hides the lower cards
              i === 2 && "block sm:hidden md:hidden lg:block"
            )}
          >
            {column.map((testimonial) => (
              <Card key={testimonial.author.name}>
                <div className="flex flex-row items-center gap-5 md:flex-col lg:flex-row ">
                  <Image
                    src={
                      "/images/testimonials/" +
                      testimonial.author.avatarFileName
                    }
                    className="m-0 rounded-full aspect-square"
                    width={75}
                    height={75}
                    alt={"Portrait of " + testimonial.author.name}
                  />

                  <div>
                    <div className="font-bold">{testimonial.author.name}</div>
                    <div className="not-prose">
                      <a
                        href={testimonial.author.comanyURL.toString()}
                        className="flex flex-row items-center gap-2 text-sm text-gray-500"
                      >
                        <FontAwesomeIcon icon={faBuilding} />
                        {testimonial.author.companyName}
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mb-0">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        ))}
      </div>
      {!expanded && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center pt-32 pb-8 pointer-events-none bg-gradient-to-t from-white dark:from-neutral-150">
          <Button
            type="button"
            className="relative translate-y-4 pointer-events-auto"
            style="primary"
            onClick={() => setExpanded(!expanded)}
            icon={faChevronDown}
          >
            Mehr anzeigen
          </Button>
        </div>
      )}
    </div>
  );
}

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
