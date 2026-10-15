import type { Metadata } from "next";
import { ORG, ROUTES, SITE_URL } from "./site";
import { HTML_LANG, LOCALES_PUBLISHED, OG_LOCALE, isPublished, localePath, type Locale } from "@/i18n/config";
import { NOINDEX } from "./site";

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

const ES: Record<SeoKey, PageText> = {
  home: {
    title: "Méritum Hotéis | Gestión hotelera en Foz do Iguaçu",
    description: "Administradora hotelera de Foz do Iguaçu. Gestión de hoteles independientes y de las propiedades Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial y Autopark.",
    imageAlt: "Pérgola y piscina del Hotel Colonial Iguaçu",
  },
  meritum: {
    title: "Sobre Méritum | Méritum Hotéis",
    description: "Administradora hotelera de Foz do Iguaçu que asume la gestión de hoteles independientes y desarrolla cada uno de forma individual, respetando su identidad.",
    imageAlt: "Jardín y área de la piscina del Hotel Colonial Iguaçu",
  },
  gestao: {
    title: "Gestión hotelera y arrendamiento | Méritum Hotéis",
    description: "Gestión operativa, comercial, de costos y de hospitalidad para hoteles independientes, en los modelos de gestión hotelera y arrendamiento de activos.",
    imageAlt: "Pérgola con mesa de billar y piscina en el Hotel Colonial Iguaçu",
  },
  contato: {
    title: "Contacto | Méritum Hotéis",
    description: "Habla con Méritum sobre la gestión o el arrendamiento de tu hotel, o encuentra los contactos de reservas de cada propiedad en Foz do Iguaçu.",
    imageAlt: "Jardín del Hotel Colonial Iguaçu",
  },
  colonial: {
    title: "Hotel Colonial Iguaçu | Rodovia das Cataratas, Foz do Iguaçu",
    description: "Hotel en la Rodovia das Cataratas, a 1,2 km de la entrada del Parque Nacional do Iguaçu. Desde 1970, con una gran área verde, piscinas y el restaurante Villa Colonial.",
    imageAlt: "Jardín y piscina del Hotel Colonial Iguaçu",
  },
  pousada: {
    title: "Pousada Cataratas | Posada en el centro de Foz do Iguaçu",
    description: "Posada con 27 habitaciones a 100 m de la Avenida das Cataratas, en Foz do Iguaçu. Desayuno incluido, piscina, estacionamiento gratuito y recepción las 24 h.",
    imageAlt: "Piscina de la Pousada Cataratas bajo la pérgola",
  },
  villa: {
    title: "Villa Colonial | Restaurante y eventos en Foz do Iguaçu",
    description: "Restaurante del Hotel Colonial Iguaçu, en la Rodovia das Cataratas. Buffet regional e internacional en el desayuno, el almuerzo y la cena, y gastronomía para eventos.",
    imageAlt: "Salón del restaurante Villa Colonial de noche",
  },
  autopark: {
    title: "Colonial Autopark | Estacionamiento aeropuerto Foz do Iguaçu",
    description: "Estacionamiento las 24 horas dentro del Hotel Colonial Iguaçu, con espacio monitoreado y traslado gratuito de ida y vuelta al Aeropuerto Internacional de Foz do Iguaçu.",
    imageAlt: "Vista del estacionamiento del Colonial Autopark",
  },
  bora: {
    title: "Bora de Novo | Condiciones para quienes vuelven a Méritum",
    description: "¿Ya te hospedaste en una propiedad Méritum? Bora de Novo ofrece condiciones especiales para quienes vuelven. Mira cómo funciona y resuelve tus dudas.",
    imageAlt: "Jardín y área de la piscina del Hotel Colonial Iguaçu",
  },
  reserva: {
    title: "Mi reserva | Méritum Hotéis",
    description: "Consulta, modifica o resuelve tus dudas sobre tu reserva en el Hotel Colonial Iguaçu o en la Pousada Cataratas directamente con el equipo de cada propiedad.",
    imageAlt: "Hotel Colonial Iguaçu",
  },
  hospede: {
    title: "Área del huésped | Méritum Hotéis",
    description: "Accesos rápidos para huéspedes de las propiedades Méritum: tu reserva, el programa Bora de Novo y los contactos de cada propiedad.",
    imageAlt: "Hotel Colonial Iguaçu",
  },
};

