/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/area-do-hospede.tsx. Só os textos mudam. */
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
              Área del huésped
            </h1>
            {" "}
            <p className="pg__lead">
              Todo lo que necesitas para tu estadía en las propiedades Méritum, en un solo lugar.
            </p>
          </header>
          {" "}
          <div className="pg-rows">
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                Mi reserva
              </h2>
              {" "}
              <p className="pg-row__text">
                Consulta, cambia o cancela hablando directamente con el equipo de la propiedad.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/minha-reserva">
                Ver contactos{" "}
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
                Si ya te hospedaste en una propiedad Méritum, tienes condiciones especiales para volver.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/bora-de-novo">
                Conocer el programa{" "}
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            {" "}
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                Nuestras propiedades
              </h2>
              {" "}
              <p className="pg-row__text">
                Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial y Colonial Autopark.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/#portfolio">
                Ver propiedades{" "}
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
