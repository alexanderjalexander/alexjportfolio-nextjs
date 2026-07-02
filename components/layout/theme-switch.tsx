"use client";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useTheme } from "next-themes";

export const ThemeSwitch = ({}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div>
      <label className="swap swap-rotate btn btn-outline border-2 px-2! hover:bg-base-300 transition-colors duration-250">
        <input
          type="checkbox"
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <span className="swap-off">
          <SunFilledIcon />
        </span>
        <span className="swap-on">
          <MoonFilledIcon />
        </span>
      </label>
    </div>
  );
};
