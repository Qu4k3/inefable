import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Container, Flex, Text, Title } from "@mantine/core";

const Album = () => {
  return (
    <Container
      id="recuerdos"
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
          Recuerdos
          <DotLottieReact
            className="animated-svg behind-title behind-right"
            src="/lottie/album.lottie"
            loop
            autoplay
            autoResizeCanvas={false}
          />
        </Title>

        <div>
          <Text ta="center" mb="sm">El día de la boda, si capturas momentos en foto y vídeo dejanos un recuerdo bonito y divertido.</Text>
          <Text fw="bold" ta="center">Puedes subir todas tus fotos/vídeos en este álbum compartido.</Text>
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