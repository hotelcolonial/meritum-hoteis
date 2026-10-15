"use client";

import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "./LocaleLink";
import { CalSmIcon, ChevWhite, CloseIcon, PersonSmIcon, StarIcon, Wordmark } from "./icons";
import { HOTELS, ROUTES, type PageKey } from "@/lib/site";
import { HTML_LANG, LANG_NAME, localePath, splitLocale, type Locale } from "@/i18n/config";
import { useDict, useLocale } from "@/i18n/LocaleProvider";

const navLink: CSSProperties = { fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "15px", letterSpacing: 0, color: "#FFFFFF", whiteSpace: "nowrap" };
const navBtn: CSSProperties = { ...navLink, background: "transparent", border: 0, padding: 0, cursor: "pointer", lineHeight: "inherit" };
const utilItem: CSSProperties = { display: "inline-flex", alignItems: "center", fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "13px", letterSpacing: 0, color: "rgba(255,255,255,0.85)", textDecoration: "none", whiteSpace: "nowrap" };
const langActive: CSSProperties = { fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "13px", letterSpacing: 0, color: "#FFFFFF", textDecoration: "none" };
const langOff: CSSProperties = { ...langActive, color: "rgba(255,255,255,0.6)" };
const langPipe: CSSProperties = { color: "rgba(255,255,255,0.35)", fontSize: "11px" };
const vsep: CSSProperties = { display: "inline-block", width: "1px", height: "14px", background: "rgba(255,255,255,0.25)" };

const PROPERTY_PAGES: PageKey[] = ["colonial", "pousada", "villa", "autopark"];

const LANG_ORDER: Locale[] = ["pt", "en", "es"];

