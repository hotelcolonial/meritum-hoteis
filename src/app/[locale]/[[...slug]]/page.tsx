import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NotFoundView from "@/components/NotFoundView";
import { isLocale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { findPage, renderPage, SLUGS } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { NOINDEX } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

/** Página 404 do site. O proxy reescreve qualquer rota desconhecida para /{idioma}/404, já com status 404. */
const NOT_FOUND_SLUG = "404";
const isNotFound = (slug?: string[]) => slug?.length === 1 && slug[0] === NOT_FOUND_SLUG;

// As 11 páginas e a 404 são geradas no build para cada idioma
export function generateStaticParams() {
  return [...SLUGS, NOT_FOUND_SLUG].map((s) => ({ slug: s ? [s] : [] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const def = findPage(slug);
  if (!def || !isLocale(locale)) {
    return { title: { absolute: getDict(isLocale(locale) ? locale : "pt").notFound.title }, robots: NOINDEX ? { index: false, follow: false } : { index: false } };
  }
  return pageMetadata(def.seo, locale);
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (isNotFound(slug)) return <NotFoundView />;
  const def = findPage(slug);
  if (!def || !isLocale(locale)) notFound();
  return renderPage(def, locale);
}
