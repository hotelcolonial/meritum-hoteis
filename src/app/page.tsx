import HomeHero from "@/components/HomeHero";
import HomeContent from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("home");

export default function Page() {
  return (
    <>
      <HomeHero />
      <span id="mn-conteudo" tabIndex={-1} />
      <HomeContent />
    </>
  );
}
