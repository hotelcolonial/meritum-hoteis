"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SiteHeader from "./SiteHeader";
import BookingWidget from "./BookingWidget";
import HeroImage, { HERO_MOBILE } from "./HeroImage";
import Link from "./LocaleLink";
import { ROUTES } from "@/lib/site";
import { useDict } from "@/i18n/LocaleProvider";

const SLIDES = [
  { src: "/assets/colonial-pergola-piscina.jpg", w: 2576, h: 1840, pos: "50% 62%", mobile: HERO_MOBILE.pergola, name: "Hotel Colonial Iguaçu", cap: "Hotel Colonial Iguaçu, Foz do Iguaçu", href: ROUTES.colonial },
  { src: "/assets/pousada-piscina-pergolado.jpg", w: 2000, h: 1333, pos: "50% 60%", mobile: HERO_MOBILE.pousadaPergolado, name: "Pousada Cataratas", cap: "Pousada Cataratas, Foz do Iguaçu", href: ROUTES.pousada },
  { src: "/assets/villa-salao-noite.jpg", w: 2000, h: 1334, pos: "50% 50%", mobile: HERO_MOBILE.villaSalao, name: "Villa Colonial", cap: "Villa Colonial, Foz do Iguaçu", href: ROUTES.villa },
  { src: "/assets/autopark-vista-aerea.jpg", w: 2000, h: 1333, pos: "50% 55%", mobile: HERO_MOBILE.autoparkAraucaria, name: "Colonial Autopark", cap: "Colonial Autopark, Foz do Iguaçu", href: ROUTES.autopark },
];
const INTERVAL = 6000;

export default function HomeHero() {
  const [i, setI] = useState(0);
  const [gen, setGen] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const reduce = useRef(false);
  const d = useDict().home;

  const start = useCallback(() => {
    clearInterval(timer.current);
    if (reduce.current) return;
    timer.current = setInterval(() => {
      setI((x) => (x + 1) % SLIDES.length);
      setGen((g) => g + 1);
    }, INTERVAL);
  }, []);

  const go = (n: number) => { setI(n); setGen((g) => g + 1); start(); };

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    start();
    const vis = () => {
      if (document.hidden) { clearInterval(timer.current); document.documentElement.classList.add("hh-paused"); }
      else { document.documentElement.classList.remove("hh-paused"); setGen((g) => g + 1); start(); }
    };
    document.addEventListener("visibilitychange", vis);
    return () => { clearInterval(timer.current); document.removeEventListener("visibilitychange", vis); };
  }, [start]);

  return (
    <section className="mn-hh" style={{ position: "relative", height: "85svh", background: "#052744", overflow: "hidden" }}>
      {SLIDES.map((s, k) => {
        const on = k === i;
        return (
          <HeroImage
            key={s.src}
            className={"mn-hh__img mn-hh__slide " + (on ? "is-active " : "") + "g" + (gen % 2)}
            desktop={{ src: s.src, width: s.w, height: s.h }}
            mobile={s.mobile}
            eager={k === 0}
            alt={d.slideAlts[k]}
            ariaHidden={!on}
            style={{ objectPosition: s.pos }}
          />
        );
      })}
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true" />
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true" />
      <div className="mn-hh__meta">
        <div className="mn-hh__dots" role="group" aria-label={d.photos}>
          {SLIDES.map((s, k) => (
            <button key={s.name} type="button" className={"mn-hh__dot " + (k === i ? "is-active " : "") + "g" + (gen % 2)} aria-label={s.name} aria-current={k === i} onClick={() => go(k)}>
              <span className="mn-hh__bar" />
            </button>
          ))}
        </div>
        <div className="mn-hh__caps" aria-live="polite">
          {SLIDES.map((s, k) => (
            <Link key={s.name} className={"mn-hh__caption mn-hh__cap mn-focus" + (k === i ? " is-active" : "")} href={s.href} tabIndex={k === i ? 0 : -1} aria-hidden={k !== i}>
              {s.cap}
            </Link>
          ))}
        </div>
      </div>
      <SiteHeader page="home">
        <BookingWidget />
        <div className="mn-hh__content hh-center">
          <h1 className="mn-hh__title hh-title">
            {d.title1}<br />
            <em>{d.title2}</em>
          </h1>
        </div>
      </SiteHeader>
    </section>
  );
}
