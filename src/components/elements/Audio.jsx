'use client'
import { Affix, Button } from "@mantine/core";
import { IconMusic, IconMusicOff } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const Audio = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioChange = () => {
    if (!audioRef.current) return

    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSongPlaying(!isSongPlaying);
  }

  const handleScroll = () => {
    if (!isSongPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsSongPlaying(true); // Ensure audio plays only once
        window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener after playing
      }).catch(error => {
        console.error("Failed to play audio:", error);
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Affix position={{ top: 40, right: 20 }}>
      <audio
        ref={audioRef}
        src="/music/comptine-dun-autre-ete-lapres-midi.mp3"
        autoPlay
        loop
        preload="auto"
      ></audio>

      <Button
        variant="filled"
        color="#E8BCCD"
        className={`btn-sound ${isSongPlaying ? 'active' : ''}`}
        radius="xl"
        size="md"
        styles={{
          root: { padding: "0 8px" }
        }}
        onClick={handleAudioChange}
      >
        {
          isSongPlaying
            ? <IconMusic
              className="sound-active"
              style={{ height: "24px", width: "24px" }}
            />
            : <IconMusicOff
              style={{ height: "24px", width: "24px" }}
            />
        }
      </Button>
    </Affix>
  )
}

export default Audio;