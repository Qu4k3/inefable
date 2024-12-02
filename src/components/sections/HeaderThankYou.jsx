import { BackgroundImage, Button, Container, Flex, Text, Title } from "@mantine/core";
import { IconBrandGooglePhotos } from "@tabler/icons-react";

const HeaderThankYou = () => {
  return (
    <Container
      id="top"
      py="100px"
      pt="80px"
      fluid
      className="header thank-you"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="50px"
        pt={50}
      >
        <Title
          maw={320}
          order={2}
          align="center"
        >
          Gracias a todos por asistir !
        </Title>
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
            <Flex
              align="center"
              justify="center"
              gap="10px"
            >
              Ver fotos <IconBrandGooglePhotos />
            </Flex>
          </Button>
        </a>
      </Flex>
      <div className="bottom">
        <Text
          size="20px"
          pl="4px"
        >I <small style={{ fontSize: "16px" }}>&</small> P</Text>
        <small>02.11.24</small>
      </div>
    </Container>
  );
}

export default HeaderThankYou;