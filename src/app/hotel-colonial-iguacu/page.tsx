import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import ColonialContent, { ColonialHero } from "@/content/colonial";
import { pageMetadata, breadcrumbLd, propertyLd } from "@/lib/seo";

export const metadata = pageMetadata("colonial");

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Hotel Colonial Iguaçu", path: "/hotel-colonial-iguacu" }]), propertyLd("colonial")]} />
      <ColonialHero>
        <SiteHeader page="colonial" />
      </ColonialHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <ColonialContent />
    </>
  );
}
