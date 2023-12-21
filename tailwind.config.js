import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            50: "#d4e1ff",
            100: "#becffe",
            200: "#93a9fd",
            300: "#6c82fb",
            400: "#4c5ff7",
            500: "#3342f2",
            600: "#202ae9",
            700: "#1117d7",
            800: "#070aad",
            900: "#02026b",
            DEFAULT: "#3342f2",
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
            50: "#d4e1ff",
            100: "#becffe",
            200: "#93a9fd",
            300: "#6c82fb",
            400: "#4c5ff7",
            500: "#3342f2",
            600: "#202ae9",
            700: "#1117d7",
            800: "#070aad",
            900: "#02026b",
            DEFAULT: "#3342f2",
            foreground: "#ffffff",
          },
          focus: "#F182F6",
        }
      },
    },
  })],
}
