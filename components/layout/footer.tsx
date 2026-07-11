import Link from "next/link";
import Webring from "../webring";
import { geistMono } from "@/fonts/config";
import { GithubIcon, LinkedInIcon } from "../icons";

const FOOTER_LINK_STYLE = `${geistMono.className} button-link w-full mb-2`;

export default function Footer() {
  return (
    <div className={`footer-bg min-h-16`}>
      <div className={`max-w-4xl mx-auto py-4 pb-16`}>
        <Webring />
        <div className={`flex flex-row gap-0 px-4 justify-center items-start content-start`}>
          <div className={`text-left w-1/2`}>
            <h1 className={`text-3xl! sm:text-4xl! md:text-5xl!`}>Contact Me</h1>
            <Link
              className={`${FOOTER_LINK_STYLE} py-10.5`}
              href={`mailto:${process.env.EMAIL_ADDRESS!}`}
              target="_blank"
            >
              {process.env.EMAIL_ADDRESS!}
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
