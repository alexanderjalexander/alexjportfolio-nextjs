import { Exo } from 'next/font/google'
import localfont from 'next/font/local'

export const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})
   
export const hauser = localfont({ 
    src: './Hauser.otf',
    variable: '--font-hauser'
})

export const hauser_italic = localfont({ 
    src: './Hauser Italic.otf',
    variable: '--font-hauser-italic'
})