/** PT | EN | ES: cada item leva à mesma página no outro idioma; o idioma atual fica marcado. */
function Langs() {
  const locale = useLocale();
  const { path } = splitLocale(usePathname() || "/");
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }} role="group" aria-label={useDict().nav.languages}>
      {LANG_ORDER.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && <span style={langPipe} aria-hidden="true">|</span>}
          {l === locale ? (
            <span style={langActive} aria-current="true" lang={HTML_LANG[l]}>{l.toUpperCase()}</span>
          ) : (
            // <a> comum (não next/link): trocar de idioma recarrega a página com o <html lang> certo
            <a href={localePath(l, path)} hrefLang={HTML_LANG[l]} lang={HTML_LANG[l]} title={LANG_NAME[l]} style={langOff}>{l.toUpperCase()}</a>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function Currency() {
  return (
    <span className="mn-util" style={utilItem}>
      BRL <ChevWhite />
    </span>
  );
}

export default function SiteHeader({ page, children }: { page: PageKey; children?: ReactNode }) {
  const transparent = PROPERTY_PAGES.includes(page) || page === "gestao" || page === "meritum";
  const showUtil = page !== "gestao" && page !== "meritum";
  const bg = transparent ? "transparent" : "#052744";
  const [hotelsOpen, setHotelsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobHotels, setMobHotels] = useState(false);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const leaveT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const d = useDict().nav;
  const wasOpen = useRef(false);

  useEffect(() => {
    const down = (e: PointerEvent) => {
      if (hotelsRef.current && !hotelsRef.current.contains(e.target as Node)) setHotelsOpen(false);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setHotelsOpen((o) => {
        if (o) hotelsRef.current?.querySelector("button")?.focus();
        return false;
      });
      setMenuOpen(false);
    };
    document.addEventListener("pointerdown", down);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("keydown", key);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    // Ao fechar o menu (X, Escape ou link), o foco volta ao botão ☰
    if (!menuOpen && wasOpen.current) burgerRef.current?.focus({ preventScroll: true });
    wasOpen.current = menuOpen;
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  const closeAll = () => { setHotelsOpen(false); setMenuOpen(false); setMobHotels(false); };
  const active = (k: PageKey | PageKey[]) => ((Array.isArray(k) ? k.includes(page) : k === page) ? " mn-link--active" : "");

  return (
    <div className="sh-col">
      {showUtil && (
        <div className="sh-util" style={{ background: bg }}>
          <div className="sh-util__row sh-desk">
            <Langs />
            <span style={vsep} />
            <Link href={ROUTES.bora} className="mn-util mn-focus" style={utilItem} onClick={closeAll}><StarIcon />{d.loyalty}</Link>
            <span style={vsep} />
            <Link href={ROUTES.reserva} className="mn-util mn-focus" style={utilItem} onClick={closeAll}><CalSmIcon />{d.reservation}</Link>
            <span style={vsep} />
            <Link href={ROUTES.hospede} className="mn-util mn-focus" style={utilItem} onClick={closeAll}><PersonSmIcon />{d.guestArea}</Link>
            <span style={vsep} />
            <Currency />
          </div>
          <div className="sh-util__row sh-util__row--mob sh-mob">
            <Langs />
            <Currency />
          </div>
        </div>
      )}
      <header className="sh-header" style={{ background: bg }}>
        <Link href="/" className="mn-focus" style={{ display: "flex", alignItems: "center" }} onClick={closeAll}>
          <Wordmark style={{ color: "#FFFFFF" }} label={d.homeLink} />
        </Link>
        <nav className="sh-nav sh-desk" aria-label={d.main}>
          <Link href={ROUTES.meritum} className={"mn-link mn-focus" + active("meritum")} style={navLink}>{d.meritum}</Link>
          <div
            className="mn-hotels"
            ref={hotelsRef}
            onMouseEnter={() => { clearTimeout(leaveT.current); setHotelsOpen(true); }}
            onMouseLeave={() => { clearTimeout(leaveT.current); leaveT.current = setTimeout(() => setHotelsOpen(false), 120); }}
          >
            <button
              type="button"
              className={"mn-link mn-focus" + active(PROPERTY_PAGES)}
              style={navBtn}
              aria-haspopup="true"
              aria-expanded={hotelsOpen}
              aria-controls="mn-hotels-panel"
              onClick={() => { clearTimeout(leaveT.current); setHotelsOpen((o) => !o); }}
            >
              {d.hotels}
            </button>
            {hotelsOpen && (
              <div className="mn-hotels__panel mn-pop" id="mn-hotels-panel">
                <div className="mn-hotels__box">
                  {HOTELS.map((h) => (
                    <Link key={h.key} href={h.href} className="mn-hotels__link" onClick={closeAll}>{h.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href={ROUTES.gestao} className={"mn-link mn-focus" + active("gestao")} style={navLink}>{d.gestao}</Link>
          <Link href={ROUTES.contato} className={"mn-link mn-focus" + active("contato")} style={navLink}>{d.contato}</Link>
        </nav>
        <button ref={burgerRef} type="button" aria-label={d.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="mn-focus sh-burger sh-mob">
          <span />
          <span />
        </button>
      </header>
      {children}
      {menuOpen && (
        <div className="mn-menu sh-menu" role="dialog" aria-modal="true" aria-label={d.menu}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "40px" }}>
            <Link href="/" className="mn-focus" style={{ textDecoration: "none", display: "inline-flex" }} onClick={closeAll}>
              <Wordmark style={{ fontSize: "15px", color: "#FFFFFF" }} label={d.homeLink} />
            </Link>
            <button type="button" aria-label={d.closeMenu} onClick={() => setMenuOpen(false)} className="mn-focus sh-close" autoFocus>
              <CloseIcon size={22} />
            </button>
          </div>
          <nav className="sh-menu__nav" aria-label={d.menu}>
            <Link href={ROUTES.meritum} className="mn-focus sh-menu__item" onClick={closeAll}>{d.meritum}</Link>
            <div>
              <button type="button" className="mn-focus sh-menu__item sh-menu__btn" aria-expanded={mobHotels} aria-controls="mn-mob-hotels" onClick={() => setMobHotels((o) => !o)}>
                {d.hotels}
              </button>
              {mobHotels && (
                <div id="mn-mob-hotels" className="mn-pop sh-menu__sub">
                  {HOTELS.map((h) => (
                    <Link key={h.key} href={h.href} className="mn-focus sh-menu__subitem" onClick={closeAll}>{h.name}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link href={ROUTES.gestao} className="mn-focus sh-menu__item" onClick={closeAll}>{d.gestao}</Link>
            <Link href={ROUTES.contato} className="mn-focus sh-menu__item" onClick={closeAll}>{d.contato}</Link>
          </nav>
          <div className="mn-menu__util">
            <Link href={ROUTES.bora} className="mn-focus mn-menu__utillink" onClick={closeAll}>{d.loyalty}</Link>
            <Link href={ROUTES.reserva} className="mn-focus mn-menu__utillink" onClick={closeAll}>{d.reservation}</Link>
            <Link href={ROUTES.hospede} className="mn-focus mn-menu__utillink" onClick={closeAll}>{d.guestArea}</Link>
          </div>
          <div className="sh-menu__footer">
            <Link href={ROUTES.contato + "#proprietarios"} className="mn-focus sh-menu__cta" onClick={closeAll}>
              {d.talk} <span aria-hidden="true">→</span>
            </Link>
            <div className="sh-menu__hotels">
              <Link href={ROUTES.colonial} className="mn-focus" onClick={closeAll}>Hotel Colonial Iguaçu</Link>
              <Link href={ROUTES.pousada} className="mn-focus" onClick={closeAll}>Pousada Cataratas</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
