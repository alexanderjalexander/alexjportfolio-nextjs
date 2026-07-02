import { bricolageGrotesque } from "@/fonts/config";
import { siteConfig } from "@/config/site";

import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
  return (
    <div className={`${bricolageGrotesque.className} font-black text-3xl`}>
      <div className={`sticky top-0 z-50 px-4 navbar bg-base-100 w-full border-b-2 border-b-red`}>
        <div>
          <Link href="/">AJ</Link>
        </div>
        <div className={`mx-auto`}>
          {siteConfig.navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.href}
              className={`font-bold text-xl p-2`}
            >
              {navItem.label.toWellFormed()}
            </Link>
          ))}
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
