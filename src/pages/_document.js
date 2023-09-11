import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>        
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Inefable Day · Boda de Isa & Paul · 02.11.24</title>
        <meta name="description" content="¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Inefable Day · Boda de Isa & Paul · 02.11.24" />
        <meta property="og:description" content="¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inefable.day" />
        <meta property="og:image" content="https://inefable.day/thumbnail.png" />
        <meta property="og:image:alt" content="inefable" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />

        <link rel="manifest" href="/manifest.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&family=Mulish:wght@200;300&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
