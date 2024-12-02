import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransitions } from 'next-view-transitions'
import { openGraphImage } from './shared-metadata'
import { halimun, lora } from './fonts';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@/styles/globals.css'

export const metadata = {
  title: "Inefable Day · I & P · 02.11.24",
  description: "¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día.",
  openGraph: {
    ...openGraphImage,
    title: 'Inefable Day · I & P · 02.11.24',
    description: "¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día.",
    type: 'website',
    url: 'https://inefable.day',
    image: 'https://inefable.day'
  },
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="es">
        <head>
          <ColorSchemeScript />
          {/*<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v3.5.1/mapbox-gl.css" rel="stylesheet"></link>*/}
        </head>
        <body className={`${lora.variable} ${halimun.variable}`}>
          <MantineProvider
            defaultColorScheme="light"
            theme={{
              fontFamily: `${lora.style.fontFamily}`,
              headings: { fontFamily: `${halimun.style.fontFamily}` },
            }}
          >
            {children}
          </MantineProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
