import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import BoraDeNovoContent, { BoraDeNovoHero } from "@/content/bora-de-novo";
import faq from "@/content/bora-faq.json";
import { pageMetadata, breadcrumbLd, faqLd } from "@/lib/seo";

export const metadata = pageMetadata("bora");

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([{ name: "Bora de Novo", path: "/bora-de-novo" }]), faqLd(faq)]} />
      <BoraDeNovoHero>
        <SiteHeader page="bora" />
      </BoraDeNovoHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <BoraDeNovoContent />
    </>
  );
}
