'use client';

import { bricolageGrotesque } from '@/fonts/config';
import { siteConfig } from '@/config/site';

import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';
import { GithubIcon, LinkedInIcon } from '../icons';
import { BUTTON_STYLE } from '@/config/constants';
import { useState } from 'react';

export default function Navbar() {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <div className={`fixed top-0 w-screen z-50 ${bricolageGrotesque.className} font-black text-3xl`}>
      <div className={`navbar h-16! bg-base-100 w-full border-b-2 border-b-red`}>
        <div className={`flex flex-row w-full items-center text-center justify-between`}>
          <div>
            <Link href="/">AJ</Link>
          </div>
          <div className={``}>
            {siteConfig.navItems.map((navItem, idx) => (
              <Link key={idx} href={navItem.href} className={`font-bold text-xl p-2`}>
                {navItem.label.toWellFormed()}
              </Link>
            ))}
          </div>
          <div className={`flex flex-row gap-3`}>
            <Link
              id="linkedinButton"
              className={`${BUTTON_STYLE}`}
              href={`https://linkedin.com/in/ajansiewicz`}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link
              id="githubButton"
              className={`${BUTTON_STYLE}`}
              href={`https://github.com/alexanderjalexander`}
              target="_blank"
            >
              <GithubIcon />
            </Link>
            <ThemeSwitch />

            <label id="hamburgerButton" className={`swap swap-rotate ${BUTTON_STYLE}`}>
              <input
                type="checkbox"
                onChange={(event) => setDropdownActive(event.target.checked)}
              />

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
