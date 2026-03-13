import { heroui } from "@heroui/theme";

const safelist = [
  "m-1",
  "dark:bg-red-700 bg-red-300",
  "dark:bg-fuchsia-700 bg-fuchsia-300",
  "dark:bg-yellow-700 bg-yellow-300",
  "dark:bg-green-700 bg-green-300",
  "dark:bg-cyan-700 bg-cyan-300",
  "dark:bg-blue-700 bg-blue-300",
  "dark:bg-pink-700 bg-pink-300",
  "dark:bg-slate-700 bg-slate-300",
  // extensions
  "dark:bg-orange-900 bg-orange-400",
  "dark:bg-violet-700 bg-violet-300",
  "dark:bg-teal-700 bg-teal-300",
  "dark:bg-lime-700 bg-lime-300",
  "dark:bg-indigo-700 bg-indigo-300",
  "dark:bg-rose-700 bg-rose-300",
  "dark:bg-amber-700 bg-amber-300",
  "dark:bg-emerald-700 bg-emerald-300",
];

/** @type {import('tailwindcss').Config} */
export default {
  safelist,
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  screens: {
    sm: "480px",
    md: "720px",
    lg: "920px",
    xl: "1280px",
    "2xl": "1536px",
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              900: "#c2d4ff",
              800: "#abc1fe",
              700: "#7f98fc",
              600: "#5970fa",
              500: "#3b4df5",
              400: "#2531ee",
              300: "#141bdf",
              200: "#080bba",
              100: "#020372",
              50: "#000033",
              DEFAULT: "#3b4df5",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
        dark: {
          colors: {
            background: "#000010",
            foreground: "#ffffff",
            primary: {
              50: "#c2d4ff",
              100: "#abc1fe",
              200: "#7f98fc",
              300: "#5970fa",
              400: "#3b4df5",
              500: "#2531ee",
              600: "#141bdf",
              700: "#080bba",
              800: "#020372",
              900: "#000033",
              DEFAULT: "#2531ee",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
