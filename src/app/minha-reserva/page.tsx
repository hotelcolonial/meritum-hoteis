import SiteHeader from "@/components/SiteHeader";
import JsonLd from "@/components/JsonLd";
import MinhaReservaContent, { MinhaReservaHero } from "@/content/minha-reserva";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata("reserva");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Minha reserva", path: "/minha-reserva" }])} />
      <MinhaReservaHero>
        <SiteHeader page="reserva" />
      </MinhaReservaHero>
      <span id="mn-conteudo" tabIndex={-1} />
      <MinhaReservaContent />
    </>
  );
}
