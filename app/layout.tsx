// Styles and Headers/Footers

import { Metadata, Viewport } from 'next'

import './globals.css';

import { exo } from '../fonts';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Providers } from "./providers";
config.autoAddCss = false

export const metadata: Metadata = {
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
  <html lang="en" className='dark'>
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  )
}