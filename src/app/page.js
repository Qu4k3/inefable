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

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Schedule />
      <CheckForm />
      <Inefable />
      <DressCode />
      <Map />
      <FAQ />
      <Playlist />
      <Album />
      <Hashtag />
      <Footer />
      <Menu />
    </main>
  );
}