/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Link from "@/components/LocaleLink";

export function NotFoundHero({ children }: { children: ReactNode }) {
  return (
    <section style={{ position: "relative", height: "auto", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      {children}
    </section>
  );
}

export default function NotFoundContent() {
  return (
    <>
      <section className="soon soon--center">
        <div className="soon__solo">
          <h1 className="soon__title">
            Página não{" "}
            <em>
              encontrada
            </em>
          </h1>
          {" "}
          <p className="soon__lead">
            O endereço que você procurou não existe ou mudou de lugar.
          </p>
          {" "}
          <div className="soon__links">
            <Link className="soon__link mn-focus" href="/">
              Voltar ao início{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
            {" "}
            <Link className="soon__link mn-focus" href="/#portfolio">
              Ver nossas propriedades{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
