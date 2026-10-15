import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import ContatoContent, { ContatoHero } from "@/content/contato";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata("contato");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Contato", path: "/contato" }])} />
      <ContatoHero>
        <SiteHeader page="contato" />
      </ContatoHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <ContatoContent />
    </>
  );
}
