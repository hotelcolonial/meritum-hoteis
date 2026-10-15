import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import AutoparkContent, { AutoparkHero } from "@/content/autopark";
import { pageMetadata, breadcrumbLd, propertyLd } from "@/lib/seo";

export const metadata = pageMetadata("autopark");

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Colonial Autopark", path: "/colonial-autopark" }]), propertyLd("autopark")]} />
      <AutoparkHero>
        <SiteHeader page="autopark" />
      </AutoparkHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <AutoparkContent />
    </>
  );
}
