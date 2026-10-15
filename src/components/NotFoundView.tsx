"use client";

import SiteHeader from "./SiteHeader";
import { NOT_FOUND } from "@/content/not-found";
import { useLocale } from "@/i18n/LocaleProvider";

/** A página 404 não recebe o idioma por parâmetro; ele vem do layout, pelo contexto. */
export default function NotFoundView() {
  const { Hero, Content } = NOT_FOUND[useLocale()];
  return (
    <>
      <Hero>
        <SiteHeader page="404" />
      </Hero>
      <span id="mn-conteudo" tabIndex={-1} />
      <Content />
    </>
  );
}
