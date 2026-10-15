import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import VillaContent, { VillaHero } from "@/content/villa";
import { pageMetadata, breadcrumbLd, propertyLd } from "@/lib/seo";

export const metadata = pageMetadata("villa");

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Villa Colonial", path: "/villa-colonial" }]), propertyLd("villa")]} />
      <VillaHero>
        <SiteHeader page="villa" />
      </VillaHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <VillaContent />
    </>
  );
}
