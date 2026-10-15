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
import HomeContentEn from "./en/home";
import AMeritumContentEn, { AMeritumHero as AMeritumHeroEn } from "./en/a-meritum";
import GestaoContentEn, { GestaoHero as GestaoHeroEn } from "./en/gestao";
import ContatoContentEn, { ContatoHero as ContatoHeroEn } from "./en/contato";
import ColonialContentEn, { ColonialHero as ColonialHeroEn } from "./en/colonial";
import PousadaContentEn, { PousadaHero as PousadaHeroEn } from "./en/pousada";
import VillaContentEn, { VillaHero as VillaHeroEn } from "./en/villa";
import AutoparkContentEn, { AutoparkHero as AutoparkHeroEn } from "./en/autopark";
import BoraDeNovoContentEn, { BoraDeNovoHero as BoraDeNovoHeroEn } from "./en/bora-de-novo";
import MinhaReservaContentEn, { MinhaReservaHero as MinhaReservaHeroEn } from "./en/minha-reserva";
import AreaDoHospedeContentEn, { AreaDoHospedeHero as AreaDoHospedeHeroEn } from "./en/area-do-hospede";
import faqEn from "./en/bora-faq.json";

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

const en: SiteContent = {
  home: HomeContentEn,
  meritum: { Hero: AMeritumHeroEn, Content: AMeritumContentEn },
  gestao: { Hero: GestaoHeroEn, Content: GestaoContentEn },
  contato: { Hero: ContatoHeroEn, Content: ContatoContentEn },
  colonial: { Hero: ColonialHeroEn, Content: ColonialContentEn },
  pousada: { Hero: PousadaHeroEn, Content: PousadaContentEn },
  villa: { Hero: VillaHeroEn, Content: VillaContentEn },
  autopark: { Hero: AutoparkHeroEn, Content: AutoparkContentEn },
  bora: { Hero: BoraDeNovoHeroEn, Content: BoraDeNovoContentEn },
  reserva: { Hero: MinhaReservaHeroEn, Content: MinhaReservaContentEn },
  hospede: { Hero: AreaDoHospedeHeroEn, Content: AreaDoHospedeContentEn },
  faq: faqEn,
};

export const CONTENT: Record<Locale, SiteContent> = { pt, es, en };
