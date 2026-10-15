import type { Metadata } from "next";
import { ORG, ROUTES, SITE_URL } from "./site";

type PageSeo = { path: string; title: string; description: string; image: string; imageAlt: string };

/** Títulos e descrições por página. Texto só com dados que já estão no site. */
export const SEO = {
  home: {
    path: ROUTES.home,
    title: "Méritum Hotéis | Gestão hoteleira em Foz do Iguaçu",
    description: "Gestora hoteleira de Foz do Iguaçu. A Méritum assume a gestão de hotéis independentes e cuida do Hotel Colonial Iguaçu, da Pousada Cataratas, do Villa Colonial e do Colonial Autopark.",
    image: "/assets/colonial-pergola-piscina.jpg",
    imageAlt: "Pérgola e piscina do Hotel Colonial Iguaçu",
  },
  meritum: {
    path: ROUTES.meritum,
    title: "A Méritum | Méritum Hotéis",
    description: "A Méritum Hotéis é uma gestora hoteleira de Foz do Iguaçu. Assumimos a gestão de hotéis independentes e desenvolvemos cada um de forma individual, respeitando sua identidade.",
    image: "/assets/web/join-hotel-colonial.jpg",
    imageAlt: "Jardim e área da piscina do Hotel Colonial Iguaçu",
  },
  gestao: {
    path: ROUTES.gestao,
    title: "Gestão hoteleira e arrendamento | Méritum Hotéis",
    description: "Gestão operacional, comercial, de custos e de hospitalidade para hotéis independentes. Conheça como a Méritum atua, do diagnóstico ao desenvolvimento, nos modelos de gestão e de arrendamento.",
    image: "/assets/colonial-pergola-piscina.jpg",
    imageAlt: "Pérgola com mesa de bilhar e piscina no Hotel Colonial Iguaçu",
  },
  contato: {
    path: ROUTES.contato,
    title: "Contato | Méritum Hotéis",
    description: "Fale com a Méritum sobre gestão ou arrendamento do seu hotel, ou encontre os contatos de reservas do Hotel Colonial Iguaçu, da Pousada Cataratas e do Colonial Autopark.",
    image: "/assets/web/join-hotel-colonial.jpg",
    imageAlt: "Jardim do Hotel Colonial Iguaçu",
  },
  colonial: {
    path: ROUTES.colonial,
    title: "Hotel Colonial Iguaçu | Rodovia das Cataratas, Foz do Iguaçu",
    description: "Hotel na Rodovia das Cataratas, km 20, a 1,2 km da entrada do Parque Nacional do Iguaçu. Recebendo hóspedes desde 1970, com grande área verde, piscinas e o restaurante Villa Colonial.",
    image: "/assets/web/join-hotel-colonial.jpg",
    imageAlt: "Jardim e piscina do Hotel Colonial Iguaçu",
  },
  pousada: {
    path: ROUTES.pousada,
    title: "Pousada Cataratas | Pousada no centro de Foz do Iguaçu",
    description: "Pousada com 27 apartamentos a 100 metros da Avenida das Cataratas, em Foz do Iguaçu. Café da manhã incluso, piscina, estacionamento gratuito e recepção 24 horas.",
    image: "/assets/pousada-piscina-pergolado.jpg",
    imageAlt: "Piscina da Pousada Cataratas sob o pergolado",
  },
  villa: {
    path: ROUTES.villa,
    title: "Villa Colonial | Restaurante e eventos em Foz do Iguaçu",
    description: "Restaurante do Hotel Colonial Iguaçu, na Rodovia das Cataratas. Buffet de culinária regional e internacional no café da manhã, almoço e jantar, e gastronomia para eventos.",
    image: "/assets/villa-salao-noite.jpg",
    imageAlt: "Salão do restaurante Villa Colonial à noite",
  },
  autopark: {
    path: ROUTES.autopark,
    title: "Colonial Autopark | Estacionamento perto do aeroporto de Foz do Iguaçu",
    description: "Estacionamento aberto 24 horas, 7 dias por semana, dentro do Hotel Colonial Iguaçu, com vaga monitorada e traslado gratuito de ida e volta ao Aeroporto Internacional de Foz do Iguaçu.",
    image: "/assets/autopark-vista-aerea.jpg",
    imageAlt: "Vista do estacionamento do Colonial Autopark",
  },
  bora: {
    path: ROUTES.bora,
    title: "Bora de Novo | Programa para quem volta às propriedades Méritum",
    description: "Já se hospedou em uma propriedade Méritum? O Bora de Novo oferece condições especiais para quem volta. Veja como funciona e tire suas dúvidas.",
    image: "/assets/web/join-hotel-colonial.jpg",
    imageAlt: "Jardim e área da piscina do Hotel Colonial Iguaçu",
  },
  reserva: {
    path: ROUTES.reserva,
    title: "Minha reserva | Méritum Hotéis",
    description: "Consulte, altere ou tire dúvidas sobre a sua reserva no Hotel Colonial Iguaçu ou na Pousada Cataratas direto com a equipe de cada propriedade.",
    image: "/assets/colonial-pergola-piscina.jpg",
    imageAlt: "Hotel Colonial Iguaçu",
  },
  hospede: {
    path: ROUTES.hospede,
    title: "Área do hóspede | Méritum Hotéis",
    description: "Atalhos para hóspedes das propriedades Méritum: sua reserva, o programa Bora de Novo e os contatos de cada propriedade.",
    image: "/assets/colonial-pergola-piscina.jpg",
    imageAlt: "Hotel Colonial Iguaçu",
  },
} satisfies Record<string, PageSeo>;

