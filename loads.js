// ===================== LOADS.JS =====================
// 1) Lista de invitados (ejemplo)
const guests = [
  { id: "demo1", name: "Invitado remoto de prueba", passes: 2 },
  { id: "demo2", name: "Invitado presencial de prueba", passes: 1 },
  { id: "1", name: "Matrimonio Perez Molinares", passes: 2 },
  { id: "2", name: "Familia Perez Gómez", passes: 2 },
  { id: "3", name: "Giovanni y Sandy Perez", passes: 2 },
  { id: "4", name: "Nathaly Balmaceda", passes: 1 },
  { id: "5", name: "Familia Sanchez", passes: 4 },
  { id: "6", name: "Familia Molinares", passes: 3 },
  { id: "7", name: "Matrimonio Timmer", passes: 2 },
  { id: "8", name: "Familia Pérez Herrera", passes: 5 },
  { id: "9", name: "Alejandro Pérez", passes: 1 },
  { id: "10", name: "Jania Pirir", passes: 1 },
  { id: "11", name: "Familia Pérez", passes: 3 },
  { id: "12", name: "Matrimonio Balmaceda", passes: 2 },
  { id: "13", name: "Familia Ugalde", passes: 6 },
  { id: "14", name: "Matrimonio Levesque", passes: 2 },
  { id: "15", name: "Familia Quej", passes: 4 },
  { id: "16", name: "Esteban Chávez", passes: 1 },
  { id: "17", name: "Enrique Sánchez", passes: 1 },
  { id: "18", name: "Matrimonio Soto", passes: 2 },
  { id: "19", name: "Roberto Castrillo", passes: 1 },
  { id: "20", name: "Familia Martínez", passes: 4 },
  { id: "21", name: "Familia Pérez", passes: 4 },
  { id: "22", name: "Matrimonio Balladares", passes: 2 },
  { id: "23", name: "Fabian Juárez", passes: 1 },
  { id: "24", name: "Job Rivera", passes: 2 },
  { id: "25", name: "Osman", passes: 1 },
  { id: "26", name: "Matrimonio Vargas", passes: 2 },
  { id: "27", name: "Diedrick Rivera", passes: 1 },
  { id: "28", name: "Matrimonio Martínez", passes: 2 },
  { id: "29", name: "Matrimonio Alonso", passes: 2 },
  { id: "30", name: "Patty Osorio", passes: 2 },
  { id: "31", name: "Matrimonio Osorio", passes: 2 },
  { id: "32", name: "Familia Osorio Pallaser", passes: 4 },
  { id: "33", name: "Matrimonio Villalta", passes: 3 },
  { id: "34", name: "Jorge Guerra", passes: 1 },
  { id: "35", name: "Raúl Guerra", passes: 1 },
  { id: "36", name: "Familia Osorio Beltrán", passes: 3 },
  { id: "37", name: "César Osorio", passes: 1 },
  { id: "38", name: "Lauren Osorio", passes: 1 },
  { id: "39", name: "Gaby Osorio", passes: 1 },
  { id: "40", name: "José Andrés Lorenzana", passes: 1 },
  { id: "41", name: "Mario Lorenzana", passes: 1 },
  { id: "42", name: "Rodrigo Cuéllar", passes: 1 },
  { id: "43", name: "Matrimonio Lorenzana", passes: 2 },
  { id: "44", name: "José Miguel Lorenzana", passes: 1 },
  { id: "45", name: "Familia Gramajo", passes: 4 },
  { id: "46", name: "Luis Castillo", passes: 1 },
  { id: "47", name: "Luis Pedro Alvarado y Daniela", passes: 2 },
  { id: "48", name: "Matrimonio Alvizures", passes: 2 },
];

window.LocalGuestSeeds = {
  ...(window.LocalGuestSeeds || {}),
  carlosandressandy2026: guests.reduce((acc, guest) => {
    acc[String(guest.id)] = {
      id: String(guest.id),
      nombre: guest.name,
      pases: Number(guest.passes || 1),
      activo: true,
    };
    return acc;
  }, {}),
};

window.seedEventGuestsToFirebase = async function seedEventGuestsToFirebase(explicitEventId) {
  const eventId = explicitEventId || window.config?.event?.defaultEventId || "carlosandressandy2026";
  const rsvpDB = window.RSVPDatabase;

  if (!rsvpDB?.migrateLocalGuestsToFirebase) {
    console.warn("RSVPDatabase no está disponible. Revisa que database.js esté cargado.");
    return { ok: false, guests: 0 };
  }

  await rsvpDB.seedEventConfigToFirebase?.(eventId, { force: true });
  const result = await rsvpDB.migrateLocalGuestsToFirebase(eventId, { force: true });
  console.log(`Invitados creados en Firebase: ${result.total || guests.length}`);
  return { ok: true, guests: result.total || guests.length };
};

// Helper: leer parámetros ?id=1
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

document.addEventListener("DOMContentLoaded", () => {
  const guestId = getQueryParam("id");

  // Si no hay id, no marcamos error: solo no hay invitado
  if (!guestId) {
    window.currentGuest = null;
    return;
  }

  const guest = guests.find((g) => String(g.id) === String(guestId));

  if (guest) {
    window.currentGuest = guest;

    // Si tienes estos elementos en alguna parte, los llena (opcional)
    const guestNameEl = document.getElementById("guest-name");
    const passesEl = document.getElementById("passes");

    if (guestNameEl) guestNameEl.textContent = guest.name;
    if (passesEl) {
      const p = Number(guest.passes || 1);
      passesEl.textContent = `${p} ${p === 1 ? "pase" : "pases"}`;
    }
  } else {
    window.currentGuest = null;

    const guestNameEl = document.getElementById("guest-name");
    if (guestNameEl) guestNameEl.textContent = "Invitado no encontrado";
  }
});
