import { useState, useEffect } from 'react';

const Countdown = ({ className, finalDate, finalText = '¡La boda ha llegado!' }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const fechaObjetivo = new Date(finalDate).getTime();

    const updateCountdown = () => {
      const fechaActual = new Date().getTime();
      const tiempoRestante = fechaObjetivo - fechaActual;

      if (tiempoRestante <= 0) {
        setTimeLeft(finalText);
      } else {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        setTimeLeft(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    updateCountdown();

    return () => clearInterval(intervalId);
  }, [finalDate]);

  return <div className={className}>{timeLeft}</div>;
};

export default Countdown;