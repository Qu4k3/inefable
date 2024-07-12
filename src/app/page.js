'use client'
import Album from "@/components/Album";
import DressCode from "@/components/DressCode";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CheckForm from "@/components/forms/CheckForm";
import Hashtag from "@/components/Hashtag";
import Header from "@/components/Header";
import Inefable from "@/components/Inefable";
import Map from "@/components/Map";
import Playlist from "@/components/Playlist";
import Schedule from "@/components/Timeline";

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
    </main>
  );
}