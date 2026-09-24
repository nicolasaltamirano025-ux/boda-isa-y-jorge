// Single source of truth for the wedding's core facts.
export const WEDDING = {
  bride: "Isa",
  groom: "Jorge",
  dateISO: "2027-02-20T16:00:00-06:00",
  endISO: "2027-02-21T02:00:00-06:00",
  dateLabel: "20 de febrero de 2027",
  city: "Ciudad de México",
  rsvpDeadlineISO: "2027-01-10T23:59:59-06:00",
  rsvpDeadlineLabel: "10 de enero de 2027",
  rsvpEmail: "isayjorge2027@gmail.com",
} as const;

interface Parent {
  name: string;
  deceased?: boolean;
}

export const PARENTS: { bride: Parent[]; groom: Parent[] } = {
  bride: [
    { name: "Manuel Galguera", deceased: true },
    { name: "Esther Pintado" },
  ],
  groom: [
    { name: "Santiago Saceda" },
    { name: "Anabella Hernández" },
  ],
};

export const VENUES = {
  ceremony: {
    label: "Ceremonia religiosa",
    name: "Parroquia Santa Teresita del Niño Jesús",
    address: "Sierra Nevada 750, Lomas de Chapultepec, Miguel Hidalgo, CDMX",
    mapsQuery: "Parroquia Santa Teresita del Niño Jesús, Sierra Nevada 750, Lomas de Chapultepec, Miguel Hidalgo, CDMX",
  },
  reception: {
    label: "Recepción",
    name: "Terraza Interlomas (TI G25)",
    address: "Parque de Granada 25, Parques de la Herradura, Huixquilucan, Estado de México",
    mapsQuery: "Terraza Interlomas TI G25, Parque de Granada 25, Parques de la Herradura, Huixquilucan",
  },
} as const;