export function pageMetadata(key: keyof typeof SEO): Metadata {
  const p = SEO[key];
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: ORG.name,
      url: p.path,
      title: p.title,
      description: p.description,
      images: [{ url: p.image, alt: p.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [p.image] },
  };
}

/* ---------- Dados estruturados (schema.org) ---------- */

const abs = (p: string) => SITE_URL + p;
const ORG_ID = SITE_URL + "/#organization";

const colonialAddress = {
  "@type": "PostalAddress",
  streetAddress: "Rodovia das Cataratas, km 20, 11237",
  addressLocality: "Foz do Iguaçu",
  addressRegion: "PR",
  addressCountry: "BR",
};

export function organizationLd() {
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
    description: SEO.home.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.street,
      addressLocality: ORG.city,
      addressRegion: ORG.region,
      postalCode: ORG.postalCode,
      addressCountry: ORG.country,
    },
    areaServed: "Foz do Iguaçu, PR",
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

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_URL + "/#website",
    url: SITE_URL,
    name: ORG.name,
    inLanguage: "pt-BR",
    publisher: { "@id": ORG_ID },
  };
}

export function propertyLd(key: "colonial" | "pousada" | "villa" | "autopark") {
  const url = abs(ROUTES[key]);
  const base = { "@context": "https://schema.org", url, parentOrganization: { "@id": ORG_ID }, image: abs(SEO[key].image) };
  if (key === "colonial") {
    return {
      ...base,
      "@type": "Hotel",
      "@id": url + "#hotel",
      name: "Hotel Colonial Iguaçu",
      description: SEO.colonial.description,
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
      "@id": url + "#hotel",
      name: "Pousada Cataratas",
      description: SEO.pousada.description,
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
      "@id": url + "#restaurant",
      name: "Villa Colonial",
      description: SEO.villa.description,
      servesCuisine: ["Regional", "Internacional"],
      telephone: "0800 819 1993",
      email: "reservas@hotelcolonialfoz.com.br",
      address: colonialAddress,
      containedInPlace: { "@id": abs(ROUTES.colonial) + "#hotel" },
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
    "@id": url + "#parking",
    name: "Colonial Autopark",
    description: SEO.autopark.description,
    telephone: "(45) 3529 7711",
    address: colonialAddress,
    containedInPlace: { "@id": abs(ROUTES.colonial) + "#hotel" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path),
    })),
  };
}

export function faqLd(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
