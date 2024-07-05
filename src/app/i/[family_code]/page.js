import { GuestForm } from "@/components/GuestsForm";
import { getGuestsByFamily } from "@/helpers/queries";
import { Alert, Button } from "@mantine/core";
import {
  IconArrowRight, IconCircleCheck
} from '@tabler/icons-react';
import { Link } from 'next-view-transitions'

export default async function Guest({ params, searchParams  }) {
  const { rows } = await getGuestsByFamily(params.family_code);
  const isSubmitted = searchParams.confirmed === 'true';

  return (
    <main className="invitation">
      {

        rows.length == 0
          ? <>
            <h2>¡No hemos encontrado tu invitación!</h2>
            <h3>Revisa el código de 3 dígitos de la invitación.</h3>
            <h4>Si crees que se debe de un error, ¡contáctanos por Whatsapp!</h4>
          </>
          : <>

            {isSubmitted ? <Alert
              variant="outline"
              color="#e1a9bf"
              radius="xl"
              styles={{
                /*root: { borderColor: 'rgba(40, 35, 37, 0.15)'},*/
                root: { backgroundColor: 'rgba(255, 255, 255, .8)'},
                message: { textAlign: 'center', padding: '10px' },
              }}
            >
              <h4 style={{ color: '#e1a9bf', display: 'flex', justifyContent: 'center', marginBottom: '15px', gap: '10px', fontSize: '20px' }}><IconCircleCheck /> Datos guardados</h4>
              <p style={{ marginBottom: '10px'}}>¡Ya está todo hecho aquí!</p>
              <p>Para ver la programación, acceso al lugar llegar, transporte, etc. pincha en el botón de abajo.</p>
              <Link href="/">
                <Button
                  variant="outline"
                  color="#e1a9bf"
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
              </>
            }<hr />
            <h3>Selecciona los asistentes.</h3>
            <GuestForm rows={rows} />
            <small>Podrás modificar tu decisión hasta <u>dos semanas antes</u> de la boda.</small>
          </>
      }
    </main>
  );
}