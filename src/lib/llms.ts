import { ORG, SITE_URL } from "./site";
import { PAGES } from "./seo";
import { LANG_NAME, LOCALES_PUBLISHED, localePath, type Locale } from "@/i18n/config";

/**
 * Resumo do site em Markdown para assistentes de IA (padrão llms.txt), um arquivo por idioma:
 * /llms.txt em português e /es/llms.txt, /en/llms.txt quando o idioma estiver em LOCALES_PUBLISHED.
 */
const url = (locale: Locale, k: keyof typeof PAGES) => SITE_URL + localePath(locale, PAGES[k].path);

function pt(): string {
  const u = (k: keyof typeof PAGES) => url("pt", k);
  const others = LOCALES_PUBLISHED.filter((l) => l !== "pt");
  return `# ${ORG.name}

> Gestora hoteleira de Foz do Iguaçu (PR). Assume a gestão de hotéis independentes e desenvolve cada um de forma individual, respeitando sua identidade. Atua em dois modelos: gestão hoteleira e arrendamento de ativos.

Razão social: ${ORG.legalName}. CNPJ ${ORG.cnpj}. Endereço: ${ORG.street}, ${ORG.city}, ${ORG.region}, ${ORG.postalCode}.

## Propriedades

- [Hotel Colonial Iguaçu](${u("colonial")}): hotel na Rodovia das Cataratas, km 20, 11237, a 1,2 km da entrada do Parque Nacional do Iguaçu. Recebe hóspedes desde 1970. Grande área verde, piscinas, salas de eventos para até 180 pessoas. Check-in 14h, check-out 12h. Reservas: 0800 819 1993, reservas@hotelcolonialfoz.com.br.
- [Pousada Cataratas](${u("pousada")}): pousada com 27 apartamentos na Rua Parigot de Souza, 180, a 100 m da Avenida das Cataratas. Café da manhã incluso, piscina, estacionamento gratuito, recepção 24 horas. Quartos Duplo (13 m²), Triplo (18 m²), Quádruplo (22 m²) e Quíntuplo (26 m²). Reservas: 0800 002 9215, reservas@pousadacataratas.com.br.
- [Villa Colonial](${u("villa")}): restaurante dentro do Hotel Colonial Iguaçu. Buffet de culinária regional e internacional. Café da manhã 06h30 às 10h, almoço 11h30 às 16h, jantar 19h às 22h30. Gastronomia para eventos.
- [Colonial Autopark](${u("autopark")}): estacionamento dentro do Hotel Colonial Iguaçu, aberto 24 horas, 7 dias por semana, com vaga monitorada e traslado gratuito de ida e volta ao Aeroporto Internacional de Foz do Iguaçu (IGU). Central de reservas (45) 3529 7711.

## Para proprietários de hotéis

- [Gestão](${u("gestao")}): gestão operacional, comercial, de custos e processos e de hospitalidade. Modelos de gestão hoteleira e de arrendamento de ativos.
- [A Méritum](${u("meritum")}): história, portfólio e valores.
- [Contato](${u("contato")}): formulário para proprietários e contatos de reservas de cada propriedade.

## Para hóspedes

- [Bora de Novo](${u("bora")}): condições especiais para quem já se hospedou em uma propriedade Méritum.
- [Minha reserva](${u("reserva")}): como consultar ou alterar uma reserva.
- [Área do hóspede](${u("hospede")})
${others.length ? `\n## Outros idiomas\n\n${others.map((l) => `- [${LANG_NAME[l]}](${SITE_URL}/${l}/llms.txt)`).join("\n")}\n` : ""}`;
}

