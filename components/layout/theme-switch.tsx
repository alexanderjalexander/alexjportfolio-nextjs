'use client';

import { SunFilledIcon, MoonFilledIcon } from '@/components/icons';
import { useTheme } from 'next-themes';

export const ThemeSwitch = ({}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <label className={`button-link swap swap-rotate`}>
      <input type="checkbox" onChange={() => setTheme(isDark ? 'light' : 'dark')} />
      <span className="swap-off">
        <SunFilledIcon />
      </span>
      <span className="swap-on">
        <MoonFilledIcon />
      </span>
    </label>
  );
};
