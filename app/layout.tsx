// Styles and Headers/Footers

import { Metadata } from 'next'

import '../styles/global.css';
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'
import { exo } from '../fonts';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { AnimatePresence, motion, Spring } from 'framer-motion';

import { createContext } from 'react';

export const metadata: Metadata = {
    themeColor: 'black', 
    manifest: '/site.webmanifest',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
      }
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <html lang="en" className={exo.className} >
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
    )
  }