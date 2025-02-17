const mensajes = [
    "Hoy es un gran día para aprender algo nuevo.",
    "Nunca es tarde para empezar de nuevo.",
    "La práctica hace al maestro.",
    "El éxito es la suma de pequeños esfuerzos repetidos.",
    "Cada día trae nuevas oportunidades."
  ];
  
  export function obtenerMensajeAleatorio() {
    const indice = Math.floor(Math.random() * mensajes.length);
    return mensajes[indice];
  }
  