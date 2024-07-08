'use client'
import Countdown from "@/components/Countdown";
import { Notification } from "@mantine/core";
import { IconHourglassLow } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="home">
      <div className="wrapper">
        <Notification
          icon={
            <IconHourglassLow
              style={{ width: '24px', height: '24px' }}
            />
          }
          withCloseButton={false}
          withBorder
          color="#e1a9bf"
          radius="md"
          title="La web aún no está disponible"
          styles={{
            icon: { width: '40px', height: '40px' },
          }}
        >
          ¡Vuelve en <Countdown
            className="countdown-inline"
            finalDate="2024-07-20T00:00:00"
            finalText="breves..."
          />!
        </Notification>
        <h1>inefable</h1>

        <Countdown className="countdown" finalDate="2024-11-02T17:00:00" />

        <div className="bottom">
          <p>I & P</p>
          <small>02.11.24</small>
        </div>
      </div>
    </main>
  );
}