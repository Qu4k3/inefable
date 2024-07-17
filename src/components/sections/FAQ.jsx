import { Container, Title, Accordion } from '@mantine/core';

const faqs = [
  {
    value: "venue",
    question: "¿Dónde se celebrará la ceremonia y la boda?",
    answer: "La ceremonia y todo el evento se celebrará en el mismo lugar, en Paraisso al Mar, ubicado en Calle La Higuera, 6, El Ejido, Almería.."
  },
  {
    value: "arrival-time",
    question: "¿A qué hora debo llegar?",
    answer: "Recomendamos llegar al menos 15-30 minutos antes de la ceremonia para que puedas encontrar tu asiento y estar listo para el inicio puntual del evento."
  },
  {
    value: "accommodation",
    question: "¿Hay opciones de alojamiento cerca del lugar de la boda?",
    answer: "Sí, hay disponibles bloques de habitaciones en [nombre del hotel], que se encuentra cerca del lugar de la boda. Menciona nuestro evento al hacer la reserva para obtener una tarifa especial."
  },
  {
    value: 'food',
    question: '¿Habrá opciones de comida para personas con dietas especiales?',
    answer: 'Sí, por favor infórmanos de cualquier restricción alimentaria cuando confirmes tu asistencia a cualquiera de nuestros 2 teléfonos para que podamos acomodar tus necesidades.',
  },
  {
    value: "transport",
    question: "¿Habrá transporte disponible desde y hacia el lugar de la boda?",
    answer: "Sí, avisaremos con antelación a la empresa local de Taxis, para que toda persona pueda tener disponible un Taxi a altas horas de la mañana."
  },
  {
    value: "weather",
    question: "¿Qué pasa si el clima no es favorable el día de la boda?",
    answer: "La ceremonia y la recepción se trasladarán al interior. ¡No hay mal tiempo que nos pare!"
  },
  {
    value: "parking",
    question: "¿Habrá estacionamiento disponible en el lugar de la boda?",
    answer: "Sí, hay estacionamiento disponible para los invitados en el lugar de la boda."
  },
  {
    value: "hashtag",
    question: "¿Hay un hashtag para la boda?",
    answer: "Sí, nos encantaría que compartieras tus fotos usando el hashtag <strong>#inefableday</strong> en redes sociales."
  }
]

const FAQ = () => {
  return (
    <Container
      id="preguntas-frecuentes"
      py="40px"
      fluid
    >
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Preguntas frecuentes
      </Title>

      <Accordion
        variant="separated"
        radius="lg"
        styles={{
          item: { backgroundColor: "#fdf8fa", borderColor: "#E8BCCD" }
        }}
      >
        {faqs.map((faq) => (
          <Accordion.Item key={faq.value} value={faq.value}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel><div dangerouslySetInnerHTML={{ __html: faq.answer }} /></Accordion.Panel>
          </Accordion.Item>
        ))}

      </Accordion>
    </Container>
  );
};

export default FAQ;