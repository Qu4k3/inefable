import MapGL from "../map/MapGL";
import { Container, Group, SimpleGrid, Text, Title } from "@mantine/core";
import { IconBuildingArch, IconBus, IconBusStop, IconConfetti, IconPlaneTilt, IconPolygon, IconToolsKitchen2 } from "@tabler/icons-react";

const legend = [
  {
    icon: <IconConfetti className='map-icon' />,
    text: "Lugar del evento"
  },
  {
    icon: <IconPolygon className='map-icon' style={{ outline: "none", padding: 0, boxSizing: "border-box" }} color="#E8BCCD" size="40" stroke={1.5} />,
    text: "Dónde alojarse"
  },
  {
    icon: <IconPlaneTilt className='map-icon' />,
    text: "Aeropuerto"
  },
  {
    icon: <IconBuildingArch className='map-icon' />,
    text: "Monumentos"
  }
]

const Map = () => {
  return (
    <Container
      id="puntos-relevantes"
      py="100px"
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
        Puntos relevantes
      </Title>

      <MapGL />

      <SimpleGrid 
        mt="xl"
        cols={2}
        spacing="xl"
        px="16px"
      >
        {legend.map((item, i) => (
          <Group
            key={`legend-${i}`}
            align="center"
            gap="xs"
            wrap="nowrap"
          >
            {item.icon}
            <Text>{item.text}</Text>
          </Group>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Map;