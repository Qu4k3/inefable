import { Container, Title } from "@mantine/core";
import Plat from "../map/Plat";

const Map = () => {
  return (
    <Container
      id="mapa"
      py="40px"
      px={0}
      fluid
    >
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
        px="16px"
      >
        Alojamientos * Transporte * Puntos de interés
      </Title>

      <Plat />

    </Container>
  );
}

export default Map;