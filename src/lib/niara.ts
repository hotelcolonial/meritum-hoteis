/**
 * Motor de reservas Niara / OTA Builder.
 * Formato: https://app.otabuilder.com/meritumhoteis/hotels/{HOTEL_ID}#startDate=…&endDate=…&rooms[]=…
 * Os parâmetros vão depois do "#" (não na query string).
 */
export const NIARA_BASE = "https://app.otabuilder.com/meritumhoteis/hotels";

export const NIARA_HOTEL_ID = {
  colonial: "HOTEL_OMNI_13875",
  pousada: "HOTEL_OMNI_53217",
} as const;

export type NiaraRoom = { adults: number; childrenAges: number[] };

/** Data local em YYYY-MM-DD (sem converter para UTC). */
export function toLocalIsoDate(d: Date | string): string {
  if (typeof d === "string") return d;
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Quarto no formato do motor: a{adultos} + c{idades separadas por vírgula}. Ex.: a2c5,8 */
function roomParam(r: NiaraRoom) {
  return "rooms[]=a" + r.adults + (r.childrenAges.length ? "c" + r.childrenAges.join(",") : "");
}

export function buildNiaraUrl({ hotelId, checkIn, checkOut, rooms, promoCode }: {
  hotelId: string;
  checkIn: Date | string;
  checkOut: Date | string;
  rooms: NiaraRoom[];
  promoCode?: string;
}): string {
  // Montado à mão: URLSearchParams codificaria os colchetes de rooms[]
  const parts = ["startDate=" + toLocalIsoDate(checkIn), "endDate=" + toLocalIsoDate(checkOut), ...rooms.map(roomParam)];
  const code = promoCode?.trim();
  if (code) parts.push("enablePromoCode=true", "promoCode=" + encodeURIComponent(code));
  return `${NIARA_BASE}/${hotelId}#${parts.join("&")}`;
}
