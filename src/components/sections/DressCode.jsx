import { Text, Container, Title, Group, ColorSwatch, Flex } from "@mantine/core";

const colors = [
  {
    "hex": "#FDFBF4",
    "color": "Blanco"
  },
  {
    "hex": "#FAF0E6",
    "color": "Beige"
  },
  {
    "hex": "#FFEAF0",
    "color": "Rosa pastel"
  }
]

const DressCode = () => {
  return (
    <Container>
      <Flex
        direction="column"
        gap="40px"
      >
        <Title
          order={2}
          fw={400}
          ta="center"
        >
          Dress Code
        </Title>

        <Text ta="center">El código de vestimenta es [formal/semi-formal/casual/elegante]. Nos encantaría que evitaras usar estos colores:</Text>

        <Group justify="center" align="flex-start" gap="xl" grow={true} >
          {colors.map((color) => (
            <Flex
              key={color.hex}
              gap="md"
              justify="center"
              align="center"
              direction="column"
              px="sm"
            >
              <ColorSwatch
                classNames={{
                  root: "dresscode-bullet"
                }}
                color={color.hex}
                size="64px"
                mx="sm"
              />
              <Text
                size="sm"
                ta="center"
                tw="noWrap"
              >
                {color.color}
              </Text>
            </Flex>
          ))}
        </Group>

        <Text ta="center">¡Gracias!</Text>

      </Flex>

    </Container>
  );
}

export default DressCode;