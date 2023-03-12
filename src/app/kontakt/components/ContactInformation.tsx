import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

export function ContactInformation() {
  return (
    <div className="flex gap-5 rounded-lg bg-primary">
      <div className="relative flex-none w-48 h-48">
        <Image
          src="/images/portrait.jpg"
          alt="Portrait of Jens Becker"
          fill
          className="m-0 rounded-tl-lg rounded-bl-lg"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 text-white not-prose">
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
      <FontAwesomeIcon icon={icon} style={{ fontSize: 25 }} color="white" />
    </a>
  );
}
