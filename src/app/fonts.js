import { Antic_Didone, Lora, Mulish } from 'next/font/google'
import localFont from 'next/font/local'
 
export const antic_didone = Antic_Didone({
  variable: '--font-antic_didone',
  display: 'swap',
  weight: ['400'],
  subsets: ['latin'],
})

export const lora = Lora({
  variable: '--font-lora',
  weight: ['variable'],
  display: 'swap',
  subsets: ['latin'],
})
 
export const halimun = localFont({
  src: '../fonts/Halimun.ttf.woff',
  variable: '--font-halimun',
  display: 'swap',
})

export const mulish = Mulish({
  weight: ['200', '300'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});