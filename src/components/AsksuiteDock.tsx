"use client";

import { useEffect } from "react";

/**
 * Mantém a bolha do chat da Asksuite acima da barra de reserva fixa.
 * Mede a barra visível (desktop, tablet ou celular) e grava a altura em --mn-bar-h no <html>;
 * a bolha da Asksuite, que é injetada pelo script deles, recebe um translateY com o mesmo valor.
 */
const BARS = ".bk-desk-bar.is-fixed:not(.is-hidden), .bk-fixbar, .bk-pbar.is-on";
const CHAT = '[id*="asksuite" i], [class*="asksuite" i], [id*="infochat" i], [class*="infochat" i]';

function visibleBarHeight(): number {
  let h = 0;
  document.querySelectorAll<HTMLElement>(BARS).forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.position !== "fixed") return;
    const r = el.getBoundingClientRect();
    if (r.height > 0 && r.top < window.innerHeight) h = Math.max(h, Math.round(window.innerHeight - r.top));
  });
  return h;
}

/** Elementos fixos da Asksuite no topo da hierarquia (não move um filho de quem já foi movido) */
function chatRoots(): HTMLElement[] {
  const all = Array.from(document.querySelectorAll<HTMLElement>(CHAT)).filter((el) => {
    if (el.tagName === "SCRIPT" || el.tagName === "LINK" || el.tagName === "STYLE") return false;
    return getComputedStyle(el).position === "fixed";
  });
  return all.filter((el) => !all.some((o) => o !== el && o.contains(el)));
}

export default function AsksuiteDock() {
  useEffect(() => {
    let raf = 0;
    let last = -1;
    const apply = () => {
      raf = 0;
      const h = visibleBarHeight();
      if (h !== last) {
        last = h;
        document.documentElement.style.setProperty("--mn-bar-h", h + "px");
      }
      chatRoots().forEach((el) => {
        el.style.transition = "transform .25s ease";
        el.style.transform = h ? `translateY(-${h}px)` : "";
      });
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(apply); };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // Detecta a barra aparecendo/sumindo (troca de classe) e a bolha da Asksuite sendo injetada
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mo.disconnect();
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty("--mn-bar-h");
    };
  }, []);
  return null;
}
