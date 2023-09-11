import Head from 'next/head';
import countdown from '../scripts/countdown'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    countdown();
  }, []);

  return (
    <>
      <Head>  
        <title>Inefable Day · Boda de Isa & Paul · 02.11.24</title> 
        <meta name="description" content="¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día." />
        <meta property="og:title" content="Inefable Day · Boda de Isa & Paul · 02.11.24" />
        <meta property="og:description" content="¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inefable.day" />
        <meta property="og:image" content="https://inefable.day/thumbnail.png" />
        <meta property="og:image:alt" content="inefable" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
      </Head>
      <main>
        <div class="wrapper">
          <h1>inefable</h1>

          <div id="countdown"></div>

          <div class="bottom">
            <p>Isa & Paul</p>
            <small>02.11.24</small>
          </div>
        </div>
      </main>
    </>
  )
}
