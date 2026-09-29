const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.firebasestorage.app",
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

const config = {
  event: {
    defaultEventId: "carlosandressandy2026",
    databaseURL: firebaseConfig.databaseURL,
    eventIdParam: "eventId",
    dateISO: "2026-11-14T15:00:00-06:00",
    legacyFallback: {
      read: false,
      write: false,
      subscribe: false
    }
  },
  admin: {
    adminKey: "twodesign123",
    keyParam: "key",
    legacyKeyParam: "admin"
  },
  seo: {
    titulo: "Carlos Andrés & Sandy | 14.11.2026",
    descripcion: "Te invitamos a compartir con nosotros este día tan especial el 14 de noviembre de 2026 en Managua.",
    autor: "Two Design",
    keywords: "invitacion de boda, Carlos Andrés, Sandy, boda, Managua, discurso biblico, Hotel Contempo",
    ogImage: "Images/E2.png"
  },
  pareja: {
    nombres: "Carlos Andrés & Sandy",
    portadaEtiqueta: "Nos casamos",
    novia: "Sandy",
    novio: "Carlos Andrés",
    fecha: "14-11-2026",
    fechaVisible: "14.11.2026",
    fechaDestacada: "14 . 11 . 2026",
    cierreSubtitulo: "Porque entre todas las historias posibles, decidimos elegir la nuestra..."
  },
  ceremonia: {
    mensaje: "Uniremos nuestra vida en matrimonio con la bendición de Dios y de nuestros amados padres.",
    padresNoviaTitulo: "Padres de la Novia",
    padresNovia: "Edgar Giovanni Pérez & Sandra de Pérez",
    padresNovioTitulo: "Padres del Novio",
    padresNovio: "Jaime Osorio & Priscila de Osorio"
  },
  musica: {
    titulo: "Nuestra Canción",
    archivo: "music.mp3",
    playlistUrl: "https://open.spotify.com/playlist/2rDP5ogx0IHwWsK59PW3Xt?si=3f46a7854d264d56&pt=6f9927099d39627d2020e9537e1b1c42"
  },
  evento: {
    ceremonia: {
      titulo: "Discurso Bíblico",
      lugar: "Discurso Bíblico",
      hora: "3:00 PM",
      direccion: "Camino Nuevo a Santo Domingo S/N, Esquina con Calle Los Celajes, Reparto El Mirador, Managua",
      ubicacionUrl: "https://maps.app.goo.gl/rr8NYm62CByz7ccT8"
    },
    recepcion: {
      titulo: "Recepción",
      lugar: "Hotel Contempo, Salón Mayagna",
      hora: "4:00 PM",
      direccion: "Km 11 de la Carretera a Masaya, entrada a Casa España, 400 metros al oeste, en el área de Residencial Las Praderas, Managua",
      ubicacionUrl: "https://maps.app.goo.gl/rr8NYm62CByz7ccT8"
    },
    calendario: {
      detalle: "Nos encantará compartir este día contigo.",
      ubicacion: "Hotel Contempo, Salón Mayagna, Managua"
    }
  },
  itinerario: {
    titulo: "Itinerario",
    items: [
      { icono: "Images/ICONO-1.png", alt: "Ceremonia", hora: "4:00 PM", texto: "Ceremonia" },
      { icono: "Images/ICONO-2.png", alt: "Ingreso de los esposos", hora: "6:00 PM", texto: "Ingreso de los esposos a la recepción" },
      { icono: "Images/ICONO-3.png", alt: "Brindis", hora: "6:30 PM", texto: "Brindis" },
      { icono: "Images/ICONO-4.png", alt: "Servicio de cena", hora: "7:00 PM", texto: "Servicio de cena" },
      { icono: "Images/ICONO-5.png", alt: "Inicio de la fiesta", hora: "8:00 PM", texto: "Inicio de la fiesta" },
      { icono: "Images/ICONO-6.png", alt: "Despedida de los novios", hora: "11:00 PM", texto: "Despedida de los novios" }
    ]
  },
  dressCode: {
    titulo: "Dress Code",
    subtitulo: "Traje formal y de gala",
    descripcion: "Vestimenta formal de gala. Agradecemos vestir elegante para acompañarnos en esta celebración tan especial.",
    coloresReservados: [
      { nombre: "Blanco", color: "#FFFFFF" },
      { nombre: "Cobre", color: "#B8643B" },
      { nombre: "Terracota", color: "#9C3207" }
    ]
  },
  regalo: {
    titulo: "Regalo",
    descripcion: "Nuestra mayor alegría es compartir este día contigo. Si deseas tener un detalle con nosotros, agradeceremos con mucho cariño tu obsequio en efectivo dentro de nuestra lluvia de sobres.",
    transferencia: {
      titular: "",
      medio: "",
      cuenta: "",
      tipo: ""
    }
  },
  textos: {
    mensajeInvitado: "Para nosotros será un privilegio compartir contigo un momento tan especial.",
    mensajePases: "Hemos reservado {pases} lugares en su honor",
    fechaLabel: "Nuestro gran día"
  },
  deseos: {
    titulo: "Buenos deseos",
    intro: "Déjanos un mensaje especial para este día tan importante."
  },
  adultos: {
    titulo: "Solo adultos",
    descripcion: "",
    mostrar: false
  },
  rsvp: {
    titulo: "Confirmar asistencia",
    mensaje: "Para nosotros es muy importante que confirmes tu asistencia lo antes posible, o bien indicarnos si no podrás acompañarnos."
  },
  galeria: {
    portadaPrincipal: "Images/E2.png",
    historia: ["Images/S1.png", "Images/S2.png"],
    celebracion: ["Images/C1.png", "Images/C2.png"],
    pareja: ["Images/F1.png", "Images/F2.png"]
  },
  footer: {
    hashtag: "#CarlosAndresYSandy",
    instagramUrl: "https://www.instagram.com/thetwodesign",
    facebookUrl: "https://www.facebook.com/thetwodesign",
    marcaTexto: "Diseño",
    marcaNombre: "Two Design",
    marcaUrl: "https://twodesign.com"
  }
};

window.config = config;
window.firebaseConfig = firebaseConfig;