const EN: Record<SeoKey, PageText> = {
  home: {
    title: "Méritum Hotéis | Hotel management in Foz do Iguaçu",
    description: "Hotel management company in Foz do Iguaçu. Management of independent hotels and of the properties Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial and Autopark.",
    imageAlt: "Pergola and pool at Hotel Colonial Iguaçu",
  },
  meritum: {
    title: "About Méritum | Méritum Hotéis",
    description: "Hotel management company in Foz do Iguaçu that takes over the management of independent hotels and develops each one individually, respecting its identity.",
    imageAlt: "Garden and pool area at Hotel Colonial Iguaçu",
  },
  gestao: {
    title: "Hotel management and leasing | Méritum Hotéis",
    description: "Operational, commercial, cost and hospitality management for independent hotels, under hotel management and asset leasing models.",
    imageAlt: "Pergola with a pool table and the pool at Hotel Colonial Iguaçu",
  },
  contato: {
    title: "Contact | Méritum Hotéis",
    description: "Talk to Méritum about managing or leasing your hotel, or find the reservation contacts for each property in Foz do Iguaçu.",
    imageAlt: "Garden at Hotel Colonial Iguaçu",
  },
  colonial: {
    title: "Hotel Colonial Iguaçu | Rodovia das Cataratas, Foz do Iguaçu",
    description: "Hotel on Rodovia das Cataratas, 1.2 km from the entrance to Iguaçu National Park. Since 1970, with a large green area, pools and the Villa Colonial restaurant.",
    imageAlt: "Garden and pool at Hotel Colonial Iguaçu",
  },
  pousada: {
    title: "Pousada Cataratas | Inn in downtown Foz do Iguaçu",
    description: "Inn with 27 rooms 100 m from Avenida das Cataratas, in Foz do Iguaçu. Breakfast included, pool, free parking and a 24-hour front desk.",
    imageAlt: "Pousada Cataratas pool under the pergola",
  },
  villa: {
    title: "Villa Colonial | Restaurant and events in Foz do Iguaçu",
    description: "Restaurant at Hotel Colonial Iguaçu, on Rodovia das Cataratas. Regional and international buffet for breakfast, lunch and dinner, and catering for events.",
    imageAlt: "Villa Colonial restaurant dining room at night",
  },
  autopark: {
    title: "Colonial Autopark | Foz do Iguaçu airport parking",
    description: "24-hour parking inside Hotel Colonial Iguaçu, with a monitored parking space and a free shuttle to and from Foz do Iguaçu International Airport.",
    imageAlt: "View of the Colonial Autopark parking lot",
  },
  bora: {
    title: "Bora de Novo | Special terms for returning Méritum guests",
    description: "Have you stayed at a Méritum property before? Bora de Novo offers special terms for returning guests. See how it works and get your questions answered.",
    imageAlt: "Garden and pool area at Hotel Colonial Iguaçu",
  },
  reserva: {
    title: "My reservation | Méritum Hotéis",
    description: "Check, change or ask about your reservation at Hotel Colonial Iguaçu or Pousada Cataratas directly with each property’s team.",
    imageAlt: "Hotel Colonial Iguaçu",
  },
  hospede: {
    title: "Guest area | Méritum Hotéis",
    description: "Shortcuts for guests of Méritum properties: your reservation, the Bora de Novo program and the contacts for each property.",
    imageAlt: "Hotel Colonial Iguaçu",
  },
};

const TEXT: Record<Locale, Record<SeoKey, PageText>> = { pt: PT, es: ES, en: EN };

/** Textos dos dados estruturados (schema.org) que dependem do idioma */
const LD_PT = {
  contactType: "Atendimento a proprietários de hotéis",
  knowsAbout: ["Gestão hoteleira", "Arrendamento de hotéis", "Gestão comercial hoteleira", "Hospitalidade"],
  colonialAmenities: ["Piscina", "Restaurante", "Salas de eventos para até 180 pessoas"],
  pousadaAmenities: ["Café da manhã incluso", "Piscina", "Estacionamento gratuito", "Recepção 24 horas"],
  cuisine: ["Regional", "Internacional"],
};
const LD_ES: typeof LD_PT = {
  contactType: "Atención a propietarios de hoteles",
  knowsAbout: ["Gestión hotelera", "Arrendamiento de hoteles", "Gestión comercial hotelera", "Hospitalidad"],
  colonialAmenities: ["Piscina", "Restaurante", "Salones de eventos para hasta 180 personas"],
  pousadaAmenities: ["Desayuno incluido", "Piscina", "Estacionamiento gratuito", "Recepción las 24 horas"],
  cuisine: ["Regional", "Internacional"],
};
const LD_EN: typeof LD_PT = {
  contactType: "Hotel owner relations",
  knowsAbout: ["Hotel management", "Hotel leasing", "Hotel commercial management", "Hospitality"],
  colonialAmenities: ["Pool", "Restaurant", "Event rooms for up to 180 people"],
  pousadaAmenities: ["Breakfast included", "Pool", "Free parking", "24-hour front desk"],
  cuisine: ["Regional", "International"],
};
const LD_TEXT: Record<Locale, typeof LD_PT> = { pt: LD_PT, es: LD_ES, en: LD_EN };
const amenities = (names: string[]) => names.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true }));

/** Título, descrição e imagem de uma página no idioma. */
export const seoText = (key: SeoKey, locale: Locale) => ({ ...PAGES[key], ...TEXT[locale][key] });

/** hreflang entre os idiomas publicados + x-default no português. Com um idioma só, não há alternativas. */
export function languageAlternates(path: string): Record<string, string> | undefined {
  if (LOCALES_PUBLISHED.length < 2) return undefined;
  const langs: Record<string, string> = {};
  for (const l of LOCALES_PUBLISHED) langs[HTML_LANG[l]] = localePath(l, path);
  langs["x-default"] = path;
  return langs;
}

export function pageMetadata(key: SeoKey, locale: Locale): Metadata {
  const p = seoText(key, locale);
  const url = localePath(locale, p.path);
  const published = isPublished(locale);
  // Idioma ainda não publicado: no ar, mas fora do Google e sem apontar para as outras versões
  const languages = published ? languageAlternates(p.path) : undefined;
  const others = LOCALES_PUBLISHED.filter((l) => l !== locale);
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    ...(published ? {} : { robots: { index: false, follow: !NOINDEX } }),
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale],
      ...(published && others.length ? { alternateLocale: others.map((l) => OG_LOCALE[l]) } : {}),
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
    contactPoint: { "@type": "ContactPoint", contactType: LD_TEXT[locale].contactType, email: ORG.email, availableLanguage: ["Portuguese"] },
    knowsAbout: LD_TEXT[locale].knowsAbout,
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
      amenityFeature: amenities(LD_TEXT[locale].colonialAmenities),
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
      amenityFeature: amenities(LD_TEXT[locale].pousadaAmenities),
    };
  }
  if (key === "villa") {
    return {
      ...base,
      "@type": "Restaurant",
      "@id": ENTITY_ID.villa,
      name: "Villa Colonial",
      description: text.description,
      servesCuisine: LD_TEXT[locale].cuisine,
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
