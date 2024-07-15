import { Button, Container, Flex, Group, Text, Title } from "@mantine/core";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from "next/link";

const Hashtag = () => {
  return (
    <Container
      id="hashtag"
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
          #inefableday
        </Title>

        <Text ta="center">Comparte tus fotos y vídeos de este hermoso día con nuestro #hashtag</Text>

        <div>
          <DotLottieReact
            className="animated-svg"
            src="/lottie/insta.lottie"
            loop
            autoplay
            autoResizeCanvas={false}
          />

          <Text size="xl" ta="center">#inefableday</Text>
        </div>

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