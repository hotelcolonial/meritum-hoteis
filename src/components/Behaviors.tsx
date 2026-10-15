"use client";

/**
 * Comportamentos das seções estáticas (renderizadas no servidor):
 * animação de entrada, subnavegação das propriedades, galerias com lightbox,
 * formulário "Fale com a Méritum" e rolagem suave para âncoras.
 */
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type Pic = { src: string; alt: string };

const REVEAL_SECTIONS = ".mn-pillars, .mn-audience, .ph-feature, .ph-pillars, .ph-location, .ph-gallery, .ph-dining, .ph-book, .ph-more, .ph-plans, .gs-fit, .gs-bridge, .gs-vision, .gs-method, .gs-models, .ph-managed, .am-story, .am-purpose, .am-values, .bn-perks, .bn-how, .bn-faq";
const REVEAL_ITEMS = ".mn-pillars .mn-in, .mn-aud-in, .ph-in, .am-in, .am-in-media";
const GROUPS: [string, string][] = [[".mn-qs, .mn-pq", ".mn-rv"], ["#o-que-fazemos", ".mn-idx__row"], ["#portfolio", ".mn-pf__item"]];

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function scrollToEl(el: Element, offset: number) {
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: reducedMotion() ? "auto" : "smooth" });
}

function initReveal(): () => void {
  const cleanups: (() => void)[] = [];
  const reduce = reducedMotion();
  if (!("IntersectionObserver" in window)) return () => {};

  if (!reduce) {
    document.querySelectorAll(REVEAL_SECTIONS).forEach((s) => s.classList.add("mn-anim"));
    const items = document.querySelectorAll(REVEAL_ITEMS);
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.2 });
    items.forEach((b) => io.observe(b));
    const t = setTimeout(() => items.forEach((b) => b.classList.add("is-visible")), 1200);
    cleanups.push(() => { io.disconnect(); clearTimeout(t); });
  }

  if (!reduce) {
    GROUPS.forEach(([wrapSel, itemSel]) => {
      document.querySelectorAll(wrapSel).forEach((wrap) => {
        const items = wrap.querySelectorAll(itemSel);
        if (!items.length) return;
        wrap.classList.add("mn-anim");
        if (itemSel === ".mn-rv") wrap.classList.add("mn-rvwrap");
        const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("is-visible"); io.unobserve(x.target); } }), { threshold: 0.15 });
        items.forEach((n) => io.observe(n));
        const t = setTimeout(() => items.forEach((n) => { if (n.getBoundingClientRect().top < innerHeight) n.classList.add("is-visible"); }), 1200);
        cleanups.push(() => { io.disconnect(); clearTimeout(t); });
      });
    });
  }
  return () => cleanups.forEach((c) => c());
}

function initSubnav(): () => void {
  const nav = document.querySelector(".ph-subnav");
  const secs = document.querySelectorAll(".ph-sec");
  if (!nav || !secs.length) return () => {};
  const setActive = (id: string) => nav.querySelectorAll("a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
  setActive(secs[0].id);
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && e.target.id) setActive(e.target.id); }), { rootMargin: "-140px 0px -55% 0px", threshold: 0 });
  secs.forEach((s) => io.observe(s));
  const click = (e: Event) => {
    const a = (e.target as Element).closest("a");
    if (!a) return;
    const id = (a.getAttribute("href") || "").slice(1);
    const t = document.getElementById(id);
    if (!t) return;
    e.preventDefault();
    setActive(id);
    scrollToEl(t, 140);
    history.replaceState(null, "", "#" + id);
  };
  nav.addEventListener("click", click);
  return () => { io.disconnect(); nav.removeEventListener("click", click); };
}

