import { describe, expect, it } from "vitest";
import { buildNiaraUrl, NIARA_HOTEL_ID, toLocalIsoDate } from "./niara";

describe("buildNiaraUrl", () => {
  it("Hotel Colonial: 2 adultos + crianças de 5 e 8 anos, com código", () => {
    expect(buildNiaraUrl({
      hotelId: NIARA_HOTEL_ID.colonial,
      checkIn: "2026-11-13",
      checkOut: "2026-11-15",
      rooms: [{ adults: 2, childrenAges: [5, 8] }],
      promoCode: "COLONIAL25",
    })).toBe("https://app.otabuilder.com/meritumhoteis/hotels/HOTEL_OMNI_13875#startDate=2026-11-13&endDate=2026-11-15&rooms[]=a2c5,8&enablePromoCode=true&promoCode=COLONIAL25");
  });

  it("Pousada Cataratas: 2 quartos, sem código", () => {
    expect(buildNiaraUrl({
      hotelId: NIARA_HOTEL_ID.pousada,
      checkIn: "2026-12-10",
      checkOut: "2026-12-15",
      rooms: [{ adults: 2, childrenAges: [] }, { adults: 1, childrenAges: [] }],
    })).toBe("https://app.otabuilder.com/meritumhoteis/hotels/HOTEL_OMNI_53217#startDate=2026-12-10&endDate=2026-12-15&rooms[]=a2&rooms[]=a1");
  });

  it("formata cada quarto", () => {
    const url = (rooms: { adults: number; childrenAges: number[] }[]) =>
      buildNiaraUrl({ hotelId: "X", checkIn: "2026-01-01", checkOut: "2026-01-02", rooms }).split("#")[1];
    expect(url([{ adults: 2, childrenAges: [] }])).toBe("startDate=2026-01-01&endDate=2026-01-02&rooms[]=a2");
    expect(url([{ adults: 2, childrenAges: [5] }])).toBe("startDate=2026-01-01&endDate=2026-01-02&rooms[]=a2c5");
    expect(url([{ adults: 2, childrenAges: [5] }, { adults: 1, childrenAges: [] }])).toBe("startDate=2026-01-01&endDate=2026-01-02&rooms[]=a2c5&rooms[]=a1");
    expect(url([{ adults: 1, childrenAges: [0, 17] }])).toBe("startDate=2026-01-01&endDate=2026-01-02&rooms[]=a1c0,17");
  });

  it("código: ignora vazio, aplica trim e codifica", () => {
    const base = { hotelId: "X", checkIn: "2026-01-01", checkOut: "2026-01-02", rooms: [{ adults: 2, childrenAges: [] }] };
    expect(buildNiaraUrl({ ...base, promoCode: "   " })).not.toContain("promoCode");
    expect(buildNiaraUrl({ ...base, promoCode: "" })).not.toContain("enablePromoCode");
    expect(buildNiaraUrl({ ...base, promoCode: "  VERÃO 25&X " })).toMatch(/&enablePromoCode=true&promoCode=VER%C3%83O%2025%26X$/);
  });

  it("aceita Date e usa a data local (sem fuso)", () => {
    // 23h30 local: em UTC já seria o dia seguinte em fusos a oeste de Greenwich
    const checkIn = new Date(2026, 10, 13, 23, 30), checkOut = new Date(2026, 10, 15, 0, 5);
    expect(toLocalIsoDate(checkIn)).toBe("2026-11-13");
    expect(buildNiaraUrl({ hotelId: "X", checkIn, checkOut, rooms: [{ adults: 2, childrenAges: [] }] }))
      .toContain("#startDate=2026-11-13&endDate=2026-11-15&");
  });
});
