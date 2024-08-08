import { Button, Container, Flex, Group, Text, Title } from "@mantine/core";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from "next/link";

const Hashtag = () => {
  return (
    <Container
      id="hashtag"
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
          #inefableday
          <DotLottieReact
            className="animated-svg behind-title behind-left"
            src="/lottie/insta.lottie"
            loop
            autoplay
            autoResizeCanvas={false}
          />
        </Title>

        <Text ta="center">Comparte tus fotos y vídeos de este bonito día con nuestro #hashtag</Text>

        <a
          target="_blank"
          href="https://www.instagram.com/explore/tags/inefableday/"
          rel="noopener noreferrer"
        >
          <Button
            variant="filled"
            color="#E8BCCD"
            radius="xl"
            size="md"
          >
            Ver en Instagram
          </Button>

        </a>
      </Flex>

    </Container>
  );
}

export default Hashtag;