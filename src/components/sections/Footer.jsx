import { Container, Text, Title } from "@mantine/core";

const Footer = () => {
  return (
    <Container
      ta="center"
      py="100px"
      fluid
    >
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="10px"
        ff="text"
        size="32px"
        pl="6px"
      >
        I <small>&</small> P
      </Title>

      <Text
        size="sm"
      >02.11.24</Text>

    </Container>
  );
}

export default Footer;