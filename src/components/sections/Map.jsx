import { Container, Group, Stack, Text, Title } from "@mantine/core";
import Plat from "../map/Plat";
import { IconBusStop, IconConfetti, IconPlaneTilt } from "@tabler/icons-react";

const legend = [
  {
    icon: <IconConfetti />,
    text: "Lugar del evento"
  },
  {
    icon: <IconPlaneTilt />,
    text: "Aeropuerto"
  },
  {
    icon: <IconBusStop />,
    text: "Parada de bus"
  }
]

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

      <Group
        mt="xl"
        justify="center"
        gap="xl"
      >
        {legend.map((item) => (
          <Stack
            align="center"
            gap="xs"
          >
            {item.icon}
            <Text>{item.text}</Text>
          </Stack>
        ))}
      </Group>
    </Container>
  );
}

export default Map;