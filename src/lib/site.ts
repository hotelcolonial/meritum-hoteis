export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.meritumhoteis.com.br").replace(/\/$/, "");

export type PageKey =
  | "home" | "meritum" | "gestao" | "contato" | "colonial" | "pousada" | "villa" | "autopark"
  | "bora" | "reserva" | "hospede" | "404";

export const ROUTES = {
  home: "/",
  meritum: "/a-meritum",
  gestao: "/gestao",
  contato: "/contato",
  colonial: "/hotel-colonial-iguacu",
  pousada: "/pousada-cataratas",
  villa: "/villa-colonial",
  autopark: "/colonial-autopark",
  bora: "/bora-de-novo",
  reserva: "/minha-reserva",
  hospede: "/area-do-hospede",
} as const;

export const HOTELS = [
  { key: "colonial", name: "Hotel Colonial Iguaçu", href: ROUTES.colonial },
  { key: "pousada", name: "Pousada Cataratas", href: ROUTES.pousada },
  { key: "villa", name: "Villa Colonial", href: ROUTES.villa },
  { key: "autopark", name: "Colonial Autopark", href: ROUTES.autopark },
] as const;

/** Dados institucionais da Méritum (usados no rodapé e nos dados estruturados). */
export const ORG = {
  name: "Méritum Hotéis",
  legalName: "Meritum Serviços Hoteleiros Integrados Ltda.",
  cnpj: "63.854.324/0001-07",
  street: "Rodovia BR-469, 11237, Cataratas",
  city: "Foz do Iguaçu",
  region: "PR",
  postalCode: "85853-881",
  country: "BR",
  // A CONFIRMAR: e-mail institucional
  email: "contato@meritumhoteis.com.br",
  // A CONFIRMAR: preencher com os perfis oficiais; vazio esconde nada, apenas não entra no schema
  social: { instagram: "", facebook: "", linkedin: "" },
};
