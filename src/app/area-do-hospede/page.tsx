import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import AreaDoHospedeContent, { AreaDoHospedeHero } from "@/content/area-do-hospede";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata("hospede");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Área do hóspede", path: "/area-do-hospede" }])} />
      <AreaDoHospedeHero>
        <SiteHeader page="hospede" />
      </AreaDoHospedeHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <AreaDoHospedeContent />
    </>
  );
}
