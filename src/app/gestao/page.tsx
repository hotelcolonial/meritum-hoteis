import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import GestaoContent, { GestaoHero } from "@/content/gestao";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata("gestao");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Gestão", path: "/gestao" }])} />
      <GestaoHero>
        <SiteHeader page="gestao" />
      </GestaoHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <GestaoContent />
    </>
  );
}
