import { Container, Title } from "@mantine/core";

const Footer = () => {
  return (
    <Container>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
        ff="text"
      >
        I <small>&</small> P
      </Title>      

    </Container>
  );
}

export default Footer;