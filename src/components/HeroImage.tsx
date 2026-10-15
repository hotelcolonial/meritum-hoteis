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
const DESKTOP_QUALITY = 90;
const MOBILE_QUALITY = 80;
// GIF de 1x1 transparente: a <source> da faixa "errada" aponta para ele, então só a foto visível é baixada
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type Props = {
  desktop: Src;
  mobile: Src;
  alt: string;
  /** Alt próprio para a foto vertical, quando ela mostra outro lugar. */
  mobileAlt?: string;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  ariaHidden?: boolean;
};

/**
 * Foto do hero com direção de arte: recorte vertical até 767px e a foto horizontal de 768px em diante.
 * Sem preload (o navegador não saberia qual das duas pré-carregar); a primeira foto usa fetchPriority alta.
 */
export default function HeroImage({ desktop, mobile, alt, mobileAlt, className = "", style, eager = false, ariaHidden }: Props) {
  const load = { loading: eager ? "eager" : "lazy", fetchPriority: eager ? "high" : "auto" } as const;
  const d = getImageProps({ alt, ...desktop, quality: DESKTOP_QUALITY, sizes: "100vw", ...load }).props;
  const m = getImageProps({ alt: mobileAlt ?? alt, ...mobile, quality: MOBILE_QUALITY, sizes: mobileSizes(mobile), ...load }).props;
  const cls = ("hero-art " + className).trim();

  // <source> não aceita alt: quando o texto muda com a largura, são duas <picture>, cada uma com seu <img>,
  // e o CSS (.hero-m / .hero-d) esconde a que não vale para a largura atual.
  if (mobileAlt) {
    return (
      <>
        <picture>
          <source media="(min-width: 768px)" srcSet={BLANK} />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- o alt vem de getImageProps */}
          <img {...m} className={cls + " hero-m"} style={{ ...m.style, ...style }} aria-hidden={ariaHidden} />
        </picture>
        <picture>
          <source media="(max-width: 767px)" srcSet={BLANK} />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- o alt vem de getImageProps */}
          <img {...d} className={cls + " hero-d"} style={{ ...d.style, ...style }} aria-hidden={ariaHidden} />
        </picture>
      </>
    );
  }

  const { srcSet: mobileSet, style: imgStyle, ...img } = m;
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={d.srcSet} sizes="100vw" />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- o alt vem de getImageProps */}
      <img {...img} srcSet={mobileSet} className={cls} style={{ ...imgStyle, ...style }} aria-hidden={ariaHidden} />
    </picture>
  );
}
