/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/area-do-hospede.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Link from "@/components/LocaleLink";

export function AreaDoHospedeHero({ children }: { children: ReactNode }) {
  return (
    <section style={{ position: "relative", height: "auto", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      {children}
    </section>
  );
}

export default function AreaDoHospedeContent() {
  return (
    <>
      <section className="pg">
        <div className="pg__inner">
          <header className="pg__head">
            <h1 className="pg__title">
              Guest area
            </h1>
            {" "}
            <p className="pg__lead">
              Everything you need for your stay at Méritum properties, all in one place.
            </p>
          </header>
          {" "}
          <div className="pg-rows">
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                My reservation
              </h2>
              {" "}
              <p className="pg-row__text">
                Look up, change or cancel it by contacting the property’s team directly.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/minha-reserva">
                See contacts{" "}
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            {" "}
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                Bora de Novo
              </h2>
              {" "}
              <p className="pg-row__text">
                If you have already stayed at a Méritum property, you have special conditions to come back.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/bora-de-novo">
                Discover the program{" "}
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            {" "}
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                Our properties
              </h2>
              {" "}
              <p className="pg-row__text">
                Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial and Colonial Autopark.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/#portfolio">
                See properties{" "}
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
