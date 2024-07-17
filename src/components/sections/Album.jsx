import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Container, Flex, Text, Title } from "@mantine/core";

const Album = () => {
  return (
    <Container
      id="album"
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
          pos="relative"
        >
          Album
          <DotLottieReact
            className="animated-svg behind-title behind-right"
            src="/lottie/album.lottie"
            loop
            autoplay
            autoResizeCanvas={false}
          />
        </Title>

        <div>
          <Text ta="center" mb="sm">El día de la boda toma muchas fotos y déjanos un bonito y divertido recuerdo.</Text>
          <Text fw="bold" ta="center">Puedes compartir todas tus fotos en este album compartido.</Text>
        </div>

        <a
          target="_blank"
          href="https://photos.app.goo.gl/mQF6BhQh1ZoCmH6W7"
          rel="noopener noreferrer"
        >
          <Button
            variant="filled"
            color="#E8BCCD"
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