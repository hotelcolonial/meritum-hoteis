/**
 * Idiomas do site. O português fica na raiz (/, /gestao...); espanhol e inglês ganham prefixo (/es, /en).
 * Internamente o proxy reescreve as URLs em português para /pt/..., então todas as páginas vivem em app/[locale].
 */
export const LOCALES = ["pt", "es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "pt";

export const isLocale = (s: string): s is Locale => (LOCALES as readonly string[]).includes(s);

/**
 * Idiomas prontos para o Google. Os que não estão aqui ficam no ar, mas com noindex, fora do sitemap e sem hreflang.
 * Ao terminar a tradução de um idioma, basta acrescentá-lo a esta lista.
 */
export const LOCALES_PUBLISHED: readonly Locale[] = ["pt", "es"];
export const isPublished = (l: Locale) => LOCALES_PUBLISHED.includes(l);

/** <html lang> e hreflang */
export const HTML_LANG: Record<Locale, string> = { pt: "pt-BR", es: "es", en: "en" };
/** Open Graph */
export const OG_LOCALE: Record<Locale, string> = { pt: "pt_BR", es: "es_ES", en: "en_US" };
/** Nome do idioma no próprio idioma (seletor e e-mail do formulário) */
export const LANG_NAME: Record<Locale, string> = { pt: "Português", es: "Español", en: "English" };
/** Idioma do motor Niara (parâmetro locale). Sem valor = padrão do motor (português). */
export const NIARA_LOCALE: Record<Locale, string | undefined> = { pt: undefined, es: "es-ES", en: "en-US" };

const NO_PREFIX = /^\/(assets|og|api|_next)(\/|$)/;

/** Caminho no idioma: "/gestao" → "/es/gestao", "/" → "/es", "/#portfolio" → "/es#portfolio". Português não muda. */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE || !path.startsWith("/") || path.startsWith("//") || NO_PREFIX.test(path)) return path;
  const [, p, rest] = path.match(/^([^?#]*)(.*)$/) as RegExpMatchArray;
  return `/${locale}${p === "/" ? "" : p}${rest}`;
}

/** Separa o prefixo de idioma de um pathname: "/es/gestao" → { locale: "es", path: "/gestao" }. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  // /pt aparece só por dentro (rota reescrita pelo proxy); conta como português
  const m = pathname.match(/^\/(pt|es|en)(?=\/|$)(.*)$/);
  if (m) return { locale: m[1] as Locale, path: m[2] || "/" };
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}
