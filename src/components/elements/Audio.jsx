'use client'
import { Affix, Button } from "@mantine/core";
import { IconMusic, IconMusicOff } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

const Audio = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioChange = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return

    if (isSongPlaying) {
      audioElement.pause();
      localStorage.setItem('playSong', 'false')
    } else {
      audioElement.play();
      localStorage.setItem('playSong', 'true')
    }
    setIsSongPlaying(!isSongPlaying);
  }

  useEffect(() => {
    const playSong = localStorage.getItem('playSong');

    // Define a handler to start the audio
    const startAudioPlayback = () => {
      if (!isSongPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsSongPlaying(true);
          localStorage.setItem('playSong', 'true');
          removeEventListeners(); // Remove all event listeners after playing
        }).catch(error => {
          console.error("Failed to play audio:", error);
        });
      }
    };

    // Add event listeners
    const addEventListeners = () => {
      window.addEventListener('scroll', startAudioPlayback);
      window.addEventListener('click', startAudioPlayback);
      window.addEventListener('touchstart', startAudioPlayback);
      window.addEventListener('keydown', startAudioPlayback);
    };

    // Remove event listeners
    const removeEventListeners = () => {
      window.removeEventListener('scroll', startAudioPlayback);
      window.removeEventListener('click', startAudioPlayback);
      window.removeEventListener('touchstart', startAudioPlayback);
      window.removeEventListener('keydown', startAudioPlayback);
    };

    if (playSong !== "false") {
      addEventListeners();
    }

    // Cleanup: Remove event listeners on component unmount
    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <Affix position={{ top: 40, right: 20 }}>
      <audio
        ref={audioRef}
        src="/music/comptine-dun-autre-ete-lapres-midi.mp3"
        loop
        autoPlay
        onPlay={() => setIsSongPlaying(true)}
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