function initGallery(open: (pics: Pic[], i: number) => void): () => void {
  const cleanups: (() => void)[] = [];
  document.querySelectorAll<HTMLElement>(".ph-gallery").forEach((sec) => {
    const g = sec.querySelector<HTMLElement>(".ph-gallery__track");
    if (!g) return;
    const prev = sec.querySelector<HTMLElement>(".ph-gallery__arrow--prev");
    const next = sec.querySelector<HTMLElement>(".ph-gallery__arrow--next");
    const buttons = Array.from(g.querySelectorAll<HTMLElement>(".ph-gallery__item"));
    const pics: Pic[] = buttons.map((b) => {
      const img = b.querySelector("img");
      // img.src é a maior variante gerada pelo next/image (ideal para a foto ampliada)
      return { src: img?.src || "", alt: img?.alt || "" };
    });
    let busy = false, drag: { x: number; s: number } | null = null, moved = false;

    const targets = () => {
      const max = Math.max(0, g.scrollWidth - g.clientWidth);
      const pad = parseFloat(getComputedStyle(g).paddingLeft) || 0;
      const t: number[] = [];
      buttons.forEach((it) => { const v = Math.max(0, Math.min(max, Math.round(it.offsetLeft - g.offsetLeft - pad))); if (!t.length || Math.abs(v - t[t.length - 1]) > 2) t.push(v); });
      if (!t.length) t.push(0);
      return t;
    };
    const update = () => {
      if (busy) return;
      const t = targets(), x = g.scrollLeft;
      prev?.classList.toggle("is-disabled", x <= 4);
      next?.classList.toggle("is-disabled", x >= t[t.length - 1] - 4);
    };
    const step = (dir: number) => {
      const t = targets(), x = g.scrollLeft;
      let near = 0, best = Infinity;
      t.forEach((v, i) => { const d = Math.abs(v - x); if (d < best) { best = d; near = i; } });
      let idx = near + dir;
      if (dir > 0 && t[near] < x - 4) idx = near + 1;
      if (dir < 0 && t[near] > x + 4) idx = near - 1;
      idx = Math.max(0, Math.min(t.length - 1, idx));
      if (Math.abs(t[idx] - x) < 2) return;
      busy = true;
      g.classList.add("is-stepping");
      const done = () => { if (!busy) return; busy = false; g.classList.remove("is-stepping"); g.removeEventListener("scrollend", done); update(); };
      g.addEventListener("scrollend", done);
      setTimeout(done, reducedMotion() ? 50 : 700);
      g.scrollTo({ left: t[idx], behavior: reducedMotion() ? "auto" : "smooth" });
    };
    const onPrev = () => step(-1), onNext = () => step(1);
    const onDown = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; drag = { x: e.clientX, s: g.scrollLeft }; moved = false; };
    const onMove = (e: PointerEvent) => { if (!drag) return; const dx = e.clientX - drag.x; if (Math.abs(dx) > 5) { moved = true; g.classList.add("is-dragging"); } if (moved) g.scrollLeft = drag.s - dx; };
    const onUp = () => { if (!drag) return; drag = null; g.classList.remove("is-dragging"); setTimeout(() => { moved = false; }, 0); };
    const onClick = (e: Event) => {
      const b = (e.target as Element).closest(".ph-gallery__item");
      if (!b || moved) return;
      open(pics, buttons.indexOf(b as HTMLElement));
    };
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);
    g.addEventListener("scroll", update, { passive: true });
    g.addEventListener("pointerdown", onDown);
    g.addEventListener("pointermove", onMove);
    g.addEventListener("pointerup", onUp);
    g.addEventListener("pointerleave", onUp);
    g.addEventListener("click", onClick);
    const t = setTimeout(update, 400);
    cleanups.push(() => {
      clearTimeout(t);
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      g.removeEventListener("scroll", update);
      g.removeEventListener("pointerdown", onDown);
      g.removeEventListener("pointermove", onMove);
      g.removeEventListener("pointerup", onUp);
      g.removeEventListener("pointerleave", onUp);
      g.removeEventListener("click", onClick);
    });
  });
  return () => cleanups.forEach((c) => c());
}

function phoneMask(el: HTMLInputElement) {
  const d = el.value.replace(/\D/g, "").slice(0, 11);
  let v = d;
  if (d.length > 2) { const rest = d.slice(2); const cut = d.length === 11 ? 5 : 4; v = "(" + d.slice(0, 2) + ") " + rest.slice(0, cut) + (rest.length > cut ? " " + rest.slice(cut) : ""); }
  else if (d.length > 0) v = "(" + d;
  el.value = v;
}

function validate(form: HTMLFormElement) {
  const els = form.elements as unknown as Record<string, HTMLInputElement | undefined>;
  const req = ["nome", "email", "whatsapp", "hotel", "cidade", "quartos"].concat(els["cargo"] ? ["cargo"] : []);
  const errors: Record<string, string> = {};
  req.forEach((k) => { const el = els[k]; if (!el || !String(el.value || "").trim()) errors[k] = "Preencha este campo"; });
  const em = els.email;
  if (em && em.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim())) errors.email = "Informe um e-mail válido";
  const wa = els.whatsapp;
  if (wa && wa.value.trim() && wa.value.replace(/\D/g, "").length < 10) errors.whatsapp = "Informe um WhatsApp válido";
  if (els.privacidade && !els.privacidade.checked) errors.privacidade = "Preencha este campo";
  return errors;
}

