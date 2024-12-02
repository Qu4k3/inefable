import { GuestForm } from "@/components/forms/GuestsForm";
import { getGuestsByFamily } from "@/helpers/queries";
import { Alert, Button, Container, Flex, Text, Title } from "@mantine/core";
import {
  IconArrowRight, IconCircleCheck
} from '@tabler/icons-react';
import { Link } from 'next-view-transitions'

export default async function Guest(/*{ params, searchParams }*/) {
  /*const { rows } = await getGuestsByFamily(params.family_code);
  const isSubmitted = searchParams.redirect === 'confirmed';*/

  return (
    <Container
      id="top"
      py="100px"
      pt="80px"
      fluid
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap="50px"
        pt={50}
      >
        <Alert
          variant="outline"
          color="#E8BCCD"
          radius="xl"
          styles={{
            root: { backgroundColor: 'rgba(255, 255, 255, .8)' },
            message: { textAlign: 'center', padding: '10px' },
          }}
        >
          <h4
            style={{
              color: '#E8BCCD',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '25px',
              gap: '10px',
              fontSize: '20px'
            }}>
            El evento ha finalizado
          </h4>
          <p>¡Ya no hay nada más que hacer por aquí!</p>
          <Link href="/">
            <Button
              variant="filled"
              color="#E8BCCD"
              radius="xl"
              rightSection={<IconArrowRight size={14} />}
              styles={{
                root: { marginTop: '30px' },
              }}
            >
              Volver a la web
            </Button>
          </Link>
        </Alert>
        <div className="bottom">
          <Text
            size="20px"
            pl="4px"
          >I <small style={{ fontSize: "16px" }}>&</small> P</Text>
          <small>02.11.24</small>
        </div>
      </Flex>

    </Container>

    /*
    <main className="invitation">
    {
      rows.length == 0
        ? <>
          <h2>¡No hemos encontrado tu invitación!</h2>
          <h3>Revisa el código de 3 dígitos de la invitación.</h3>
          <h4>Si crees que se debe de un error, ¡contáctanos por Whatsapp!</h4>
        </>
        : isSubmitted ? <Alert
          variant="outline"
          color="#E8BCCD"
          radius="xl"
          styles={{
            root: { backgroundColor: 'rgba(255, 255, 255, .8)' },
            message: { textAlign: 'center', padding: '10px' },
          }}
        >
          <h4
            style={{
              color: '#E8BCCD',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '15px',
              gap: '10px',
              fontSize: '20px'
            }}>
            <IconCircleCheck />
            Datos guardados
          </h4>
          <p>¡Ya está todo hecho aquí!</p>
          <hr style={{ marginTop: '20px', marginBottom: '20px', maxWidth: '100px' }} />
          <p>Para ver la programación, acceso al lugar llegar, transporte, etc. pincha en el botón de abajo.</p>
          <Link href="/">
            <Button
              variant="filled"
              color="#E8BCCD"
              radius="xl"
              rightSection={<IconArrowRight size={14} />}
              styles={{
                root: { marginTop: '30px' },
              }}
            >
              Descubrir la web
            </Button>
          </Link>
        </Alert>
          : <>
            <h2>¿Nos acompañas o te lo pierdes?</h2>
            <h4>Para confirmar tu asistencia a la boda sólo tienes que seleccionar las personas que vayan a asistir.</h4>
            <hr />
            <h3>Selecciona los asistentes.</h3>
            <GuestForm rows={rows} />
            <small>Podrás modificar tu decisión hasta <u>dos semanas antes</u> de la boda.</small>
          </>
    }
  </main>
  */
  );
}