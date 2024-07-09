import { Text, Container, Title, Group, ColorSwatch } from '@mantine/core';

const DressCode = () => {
  return (
    <Container>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Dress Code
      </Title>

      <Text ta="center">Colores prohibidos</Text>

      <Group justify="center" align="center">
        <ColorSwatch color="#FDFBF4" />
        <ColorSwatch color="#FAF0E6" />
        <ColorSwatch color="#FFEAF0" />
      </Group>


    </Container>
  );
}

export default DressCode;