import { Container, Title, Accordion } from '@mantine/core';

const faqs = [
  {
    "value": "lorem-ipsum-1",
    "question": "Lorem ipsum 1",
    "answer": "lorem ipsum dolor sit amet 1"
  },
  {
    "value": "lorem-ipsum-2",
    "question": "Lorem ipsum 2",
    "answer": "lorem ipsum dolor sit amet 2"
  },
  {
    "value": "lorem-ipsum-3",
    "question": "Lorem ipsum 3",
    "answer": "lorem ipsum dolor sit amet 3"
  },
  {
    "value": "lorem-ipsum-4",
    "question": "Lorem ipsum 4",
    "answer": "lorem ipsum dolor sit amet 4"
  }
]

const FAQ = () => {
  return (
    <Container>
      <Title
        order={2}
        fw={400}
        ta="center"
        mb="40px"
      >
        Preguntas frecuentes
      </Title>

      <Accordion variant="separated">
        {faqs.map((faq) => (
          <Accordion.Item key={faq.value} value={faq.value}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}

      </Accordion>
    </Container>
  );
};

export default FAQ;