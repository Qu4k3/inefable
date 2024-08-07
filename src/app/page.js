'use client'
import Album from "@/components/sections/Album";
import DressCode from "@/components/sections/DressCode";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import CheckForm from "@/components/forms/CheckForm";
import Hashtag from "@/components/sections/Hashtag";
import Header from "@/components/sections/Header";
import Inefable from "@/components/sections/Inefable";
import Map from "@/components/sections/Map";
import Playlist from "@/components/sections/Playlist";
import Schedule from "@/components/sections/Timeline";
import Menu from "@/components/elements/Menu";
import Audio from "@/components/elements/Audio";
import FlowerSeparator from "@/components/elements/FlowerSeparator";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageVisited, setPageVisited] = useState(false);

  // ADD an event listener to a button with id #btn-enter-website and triger if clicked

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('hasVisited');
      if (hasVisited) {
        setPageVisited(true);
      }
      
      const handleEnterWebsite = () => {
        localStorage.setItem('hasVisited', 'true');
        setPageVisited(true);
      };

      const button = document.getElementById('btn-enter-website');
      if (button) {
        button.addEventListener('click', handleEnterWebsite);
      }

      // Cleanup event listener on unmount
      return () => {
        if (button) {
          button.removeEventListener('click', handleEnterWebsite);
        }
      };
    }
  }, []);

  return (
    <main className="home">
      {!pageVisited ? (
        <Header
          hasVisited={pageVisited}
        />
      ) : (
        <>
          <Audio />
          <Header hasVisited={pageVisited} />
          <Schedule />
          <FlowerSeparator />
          <CheckForm />
          <FlowerSeparator />
          <Inefable />
          <FlowerSeparator />
          <DressCode />
          <FlowerSeparator />
          <Map />
          <FlowerSeparator />
          <FAQ />
          <FlowerSeparator />
          <Playlist />
          <FlowerSeparator />
          <Album />
          <FlowerSeparator />
          <Hashtag />
          <FlowerSeparator />
          <Footer />
          <Menu />
        </>
      )}
    </main>
  );
}