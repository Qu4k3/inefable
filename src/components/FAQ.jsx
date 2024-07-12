import { Container, Title, Accordion } from '@mantine/core';

const faqs = [
  {
    "value": "venue",
    "question": "¿Dónde se celebrará la boda?",
    "answer": "La ceremonia y todo el evento se celebrará en el mismo lugar, en Paraisso al Mar, ubicado en [dirección]."
  },
  {
    "value": "arrival-time",
    "question": "¿A qué hora debo llegar?",
    "answer": "Recomendamos llegar al menos 30 minutos antes de la ceremonia para que puedas encontrar tu asiento y estar listo para el inicio puntual del evento."
  },
  {
    "value": "accommodation",
    "question": "¿Hay opciones de alojamiento cerca del lugar de la boda?",
    "answer": "Sí, hay disponibles bloques de habitaciones en [nombre del hotel], que se encuentra cerca del lugar de la boda. Menciona nuestro evento al hacer la reserva para obtener una tarifa especial."
  },
  {
    "value": "transport",
    "question": "¿Habrá transporte disponible desde y hacia el lugar de la boda?",
    "answer": "lorem ipsum dolor sit amet 3"
  },
  {
    "value": "weather",
    "question": "¿Qué pasa si el clima no es favorable el día de la boda?",
    "answer": "La ceremonia y la recepción se trasladarán al interior. ¡No hay mal tiempo que nos pare!"
  },
  {
    "value": "parking",
    "question": "¿Habrá estacionamiento disponible en el lugar de la boda?",
    "answer": "Sí, hay estacionamiento disponible para los invitados en el lugar de la boda."
  },
  {
    "value": "hashtag",
    "question": "¿Hay un hashtag para la boda?",
    "answer": "Sí, nos encantaría que compartieras tus fotos usando el hashtag <strong>#inefableday</strong> en redes sociales."
  }
]

const FAQ = () => {
  return (
    <Container fluid>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Preguntas frecuentes
      </Title>

      <Accordion variant="separated" radius="lg">
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