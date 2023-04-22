import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HoverEffect } from "@/app/components/hoverEffect";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

export function ContactInformation() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 text-center md:flex-row md:text-left">
      <HoverEffect className="rounded-full">
        <Image
          className="m-0 rounded-full shadow-md"
          src="/images/portrait.webp"
          alt="Portrait von Jens Becker"
          width={225}
          height={225}
          style={{ height: 180, width: "auto" }}
        />
      </HoverEffect>
      <div className="flex flex-col gap-3 not-prose">
        <span className="text-lg font-bold">Jens Becker</span>
        <a href="tel:+49 1522 8461402">+49 1522 8461402</a>

        <a href="mailto:info@jensbecker.dev">info@jensbecker.dev</a>

        <div className="flex gap-5">
          <SocialIcon href="https://wa.me/+4915228461402" icon={faWhatsapp} />
          <SocialIcon href="https://github.com/devj3ns" icon={faGithub} />
          <SocialIcon href="https://twitter.com/devj3ns" icon={faTwitter} />
          <SocialIcon
            href="https://www.linkedin.com/in/jens-becker-6a9065178/"
            icon={faLinkedinIn}
          />
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: IconProp }) {
  return (
    <a href={href}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: 25 }} />
    </a>
  );
}
