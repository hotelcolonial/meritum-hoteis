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

// Fase 1: espanhol e inglês ainda mostram o conteúdo em português
export const CONTENT: Record<Locale, SiteContent> = { pt, es: pt, en: pt };
