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
    <Container
      id="dress-code"
      py="40px"
      fluid
    >
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

        <Text ta="center">Para mantener la armonía visual del evento, agradecemos que evites los siguientes colores en tu atuendo:</Text>

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

        <Text ta="center">Tu colaboración nos ayudará a crear una atmósfera perfecta para celebrar juntos.</Text>

      </Flex>

    </Container>
  );
}

export default DressCode;