function es(): string {
  const u = (k: keyof typeof PAGES) => url("es", k);
  return `# ${ORG.name}

> Administradora hotelera de Foz do Iguaçu (Paraná, Brasil). Asume la gestión de hoteles independientes y desarrolla cada uno de forma individual, respetando su identidad. Trabaja en dos modelos: gestión hotelera y arrendamiento de activos.

Razón social: ${ORG.legalName}. CNPJ ${ORG.cnpj}. Dirección: ${ORG.street}, ${ORG.city}, ${ORG.region}, ${ORG.postalCode}.

## Propiedades

- [Hotel Colonial Iguaçu](${u("colonial")}): hotel en la Rodovia das Cataratas, km 20, 11237, a 1,2 km de la entrada del Parque Nacional do Iguaçu. Recibe huéspedes desde 1970. Gran área verde, piscinas y salones de eventos para hasta 180 personas. Check-in 14:00, check-out 12:00. Reservas: 0800 819 1993, reservas@hotelcolonialfoz.com.br.
- [Pousada Cataratas](${u("pousada")}): posada con 27 habitaciones en la Rua Parigot de Souza, 180, a 100 m de la Avenida das Cataratas. Desayuno incluido, piscina, estacionamiento gratuito y recepción las 24 horas. Habitaciones Doble (13 m²), Triple (18 m²), Cuádruple (22 m²) y Quíntuple (26 m²). Reservas: 0800 002 9215, reservas@pousadacataratas.com.br.
- [Villa Colonial](${u("villa")}): restaurante dentro del Hotel Colonial Iguaçu. Buffet de cocina regional e internacional. Desayuno de 6:30 a 10:00, almuerzo de 11:30 a 16:00 y cena de 19:00 a 22:30. Gastronomía para eventos.
- [Colonial Autopark](${u("autopark")}): estacionamiento dentro del Hotel Colonial Iguaçu, abierto las 24 horas, los 7 días de la semana, con espacio monitoreado y traslado gratuito de ida y vuelta al Aeropuerto Internacional de Foz do Iguaçu (IGU). Central de reservas (45) 3529 7711.

## Para propietarios de hoteles

- [Gestión](${u("gestao")}): gestión operativa, comercial, de costos y procesos, y de hospitalidad. Modelos de gestión hotelera y de arrendamiento de activos.
- [Sobre Méritum](${u("meritum")}): historia, portafolio y valores.
- [Contacto](${u("contato")}): formulario para propietarios y contactos de reservas de cada propiedad.

## Para huéspedes

- [Bora de Novo](${u("bora")}): condiciones especiales para quienes ya se hospedaron en una propiedad Méritum.
- [Mi reserva](${u("reserva")}): cómo consultar o modificar una reserva.
- [Área del huésped](${u("hospede")})

## Otros idiomas

- [Português](${SITE_URL}/llms.txt)
${LOCALES_PUBLISHED.includes("en") ? `- [English](${SITE_URL}/en/llms.txt)\n` : ""}`;
}

function en(): string {
  const u = (k: keyof typeof PAGES) => url("en", k);
  return `# ${ORG.name}

> Hotel management company in Foz do Iguaçu (Paraná, Brazil). It takes over the management of independent hotels and develops each one individually, respecting its identity. It works under two models: hotel management and asset leasing.

Legal name: ${ORG.legalName}. CNPJ ${ORG.cnpj}. Address: ${ORG.street}, ${ORG.city}, ${ORG.region}, ${ORG.postalCode}.

## Properties

- [Hotel Colonial Iguaçu](${u("colonial")}): hotel on Rodovia das Cataratas, km 20, 11237, 1.2 km from the entrance to Iguaçu National Park. Welcoming guests since 1970. Large green area, pools and event rooms for up to 180 people. Check-in 2 PM, check-out 12 PM. Reservations: 0800 819 1993, reservas@hotelcolonialfoz.com.br.
- [Pousada Cataratas](${u("pousada")}): inn with 27 rooms on Rua Parigot de Souza, 180, 100 m from Avenida das Cataratas. Breakfast included, pool, free parking and a 24-hour front desk. Double (13 m²), Triple (18 m²), Quadruple (22 m²) and Quintuple (26 m²) rooms. Reservations: 0800 002 9215, reservas@pousadacataratas.com.br.
- [Villa Colonial](${u("villa")}): restaurant inside Hotel Colonial Iguaçu. Regional and international buffet. Breakfast from 6:30 AM to 10 AM, lunch from 11:30 AM to 4 PM and dinner from 7 PM to 10:30 PM. Catering for events.
- [Colonial Autopark](${u("autopark")}): parking inside Hotel Colonial Iguaçu, open 24 hours a day, 7 days a week, with a monitored parking space and a free shuttle to and from Foz do Iguaçu International Airport (IGU). Reservations center (45) 3529 7711.

## For hotel owners

- [Management](${u("gestao")}): operational, commercial, cost and process, and hospitality management. Hotel management and asset leasing models.
- [About Méritum](${u("meritum")}): history, portfolio and values.
- [Contact](${u("contato")}): form for hotel owners and reservation contacts for each property.

## For guests

- [Bora de Novo](${u("bora")}): special terms for guests who have already stayed at a Méritum property.
- [My reservation](${u("reserva")}): how to check or change a reservation.
- [Guest area](${u("hospede")})

## Other languages

- [Português](${SITE_URL}/llms.txt)
${LOCALES_PUBLISHED.includes("es") ? `- [Español](${SITE_URL}/es/llms.txt)\n` : ""}`;
}

/** Texto do llms.txt no idioma, ou null se ainda não existe ou não está publicado. */
export function llmsText(locale: Locale): string | null {
  if (!LOCALES_PUBLISHED.includes(locale)) return null;
  if (locale === "pt") return pt();
  if (locale === "es") return es();
  return en();
}
