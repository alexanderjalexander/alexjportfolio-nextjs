import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site';
import { Providers } from '@/src/app/providers';
import Navbar from '@/components/layout/navbar';
import React from 'react';
import Footer from '@/components/layout/footer';
import * as fonts from '@/fonts/config';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const revalidate = 86400;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen ${fonts.bricolageGrotesque.variable} ${fonts.inter.variable} ${fonts.geistMono.variable} antialiased`}
      >
        <Providers themeProps={{ attribute: 'data-theme', defaultTheme: 'dark' }}>
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
