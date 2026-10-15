import type { ReactNode } from "react";
import HomeHero from "@/components/HomeHero";
import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import { CONTENT, type SiteContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getDict, type Dict } from "@/i18n/dictionaries";
import { breadcrumbLd, ENTITY_ID, faqLd, PAGES, propertyLd, webPageLd, type SeoKey } from "./seo";

type Def = {
  seo: SeoKey;
  /** nome da página na trilha (breadcrumb); sem trilha na home */
  crumb?: (d: Dict) => string;
  property?: "colonial" | "pousada" | "villa" | "autopark";
  faq?: boolean;
};

/** Cada rota do site (igual nos três idiomas) e o que ela mostra. */
const DEFS: Record<string, Def> = {
  "": { seo: "home" },
  "a-meritum": { seo: "meritum", crumb: (d) => d.crumbs.meritum },
  gestao: { seo: "gestao", crumb: (d) => d.crumbs.gestao },
  contato: { seo: "contato", crumb: (d) => d.crumbs.contato },
  "hotel-colonial-iguacu": { seo: "colonial", crumb: () => "Hotel Colonial Iguaçu", property: "colonial" },
  "pousada-cataratas": { seo: "pousada", crumb: () => "Pousada Cataratas", property: "pousada" },
  "villa-colonial": { seo: "villa", crumb: () => "Villa Colonial", property: "villa" },
  "colonial-autopark": { seo: "autopark", crumb: () => "Colonial Autopark", property: "autopark" },
  "bora-de-novo": { seo: "bora", crumb: () => "Bora de Novo", faq: true },
  "minha-reserva": { seo: "reserva", crumb: (d) => d.crumbs.reserva },
  "area-do-hospede": { seo: "hospede", crumb: (d) => d.crumbs.hospede },
};

export const SLUGS = Object.keys(DEFS);
export const findPage = (slug: string[] | undefined): Def | undefined => (slug && slug.length > 1 ? undefined : DEFS[slug?.[0] ?? ""]);

export function renderPage(def: Def, locale: Locale): ReactNode {
  const d = getDict(locale);
  const c: SiteContent = CONTENT[locale];
  const { path } = PAGES[def.seo];
  const ld: object[] = [webPageLd(def.seo, locale, def.property ? ENTITY_ID[def.property] : undefined)];
  if (def.crumb) ld.push(breadcrumbLd([{ name: def.crumb(d), path }], locale, d.crumbs.home));
  if (def.property) ld.push(propertyLd(def.property, locale));
  if (def.faq) ld.push(faqLd(c.faq, locale));

  if (def.seo === "home") {
    const Home = c.home;
    return (
      <>
        <JsonLd data={ld} />
        <HomeHero />
        <span id="mn-conteudo" tabIndex={-1} />
        <Home />
      </>
    );
  }
  const { Hero, Content } = c[def.seo as Exclude<SeoKey, "home">];
  return (
    <>
      <JsonLd data={ld} />
      <Hero>
        <SiteHeader page={def.seo} />
      </Hero>
      <span id="mn-conteudo" tabIndex={-1} />
      <Content />
    </>
  );
}
