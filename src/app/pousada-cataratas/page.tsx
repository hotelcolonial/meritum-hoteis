import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import PousadaContent, { PousadaHero } from "@/content/pousada";
import { pageMetadata, breadcrumbLd, propertyLd } from "@/lib/seo";

export const metadata = pageMetadata("pousada");

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Pousada Cataratas", path: "/pousada-cataratas" }]), propertyLd("pousada")]} />
      <PousadaHero>
        <SiteHeader page="pousada" />
      </PousadaHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <PousadaContent />
    </>
  );
}
