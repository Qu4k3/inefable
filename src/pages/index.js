import countdown from '../scripts/countdown'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    countdown();
  }, []);

  return (
    <>
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
