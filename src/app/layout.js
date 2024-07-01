import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { openGraphImage } from './shared-metadata'
import { halimun, lora } from './fonts';
import '@/styles/globals.css'

export const metadata = {
  title: "Inefable Day · Boda de Isa & Paul · 02.11.24",
  description: "¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día.",
  openGraph: {
    ...openGraphImage,
    title: 'Inefable Day · Boda de Isa & Paul · 02.11.24',
    description: "¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día.",
    type: 'website',
    url: 'https://inefable.day',
    image: 'https://inefable.day'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lora.variable} ${halimun.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
