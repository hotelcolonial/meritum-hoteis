"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent as RKE, type MouseEvent as RME } from "react";
import { CalIcon, ChevWhite, CheckIcon, CloseIcon, PersonIcon } from "./icons";
import { buildNiaraUrl, NIARA_HOTEL_ID } from "@/lib/niara";
import { NIARA_LOCALE } from "@/i18n/config";
import { useDict, useLocale } from "@/i18n/LocaleProvider";
import { fill, plural as pl } from "@/i18n/dictionaries";

type Prop = "colonial" | "pousada";
type Panel = "prop" | "dates" | "guests" | null;
type CodeAt = "desk" | "tab" | "card" | "full";
/** Idade null = ainda não escolhida (obrigatória para buscar). */
type Room = { adults: number; ages: (number | null)[] };

const iso = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const todayIso = () => { const d = new Date(); return iso(d.getFullYear(), d.getMonth(), d.getDate()); };
const PROP_NAME: Record<Prop, string> = { colonial: "Hotel Colonial Iguaçu", pousada: "Pousada Cataratas" };
const AGES = Array.from({ length: 18 }, (_, i) => i);
const MAX_ROOMS = 5, MAX_ADULTS = 6, MAX_CHILDREN = 4;

function useMedia(q: string) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [q]);
  return m;
}

