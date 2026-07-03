import Link from "next/link";
import Webring from "../webring";
import { BUTTON_STYLE } from "@/config/constants";
import { geistMono } from "@/fonts/config";
import { GithubIcon, LinkedInIcon } from "../icons";

const FOOTER_BG = "bg-base-100 border-t-2 border-base-content";

const FOOTER_LINK_STYLE = `${geistMono.className} ${BUTTON_STYLE} w-full mb-2`;

export default function Footer() {
  return (
    <div className={`min-h-16 ${FOOTER_BG}`}>
      <div className={`max-w-4xl mx-auto py-4 pb-16`}>
        <Webring />
        <div className={`flex flex-row gap-0 px-4 justify-center items-start content-start`}>
          <div className={`text-left w-1/2`}>
            <h1 className={`text-3xl! sm:text-4xl! md:text-5xl!`}>Contact Me</h1>
            <Link
              className={FOOTER_LINK_STYLE}
              href={`mailto:${process.env.EMAIL_ADDRESS!}`}
              target="_blank"
            >
              {process.env.EMAIL_ADDRESS!}
            </Link>
            <Link
              className={FOOTER_LINK_STYLE}
              href={`tel:${process.env.PHONE_NUMBER!}`}
              target="_blank"
            >
              {process.env.PHONE_NUMBER!}
            </Link>
          </div>
          <div className={`text-right w-1/2 px-2`}>
            <h1 className={`text-3xl! sm:text-4xl! md:text-5xl!`}>Socials</h1>
            <Link
              className={FOOTER_LINK_STYLE}
              href={`https://linkedin.com/in/ajansiewicz`}
              target="_blank"
            >
              <LinkedInIcon /> LinkedIn
            </Link>
            <Link
              className={FOOTER_LINK_STYLE}
              href={`https://github.com/alexanderjalexander`}
              target="_blank"
            >
              <GithubIcon /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
