import type { Metadata } from "next";
import { ORG, ROUTES, SITE_URL } from "./site";
import { HTML_LANG, LOCALES, OG_LOCALE, localePath, type Locale } from "@/i18n/config";

type PageText = { title: string; description: string; imageAlt: string };

/** Rota e imagem de compartilhamento de cada página (iguais em todos os idiomas). */
export const PAGES = {
  home: { path: ROUTES.home, image: "/og/home.jpg" },
  meritum: { path: ROUTES.meritum, image: "/og/meritum.jpg" },
  gestao: { path: ROUTES.gestao, image: "/og/gestao.jpg" },
  contato: { path: ROUTES.contato, image: "/og/contato.jpg" },
  colonial: { path: ROUTES.colonial, image: "/og/colonial.jpg" },
  pousada: { path: ROUTES.pousada, image: "/og/pousada.jpg" },
  villa: { path: ROUTES.villa, image: "/og/villa.jpg" },
  autopark: { path: ROUTES.autopark, image: "/og/autopark.jpg" },
  bora: { path: ROUTES.bora, image: "/og/bora.jpg" },
  reserva: { path: ROUTES.reserva, image: "/og/reserva.jpg" },
  hospede: { path: ROUTES.hospede, image: "/og/hospede.jpg" },
} as const;
export type SeoKey = keyof typeof PAGES;

/** Títulos e descrições por página. Texto só com dados que já estão no site. */
const PT: Record<SeoKey, PageText> = {
  home: {
    title: "Méritum Hotéis | Gestão hoteleira em Foz do Iguaçu",
    description: "Gestora hoteleira de Foz do Iguaçu. Gestão de hotéis independentes e das propriedades Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial e Autopark.",
    imageAlt: "Pérgola e piscina do Hotel Colonial Iguaçu",
  },
  meritum: {
    title: "A Méritum | Méritum Hotéis",
    description: "Gestora hoteleira de Foz do Iguaçu que assume a gestão de hotéis independentes e desenvolve cada um de forma individual, respeitando sua identidade.",
    imageAlt: "Jardim e área da piscina do Hotel Colonial Iguaçu",
  },
  gestao: {
    title: "Gestão hoteleira e arrendamento | Méritum Hotéis",
    description: "Gestão operacional, comercial, de custos e de hospitalidade para hotéis independentes, nos modelos de gestão hoteleira e arrendamento de ativos.",
    imageAlt: "Pérgola com mesa de bilhar e piscina no Hotel Colonial Iguaçu",
  },
  contato: {
    title: "Contato | Méritum Hotéis",
    description: "Fale com a Méritum sobre gestão ou arrendamento do seu hotel, ou encontre os contatos de reservas de cada propriedade em Foz do Iguaçu.",
    imageAlt: "Jardim do Hotel Colonial Iguaçu",
  },
  colonial: {
    title: "Hotel Colonial Iguaçu | Rodovia das Cataratas, Foz do Iguaçu",
    description: "Hotel na Rodovia das Cataratas, a 1,2 km da entrada do Parque Nacional do Iguaçu. Desde 1970, com grande área verde, piscinas e o restaurante Villa Colonial.",
    imageAlt: "Jardim e piscina do Hotel Colonial Iguaçu",
  },
  pousada: {
    title: "Pousada Cataratas | Pousada no centro de Foz do Iguaçu",
    description: "Pousada com 27 apartamentos a 100 m da Avenida das Cataratas, em Foz do Iguaçu. Café da manhã incluso, piscina, estacionamento gratuito e recepção 24 h.",
    imageAlt: "Piscina da Pousada Cataratas sob o pergolado",
  },
  villa: {
    title: "Villa Colonial | Restaurante e eventos em Foz do Iguaçu",
    description: "Restaurante do Hotel Colonial Iguaçu, na Rodovia das Cataratas. Buffet regional e internacional no café da manhã, almoço e jantar, e gastronomia para eventos.",
    imageAlt: "Salão do restaurante Villa Colonial à noite",
  },
  autopark: {
    title: "Colonial Autopark | Estacionamento aeroporto Foz do Iguaçu",
    description: "Estacionamento 24 horas dentro do Hotel Colonial Iguaçu, com vaga monitorada e traslado gratuito de ida e volta ao Aeroporto Internacional de Foz do Iguaçu.",
    imageAlt: "Vista do estacionamento do Colonial Autopark",
  },
  bora: {
    title: "Bora de Novo | Condições para quem volta à Méritum",
    description: "Já se hospedou em uma propriedade Méritum? O Bora de Novo oferece condições especiais para quem volta. Veja como funciona e tire suas dúvidas.",
    imageAlt: "Jardim e área da piscina do Hotel Colonial Iguaçu",
  },
  reserva: {
    title: "Minha reserva | Méritum Hotéis",
    description: "Consulte, altere ou tire dúvidas sobre a sua reserva no Hotel Colonial Iguaçu ou na Pousada Cataratas direto com a equipe de cada propriedade.",
    imageAlt: "Hotel Colonial Iguaçu",
  },
  hospede: {
    title: "Área do hóspede | Méritum Hotéis",
    description: "Atalhos para hóspedes das propriedades Méritum: sua reserva, o programa Bora de Novo e os contatos de cada propriedade.",
    imageAlt: "Hotel Colonial Iguaçu",
  },
};

