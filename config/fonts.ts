// import { Fira_Code as FontMono, Fira_Sans as FontSans } from "next/font/google";
//
// export const fontSans = FontSans({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-sans",
// });
//
// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

import localFont from "next/font/local"

export const fontSans = localFont({
  src: [
    {
      path:"../fonts/fira_sans/FiraSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path:"../fonts/fira_sans/FiraSans-Black.ttf",
      weight: "900",
      style: "normal",
    },



    {
      path:"../fonts/fira_sans/FiraSans-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path:"../fonts/fira_sans/FiraSans-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sans"
})

export const fontMono = localFont({
  src: [
    {
      path: "../fonts/fira_code/FiraCode-Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/fira_code/FiraCode-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/fira_code/FiraCode-Medium.ttf",
      weight: "500",
    },
    {
      path: "../fonts/fira_code/FiraCode-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../fonts/fira_code/FiraCode-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-mono"
})
