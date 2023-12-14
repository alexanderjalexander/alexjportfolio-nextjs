// Styles and Headers/Footers

import { Metadata, Viewport } from 'next'

import './globals.css';

import { exo } from '../fonts';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
    manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: 'black',
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
          {children}
        </body>
    </html>
    )
  }