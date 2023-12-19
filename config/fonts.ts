import { Fira_Code as FontMono, Fira_Sans as FiraSans } from "next/font/google"

export const firaSans = FiraSans({
  subsets: ["latin"],
  weight: "400",
  variable: "--fira-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
