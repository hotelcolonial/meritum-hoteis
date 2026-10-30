"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Link from "./LocaleLink";
import { ROUTES } from "@/lib/site";
import { splitLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

const DELAY = 6000;
const EXIT_MS = 250;
/** Menu do celular, folha da reserva ou campo em foco: espera e tenta de novo para não atropelar o visitante */
const BUSY = ".sh-menu, .bk-sheet, .bk-mobwrap.is-open, input:focus, textarea:focus, select:focus";
/** Marca de troca de idioma (sessionStorage): só os links PT | EN | ES têm hreflang */
const LANG_KEY = "mn_popup_bora_lang";
const LANG_LINK = "a[hreflang]";

/** Lê e apaga a marca: a página foi aberta pela troca de idioma depois de o pop-up já ter aparecido */
function takeLangMark(): boolean {
  try {
    const v = sessionStorage.getItem(LANG_KEY);
    sessionStorage.removeItem(LANG_KEY);
    return v === "1";
  } catch {
    return false;
  }
}

/**
 * Pop-up do Bora de Novo: abre 6s depois de cada carregamento ou recarga da página (menos na própria
 * página do programa). Uma vez por visita: como o layout continua montado na navegação entre páginas,
 * não reabre sem recarregar. A troca de idioma recarrega a página, então deixa uma marca no
 * sessionStorage para não reabrir; nova visita, nova aba ou recarga continuam mostrando.
 * A arte já traz o texto e o botão; a imagem inteira é o link.
 * Estilos em site.css (.mn-popup).
 */
export default function PromoPopup() {
  const locale = useLocale();
  const onBora = splitLocale(usePathname() || "/").path === ROUTES.bora;
  // mounted: está no DOM; shown: animação de entrada aplicada (sai antes de desmontar)
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const done = useRef(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const prevFocus = useRef<HTMLElement | null>(null);
  const exitT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const leaving = useRef(false);

  const track = useCallback((event: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, popup_name: "bora_de_novo", page_path: window.location.pathname, language: locale });
  }, [locale]);

  // Veio da troca de idioma com o pop-up já visto: conta como a mesma visita
  useEffect(() => {
    if (takeLangMark()) done.current = true;
    const mark = (e: MouseEvent) => {
      if (!done.current || !(e.target as Element | null)?.closest?.(LANG_LINK)) return;
      try {
        sessionStorage.setItem(LANG_KEY, "1");
      } catch {}
    };
    document.addEventListener("click", mark, true);
    return () => document.removeEventListener("click", mark, true);
  }, []);

  useEffect(() => {
    if (onBora || done.current) return;
    let t: ReturnType<typeof setTimeout>;
    const open = () => {
      if (done.current) return;
      if (document.querySelector(BUSY)) { t = setTimeout(open, 2000); return; }
      done.current = true;
      prevFocus.current = document.activeElement as HTMLElement | null;
      setMounted(true);
      track("popup_view");
    };
    t = setTimeout(open, DELAY);
    return () => clearTimeout(t);
  }, [onBora, track]);

  // Entrada: um quadro depois de montar, para a transição partir de opacity 0
  useEffect(() => {
    if (!mounted) return;
    const raf = requestAnimationFrame(() => setShown(true));
    closeRef.current?.focus({ preventScroll: true });
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  const close = useCallback((how: "close" | "click") => {
    leaving.current = how === "click";
    track(how === "click" ? "popup_click" : "popup_close");
    setShown(false);
    clearTimeout(exitT.current);
    exitT.current = setTimeout(() => {
      setMounted(false);
      // No clique a página muda; o foco só volta ao elemento anterior quando o pop-up é fechado
      if (how === "close") prevFocus.current?.focus?.({ preventScroll: true });
    }, EXIT_MS);
  }, [track]);

  useEffect(() => () => clearTimeout(exitT.current), []);

  // Reserva aberta (qualquer painel ou folha, aviso do BookingWidget): o pop-up não abre mais nessa visita
  // e, se estiver na tela, sai na hora, sem animação e sem popup_close, para não ficar por cima da reserva
  useEffect(() => {
    const booking = () => {
      done.current = true;
      clearTimeout(exitT.current);
      setShown(false);
      setMounted(false);
    };
    window.addEventListener("mn:booking-open", booking);
    return () => window.removeEventListener("mn:booking-open", booking);
  }, []);

  // Enquanto aberto: página travada (mesma técnica do menu no SiteHeader), WhatsApp e Asksuite escondidos, Esc fecha
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    const b = document.body;
    const y = window.scrollY;
    html.classList.add("has-popup");
    html.style.overflow = "hidden";
    Object.assign(b.style, { position: "fixed", top: `-${y}px`, left: "0", right: "0", width: "100%" });
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") close("close"); };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      html.classList.remove("has-popup");
      html.style.overflow = "";
      Object.assign(b.style, { position: "", top: "", left: "", right: "", width: "" });
      // No clique a página nova já começa no topo; só volta à posição anterior quando o pop-up é fechado
      if (!leaving.current) window.scrollTo(0, y);
    };
  }, [mounted, close]);

  // Tab fica dentro do pop-up (link da arte e botão fechar)
  const trap = (e: ReactKeyboardEvent) => {
    if (e.key !== "Tab" || !boxRef.current) return;
    const items = Array.from(boxRef.current.querySelectorAll<HTMLElement>("a[href], button"));
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  if (!mounted) return null;
  return (
    <div
      className={"mn-popup" + (shown ? " is-in" : "")}
      role="dialog"
      aria-modal="true"
      aria-label="Programa Bora de Novo"
      onClick={(e) => { if (e.target === e.currentTarget) close("close"); }}
      onKeyDown={trap}
    >
      <div className="mn-popup__box" ref={boxRef}>
        <Link href={ROUTES.bora} className="mn-popup__link" onClick={() => close("click")}>
          <picture>
            <source media="(min-width: 768px)" srcSet="/popups/bora-de-novo-quadrado.png" />
            <img
              className="mn-popup__img"
              src="/popups/bora-de-novo-vertical.png"
              alt="Programa de fidelidade Bora de Novo. Vantagens exclusivas para quem já se hospedou. Quero voltar"
              decoding="async"
            />
          </picture>
        </Link>
        <button ref={closeRef} type="button" className="mn-popup__close" aria-label="Fechar" onClick={() => close("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#052744" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
