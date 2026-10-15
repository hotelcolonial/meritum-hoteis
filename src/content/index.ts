import type { ComponentType, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import HomeContent from "./home";
import AMeritumContent, { AMeritumHero } from "./a-meritum";
import GestaoContent, { GestaoHero } from "./gestao";
import ContatoContent, { ContatoHero } from "./contato";
import ColonialContent, { ColonialHero } from "./colonial";
import PousadaContent, { PousadaHero } from "./pousada";
import VillaContent, { VillaHero } from "./villa";
import AutoparkContent, { AutoparkHero } from "./autopark";
import BoraDeNovoContent, { BoraDeNovoHero } from "./bora-de-novo";
import MinhaReservaContent, { MinhaReservaHero } from "./minha-reserva";
import AreaDoHospedeContent, { AreaDoHospedeHero } from "./area-do-hospede";
import faqPt from "./bora-faq.json";
import HomeContentEs from "./es/home";
import AMeritumContentEs, { AMeritumHero as AMeritumHeroEs } from "./es/a-meritum";
import GestaoContentEs, { GestaoHero as GestaoHeroEs } from "./es/gestao";
import ContatoContentEs, { ContatoHero as ContatoHeroEs } from "./es/contato";
import ColonialContentEs, { ColonialHero as ColonialHeroEs } from "./es/colonial";
import PousadaContentEs, { PousadaHero as PousadaHeroEs } from "./es/pousada";
import VillaContentEs, { VillaHero as VillaHeroEs } from "./es/villa";
import AutoparkContentEs, { AutoparkHero as AutoparkHeroEs } from "./es/autopark";
import BoraDeNovoContentEs, { BoraDeNovoHero as BoraDeNovoHeroEs } from "./es/bora-de-novo";
import MinhaReservaContentEs, { MinhaReservaHero as MinhaReservaHeroEs } from "./es/minha-reserva";
import AreaDoHospedeContentEs, { AreaDoHospedeHero as AreaDoHospedeHeroEs } from "./es/area-do-hospede";
import faqEs from "./es/bora-faq.json";

type Hero = ComponentType<{ children: ReactNode }>;
export type Section = { Hero: Hero; Content: ComponentType };

/** Conteúdo das páginas por idioma (cada idioma tem a sua versão dos arquivos de src/content). */
export type SiteContent = {
  home: ComponentType;
  meritum: Section;
  gestao: Section;
  contato: Section;
  colonial: Section;
  pousada: Section;
  villa: Section;
  autopark: Section;
  bora: Section;
  reserva: Section;
  hospede: Section;
  faq: { q: string; a: string }[];
};

const pt: SiteContent = {
  home: HomeContent,
  meritum: { Hero: AMeritumHero, Content: AMeritumContent },
  gestao: { Hero: GestaoHero, Content: GestaoContent },
  contato: { Hero: ContatoHero, Content: ContatoContent },
  colonial: { Hero: ColonialHero, Content: ColonialContent },
  pousada: { Hero: PousadaHero, Content: PousadaContent },
  villa: { Hero: VillaHero, Content: VillaContent },
  autopark: { Hero: AutoparkHero, Content: AutoparkContent },
  bora: { Hero: BoraDeNovoHero, Content: BoraDeNovoContent },
  reserva: { Hero: MinhaReservaHero, Content: MinhaReservaContent },
  hospede: { Hero: AreaDoHospedeHero, Content: AreaDoHospedeContent },
  faq: faqPt,
};

const es: SiteContent = {
  home: HomeContentEs,
  meritum: { Hero: AMeritumHeroEs, Content: AMeritumContentEs },
  gestao: { Hero: GestaoHeroEs, Content: GestaoContentEs },
  contato: { Hero: ContatoHeroEs, Content: ContatoContentEs },
  colonial: { Hero: ColonialHeroEs, Content: ColonialContentEs },
  pousada: { Hero: PousadaHeroEs, Content: PousadaContentEs },
  villa: { Hero: VillaHeroEs, Content: VillaContentEs },
  autopark: { Hero: AutoparkHeroEs, Content: AutoparkContentEs },
  bora: { Hero: BoraDeNovoHeroEs, Content: BoraDeNovoContentEs },
  reserva: { Hero: MinhaReservaHeroEs, Content: MinhaReservaContentEs },
  hospede: { Hero: AreaDoHospedeHeroEs, Content: AreaDoHospedeContentEs },
  faq: faqEs,
};

// Inglês ainda mostra o conteúdo em português (fase 3)
export const CONTENT: Record<Locale, SiteContent> = { pt, es, en: pt };
