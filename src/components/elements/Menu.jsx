import { Affix, Button, Container, Title, Text, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <Container>
      <Affix position={{ bottom: 40, right: 20 }}>
        <nav className={isMenuActive ? 'active' : ''}>
          <Title
            order={4}
            mb="20px"
            pl="50px"
          >Apartados</Title>
          <ul>
            <li><a href="#programacion">Programa</a></li>
            <li><a href="#confirmacion">Confirmación</a></li>
            <li><a href="#dress-code">Dress Code</a></li>
            <li><a href="#alojamientos">Alojamientos</a></li>
            <li><a href="#preguntas-frecuentes">Preguntas Frecuentes</a></li>
            <li><a href="#playlist">Playlist</a></li>
            <li><a href="#album">Álbum de Fotos</a></li>
            <li><a href="#hashtag">Hashtag</a></li>
          </ul>
        </nav>
        <Button
          variant="filled"
          color="#e1a9bf"
          radius="xl"
          size="lg"
          styles={{
            root: { padding: "0 10px" }
          }}
        //onClick={() => scrollTo({ y: 0 })}
        >
          <IconMenu2 style={{ heigt: "28px", width: "28px" }} />
        </Button>

      </Affix>
    </Container>
  );
}

export default Menu;