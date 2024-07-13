import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Container, Flex, Text, Title } from "@mantine/core";

const Album = () => {
  return (
    <Container>
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
          Album
        </Title>

        <div>
          <Text ta="center" mb="sm">El día de la boda toma muchas fotos y déjanos un bonito y divertido recuerdo.</Text>
          <Text fw="bold" ta="center">Puedes compartir todas tus fotos en este album compartido.</Text>
        </div>

        <DotLottieReact
          className="animated-svg"
          src="/lottie/album.lottie"
          loop
          autoplay
          autoResizeCanvas={false}
        />

        <a
          target="_blank"
          href="https://photos.app.goo.gl/mQF6BhQh1ZoCmH6W7"
          rel="noopener noreferrer"
        >
          <Button
            variant="filled"
            color="#e1a9bf"
            radius="xl"
            size="md"
          >
            Compartir y ver las fotos
          </Button>
        </a>
      </Flex>
    </Container>
  );
}

export default Album;