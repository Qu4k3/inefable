'use client'
import Album from "@/components/sections/Album";
import DressCode from "@/components/sections/DressCode";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import Hashtag from "@/components/sections/Hashtag";
import Header from "@/components/sections/Header";
import Inefable from "@/components/sections/Inefable";
import Map from "@/components/sections/Map";
import Playlist from "@/components/sections/Playlist";
import Schedule from "@/components/sections/Timeline";
import Menu from "@/components/elements/Menu";
import Audio from "@/components/elements/Audio";
import FlowerSeparator from "@/components/elements/FlowerSeparator";
import ConfirmAssistance from "@/components/sections/ConfirmAssistance";

export default function Home() {
  return (
    <main className="home">
      <Audio />
      <Header />
      <Schedule />
      <FlowerSeparator />
      <ConfirmAssistance />
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
    </main>
  );
}