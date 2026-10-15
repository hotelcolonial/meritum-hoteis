import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import AMeritumContent, { AMeritumHero } from "@/content/a-meritum";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata("meritum");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "A Méritum", path: "/a-meritum" }])} />
      <AMeritumHero>
        <SiteHeader page="meritum" />
      </AMeritumHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <AMeritumContent />
    </>
  );
}
