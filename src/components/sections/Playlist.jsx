import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Container, Flex, Text, Title } from "@mantine/core";

const Playlist = () => {
  return (
    <Container
      id="playlist"
      py="100px"
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
          pos="relative"
          lh="h1"
        >
          Playlist
          <DotLottieReact
            className="animated-svg behind-title behind-left"
            src="/lottie/playlist.lottie"
            loop
            autoplay
            autoResizeCanvas={false}
          />
        </Title>

        <div>
          <Text ta="center" mb="sm">¿Cuál es la canción imprescindible en la fiesta?</Text>
          <Text fw="bold" ta="center">¡Añade las canciones que deseeses en nuestra lista de Spotify!</Text>
        </div>

        <iframe
          className="spotify-iframe"
          src="https://open.spotify.com/embed/playlist/0akNOKbTkbc0aHKvq1O6b0?theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allowtransparency="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <a
          target="_blank"
          href="https://open.spotify.com/playlist/0akNOKbTkbc0aHKvq1O6b0?si=846225c243f4412d&pt=a7ad6c94aa26f6a3a40d75fe1319211a"
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