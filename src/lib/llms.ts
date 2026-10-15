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
`;
}

/** Texto do llms.txt no idioma, ou null se ainda não existe ou não está publicado. */
export function llmsText(locale: Locale): string | null {
  if (!LOCALES_PUBLISHED.includes(locale)) return null;
  if (locale === "pt") return pt();
  if (locale === "es") return es();
  return null; // inglês: fase 3
}
