import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Container, Flex, Text, Title } from "@mantine/core";

const Playlist = () => {
  return (
    <Container
      id="playlist"
      py="40px"
      fluid
    >
      <Flex
        direction="column"
        gap="40px"
        align="center"
      >
        <Title
          order={2}
          fw={400}
          ta="center"
        >
          Playlist
        </Title>

        <div>
          <Text ta="center" mb="sm">¿Cuál es la canción imprescindible en la fiesta?</Text>
          <Text fw="bold" ta="center">¡Añade las canciones que deseeses en nuestra lista de Spotify!</Text>
        </div>

        <DotLottieReact
          className="animated-svg"
          src="/lottie/music.lottie"
          loop
          autoplay
          autoResizeCanvas={false}
        />

        <iframe
          className="spotify-iframe"
          src="https://open.spotify.com/embed/playlist/0akNOKbTkbc0aHKvq1O6b0"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allowtransparency="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <a
          target="_blank"
          href="https://open.spotify.com/playlist/0akNOKbTkbc0aHKvq1O6b0?si=1b525d6f05044486"
          rel="noopener noreferrer"
        >
          <Button
            variant="filled"
            color="#E8BCCD"
            radius="xl"
            size="md"
          >
            Añadir canciones
          </Button>

        </a>
      </Flex>
    </Container>
  );
}

export default Playlist;