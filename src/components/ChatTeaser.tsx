"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { useDict, useLocale } from "@/i18n/LocaleProvider";

const DELAY = 1500;
/** Depois que o pop-up do Bora de Novo fecha, o balão aparece (ou volta) 1s depois */
const AFTER_POPUP = 1000;
const EXIT_MS = 200;
const OPEN_DELAY = 450;
const GAP = 14;
/** Balanço único do cartão, se ninguém interagiu */
const WOBBLE_AFTER = 10000;
/** Bolha da Asksuite, a imagem que abre o chat quando clicada e o iframe do chat (altura 0 enquanto fechado) */
const BUBBLE = ".infochat_flt_rel";
const OPENER = "#botTitleBar";
const CHAT = "#botchatbotaskuite";

/**
 * Posição do balão à esquerda da bolha: borda direita 14px antes da bolha e base alinhada com a dela, sem o
 * deslocamento da barra de reserva (AsksuiteDock), e a largura máxima entre 16px da borda esquerda e a bolha.
 */
function measure(bubble: HTMLElement) {
  const r = bubble.getBoundingClientRect();
  let ty = 0;
  for (let el: HTMLElement | null = bubble; el && el !== document.body; el = el.parentElement) {
    const t = getComputedStyle(el).transform;
    if (t && t !== "none") ty += new DOMMatrixReadOnly(t).m42;
  }
  // clientWidth/clientHeight: a área sem a barra de rolagem, que é a referência de right/bottom num elemento fixo
  const { clientWidth, clientHeight } = document.documentElement;
  return {
    right: Math.round(clientWidth - r.left + GAP),
    bottom: Math.round(clientHeight - (r.bottom - ty)),
    max: Math.round(r.left - GAP - 16),
  };
}

/**
 * Balão da Méritum ao lado da bolha do chat da Asksuite (no lugar do "Pacotes exclusivos" deles, escondido em site.css).
 * Aparece 1,5s depois que a bolha existe; com o pop-up do Bora de Novo aberto, espera ele fechar e conta mais 1s.
 * Se o pop-up abrir com o balão já na tela, o balão só fica escondido enquanto o pop-up está aberto e volta 1s
 * depois (não conta como fechado). Some com a bolha (menu, folha da reserva: regras em site.css). Fechar ou abrir
 * o chat, pelo balão ou direto pela bolha, encerra o balão até a página ser carregada de novo: não há memória
 * entre carregamentos, e como o layout continua montado na navegação entre páginas, ele não volta sem recarregar.
 * Estilos em site.css (.mn-chat).
 */
