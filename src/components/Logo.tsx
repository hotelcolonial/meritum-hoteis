import Image from "next/image";

/** Proporção (largura / altura) do viewBox de cada SVG em public/brand */
const RATIO = { horizontal: 847.38 / 217.82, vertical: 585.29 / 500.22 } as const;

/**
 * Logo oficial da Méritum. Usa o arquivo SVG (e não o SVG colado no JSX) porque os arquivos têm ids internos
 * de clipPath que entrariam em conflito com dois logos na mesma página. Para mudar a cor, troque o tom:
 * nunca aplique filter no logo.
 */
export default function Logo({ variant, tone, height }: { variant: "horizontal" | "vertical"; tone: "azul" | "branco"; height: number }) {
  return (
    <Image
      src={`/brand/meritum-logo-${variant}-${tone}.svg`}
      alt="Méritum Hotéis"
      width={Math.round(height * RATIO[variant])}
      height={height}
      unoptimized
      loading={variant === "horizontal" ? "eager" : "lazy"}
      style={{ display: "block", height, width: "auto", maxWidth: "none", flexShrink: 0 }}
    />
  );
}
