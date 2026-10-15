"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent as RKE, type MouseEvent as RME } from "react";
import { CalIcon, ChevWhite, CheckIcon, CloseIcon, PersonIcon } from "./icons";
import { buildNiaraUrl, NIARA_HOTEL_ID } from "@/lib/niara";

type Prop = "colonial" | "pousada";
type Panel = "prop" | "dates" | "guests" | null;
/** Idade null = ainda não escolhida (obrigatória para buscar). */
type Room = { adults: number; ages: (number | null)[] };

const MES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const MES_C = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const iso = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const todayIso = () => { const d = new Date(); return iso(d.getFullYear(), d.getMonth(), d.getDate()); };
const fmt = (s: string) => { const [y, m, d] = s.split("-").map(Number); return `${d} ${MES_C[m - 1]} ${y}`; };
const pl = (v: number, a: string, b: string) => `${v} ${v === 1 ? a : b}`;
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
  const isMobile = useMedia("(max-width: 1023px)");
  const oneMonth = useMedia("(max-width: 767px)");
  const [prop, setProp] = useState<Prop>("colonial");
  const [panel, setPanel] = useState<Panel>(null);
  const [bkIn, setIn] = useState<string | null>(null);
  const [bkOut, setOut] = useState<string | null>(null);
  const [roomList, setRoomList] = useState<Room[]>([{ adults: 2, ages: [] }]);
  const [code, setCode] = useState("");
  const [codeEditing, setCodeEditing] = useState(false);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const [invalid, setInvalid] = useState<"dates" | "ages" | null>(null);
  const [mob, setMob] = useState(false);
  const [fixedRaw, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const openY = useRef(0);

  const close = useCallback((returnFocus: boolean) => {
    setPanel(null);
    const t = trigger.current;
    if (returnFocus && t) setTimeout(() => { try { t.focus(); } catch { /* */ } }, 0);
  }, []);

  const open = (p: Exclude<Panel, null>, e?: RME<HTMLElement>) => {
    if (e) trigger.current = e.currentTarget;
    openY.current = window.scrollY;
    setCodeEditing(false);
    setPanel((cur) => (cur === p ? null : p));
  };

  // Foco no painel recém aberto
  useEffect(() => {
    if (!panel) return;
    const t = setTimeout(() => {
      const el = document.querySelector("[data-bk-panel]");
      if (!el) return;
      const f = (el.querySelector(".bk-opt.is-selected") || el.querySelector(".bk-cal__day.is-start") || el.querySelector(".bk-cal__day:not(:disabled):not(.is-empty)") || el.querySelector("button:not(:disabled), input")) as HTMLElement | null;
      f?.focus();
    }, 40);
    return () => clearTimeout(t);
  }, [panel]);

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

  useEffect(() => {
    document.documentElement.classList.toggle("bk-mob-lock", mob);
    return () => document.documentElement.classList.remove("bk-mob-lock");
  }, [mob]);

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
  const err = datesBad ? "Selecione as datas da estadia" : agesBad ? "Informe a idade de cada criança" : "";

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
    }));
  };

  const fixed = !isMobile && fixedRaw;

  // Calendário
  const tY = Number(today.slice(0, 4)), tM = Number(today.slice(5, 7)) - 1;
  const v = view || { y: tY, m: tM };
  const nMonths = oneMonth ? 1 : 2;
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
    <div className="bk-list" role="listbox" aria-label="Propriedade" onKeyDown={listKey}>
      {(["colonial", "pousada"] as Prop[]).map((p) => (
        <button key={p} type="button" role="option" className={"bk-opt" + (prop === p ? " is-selected" : "")} aria-selected={prop === p} onClick={() => { setProp(p); close(true); }}>
          <span>{PROP_NAME[p]}</span>
          <CheckIcon />
        </button>
      ))}
    </div>
  );

  const calendar = (
    <div className="bk-cal">
      <div className="bk-cal__nav">
        <button type="button" className="bk-cal__arrow" disabled={prevDisabled} aria-label="Mês anterior" onClick={() => setView(v.m === 0 ? { y: v.y - 1, m: 11 } : { y: v.y, m: v.m - 1 })}>‹</button>
        <button type="button" className="bk-cal__arrow" aria-label="Próximo mês" onClick={() => setView(v.m === 11 ? { y: v.y + 1, m: 0 } : { y: v.y, m: v.m + 1 })}>›</button>
      </div>
      <div className="bk-cal__months">
        {months.map(({ y, m, first, len }) => (
          <div className="bk-cal__month" key={`${y}-${m}`}>
            <p className="bk-cal__title">{MES[m]} {y}</p>
            <div className="bk-cal__grid">
              {["D", "S", "T", "Q", "Q", "S", "S"].map((w, i) => <span key={"w" + i} className="bk-cal__wd" aria-hidden="true">{w}</span>)}
              {Array.from({ length: first }, (_, k) => <button key={"e" + k} type="button" className="bk-cal__day is-empty" disabled tabIndex={-1} aria-hidden="true" />)}
              {Array.from({ length: len }, (_, k) => {
                const d = k + 1, s = iso(y, m, d);
                const past = s < today, isStart = s === bkIn, isEnd = s === bkOut, inRange = !!(bkIn && bkOut && s > bkIn && s < bkOut);
                const cls = ["bk-cal__day", past && "is-past", isStart && "is-start", isEnd && "is-end", inRange && "is-range"].filter(Boolean).join(" ");
                return (
                  <button key={s} type="button" className={cls} disabled={past} tabIndex={past ? -1 : 0} aria-label={`${d} de ${MES[m]} de ${y}`} aria-pressed={isStart || isEnd} onClick={() => pick(s)}>
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="bk-cal__nights">{nights > 0 ? pl(nights, "noite", "noites") : bkIn ? "Selecione a data de check-out" : "Selecione a data de check-in"}</p>
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
      {stepper("Quartos", roomList.length, setRoomCount, 1, MAX_ROOMS, "Remover quarto", "Adicionar quarto")}
      {roomList.map((r, i) => {
        const q = roomList.length > 1 ? ` do quarto ${i + 1}` : "";
        return (
          <div className="bk-room" key={i} role="group" aria-label={`Quarto ${i + 1}`}>
            {roomList.length > 1 && <p className="bk-room__title">Quarto {i + 1}</p>}
            {stepper("Adultos", r.adults, (n) => updRoom(i, (x) => ({ ...x, adults: n })), 1, MAX_ADULTS, "Remover adulto" + q, "Adicionar adulto" + q)}
            {stepper("Crianças", r.ages.length, (n) => setKids(i, n), 0, MAX_CHILDREN, "Remover criança" + q, "Adicionar criança" + q)}
            {r.ages.length > 0 && (
              <div className="bk-ages">
                {r.ages.map((a, k) => (
                  <label className="bk-age" key={k}>
                    <span className="bk-age__label">Idade da criança {k + 1}</span>
                    <select
                      className={"bk-age__select" + (agesBad && a === null ? " is-invalid" : "")}
                      value={a ?? ""}
                      required
                      aria-invalid={agesBad && a === null}
                      onChange={(e) => setAge(i, k, e.target.value === "" ? null : Number(e.target.value))}
                    >
                      <option value="" disabled>Selecionar</option>
                      {AGES.map((n) => <option key={n} value={n}>{pl(n, "ano", "anos")}</option>)}
                    </select>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
      {agesBad && <p className="bk-guests__err" role="alert">{err}</p>}
      <button type="button" className="bk-guests__apply" onClick={() => close(true)}>Aplicar</button>
    </div>
  );

  const guestsLabel = `${pl(roomList.length, "Quarto", "Quartos")} · ${pl(totalAdults, "Adulto", "Adultos")} · ${pl(totalChildren, "Criança", "Crianças")}`;
  // Versão curta para a barra em telas intermediárias (o CSS escolhe qual mostrar)
  const guestsShort = `${pl(roomList.length, "Quarto", "Quartos")} · ${pl(totalAdults + totalChildren, "Hóspede", "Hóspedes")}`;
  const bad = (on: boolean) => (on ? " is-invalid" : "");
  // No painel de hóspedes a mensagem aparece dentro dele
  const barErr = panel === "guests" ? "" : err;
  const inLabel = bkIn ? fmt(bkIn) : "Selecionar data";
  const outLabel = bkOut ? fmt(bkOut) : "Selecionar data";
  const popDir = fixed ? " bk-pop--up" : "";

  const codeField = codeEditing ? (
    <input
      className="bk-code__input"
      ref={(el) => { if (el && document.activeElement !== el) setTimeout(() => el.focus(), 0); }}
      type="text"
      value={code}
      placeholder="Código promocional"
      aria-label="Código promocional"
      onChange={(e) => setCode(e.target.value.toUpperCase().replace(/\s+/g, ""))}
      onKeyDown={(e) => {
        if (e.key === "Escape") { e.stopPropagation(); setCodeEditing(false); setCode(""); }
        if (e.key === "Enter") { e.preventDefault(); setCodeEditing(false); }
      }}
      onBlur={() => { setCodeEditing(false); setCode((c) => c.trim()); }}
    />
  ) : (
    <button type="button" className="mn-code mn-focus bk-code__btn bk-codebtn" onClick={() => { setCodeEditing(true); setPanel(null); }}>
      {code ? "Código: " + code : "Tenho um código"}
    </button>
  );

  const sheetTitle = panel === "prop" ? "Propriedade" : panel === "dates" ? "Datas da estadia" : "Hóspedes";

  return (
    <div className="bk-wrap">
      {/* Desktop */}
      <div className="sh-desk" style={{ display: "block" }}>
        <div ref={sentinel} style={{ height: fixed ? "72px" : "0px" }} />
        <div className={"bk-desk bk-desk-bar" + (fixed ? " is-fixed mn-barup" : "") + (fixed && hidden ? " is-hidden" : "")}>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className="mn-focus bk-segbtn" aria-haspopup="listbox" aria-expanded={panel === "prop"} onClick={(e) => open("prop", e)}>
              <div className="bk-textcol"><span className="bk-label">Propriedade</span><span className="bk-value">{PROP_NAME[prop]}</span></div>
              <ChevWhite />
            </button>
            {!isMobile && panel === "prop" && <div className={"bk-pop mn-pop" + popDir} data-bk-panel>{propList}</div>}
          </div>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className={"mn-focus bk-segbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
              <CalIcon />
              <div className="bk-textcol"><span className="bk-label">Check-in</span><span className={"bk-value" + (bkIn ? "" : " is-dim")}>{inLabel}</span></div>
              <ChevWhite />
            </button>
            {!isMobile && panel === "dates" && <div className={"bk-pop bk-pop--cal mn-pop" + popDir} data-bk-panel role="dialog" aria-label="Datas da estadia">{calendar}</div>}
          </div>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className={"mn-focus bk-segbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
              <CalIcon />
              <div className="bk-textcol"><span className="bk-label">Check-out</span><span className={"bk-value" + (bkOut ? "" : " is-dim")}>{outLabel}</span></div>
              <ChevWhite />
            </button>
          </div>
          <div className="bk-seg">
            <button type="button" data-bk-trigger className={"mn-focus bk-segbtn" + bad(agesBad)} aria-label={`Hóspedes: ${guestsLabel}`} aria-haspopup="dialog" aria-expanded={panel === "guests"} onClick={(e) => open("guests", e)}>
              <PersonIcon />
              <div className="bk-textcol"><span className="bk-label">Hóspedes</span><span className="bk-value"><span className="bk-gfull">{guestsLabel}</span><span className="bk-gshort">{guestsShort}</span></span></div>
              <ChevWhite />
            </button>
            {!isMobile && panel === "guests" && <div className={"bk-pop bk-pop--guests mn-pop" + popDir} data-bk-panel role="dialog" aria-label="Hóspedes">{guests}</div>}
          </div>
          <div className="bk-segcode">{!isMobile && codeField}</div>
          <button type="button" className="mn-focus bk-submit bk-go" onClick={submit}>Ver disponibilidade</button>
          {!!barErr && !isMobile && <p className={"bk-err" + (fixed ? " bk-err--up" : "")} role="alert">{barErr}</p>}
        </div>
      </div>

      {/* Mobile */}
      <div className="bk-fixbar">
        <span className="bk-fixbar__text">{PROP_NAME[prop]} · {bkIn && bkOut ? "Datas selecionadas" : "Selecionar datas"}</span>
        <button type="button" className="bk-fixbar__btn mn-focus" aria-haspopup="dialog" aria-expanded={mob} onClick={() => setMob(true)}>Ver disponibilidade</button>
      </div>
      <div className={"bk-mobwrap" + (mob ? " is-open" : "")} role={mob ? "dialog" : "group"} aria-label="Reservar">
        <div className="bk-mobwrap__head">
          <p className="bk-mobwrap__title">Reservar</p>
          <button type="button" className="bk-mobwrap__close mn-focus" aria-label="Fechar" onClick={() => { setMob(false); setPanel(null); }}><CloseIcon /></button>
        </div>
        <div className="bk-mob-bar">
          <button type="button" data-bk-trigger className="mn-focus bk-msegbtn" aria-haspopup="listbox" aria-expanded={panel === "prop"} onClick={(e) => open("prop", e)}>
            <span className="bk-textcol"><span className="bk-label">Propriedade</span><span className="bk-value">{PROP_NAME[prop]}</span></span><ChevWhite />
          </button>
          <button type="button" data-bk-trigger className={"mn-focus bk-msegbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
            <span><CalIcon /><span className="bk-textcol"><span className="bk-label">Check-in</span><span className={"bk-value" + (bkIn ? "" : " is-dim")}>{inLabel}</span></span></span><ChevWhite />
          </button>
          <button type="button" data-bk-trigger className={"mn-focus bk-msegbtn" + bad(datesBad)} aria-haspopup="dialog" aria-expanded={panel === "dates"} onClick={(e) => open("dates", e)}>
            <span><CalIcon /><span className="bk-textcol"><span className="bk-label">Check-out</span><span className={"bk-value" + (bkOut ? "" : " is-dim")}>{outLabel}</span></span></span><ChevWhite />
          </button>
          <button type="button" data-bk-trigger className={"mn-focus bk-msegbtn" + bad(agesBad)} aria-haspopup="dialog" aria-expanded={panel === "guests"} onClick={(e) => open("guests", e)}>
            <span><PersonIcon /><span className="bk-textcol"><span className="bk-label">Hóspedes</span><span className="bk-value">{guestsLabel}</span></span></span><ChevWhite />
          </button>
          <div className="bk-msegcode">{isMobile && codeField}</div>
          {!!barErr && isMobile && <p className="bk-err bk-err--static" role="alert">{barErr}</p>}
          <button type="button" className="mn-focus bk-submit bk-go bk-go--mob" onClick={submit}>Ver disponibilidade</button>
        </div>
      </div>
      {isMobile && panel && (
        <div className="bk-sheet" data-bk-panel role="dialog" aria-modal="true" aria-label={sheetTitle}>
          <div className="bk-sheet__head">
            <p className="bk-sheet__title">{sheetTitle}</p>
            <button type="button" className="bk-sheet__close" onClick={() => close(true)}>Fechar</button>
          </div>
          <div className="bk-sheet__body">
            {panel === "prop" && propList}
            {panel === "dates" && calendar}
            {panel === "guests" && guests}
          </div>
        </div>
      )}
    </div>
  );
}
