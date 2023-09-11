const countdown = () => {
  const fechaObjetivo = new Date('2024-11-02T17:00:00').getTime();

  const updateCoutdown = () => {
    const fechaActual = new Date().getTime();
    const tiempoRestante = fechaObjetivo - fechaActual;

    if (tiempoRestante <= 0) {
      document.getElementById('countdown').innerHTML = '¡La boda ha llegado!';
    } else {
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
  };

  setInterval(updateCoutdown, 1000);

  updateCoutdown();
}

export default countdown;
