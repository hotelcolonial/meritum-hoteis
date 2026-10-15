"use client";

/**
 * Redireciona as URLs do site anterior (Vite + HashRouter, ex.: /#/a-meritum).
 * O trecho depois do # não chega ao servidor, por isso o redirecionamento é feito no navegador.
 * Âncoras normais (#formulario, #galeria) não começam com "#/" e são ignoradas.
 */
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "@/lib/site";

const LEGACY: Record<string, string> = {
  "/": ROUTES.home,
  "/a-meritum": ROUTES.meritum,
  "/visao-de-gestao": ROUTES.gestao,
  "/como-atuamos": ROUTES.gestao,
  "/atuacao": ROUTES.gestao,
  "/atuacao/arrendamento": ROUTES.gestao,
  "/atuacao/operacoes": ROUTES.gestao,
  "/atuacao/financeiro": ROUTES.gestao,
  "/atuacao/comercial": ROUTES.gestao,
  "/caso-real": ROUTES.gestao,
  "/para-quem-atuamos": ROUTES.gestao,
  "/contato": ROUTES.contato,
  "/termos-de-uso": ROUTES.home,
  "/politica-de-privacidade": ROUTES.home,
};

export default function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#/")) return;
    // "#/atuacao/financeiro/?x=1" -> "/atuacao/financeiro"
    const old = hash.slice(1).split(/[?#]/)[0].replace(/\/+$/, "").toLowerCase() || "/";
    router.replace(LEGACY[old] ?? ROUTES.home);
  }, [router]);

  return null;
}
