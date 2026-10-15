import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import NotFoundContent, { NotFoundHero } from "@/content/404";

export const metadata: Metadata = { title: { absolute: "Página não encontrada | Méritum Hotéis" }, robots: { index: false } };

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