// Fase 1: espanhol e inglês ainda usam os textos em português
const TEXT: Record<Locale, Record<SeoKey, PageText>> = { pt: PT, es: PT, en: PT };

/** Título, descrição e imagem de uma página no idioma. */
export const seoText = (key: SeoKey, locale: Locale) => ({ ...PAGES[key], ...TEXT[locale][key] });

/** hreflang das três versões + x-default no português */
export function languageAlternates(path: string): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[HTML_LANG[l]] = localePath(l, path);
  langs["x-default"] = path;
  return langs;
}

export function pageMetadata(key: SeoKey, locale: Locale): Metadata {
  const p = seoText(key, locale);
  const url = localePath(locale, p.path);
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url, languages: languageAlternates(p.path) },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      siteName: ORG.name,
      url,
      title: p.title,
      description: p.description,
      images: [{ url: p.image, width: 1200, height: 630, alt: p.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [p.image] },
  };
}

/* ---------- Dados estruturados (schema.org) ---------- */

const abs = (p: string) => SITE_URL + p;
const ORG_ID = SITE_URL + "/#organization";
const WEBSITE_ID = SITE_URL + "/#website";

const colonialAddress = {
  "@type": "PostalAddress",
  streetAddress: "Rodovia das Cataratas, km 20, 11237",
  addressLocality: "Foz do Iguaçu",
  addressRegion: "PR",
  addressCountry: "BR",
};

export function organizationLd(locale: Locale) {
  const sameAs = Object.values(ORG.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: abs("/assets/logo-full.svg"),
    email: ORG.email,
    taxID: ORG.cnpj,
    description: seoText("home", locale).description,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.street,
      addressLocality: ORG.city,
      addressRegion: ORG.region,
      postalCode: ORG.postalCode,
      addressCountry: ORG.country,
    },
    areaServed: { "@type": "City", name: "Foz do Iguaçu" },
    contactPoint: { "@type": "ContactPoint", contactType: "Atendimento a proprietários de hotéis", email: ORG.email, availableLanguage: ["Portuguese"] },
    knowsAbout: ["Gestão hoteleira", "Arrendamento de hotéis", "Gestão comercial hoteleira", "Hospitalidade"],
    subOrganization: [
      { "@id": abs(ROUTES.colonial) + "#hotel" },
      { "@id": abs(ROUTES.pousada) + "#hotel" },
      { "@id": abs(ROUTES.villa) + "#restaurant" },
      { "@id": abs(ROUTES.autopark) + "#parking" },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: abs(localePath(locale, "/")).replace(/\/$/, ""),
    name: ORG.name,
    inLanguage: HTML_LANG[locale],
    publisher: { "@id": ORG_ID },
  };
}

/** A página em si, com o idioma (inLanguage) e o que ela descreve. */
export function webPageLd(key: SeoKey, locale: Locale, about?: string) {
  const p = seoText(key, locale);
  const url = abs(localePath(locale, p.path));
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url + "#webpage",
    url,
    name: p.title,
    description: p.description,
    inLanguage: HTML_LANG[locale],
    isPartOf: { "@id": WEBSITE_ID },
    ...(about ? { about: { "@id": about } } : {}),
  };
}

