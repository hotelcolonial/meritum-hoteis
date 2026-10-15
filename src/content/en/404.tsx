/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/404.tsx. Só os textos mudam. */
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
            Page not{" "}
            <em>
              found
            </em>
          </h1>
          {" "}
          <p className="soon__lead">
            The address you were looking for does not exist or has moved.
          </p>
          {" "}
          <div className="soon__links">
            <Link className="soon__link mn-focus" href="/">
              Back to home{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
            {" "}
            <Link className="soon__link mn-focus" href="/#portfolio">
              See our properties{" "}
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
