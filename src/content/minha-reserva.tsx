/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";

export function MinhaReservaHero({ children }: { children: ReactNode }) {
  return (
    <section style={{ position: "relative", height: "auto", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      {children}
    </section>
  );
}

export default function MinhaReservaContent() {
  return (
    <>
      <section className="pg">
        <div className="pg__inner">
          <header className="pg__head">
            <h1 className="pg__title">
              Minha reserva
            </h1>
            {" "}
            <p className="pg__lead">
              Para consultar, alterar ou cancelar a sua reserva, fale direto com a equipe da propriedade. O atendimento é feito por WhatsApp e e-mail.
            </p>
          </header>
          {" "}
          <div className="pg-props">
            <div className="pg-prop ph-in">
              <h2 className="pg-prop__name">
                Hotel Colonial Iguaçu
              </h2>
              {" "}
              <p className="pg-prop__label">
                WhatsApp e telefone
              </p>
              {" "}
              <a className="pg-prop__tel mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                0800 819 1993
              </a>
              {" "}
              <p className="pg-prop__label">
                E-mail
              </p>
              {" "}
              <a className="pg-prop__mail mn-focus" href="mailto:reservas@hotelcolonialfoz.com.br">
                reservas@hotelcolonialfoz.com.br
              </a>
              {" "}
              <a className="pg-prop__btn mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </div>
            {" "}
            <div className="pg-prop ph-in">
              <h2 className="pg-prop__name">
                Pousada Cataratas
              </h2>
              {" "}
              <p className="pg-prop__label">
                WhatsApp e telefone
              </p>
              {" "}
              <a className="pg-prop__tel mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                0800 002 9215
              </a>
              {" "}
              <p className="pg-prop__label">
                E-mail
              </p>
              {" "}
              <a className="pg-prop__mail mn-focus" href="mailto:reservas@pousadacataratas.com.br">
                reservas@pousadacataratas.com.br
              </a>
              {" "}
              <a className="pg-prop__btn mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                Falar no WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <p className="pg__note">
            Tenha em mãos o nome do titular e o período da reserva.
          </p>
        </div>
      </section>
    </>
  );
}
