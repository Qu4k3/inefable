'use client'
import { useEffect } from 'react';
import countdown from '../scripts/countdown'

export default function Home() {

  useEffect(() => {
    countdown();
  }, []);

  return (
    <main>
      <div className="wrapper">
        <h1>inefable</h1>

        <div id="countdown"></div>

        <div className="bottom">
          <p>I & P</p>
          <small>02.11.24</small>
        </div>
      </div>
    </main>
  );
}
