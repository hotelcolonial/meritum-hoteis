/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Link from "next/link";

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
              Área do hóspede
            </h1>
            {" "}
            <p className="pg__lead">
              Tudo o que você precisa para a sua estadia nas propriedades Méritum, em um só lugar.
            </p>
          </header>
          {" "}
          <div className="pg-rows">
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                Minha reserva
              </h2>
              {" "}
              <p className="pg-row__text">
                Consulte, altere ou cancele falando direto com a equipe da propriedade.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/minha-reserva">
                Ver contatos{" "}
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
                Quem já se hospedou em uma propriedade Méritum tem condições especiais para voltar.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/bora-de-novo">
                Conhecer o programa{" "}
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            {" "}
            <div className="pg-row ph-in">
              <h2 className="pg-row__title">
                Nossas propriedades
              </h2>
              {" "}
              <p className="pg-row__text">
                Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial e Colonial Autopark.
              </p>
              {" "}
              <Link className="pg-row__link mn-focus" href="/#portfolio">
                Ver propriedades{" "}
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