// Coordenadas conferidas no Google Maps (perfil de cada propriedade)
const GEO = {
  colonial: { "@type": "GeoCoordinates", latitude: -25.6068039, longitude: -54.4904086 },
  pousada: { "@type": "GeoCoordinates", latitude: -25.5555564, longitude: -54.5682326 },
};
const MAPS = {
  colonial: "https://www.google.com/maps/search/?api=1&query=Hotel+Colonial+Igua%C3%A7u&query_place_id=ChIJx9E1YWyQ9pQRvNj2RIhE0w8",
  pousada: "https://www.google.com/maps/search/?api=1&query=Pousada+Cataratas&query_place_id=ChIJ_V6_F6eR9pQR64BHj3DskoE",
};
// Sites oficiais de cada propriedade (ajudam o Google a ligar as entidades)
const OFFICIAL = {
  colonial: ["https://hotelcolonialfoz.com.br"],
  pousada: ["https://pousadacataratas.com.br"],
  villa: [] as string[],
  autopark: ["https://colonialautopark.com.br"],
};
export const ENTITY_ID = {
  colonial: abs(ROUTES.colonial) + "#hotel",
  pousada: abs(ROUTES.pousada) + "#hotel",
  villa: abs(ROUTES.villa) + "#restaurant",
  autopark: abs(ROUTES.autopark) + "#parking",
};

export function propertyLd(key: "colonial" | "pousada" | "villa" | "autopark", locale: Locale) {
  // O @id da entidade é o mesmo nos três idiomas (é o mesmo hotel); a url aponta para a página no idioma
  const url = abs(localePath(locale, ROUTES[key]));
  const loc = key === "pousada" ? "pousada" : "colonial";
  const text = seoText(key, locale);
  const base = {
    "@context": "https://schema.org",
    url,
    parentOrganization: { "@id": ORG_ID },
    image: abs(text.image),
    geo: GEO[loc],
    hasMap: MAPS[loc],
    ...(OFFICIAL[key].length ? { sameAs: OFFICIAL[key] } : {}),
  };
  if (key === "colonial") {
    return {
      ...base,
      "@type": "Hotel",
      "@id": ENTITY_ID.colonial,
      name: "Hotel Colonial Iguaçu",
      description: text.description,
      foundingDate: "1970",
      telephone: "0800 819 1993",
      email: "reservas@hotelcolonialfoz.com.br",
      address: colonialAddress,
      checkinTime: "14:00",
      checkoutTime: "12:00",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Piscina", value: true },
        { "@type": "LocationFeatureSpecification", name: "Restaurante", value: true },
        { "@type": "LocationFeatureSpecification", name: "Salas de eventos para até 180 pessoas", value: true },
      ],
    };
  }
  if (key === "pousada") {
    return {
      ...base,
      "@type": "Hotel",
      additionalType: "https://schema.org/BedAndBreakfast",
      "@id": ENTITY_ID.pousada,
      name: "Pousada Cataratas",
      description: text.description,
      telephone: "0800 002 9215",
      email: "reservas@pousadacataratas.com.br",
      numberOfRooms: 27,
      address: { "@type": "PostalAddress", streetAddress: "Rua Parigot de Souza, 180", addressLocality: "Foz do Iguaçu", addressRegion: "PR", addressCountry: "BR" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Café da manhã incluso", value: true },
        { "@type": "LocationFeatureSpecification", name: "Piscina", value: true },
        { "@type": "LocationFeatureSpecification", name: "Estacionamento gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Recepção 24 horas", value: true },
      ],
    };
  }
  if (key === "villa") {
    return {
      ...base,
      "@type": "Restaurant",
      "@id": ENTITY_ID.villa,
      name: "Villa Colonial",
      description: text.description,
      servesCuisine: ["Regional", "Internacional"],
      telephone: "0800 819 1993",
      email: "reservas@hotelcolonialfoz.com.br",
      address: colonialAddress,
      containedInPlace: { "@id": ENTITY_ID.colonial },
      openingHoursSpecification: [
        ["06:30", "10:00"], ["11:30", "16:00"], ["19:00", "22:30"],
      ].map(([opens, closes]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens, closes,
      })),
    };
  }
  return {
    ...base,
    "@type": "ParkingFacility",
    "@id": ENTITY_ID.autopark,
    name: "Colonial Autopark",
    description: text.description,
    telephone: "(45) 3529 7711",
    address: colonialAddress,
    containedInPlace: { "@id": ENTITY_ID.colonial },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[], locale: Locale, homeName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: homeName, path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name, item: abs(localePath(locale, it.path)),
    })),
  };
}

export function faqLd(qa: { q: string; a: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: HTML_LANG[locale],
    mainEntity: qa.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
