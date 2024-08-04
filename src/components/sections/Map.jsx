import { Container, Group, Stack, Text, Title } from "@mantine/core";
import Plat from "../map/Plat";
import { IconBuildingArch, IconBus, IconBusStop, IconConfetti, IconPlaneTilt, IconPolygon, IconToolsKitchen2 } from "@tabler/icons-react";

const legend = [
  {
    icon: <IconConfetti className='map-icon' />,
    text: "Lugar del evento"
  },
  {
    icon: <IconPolygon className='map-icon' style={{ outline: "none", padding: 0, boxSizing: "border-box" }} color="#E8BCCD" size="40" stroke={1.5} />,
    text: "Alojamientos"
  },
  {
    icon: <IconPlaneTilt className='map-icon' />,
    text: "Aeropuerto"
  },
  {
    icon: <IconBus className='map-icon' />,
    text: "Estación de buses"
  },
  {
    icon: <IconBusStop className='map-icon' />,
    text: "Parada de bus"
  },
  {
    icon: <IconBuildingArch className='map-icon' />,
    text: "Monumentos"
  },
  {
    icon: <IconToolsKitchen2 className='map-icon' />,
    text: "Tapas favoritas"
  },
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

      <Stack
        mt="xl"
        justify="center"
        px="16px"
        gap="xl"
      >
        {legend.map((item, i) => (
          <Group
            key={`legend-${i}`}
            align="center"
            style={{
              root: { width: "50%"}
            }}
            gap="xs"
          >
            {item.icon}
            <Text align="center" display="inline-block">{item.text}</Text>
          </Group>
        ))}
      </Stack>
    </Container>
  );
}

export default Map;