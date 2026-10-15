import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "@/lib/site";

const KNOWN = new Set<string>(Object.values(ROUTES));

/**
 * Idiomas por URL. O português continua na raiz (/, /gestao...) e é servido, por dentro, pelas páginas de /pt.
 * /es e /en passam direto. /pt/... digitado à mão volta para a raiz, para não existirem duas URLs da mesma página.
 * Rota desconhecida: mostra a página 404 do site no idioma, com status 404 (renderizada no servidor).
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }
  const m = pathname.match(/^\/(es|en)(\/.*)?$/);
  const locale = m ? m[1] : "pt";
  const rest = m ? m[2] || "/" : pathname;
  const url = req.nextUrl.clone();
  if (!KNOWN.has(rest.length > 1 ? rest.replace(/\/$/, "") : rest)) {
    url.pathname = `/${locale}/404`;
    return NextResponse.rewrite(url, { status: 404 });
  }
  if (m) return NextResponse.next();
  url.pathname = "/pt" + (pathname === "/" ? "" : pathname);
  return NextResponse.rewrite(url);
}

// Arquivos (com ponto no nome), API, assets e internos do Next não passam pelo proxy
export const config = {
  matcher: ["/((?!api/|_next/|assets/|og/|.*\\.).*)"],
};
