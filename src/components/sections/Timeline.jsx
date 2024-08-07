import { Timeline, Text, Container, Title } from '@mantine/core';
import { IconCirclesRelation, IconConfetti, IconGlassCocktail, IconHandLoveYou, IconMoodWink2, IconToolsKitchen2 } from '@tabler/icons-react';

const timelineEventsGPT = [
  {
    "time": "17h",
    "event": "Ceremonia",
    "description": "¡El gran momento ha llegado! Nos intercambiaremos votos llenos de amor y compromiso.",
    "icon": <IconCirclesRelation />,
    "lineVariant": "solid"
  },
  {
    "time": "18h",
    "event": "Cóctel",
    "description": "¡Hora de relajarse y celebrar! Disfruta de un cóctel con deliciosos aperitivos mientras compartes risas y brindis con amigos y familiares.",
    "icon": <IconGlassCocktail />,
    "lineVariant": "solid"
  },
  {
    "time": "20h30",
    "event": "Cena",
    "description": "¡A comer! La cena será una experiencia deliciosa, llena de platos exquisitos. Prepárate para discursos conmovedores y muchos brindis por los recién casados.",
    "icon": <IconToolsKitchen2 />,
    "lineVariant": "solid"
  },
  {
    "time": "23h",
    "event": "Fiesta",
    "description": "¡Que comience la fiesta! La pista de baile se abrirá para una noche de música, baile y diversión. ¡Vamos a celebrar hasta el amanecer!",
    "icon": <IconConfetti />,
    "lineVariant": "solid"
  }
]

const timelineEventsClaude = [
  {
    "time": "17h",
    "event": "Ceremonia",
    "description": "Momento emotivo donde los novios intercambian votos y anillos, sellando su amor ante familiares y amigos.",
    "icon": <IconCirclesRelation />,
    "lineVariant": "solid"
  },
  {
    "time": "18h",
    "event": "Cóctel",
    "description": "Tiempo para socializar y disfrutar de deliciosos aperitivos y bebidas mientras se toman las fotos oficiales.",
    "icon": <IconGlassCocktail />,
    "lineVariant": "solid"
  },
  {
    "time": "20h30",
    "event": "Cena",
    "description": "Elegante banquete con platos exquisitos, brindis emotivos y la oportunidad de compartir en un ambiente más íntimo.",
    "icon": <IconToolsKitchen2 />,
    "lineVariant": "solid"
  },
  {
    "time": "23h",
    "event": "Fiesta",
    "description": "Celebración animada con música, baile y diversión para todos los invitados hasta altas horas de la noche.",
    "icon": <IconConfetti />,
    "lineVariant": "solid"
  }
]

const timelineEvents = [
  {
    "time": "17h",
    "event": "Ceremonia",
    "description": "¡El gran momento ha llegado!<br />Nos intercambiaremos votos llenos de amor y compromiso.",
    "icon": <IconCirclesRelation />,
    "lineVariant": "solid"
  },
  {
    "time": "18h",
    "event": "Cóctel",
    "description": "¡Hora de relajarse y celebrar!<br />Disfruta de los aperitivos mientras compartes risas y brindis con amigos y familiares.",
    "icon": <IconGlassCocktail />,
    "lineVariant": "solid"
  },
  {
    "time": "20h30",
    "event": "Cena",
    "description": "¡A comer!<br />Repon energías con un festín lleno de platos exquisitos.",
    "icon": <IconToolsKitchen2 />,
    "lineVariant": "solid"
  },
  {
    "time": "23h",
    "event": "Fiesta",
    "description": "¡Que empiece la diversión, la noche es joven!",
    "icon": <IconConfetti />,
    "lineVariant": "solid"
  }
]

const Schedule = () => {
  return (
    <Container
      id="programacion"
      py="100px"
      fluid
    >
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Programa
      </Title>

      <Timeline
        color="#E8BCCD"
        active={3}
        bulletSize={48}
        lineWidth={2}
        styles={{
          itemTitle: { fontSize: "18px" }
        }}
      >
        {timelineEvents.map((event) => (
          <Timeline.Item key={event.time} bullet={event.icon} lineVariant={event.lineVariant} title={event.time}>
            <Text size="md">{event.event}</Text>
            <Text c="dimmed" size="md" mt={4} dangerouslySetInnerHTML={{__html: event.description}}></Text>
          </Timeline.Item>
        ))}

      </Timeline>
    </Container>
  );
}

export default Schedule;