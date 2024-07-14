import { Container, Title } from "@mantine/core";

const Map = () => {
  return (
    <Container
      id="mapa"
      py="40px"
      fluid
    >
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Alojamientos * Transporte * Puntos de interés
      </Title>      

    </Container>
  );
}

export default Map;