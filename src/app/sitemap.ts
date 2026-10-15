import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { languageAlternates, PAGES } from "@/lib/seo";
import { LOCALES_PUBLISHED, localePath } from "@/i18n/config";

const PRIORITY: Record<string, number> = { home: 1, colonial: 0.9, pousada: 0.9, villa: 0.8, autopark: 0.8, gestao: 0.8, meritum: 0.7, contato: 0.6, bora: 0.6, reserva: 0.4, hospede: 0.4 };

// "/" vira a raiz sem barra (como antes); "/es" e "/es/gestao" ficam como estão
const abs = (path: string) => SITE_URL + (path === "/" ? "" : path);

/** Cada página nos idiomas publicados (LOCALES_PUBLISHED), com as alternativas (hreflang) entre eles. */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(PAGES).flatMap(([k, p]) => {
    const alt = languageAlternates(p.path);
    const languages = alt ? Object.fromEntries(Object.entries(alt).map(([lang, path]) => [lang, abs(path)])) : undefined;
    return LOCALES_PUBLISHED.map((locale) => ({
      url: abs(localePath(locale, p.path)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: PRIORITY[k] ?? 0.5,
      images: [SITE_URL + p.image],
      ...(languages ? { alternates: { languages } } : {}),
    }));
  });
}
