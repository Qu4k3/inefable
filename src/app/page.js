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

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setPageVisited(true);
    }
  }, []);

  const handleVisitClick = () => {
    setPageVisited(true);
    localStorage.setItem('hasVisited', 'true');
    localStorage.setItem('playSong', 'true');
  };

  return (
    <main className="home">
      {!pageVisited ? (
        <Header
          hasVisited={pageVisited}
          handleVisitClick={handleVisitClick}
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