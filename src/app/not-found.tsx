import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import NotFoundContent, { NotFoundHero } from "@/content/404";
import { NOINDEX } from "@/lib/site";

export const metadata: Metadata = { title: { absolute: "Página não encontrada | Méritum Hotéis" }, robots: NOINDEX ? { index: false, follow: false } : { index: false } };

export default function NotFound() {
  return (
    <>
      <NotFoundHero>
        <SiteHeader page="404" />
      </NotFoundHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <NotFoundContent />
    </>
  );
}