export default function BookingWidget({ sentinelSelector = "#mn-footer" }: { sentinelSelector?: string }) {
  const t = useDict().booking;
  const locale = useLocale();
  const fmt = (s: string) => { const [y, m, d] = s.split("-").map(Number); return fill(t.dateShort, { d, m: t.monthsShort[m - 1], y }); };
  const isMobile = useMedia("(max-width: 1023px)");
  const oneMonth = useMedia("(max-width: 767px)");
  const [prop, setProp] = useState<Prop>("colonial");
  const [panel, setPanel] = useState<Panel>(null);
  const [bkIn, setIn] = useState<string | null>(null);
  const [bkOut, setOut] = useState<string | null>(null);
  const [roomList, setRoomList] = useState<Room[]>([{ adults: 2, ages: [] }]);
  const [code, setCode] = useState("");
  // Onde o campo de código está sendo digitado (o botão aparece em mais de um lugar)
  const [codeEditing, setCodeEditing] = useState<CodeAt | null>(null);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const [invalid, setInvalid] = useState<"dates" | "ages" | null>(null);
  const [mob, setMob] = useState(false);
  const [fixedRaw, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Celular: o cartão do hero saiu da tela / o rodapé ou o formulário de contato estão visíveis
  const [cardOut, setCardOut] = useState(false);
  const [barBlocked, setBarBlocked] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const fullClose = useRef<HTMLButtonElement>(null);
  const barBtn = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const openY = useRef(0);
  // Lidos nos efeitos de abertura do calendário sem que mudar o check-in os dispare de novo
  const listCal = useRef(false);
  const inNow = useRef<string | null>(null);
  useEffect(() => { listCal.current = oneMonth; inNow.current = bkIn; }, [oneMonth, bkIn]);

  const close = useCallback((returnFocus: boolean) => {
    setPanel(null);
    const t = trigger.current;
    if (returnFocus && t) setTimeout(() => { try { t.focus(); } catch { /* */ } }, 0);
  }, []);

  const open = (p: Exclude<Panel, null>, e?: RME<HTMLElement>) => {
    if (e) trigger.current = e.currentTarget;
    openY.current = window.scrollY;
    setCodeEditing(null);
    setPanel((cur) => (cur === p ? null : p));
  };

  // Foco no painel recém aberto
  useEffect(() => {
    if (!panel) return;
    const t = setTimeout(() => {
      const el = document.querySelector("[data-bk-panel]");
      if (!el) return;
      const f = (el.querySelector(".bk-opt.is-selected") || el.querySelector(".bk-cal__day.is-start") || el.querySelector(".bk-cal__day:not(:disabled):not(.is-empty)") || el.querySelector("button:not(:disabled), input")) as HTMLElement | null;
      // Na lista de meses do celular quem decide a rolagem é o efeito abaixo, não o foco
      f?.focus(listCal.current ? { preventScroll: true } : undefined);
    }, 40);
    return () => clearTimeout(t);
  }, [panel]);

  // Celular: ao abrir as datas, a lista começa no mês do check-in (ou no topo, mês atual).
  // Só ao abrir: escolher o check-in não mexe na rolagem.
  useEffect(() => {
    if (panel !== "dates" || !oneMonth || !inNow.current) return;
    document.querySelector(`.bk-sheet [data-bk-month="${inNow.current.slice(0, 7)}"]`)?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [panel, oneMonth]);

  useEffect(() => {
    const down = (e: PointerEvent) => {
      const t = e.target as Element;
      if (panel && !(t.closest && t.closest("[data-bk-panel], [data-bk-trigger]"))) close(false);
    };
    const key = (e: KeyboardEvent) => {
      if (panel && e.key === "Tab") {
        const el = document.querySelector("[data-bk-panel]");
        if (el) {
          const f = Array.from(el.querySelectorAll<HTMLElement>("button, input, select, [tabindex]")).filter((x) => !(x as HTMLButtonElement).disabled && x.tabIndex !== -1 && x.offsetParent !== null);
          if (f.length) {
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            else if (!el.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
          }
        }
      }
      if (e.key === "Escape" && panel) close(true);
    };
    const scroll = () => { if (panel && !isMobile && Math.abs(window.scrollY - openY.current) > 240) close(false); };
    document.addEventListener("pointerdown", down);
    document.addEventListener("keydown", key);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("keydown", key);
      window.removeEventListener("scroll", scroll);
    };
  }, [panel, close, isMobile]);

  // Barra fixa no rodapé da janela depois que o herói sai de vista (desktop)
  useEffect(() => {
    if (isMobile) return;
    const on = () => {
      const s = sentinel.current;
      if (!s) return;
      const v = s.getBoundingClientRect().top <= 0;
      const f = document.querySelector(sentinelSelector);
      const h = f ? f.getBoundingClientRect().top <= window.innerHeight : false;
      setFixed(v);
      setHidden(h);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [isMobile, sentinelSelector]);

  // Avisa o pop-up do Bora de Novo (PromoPopup.tsx) que a reserva está em uso: ele fecha e não abre mais nessa visita
  useEffect(() => {
    if (panel || mob) window.dispatchEvent(new Event("mn:booking-open"));
  }, [panel, mob]);

  useEffect(() => {
    document.documentElement.classList.toggle("bk-mob-lock", mob);
    return () => document.documentElement.classList.remove("bk-mob-lock");
  }, [mob]);

  // Celular: barra fixa quando o cartão do hero sai da tela, escondida sobre o rodapé e o formulário de contato
  useEffect(() => {
    if (!oneMonth) return;
    const c = card.current;
    if (!c) return;
    const io = new IntersectionObserver(([en]) => setCardOut(!en.isIntersecting), { threshold: 0 });
    io.observe(c);
    const seen = new Set<Element>();
    const blockers = Array.from(document.querySelectorAll(`${sentinelSelector}, #quero-a-meritum`));
    const bo = new IntersectionObserver((list) => {
      list.forEach((en) => (en.isIntersecting ? seen.add(en.target) : seen.delete(en.target)));
      setBarBlocked(seen.size > 0);
    }, { threshold: 0 });
    blockers.forEach((b) => bo.observe(b));
    return () => { io.disconnect(); bo.disconnect(); setCardOut(false); setBarBlocked(false); };
  }, [oneMonth, sentinelSelector]);

  // Folha "Sua reserva" (celular): foco no Fechar, Esc fecha e Tab fica dentro dela
  const full = oneMonth && mob;
  const panelNow = useRef<Panel>(null);
  useEffect(() => { panelNow.current = panel; }, [panel]);
  useEffect(() => {
    if (!full) return;
    const opener = document.activeElement as HTMLElement | null;
    const bar = barBtn.current;
    setTimeout(() => fullClose.current?.focus(), 40);
    const key = (e: KeyboardEvent) => {
      if (panelNow.current) return;
      if (e.key === "Escape") { setMob(false); return; }
      const el = document.querySelector("[data-bk-full]");
      if (e.key !== "Tab" || !el) return;
      const f = Array.from(el.querySelectorAll<HTMLElement>("button, input")).filter((x) => !(x as HTMLButtonElement).disabled && x.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      const back = opener && opener.isConnected && opener.offsetParent !== null ? opener : bar;
      setTimeout(() => { try { back?.focus(); } catch { /* */ } }, 0);
    };
  }, [full]);

  const pick = (d: string) => {
    if (!bkIn || bkOut || d <= bkIn) { setIn(d); setOut(null); return; }
    setOut(d);
    setTimeout(() => close(true), 260);
  };

  // Hóspedes por quarto
  const setRoomCount = (n: number) => setRoomList((l) => (n > l.length ? [...l, ...Array.from({ length: n - l.length }, () => ({ adults: 1, ages: [] }))] : l.slice(0, n)));
  const updRoom = (i: number, f: (r: Room) => Room) => setRoomList((l) => l.map((r, j) => (j === i ? f(r) : r)));
  const setKids = (i: number, n: number) => updRoom(i, (r) => ({ ...r, ages: n > r.ages.length ? [...r.ages, ...Array<null>(n - r.ages.length).fill(null)] : r.ages.slice(0, n) }));
  const setAge = (i: number, k: number, a: number | null) => updRoom(i, (r) => ({ ...r, ages: r.ages.map((x, j) => (j === k ? a : x)) }));
  const totalAdults = roomList.reduce((s, r) => s + r.adults, 0);
  const totalChildren = roomList.reduce((s, r) => s + r.ages.length, 0);
  const missingAge = roomList.some((r) => r.ages.includes(null));

  const today = todayIso();

  // O erro some sozinho quando o campo é corrigido
  const datesBad = invalid === "dates" && !(bkIn && bkOut);
  const agesBad = invalid === "ages" && missingAge;
  const err = datesBad ? t.errDates : agesBad ? t.errAges : "";

  const submit = (e: RME<HTMLElement>) => {
    if (!bkIn || !bkOut || bkIn < today) {
      if (bkIn && bkIn < today) { setIn(null); setOut(null); }
      setInvalid("dates"); if (panel !== "dates") open("dates", e); return;
    }
    if (missingAge) { setInvalid("ages"); if (panel !== "guests") open("guests", e); return; }
    setInvalid(null);
    window.location.assign(buildNiaraUrl({
      hotelId: NIARA_HOTEL_ID[prop],
      checkIn: bkIn,
      checkOut: bkOut,
      rooms: roomList.map((r) => ({ adults: r.adults, childrenAges: r.ages as number[] })),
      promoCode: code,
      locale: NIARA_LOCALE[locale],
    }));
  };

  const fixed = !isMobile && fixedRaw;

  // Calendário
  const tY = Number(today.slice(0, 4)), tM = Number(today.slice(5, 7)) - 1;
  // Celular: 12 meses em lista vertical a partir do mês atual, sem setas (ignora view)
  const v = oneMonth ? { y: tY, m: tM } : view || { y: tY, m: tM };
  const nMonths = oneMonth ? 12 : 2;
  const months = Array.from({ length: nMonths }, (_, i) => {
    const y = v.y + Math.floor((v.m + i) / 12), m = (v.m + i) % 12;
    const first = new Date(y, m, 1).getDay(), len = new Date(y, m + 1, 0).getDate();
    return { y, m, first, len };
  });
  const nights = bkIn && bkOut ? Math.round((Date.parse(bkOut) - Date.parse(bkIn)) / 86400000) : 0;
  const prevDisabled = v.y < tY || (v.y === tY && v.m <= tM);

  const listKey = (e: RKE<HTMLDivElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const opts = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="option"]'));
    const i = opts.indexOf(document.activeElement as HTMLElement);
    const j = e.key === "Home" ? 0 : e.key === "End" ? opts.length - 1 : e.key === "ArrowDown" ? Math.min(opts.length - 1, i + 1) : Math.max(0, i - 1);
    opts[j]?.focus();
  };

  const propList = (
    <div className="bk-list" role="listbox" aria-label={t.property} onKeyDown={listKey}>
      {(["colonial", "pousada"] as Prop[]).map((p) => (
        <button key={p} type="button" role="option" className={"bk-opt" + (prop === p ? " is-selected" : "")} aria-selected={prop === p} onClick={() => { setProp(p); close(true); }}>
          <span>{PROP_NAME[p]}</span>
          <CheckIcon />
        </button>
      ))}
    </div>
  );

  const calendar = (
    <div className={"bk-cal" + (oneMonth ? " bk-cal--list" : "")}>
      {oneMonth ? (
        // Uma linha só de dias da semana, parada no topo enquanto os meses rolam
        <div className="bk-cal__wdrow" aria-hidden="true">
          {t.weekdays.map((w, i) => <span key={"w" + i} className="bk-cal__wd">{w}</span>)}
        </div>
      ) : (
        <div className="bk-cal__nav">
          <button type="button" className="bk-cal__arrow" disabled={prevDisabled} aria-label={t.prevMonth} onClick={() => setView(v.m === 0 ? { y: v.y - 1, m: 11 } : { y: v.y, m: v.m - 1 })}>‹</button>
          <button type="button" className="bk-cal__arrow" aria-label={t.nextMonth} onClick={() => setView(v.m === 11 ? { y: v.y + 1, m: 0 } : { y: v.y, m: v.m + 1 })}>›</button>
        </div>
      )}
      <div className="bk-cal__months">
        {months.map(({ y, m, first, len }) => (
          <div className="bk-cal__month" key={`${y}-${m}`} data-bk-month={iso(y, m, 1).slice(0, 7)}>
            <p className="bk-cal__title">{t.months[m]} {y}</p>
            <div className="bk-cal__grid">
              {!oneMonth && t.weekdays.map((w, i) => <span key={"w" + i} className="bk-cal__wd" aria-hidden="true">{w}</span>)}
              {Array.from({ length: first }, (_, k) => <button key={"e" + k} type="button" className="bk-cal__day is-empty" disabled tabIndex={-1} aria-hidden="true" />)}
              {Array.from({ length: len }, (_, k) => {
                const d = k + 1, s = iso(y, m, d);
                const past = s < today, isStart = s === bkIn, isEnd = s === bkOut, inRange = !!(bkIn && bkOut && s > bkIn && s < bkOut);
                const cls = ["bk-cal__day", past && "is-past", isStart && "is-start", isEnd && "is-end", inRange && "is-range"].filter(Boolean).join(" ");
                return (
                  <button key={s} type="button" className={cls} disabled={past} tabIndex={past ? -1 : 0} aria-label={fill(t.dayLabel, { d, m: t.months[m], y })} aria-pressed={isStart || isEnd} onClick={() => pick(s)}>
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="bk-cal__nights">{nights > 0 ? pl(nights, t.night) : bkIn ? t.pickCheckout : t.pickCheckin}</p>
    </div>
  );

  const stepper = (label: string, val: number, set: (n: number) => void, min: number, max: number, rem: string, add: string) => (
    <div className="bk-guests__row">
      <span className="bk-guests__label">{label}</span>
      <div className="bk-step">
        <button type="button" className="bk-step__btn" disabled={val <= min} onClick={() => set(Math.max(min, val - 1))} aria-label={rem}>−</button>
        <span className="bk-step__num" aria-live="polite">{val}</span>
        <button type="button" className="bk-step__btn" disabled={val >= max} onClick={() => set(Math.min(max, val + 1))} aria-label={add}>+</button>
      </div>
    </div>
  );
  const guests = (
    <div className="bk-guests">
      {stepper(t.rooms, roomList.length, setRoomCount, 1, MAX_ROOMS, t.removeRoom, t.addRoom)}
      {roomList.map((r, i) => {
        const q = roomList.length > 1 ? fill(t.ofRoom, { n: i + 1 }) : "";
        return (
          <div className="bk-room" key={i} role="group" aria-label={fill(t.roomN, { n: i + 1 })}>
            {roomList.length > 1 && <p className="bk-room__title">{fill(t.roomN, { n: i + 1 })}</p>}
            {stepper(t.adults, r.adults, (n) => updRoom(i, (x) => ({ ...x, adults: n })), 1, MAX_ADULTS, t.removeAdult + q, t.addAdult + q)}
            {stepper(t.children, r.ages.length, (n) => setKids(i, n), 0, MAX_CHILDREN, t.removeChild + q, t.addChild + q)}
            {r.ages.length > 0 && (
              <div className="bk-ages">
                {r.ages.map((a, k) => (
                  <label className="bk-age" key={k}>
                    <span className="bk-age__label">{fill(t.childAge, { n: k + 1 })}</span>
                    <select
                      className={"bk-age__select" + (agesBad && a === null ? " is-invalid" : "")}
                      value={a ?? ""}
                      required
                      aria-invalid={agesBad && a === null}
                      onChange={(e) => setAge(i, k, e.target.value === "" ? null : Number(e.target.value))}
                    >
                      <option value="" disabled>{t.select}</option>
                      {AGES.map((n) => <option key={n} value={n}>{pl(n, t.year)}</option>)}
                    </select>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
      {agesBad && <p className="bk-guests__err" role="alert">{err}</p>}
      <button type="button" className="bk-guests__apply" onClick={() => close(true)}>{t.apply}</button>
    </div>
  );

  const guestsLabel = `${pl(roomList.length, t.room)} · ${pl(totalAdults, t.adult)} · ${pl(totalChildren, t.child)}`;
  // Versão curta para a barra em telas intermediárias (o CSS escolhe qual mostrar)
  const guestsShort = `${pl(roomList.length, t.room)} · ${pl(totalAdults + totalChildren, t.guest)}`;
  const bad = (on: boolean) => (on ? " is-invalid" : "");
  // No painel de hóspedes a mensagem aparece dentro dele
  const barErr = panel === "guests" ? "" : err;
  const inLabel = bkIn ? fmt(bkIn) : t.selectDate;
  const outLabel = bkOut ? fmt(bkOut) : t.selectDate;
  const popDir = fixed ? " bk-pop--up" : "";

  const codeField = (at: CodeAt) => codeEditing === at ? (
    <input
      className="bk-code__input"
      ref={(el) => { if (el && document.activeElement !== el) setTimeout(() => el.focus(), 0); }}
      type="text"
      value={code}
      placeholder={t.promoCode}
      aria-label={t.promoCode}
      onChange={(e) => setCode(e.target.value.toUpperCase().replace(/\s+/g, ""))}
      onKeyDown={(e) => {
        if (e.key === "Escape") { e.stopPropagation(); setCodeEditing(null); setCode(""); }
        if (e.key === "Enter") { e.preventDefault(); setCodeEditing(null); }
      }}
      onBlur={() => { setCodeEditing(null); setCode((c) => c.trim()); }}
    />
  ) : (
    <button type="button" className="mn-code mn-focus bk-code__btn bk-codebtn" onClick={() => { setCodeEditing(at); setPanel(null); }}>
      {code ? t.code + code : t.hasCode}
    </button>
  );

  const sheetTitle = panel === "prop" ? t.property : panel === "dates" ? t.stayDates : t.guests;

  // Celular (até 767px): cartão no hero e o mesmo formulário dentro da folha "Sua reserva"
  const phoneForm = (at: "card" | "full") => (
    <div className="bk-mcard" ref={at === "card" ? card : undefined}>
      <button type="button" data-bk-trigger className="mn-focus bk-mfield" aria-haspopup="listbox" aria-expanded={panel === "prop"} onClick={(e) => open("prop", e)}>
        <span className="bk-textcol"><span className="bk-label">{t.property}</span><span className="bk-value">{PROP_NAME[prop]}</span></span><ChevWhite />
      </button>
      <div className="bk-mrow">
        <button type="button" data-bk-trigger data-bk-dates className={"mn-focus bk-mfield" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
          <span className="bk-textcol"><span className="bk-label">{t.checkin}</span><span className={"bk-value" + (bkIn ? "" : " is-dim")}>{inLabel}</span></span>
        </button>
        <button type="button" data-bk-trigger className={"mn-focus bk-mfield" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
          <span className="bk-textcol"><span className="bk-label">{t.checkout}</span><span className={"bk-value" + (bkOut ? "" : " is-dim")}>{outLabel}</span></span>
        </button>
      </div>
      <button type="button" data-bk-trigger className={"mn-focus bk-mfield" + bad(agesBad)} aria-haspopup="dialog" aria-expanded={panel === "guests"} onClick={(e) => open("guests", e)}>
        <span className="bk-textcol"><span className="bk-label">{t.guests}</span><span className="bk-value">{guestsLabel}</span></span><ChevWhite />
      </button>
      <div className="bk-mcode">{codeField(at)}</div>
      {!!barErr && <p className="bk-err bk-err--static" role="alert">{barErr}</p>}
      <button type="button" className="mn-focus bk-mgo" onClick={submit}>{t.search}</button>
    </div>
  );
  const dayMonth = (s: string) => { const [, m, d] = s.split("-").map(Number); return fill(t.dayMonth, { d, m: t.monthsShort[m - 1] }); };
  const guestsMini = [pl(totalAdults, t.adult), totalChildren > 0 && pl(totalChildren, t.child)].filter(Boolean).join(", ").toLocaleLowerCase(locale);
  const summary = bkIn && bkOut ? `${fill(t.dateRange, { a: dayMonth(bkIn), b: dayMonth(bkOut) })} · ${guestsMini}` : t.chooseDates;
  const barOn = oneMonth && cardOut && !barBlocked;
  const openFull = () => { setPanel(null); setMob(true); };

  return (
    <div className="bk-wrap">
      {/* Celular: formulário dentro do hero, barra fixa ao rolar e folha com o formulário completo */}
      <div className="bk-phone">{phoneForm("card")}</div>
      <div className={"bk-pbar" + (barOn ? " is-on" : "")} inert={!barOn} aria-hidden={!barOn}>
        <button type="button" className="bk-pbar__sum mn-focus" aria-haspopup="dialog" aria-expanded={full} onClick={openFull}>
          <span className="bk-pbar__prop">{PROP_NAME[prop]}</span>
          <span className="bk-pbar__info">{summary}</span>
        </button>
        <button ref={barBtn} type="button" className="bk-pbar__btn mn-focus" aria-haspopup="dialog" aria-expanded={full} onClick={openFull}>{t.book}</button>
      </div>
      {full && (
        <div className="bk-sheet bk-full" data-bk-full role="dialog" aria-modal="true" aria-label={t.yourBooking}>
          <div className="bk-sheet__head">
            <p className="bk-sheet__title">{t.yourBooking}</p>
            <button ref={fullClose} type="button" className="bk-sheet__close" onClick={() => { setMob(false); setPanel(null); }}>{t.close}</button>
          </div>
          <div className="bk-sheet__body">{phoneForm("full")}</div>
        </div>
      )}

      {/* Desktop */}
      <div className="sh-desk" style={{ display: "block" }}>
        <div ref={sentinel} style={{ height: fixed ? "72px" : "0px" }} />
        <div className={"bk-desk bk-desk-bar" + (fixed ? " is-fixed mn-barup" : "") + (fixed && hidden ? " is-hidden" : "")}>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className="mn-focus bk-segbtn" aria-haspopup="listbox" aria-expanded={panel === "prop"} onClick={(e) => open("prop", e)}>
              <div className="bk-textcol"><span className="bk-label">{t.property}</span><span className="bk-value">{PROP_NAME[prop]}</span></div>
              <ChevWhite />
            </button>
            {!isMobile && panel === "prop" && <div className={"bk-pop mn-pop" + popDir} data-bk-panel>{propList}</div>}
          </div>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className={"mn-focus bk-segbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
              <CalIcon />
              <div className="bk-textcol"><span className="bk-label">{t.checkin}</span><span className={"bk-value" + (bkIn ? "" : " is-dim")}>{inLabel}</span></div>
              <ChevWhite />
            </button>
            {!isMobile && panel === "dates" && <div className={"bk-pop bk-pop--cal mn-pop" + popDir} data-bk-panel role="dialog" aria-label={t.stayDates}>{calendar}</div>}
          </div>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className={"mn-focus bk-segbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
              <CalIcon />
              <div className="bk-textcol"><span className="bk-label">{t.checkout}</span><span className={"bk-value" + (bkOut ? "" : " is-dim")}>{outLabel}</span></div>
              <ChevWhite />
            </button>
          </div>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className={"mn-focus bk-segbtn" + bad(agesBad)} aria-label={`${t.guests}: ${guestsLabel}`} aria-haspopup="dialog" aria-expanded={panel === "guests"} onClick={(e) => open("guests", e)}>
              <PersonIcon />
              <div className="bk-textcol"><span className="bk-label">{t.guests}</span><span className="bk-value"><span className="bk-gfull">{guestsLabel}</span><span className="bk-gshort">{guestsShort}</span></span></div>
              <ChevWhite />
            </button>
            {!isMobile && panel === "guests" && <div className={"bk-pop bk-pop--guests mn-pop" + popDir} data-bk-panel role="dialog" aria-label={t.guests}>{guests}</div>}
          </div>
          <div className="bk-segcode">{!isMobile && codeField("desk")}</div>
          <button type="button" className="mn-focus bk-submit bk-go" onClick={submit}>{t.search}</button>
          {!!barErr && !isMobile && <p className={"bk-err" + (fixed ? " bk-err--up" : "")} role="alert">{barErr}</p>}
        </div>
      </div>

      {/* Tablet (768 a 1023px) */}
      <div className="bk-fixbar">
        <span className="bk-fixbar__text">{PROP_NAME[prop]} · {bkIn && bkOut ? t.datesSelected : t.selectDates}</span>
        <button type="button" className="bk-fixbar__btn mn-focus" aria-haspopup="dialog" aria-expanded={mob} onClick={() => setMob(true)}>{t.search}</button>
      </div>
      <div className={"bk-mobwrap" + (mob ? " is-open" : "")} role={mob ? "dialog" : "group"} aria-label={t.book}>
        <div className="bk-mobwrap__head">
          <p className="bk-mobwrap__title">{t.book}</p>
          <button type="button" className="bk-mobwrap__close mn-focus" aria-label={t.close} onClick={() => { setMob(false); setPanel(null); }}><CloseIcon /></button>
        </div>
        <div className="bk-mob-bar">
          <button type="button" data-bk-trigger className="mn-focus bk-msegbtn" aria-haspopup="listbox" aria-expanded={panel === "prop"} onClick={(e) => open("prop", e)}>
            <span className="bk-textcol"><span className="bk-label">{t.property}</span><span className="bk-value">{PROP_NAME[prop]}</span></span><ChevWhite />
          </button>
          <button type="button" data-bk-trigger className={"mn-focus bk-msegbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
            <span><CalIcon /><span className="bk-textcol"><span className="bk-label">{t.checkin}</span><span className={"bk-value" + (bkIn ? "" : " is-dim")}>{inLabel}</span></span></span><ChevWhite />
          </button>
          <button type="button" data-bk-trigger className={"mn-focus bk-msegbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
            <span><CalIcon /><span className="bk-textcol"><span className="bk-label">{t.checkout}</span><span className={"bk-value" + (bkOut ? "" : " is-dim")}>{outLabel}</span></span></span><ChevWhite />
          </button>
          <button type="button" data-bk-trigger className={"mn-focus bk-msegbtn" + bad(agesBad)} aria-haspopup="dialog" aria-expanded={panel === "guests"} onClick={(e) => open("guests", e)}>
            <span><PersonIcon /><span className="bk-textcol"><span className="bk-label">{t.guests}</span><span className="bk-value">{guestsLabel}</span></span></span><ChevWhite />
          </button>
          <div className="bk-msegcode">{isMobile && codeField("tab")}</div>
          {!!barErr && isMobile && <p className="bk-err bk-err--static" role="alert">{barErr}</p>}
          <button type="button" className="mn-focus bk-submit bk-go bk-go--mob" onClick={submit}>{t.search}</button>
        </div>
      </div>
      {isMobile && panel && (
        <div className="bk-sheet" data-bk-panel role="dialog" aria-modal="true" aria-label={sheetTitle}>
          <div className="bk-sheet__head">
            <p className="bk-sheet__title">{sheetTitle}</p>
            <button type="button" className="bk-sheet__close" onClick={() => close(true)}>{t.close}</button>
          </div>
          <div className={"bk-sheet__body" + (panel === "dates" && oneMonth ? " bk-sheet__body--cal" : "")}>
            {panel === "prop" && propList}
            {panel === "dates" && calendar}
            {panel === "guests" && guests}
          </div>
        </div>
      )}
    </div>
  );
}
