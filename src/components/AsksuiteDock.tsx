"use client";

import { useEffect } from "react";

/**
 * Mantém a bolha do chat da Asksuite e o botão de WhatsApp acima da barra de reserva fixa.
 * Mede a barra visível (desktop, tablet ou celular) e grava a altura em --mn-bar-h no <html>.
 * O WhatsApp usa essa variável no CSS (.wa-btn); a bolha da Asksuite, que é injetada pelo script
 * deles, recebe um translateY com o mesmo valor.
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

/** A bolha visível (40 a 120px) mais próxima do canto inferior direito, e o deslocamento já aplicado nela */
function findBubble(roots: HTMLElement[]): { el: HTMLElement; shift: number } | null {
  let best: HTMLElement | null = null;
  let bestScore = Infinity;
  let shift = 0;
  roots.forEach((root) => {
    const ty = new DOMMatrixReadOnly(getComputedStyle(root).transform === "none" ? undefined : getComputedStyle(root).transform).m42;
    [root, ...Array.from(root.querySelectorAll<HTMLElement>("*"))].forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.width > 120 || r.height < 40 || r.height > 120) return;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) === 0) return;
      const score = (window.innerWidth - r.right) + (window.innerHeight - r.bottom);
      if (score < bestScore) { bestScore = score; best = el; shift = ty; }
    });
  });
  return best ? { el: best, shift } : null;
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
      const roots = chatRoots();
      roots.forEach((el) => {
        el.style.transition = "transform .25s ease";
        el.style.transform = h ? `translateY(-${h}px)` : "";
      });
      // Mede a bolha (sem o deslocamento da barra) para centralizar o WhatsApp exatamente acima dela
      const bubble = findBubble(roots);
      const root = document.documentElement.style;
      if (bubble) {
        const r = bubble.el.getBoundingClientRect();
        const top = Math.round(window.innerHeight - (r.top - bubble.shift));
        const cx = Math.round(window.innerWidth - (r.left + r.width / 2));
        root.setProperty("--mn-chat-top", top + "px");
        root.setProperty("--mn-chat-cx", cx + "px");
      } else {
        root.removeProperty("--mn-chat-top");
        root.removeProperty("--mn-chat-cx");
      }
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
      ["--mn-bar-h", "--mn-chat-top", "--mn-chat-cx"].forEach((v) => document.documentElement.style.removeProperty(v));
    };
  }, []);
  return null;
}
