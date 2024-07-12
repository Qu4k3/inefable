import { Timeline, Text, Container, Title } from '@mantine/core';
import { IconCirclesRelation, IconConfetti, IconGlassCocktail, IconHandLoveYou, IconMoodWink2, IconToolsKitchen2 } from '@tabler/icons-react';

const timelineEvents = [
  {
    "time": "17h",
    "event": "Ceremonia",
    "icon": <IconCirclesRelation />,
    "lineVariant": "solid"
  },
  {
    "time": "18h",
    "event": "Cóctel",
    "icon": <IconGlassCocktail />,
    "lineVariant": "solid"
  },
  {
    "time": "20h30",
    "event": "Cena",
    "icon": <IconToolsKitchen2 />,
    "lineVariant": "solid"
  },
  {
    "time": "23h",
    "event": "Fiesta",
    "icon": <IconConfetti />,
    "lineVariant": "dashed"
  }
]

const Schedule = () => {
  return (
    <Container fluid>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Programa
      </Title>

      <Timeline color="#E8BCCD" active={3} bulletSize={48} lineWidth={2}>
        {timelineEvents.map((event) => (
          <Timeline.Item key={event.time} bullet={event.icon} lineVariant={event.lineVariant}>
            <Text size="lg" fw={700} lh='16px' mb="8px">{event.time}</Text>
            <Text pb="10px">{event.event}</Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
}

export default Schedule;