import type { ComponentType, ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import NotFoundContent, { NotFoundHero } from "./404";

/** Página 404 por idioma (separada de index.ts porque é usada num componente de cliente). */
export const NOT_FOUND: Record<Locale, { Hero: ComponentType<{ children: ReactNode }>; Content: ComponentType }> = {
  pt: { Hero: NotFoundHero, Content: NotFoundContent },
  es: { Hero: NotFoundHero, Content: NotFoundContent },
  en: { Hero: NotFoundHero, Content: NotFoundContent },
};