function initForms(page: string): () => void {
  const cleanups: (() => void)[] = [];
  document.querySelectorAll<HTMLFormElement>("form.mn-join__form").forEach((form) => {
    const input = (e: Event) => { const t = e.target as HTMLInputElement; if (t.name === "whatsapp") phoneMask(t); };
    const submit = async (e: Event) => {
      e.preventDefault();
      if (form.dataset.sending) return;
      form.querySelectorAll(".mn-join__err").forEach((n) => n.remove());
      form.querySelectorAll(".is-invalid").forEach((n) => { n.classList.remove("is-invalid"); n.setAttribute("aria-invalid", "false"); });
      const errors = validate(form);
      const order = ["nome", "cargo", "email", "whatsapp", "hotel", "cidade", "quartos", "privacidade"];
      const keys = order.filter((k) => errors[k]);
      if (keys.length) {
        keys.forEach((k) => {
          const el = form.elements.namedItem(k) as HTMLElement | null;
          if (!el) return;
          el.classList.add("is-invalid");
          el.setAttribute("aria-invalid", "true");
          const span = document.createElement("span");
          span.className = "mn-join__err";
          span.id = el.id + "-err";
          span.textContent = errors[k];
          el.closest(".mn-join__field")?.appendChild(span);
        });
        (form.elements.namedItem(keys[0]) as HTMLElement | null)?.focus();
        return;
      }
      const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      const label = btn?.textContent || "";
      form.dataset.sending = "1";
      if (btn) { btn.disabled = true; btn.textContent = "Enviando..."; }
      const data = Object.fromEntries(new FormData(form).entries());
      const status = form.parentElement?.querySelector(".mn-join__status");
      try {
        const r = await fetch("/api/contato", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, origem: page }) });
        if (!r.ok) throw new Error(String(r.status));
        form.style.display = "none";
        if (status) status.innerHTML = '<div class="mn-join__success"><p class="mn-join__ok-title">Obrigado.</p><p class="mn-join__ok-text">Recebemos as informações do seu hotel. Nossa equipe vai entrar em contato em breve.</p></div>';
      } catch {
        if (status) status.innerHTML = '<p class="mn-join__err" style="margin-top:16px">Não foi possível enviar agora. Tente novamente em alguns minutos.</p>';
        if (btn) { btn.disabled = false; btn.textContent = label; }
      } finally {
        delete form.dataset.sending;
      }
    };
    form.addEventListener("input", input);
    form.addEventListener("submit", submit);
    cleanups.push(() => { form.removeEventListener("input", input); form.removeEventListener("submit", submit); });
  });
  return () => cleanups.forEach((c) => c());
}

export default function Behaviors() {
  const pathname = usePathname();
  const [lb, setLb] = useState<{ pics: Pic[]; i: number } | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const modal = useRef<HTMLDivElement>(null);

  const openLb = useCallback((pics: Pic[], i: number) => {
    lastFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    setLb({ pics, i });
  }, []);
  const closeLb = useCallback(() => {
    setLb(null);
    document.body.style.overflow = "";
    lastFocus.current?.focus?.();
  }, []);
  const stepLb = (d: number) => setLb((s) => (s ? { ...s, i: (s.i + d + s.pics.length) % s.pics.length } : s));

  useEffect(() => {
    const c1 = initReveal();
    const c2 = initSubnav();
    const c3 = initGallery(openLb);
    const c4 = initForms(pathname);
    // Âncora na chegada: desconta o cabeçalho
    const id = decodeURIComponent(location.hash.slice(1));
    const t = id ? setTimeout(() => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120 }); }, 120) : undefined;
    // Links para âncoras da própria página: rolagem suave com desconto do cabeçalho
    const click = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = (e.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.closest(".ph-subnav")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      e.preventDefault();
      if (!url.hash) { window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" }); return; }
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (el) { scrollToEl(el, 120); history.replaceState(null, "", url.hash); }
    };
    document.addEventListener("click", click);
    return () => { c1(); c2(); c3(); c4(); clearTimeout(t); document.removeEventListener("click", click); };
  }, [pathname, openLb]);

  useEffect(() => {
    if (!lb) return;
    modal.current?.querySelector("button")?.focus();
  }, [lb]);

  if (!lb) return null;
  const cur = lb.pics[lb.i];
  return (
    <div
      className="ph-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Galeria ampliada"
      ref={modal}
      onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}
      onKeyDown={(e) => {
        if (e.key === "Escape") { e.preventDefault(); closeLb(); return; }
        if (e.key === "ArrowLeft") { e.preventDefault(); stepLb(-1); return; }
        if (e.key === "ArrowRight") { e.preventDefault(); stepLb(1); return; }
        if (e.key === "Tab" && modal.current) {
          const f = Array.from(modal.current.querySelectorAll<HTMLElement>("button")).filter((x) => x.offsetParent !== null);
          if (!f.length) return;
          const first = f[0], last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }}
    >
      <button className="ph-modal__close" type="button" aria-label="Fechar" onClick={closeLb}>×</button>
      <button className="ph-modal__nav ph-modal__nav--prev" type="button" aria-label="Foto anterior" onClick={() => stepLb(-1)}>‹</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ph-modal__img" src={cur.src} alt={cur.alt} />
      <button className="ph-modal__nav ph-modal__nav--next" type="button" aria-label="Próxima foto" onClick={() => stepLb(1)}>›</button>
      <p className="ph-modal__count">{lb.i + 1} de {lb.pics.length}</p>
    </div>
  );
}
