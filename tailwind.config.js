import {nextui} from '@nextui-org/theme'
import { siteConfig } from "@/config/site";

const safelist = [
  'm-1',
  'dark:bg-red-700 bg-red-300', 
  'dark:bg-cyan-700 bg-cyan-300', 
  'dark:bg-purple-700 bg-purple-300', 
  'dark:bg-yellow-700 bg-yellow-300', 
  'dark:bg-emerald-700 bg-emerald-300', 
  'dark:bg-orange-700 bg-orange-300'
]

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  screens: {
    'sm': '480px',
    'md': '720px',
    'lg': '920px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  darkMode: "class",
  plugins: [nextui({
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
        }
      },
      dark: {
        colors: {
          background: "#000010",
          foreground: "#ffffff",
          primary: {
            50:  "#c2d4ff",
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
        }
      },
    },
  })],
}
