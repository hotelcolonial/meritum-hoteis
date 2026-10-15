import { getImageProps } from "next/image";
import type { CSSProperties } from "react";

type Src = { src: string; width: number; height: number };

/** Recortes verticais do hero para celular (até 767px), em /assets/mobile. */
export const HERO_MOBILE = {
  pergola: { src: "/assets/mobile/colonial-pergola-piscina.jpg", width: 1035, height: 1840 },
  pousadaPergolado: { src: "/assets/mobile/pousada-piscina-pergolado.jpg", width: 1000, height: 1333 },
  pousadaPiscina: { src: "/assets/mobile/pousada-cataratas-piscina.jpg", width: 1288, height: 1717 },
  villaSalao: { src: "/assets/mobile/villa-salao-noite.jpg", width: 1000, height: 1333 },
  autoparkAraucaria: { src: "/assets/mobile/autopark-fonte-araucaria.jpg", width: 1000, height: 1333 },
} satisfies Record<string, Src>;

// Largura que a foto realmente ocupa no hero do celular (~390x640 CSS): um recorte 9:16 cobre pela
// largura (100vw); um 3:4 cobre pela altura e fica ~1,25x mais largo que a tela.
const mobileSizes = (m: Src) => (m.width / m.height < 0.6 ? "100vw" : "125vw");

/**
 * Foto do hero com direção de arte: recorte vertical até 767px e a foto horizontal de 768px em diante.
 * Sem preload (o navegador não saberia qual das duas pré-carregar); a primeira foto usa fetchPriority alta.
 */
export default function HeroImage({ desktop, mobile, alt, className = "", style, eager = false, ariaHidden }: {
  desktop: Src;
  mobile: Src;
  alt: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  ariaHidden?: boolean;
}) {
  const common = { alt, quality: 90 };
  const { props: { srcSet: desktopSet } } = getImageProps({ ...common, ...desktop, sizes: "100vw" });
  const { props: { srcSet: mobileSet, style: imgStyle, ...img } } = getImageProps({
    ...common,
    ...mobile,
    sizes: mobileSizes(mobile),
    loading: eager ? "eager" : "lazy",
    fetchPriority: eager ? "high" : "auto",
  });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSet} sizes="100vw" />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- o alt vem de getImageProps */}
      <img {...img} srcSet={mobileSet} className={("hero-art " + className).trim()} style={{ ...imgStyle, ...style }} aria-hidden={ariaHidden} />
    </picture>
  );
}
