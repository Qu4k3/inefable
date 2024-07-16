import { Affix, Button, Container, Title } from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import Link from 'next/link'

const links = [
  {
    href: "#programacion",
    text: "Programa"
  },
  {
    href: "#confirmacion",
    text: "Confirmación"
  },
  {
    href: "#dress-code",
    text: "Dress Code"
  },
  {
    href: "#mapa",
    text: "Alojamientos, Transporte, Puntos de interés"
  },
  {
    href: "#preguntas-frecuentes",
    text: "Preguntas Frecuentes"
  },
  {
    href: "#playlist",
    text: "Playlist"
  },
  {
    href: "#album",
    text: "Álbum de Fotos"
  },
  {
    href: "#hashtag",
    text: "Hashtag"
  }
]

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuChange = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <Container>
      <Affix position={{ bottom: 40, right: 20 }}>
        <nav className={isMenuActive ? 'active' : ''}>
          <Title
            order={4}
            mb="20px"
            pl="40px"
            fw="bold"
          >Apartados</Title>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          variant="filled"
          color="#E8BCCD"
          radius="xl"
          size="xl"
          styles={{
            root: { padding: "0 14px" }
          }}
          onClick={handleMenuChange}
        >
          {
            isMenuActive
              ? <IconX style={{ height: "30px", width: "30px" }} />
              : <IconMenu2 style={{ height: "30px", width: "30px" }} />
          }
        </Button>

      </Affix>
    </Container>
  );
}

export default Menu;