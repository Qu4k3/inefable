import { GuestForm } from "@/components/GuestsForm";
import { getGuestsByFamily } from "@/helpers/queries";

export default async function Guest({ params }) {
  const { rows } = await getGuestsByFamily(params.family_code);

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
            <h2>¿Nos acompañas o te lo pierdes?</h2>
            <h4>Para confirmar tu asistencia a la boda sólo tienes que seleccionar las personas que vayan a asistir.</h4>
            <hr />
            <h3>Selecciona los asistentes.</h3>
            <GuestForm rows={rows} />
            <small>Podrás modificar tu decisión hasta <u>dos semanas antes</u> de la boda.</small>
          </>
      }
    </main>
  );
}