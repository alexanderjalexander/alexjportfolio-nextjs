import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import React from "react";
import { Divider } from "@heroui/divider";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// export const revalidate = 86400;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          "min-h-screen " +
          fontSans.variable +
          " font-sans antialiased" +
          " bg-fixed bg-linear-to-tr from-primary-900 via-background to-primary-900"
        }
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Navbar />
          <main className="container mx-auto max-w-7xl px-6 grow">
            {children}
          </main>
          <Divider className="my-10" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