export default function ChatTeaser() {
  const t = useDict().chatTeaser;
  const locale = useLocale();
  // mounted: está no DOM; shown: animação de entrada aplicada (sai antes de desmontar)
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const [pos, setPos] = useState({ right: 114, bottom: 6, max: 260 });
  const [wobble, setWobble] = useState(false);
  // Escondido enquanto o pop-up do Bora de Novo está aberto e por mais 1s depois que ele fecha
  const [paused, setPaused] = useState(false);
  const done = useRef(false);
  const exitT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const track = useCallback((event: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, page_path: window.location.pathname, language: locale });
  }, [locale]);

  const hide = useCallback(() => {
    done.current = true;
    setShown(false);
    clearTimeout(exitT.current);
    exitT.current = setTimeout(() => setMounted(false), EXIT_MS);
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));
    let popupMo: MutationObserver | undefined;
    let chatRo: ResizeObserver | undefined;
    let bubble: HTMLElement | null = null;

    const place = () => { if (bubble) setPos(measure(bubble)); };

    const show = () => {
      if (done.current) return;
      // Pop-up do Bora de Novo na tela: espera ele fechar e conta mais 1s
      if (document.documentElement.classList.contains("has-popup")) {
        popupMo?.disconnect();
        popupMo = new MutationObserver(() => {
          if (document.documentElement.classList.contains("has-popup")) return;
          popupMo?.disconnect();
          later(show, AFTER_POPUP);
        });
        popupMo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return;
      }
      done.current = true;
      place();
      setMounted(true);
      track("chat_teaser_view");
    };

    // Chat aberto por qualquer caminho (balão ou bolha): o iframe ganha altura
    const watchChat = () => {
      const frame = document.querySelector(CHAT);
      if (!frame) return;
      chatRo = new ResizeObserver(() => {
        if (frame.getBoundingClientRect().height > 0) { timers.forEach(clearTimeout); popupMo?.disconnect(); hide(); }
      });
      chatRo.observe(frame);
    };

    // Procura a bolha assim que a página monta e, se ainda não existe, observa a página até a Asksuite inseri-la
    const found = () => {
      bubble = document.querySelector<HTMLElement>(BUBBLE);
      if (!bubble) return false;
      bubbleMo?.disconnect();
      watchChat();
      later(show, DELAY);
      return true;
    };
    let bubbleMo: MutationObserver | undefined;
    if (!found()) {
      bubbleMo = new MutationObserver(() => { found(); });
      bubbleMo.observe(document.body, { childList: true, subtree: true });
    }

    window.addEventListener("resize", place);
    return () => {
      bubbleMo?.disconnect();
      timers.forEach(clearTimeout);
      popupMo?.disconnect();
      chatRo?.disconnect();
      window.removeEventListener("resize", place);
    };
  }, [hide, track]);

  // Entrada: um quadro depois de montar, para a transição partir de opacity 0
  useEffect(() => {
    if (!mounted) return;
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  // Enquanto visível, acompanha a bolha (a Asksuite às vezes a reposiciona depois de carregar)
  useEffect(() => {
    if (!mounted) return;
    const iv = setInterval(() => {
      const b = document.querySelector<HTMLElement>(BUBBLE);
      if (!b) return;
      const p = measure(b);
      setPos((o) => (o.right === p.right && o.bottom === p.bottom && o.max === p.max ? o : p));
    }, 1000);
    return () => clearInterval(iv);
  }, [mounted]);

  // Pop-up do Bora de Novo aberto com o balão na tela: esconde na hora e volta 1s depois que ele fecha
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    let back: ReturnType<typeof setTimeout> | undefined;
    const sync = () => {
      clearTimeout(back);
      if (html.classList.contains("has-popup")) setPaused(true);
      else back = setTimeout(() => setPaused(false), AFTER_POPUP);
    };
    const mo = new MutationObserver(sync);
    mo.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => { mo.disconnect(); clearTimeout(back); };
  }, [mounted]);

  // 10s depois de aparecer, um balanço curto, uma vez só (se o balão ainda estiver lá, ninguém clicou)
  useEffect(() => {
    if (!shown) return;
    const w = setTimeout(() => setWobble(true), WOBBLE_AFTER);
    return () => clearTimeout(w);
  }, [shown]);

  useEffect(() => () => clearTimeout(exitT.current), []);

  const openChat = () => {
    track("chat_teaser_click");
    hide();
    // Logo depois de um clique real na página, a Asksuite ignora o clique na bolha (testado: falha até ~150ms,
    // abre a partir de ~300ms). Por isso o clique vai 450ms depois e, se o chat ainda estiver fechado, repete
    // uma vez (o clique na bolha alterna abrir/fechar, então só repete com o chat fechado).
    const chatOpen = () => (document.querySelector(CHAT)?.getBoundingClientRect().height ?? 0) > 0;
    const click = () => document.querySelector<HTMLElement>(OPENER)?.click();
    setTimeout(() => {
      if (chatOpen()) return;
      click();
      setTimeout(() => { if (!chatOpen()) click(); }, 1500);
    }, OPEN_DELAY);
  };

  if (!mounted) return null;
  return (
    <aside
      className={"mn-chat" + (shown ? " is-in" : "") + (wobble ? " is-wobble" : "") + (paused ? " is-paused" : "")}
      aria-label="Chat"
      style={{ "--mn-chat-r": pos.right + "px", "--mn-chat-b": pos.bottom + "px", "--mn-chat-max": pos.max + "px" } as CSSProperties}
    >
      <button type="button" className="mn-chat__close mn-focus" aria-label={t.close} onClick={() => { track("chat_teaser_close"); hide(); }}>
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      {/* Estrela da Méritum em dourado (máscara com o símbolo oficial, em site.css) */}
      <span className="mn-chat__icon" aria-hidden="true" />
      <p className="mn-chat__title">{t.title}</p>
      <p className="mn-chat__text">{t.text}</p>
      <button type="button" className="mn-chat__cta mn-focus" onClick={openChat}>
        {t.cta}<span className="mn-chat__arrow" aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
