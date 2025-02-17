import { obtenerMensajeAleatorio } from './Mensajes.js';

document.getElementById('generar-btn').addEventListener('click', () => {
  const mensaje = obtenerMensajeAleatorio();
  document.getElementById('mensaje').textContent = mensaje;
});