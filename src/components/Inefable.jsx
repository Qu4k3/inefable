import { Text, Container, Title, Blockquote } from '@mantine/core';

const Inefable = () => {
  return (
    <Container>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        inefable
      </Title>

      <Text ta="justify">“Una palabra que describe algo tan extraordinario, hermoso o profundo que no puede ser expresado con palabras. Se refiere a experiencias, sentimientos o realidades que superan la capacidad del lenguaje humano para describirlas adecuadamente. Aquello que nos deja sin palabras, que nos maravilla y conmueve en una dimensión tan intensa que cualquier intento de ponerlo en palabras se siente insuficiente.”</Text>
    </Container>
  );
}

export default Inefable;