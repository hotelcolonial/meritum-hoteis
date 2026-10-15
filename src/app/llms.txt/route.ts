import { SITE_URL, ORG } from "@/lib/site";
import { PAGES as SEO } from "@/lib/seo";
import { isPublished, localePath } from "@/i18n/config";

// Resumo do site em Markdown para assistentes de IA (padrão llms.txt).
export const dynamic = "force-static";

// Seção em espanhol: só entra quando o espanhol estiver em LOCALES_PUBLISHED
function bodyEs(u: (p: string) => string) {
  const es = (p: string) => u(localePath("es", p));
  return `
## En español

> Administradora hotelera de Foz do Iguaçu (Paraná, Brasil). Asume la gestión de hoteles independientes y desarrolla cada uno de forma individual, respetando su identidad. Trabaja en dos modelos: gestión hotelera y arrendamiento de activos.

### Propiedades

- [Hotel Colonial Iguaçu](${es(SEO.colonial.path)}): hotel en la Rodovia das Cataratas, km 20, 11237, a 1,2 km de la entrada del Parque Nacional do Iguaçu. Recibe huéspedes desde 1970. Gran área verde, piscinas y salones de eventos para hasta 180 personas. Check-in 14:00, check-out 12:00. Reservas: 0800 819 1993, reservas@hotelcolonialfoz.com.br.
- [Pousada Cataratas](${es(SEO.pousada.path)}): posada con 27 habitaciones en la Rua Parigot de Souza, 180, a 100 m de la Avenida das Cataratas. Desayuno incluido, piscina, estacionamiento gratuito y recepción las 24 horas. Habitaciones Doble (13 m²), Triple (18 m²), Cuádruple (22 m²) y Quíntuple (26 m²). Reservas: 0800 002 9215, reservas@pousadacataratas.com.br.
- [Villa Colonial](${es(SEO.villa.path)}): restaurante dentro del Hotel Colonial Iguaçu. Buffet de cocina regional e internacional. Desayuno de 6:30 a 10:00, almuerzo de 11:30 a 16:00 y cena de 19:00 a 22:30. Gastronomía para eventos.
- [Colonial Autopark](${es(SEO.autopark.path)}): estacionamiento dentro del Hotel Colonial Iguaçu, abierto las 24 horas, los 7 días de la semana, con lugar monitoreado y traslado gratuito de ida y vuelta al Aeropuerto Internacional de Foz do Iguaçu (IGU). Central de reservas (45) 3529 7711.

### Para propietarios de hoteles

- [Gestión](${es(SEO.gestao.path)}): gestión operativa, comercial, de costos y procesos, y de hospitalidad. Modelos de gestión hotelera y de arrendamiento de activos.
- [Sobre Méritum](${es(SEO.meritum.path)}): historia, portafolio y valores.
- [Contacto](${es(SEO.contato.path)}): formulario para propietarios y contactos de reservas de cada propiedad.

### Para huéspedes

- [Bora de Novo](${es(SEO.bora.path)}): condiciones especiales para quienes ya se hospedaron en una propiedad Méritum.
- [Mi reserva](${es(SEO.reserva.path)}): cómo consultar o modificar una reserva.
- [Área del huésped](${es(SEO.hospede.path)})
`;
}

export function GET() {
  const u = (p: string) => SITE_URL + p;
  const body = `# ${ORG.name}

> Gestora hoteleira de Foz do Iguaçu (PR). Assume a gestão de hotéis independentes e desenvolve cada um de forma individual, respeitando sua identidade. Atua em dois modelos: gestão hoteleira e arrendamento de ativos.

Razão social: ${ORG.legalName}. CNPJ ${ORG.cnpj}. Endereço: ${ORG.street}, ${ORG.city}, ${ORG.region}, ${ORG.postalCode}.

## Propriedades

- [Hotel Colonial Iguaçu](${u(SEO.colonial.path)}): hotel na Rodovia das Cataratas, km 20, 11237, a 1,2 km da entrada do Parque Nacional do Iguaçu. Recebe hóspedes desde 1970. Grande área verde, piscinas, salas de eventos para até 180 pessoas. Check-in 14h, check-out 12h. Reservas: 0800 819 1993, reservas@hotelcolonialfoz.com.br.
- [Pousada Cataratas](${u(SEO.pousada.path)}): pousada com 27 apartamentos na Rua Parigot de Souza, 180, a 100 m da Avenida das Cataratas. Café da manhã incluso, piscina, estacionamento gratuito, recepção 24 horas. Quartos Duplo (13 m²), Triplo (18 m²), Quádruplo (22 m²) e Quíntuplo (26 m²). Reservas: 0800 002 9215, reservas@pousadacataratas.com.br.
- [Villa Colonial](${u(SEO.villa.path)}): restaurante dentro do Hotel Colonial Iguaçu. Buffet de culinária regional e internacional. Café da manhã 06h30 às 10h, almoço 11h30 às 16h, jantar 19h às 22h30. Gastronomia para eventos.
- [Colonial Autopark](${u(SEO.autopark.path)}): estacionamento dentro do Hotel Colonial Iguaçu, aberto 24 horas, 7 dias por semana, com vaga monitorada e traslado gratuito de ida e volta ao Aeroporto Internacional de Foz do Iguaçu (IGU). Central de reservas (45) 3529 7711.

## Para proprietários de hotéis

- [Gestão](${u(SEO.gestao.path)}): gestão operacional, comercial, de custos e processos e de hospitalidade. Modelos de gestão hoteleira e de arrendamento de ativos.
- [A Méritum](${u(SEO.meritum.path)}): história, portfólio e valores.
- [Contato](${u(SEO.contato.path)}): formulário para proprietários e contatos de reservas de cada propriedade.

## Para hóspedes

- [Bora de Novo](${u(SEO.bora.path)}): condições especiais para quem já se hospedou em uma propriedade Méritum.
- [Minha reserva](${u(SEO.reserva.path)}): como consultar ou alterar uma reserva.
- [Área do hóspede](${u(SEO.hospede.path)})
`;
  return new Response(body + (isPublished("es") ? bodyEs(u) : ""), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
