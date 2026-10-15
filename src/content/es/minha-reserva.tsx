/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/minha-reserva.tsx. Só os textos mudam. */
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
              Mi reserva
            </h1>
            {" "}
            <p className="pg__lead">
              Para consultar, cambiar o cancelar tu reserva, habla directamente con el equipo de la propiedad. La atención se brinda por WhatsApp y correo electrónico.
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
                WhatsApp y teléfono
              </p>
              {" "}
              <a className="pg-prop__tel mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                0800 819 1993
              </a>
              {" "}
              <p className="pg-prop__label">
                Correo electrónico
              </p>
              {" "}
              <a className="pg-prop__mail mn-focus" href="mailto:reservas@hotelcolonialfoz.com.br">
                reservas@hotelcolonialfoz.com.br
              </a>
              {" "}
              <a className="pg-prop__btn mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Hablar por WhatsApp
              </a>
            </div>
            {" "}
            <div className="pg-prop ph-in">
              <h2 className="pg-prop__name">
                Pousada Cataratas
              </h2>
              {" "}
              <p className="pg-prop__label">
                WhatsApp y teléfono
              </p>
              {" "}
              <a className="pg-prop__tel mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                0800 002 9215
              </a>
              {" "}
              <p className="pg-prop__label">
                Correo electrónico
              </p>
              {" "}
              <a className="pg-prop__mail mn-focus" href="mailto:reservas@pousadacataratas.com.br">
                reservas@pousadacataratas.com.br
              </a>
              {" "}
              <a className="pg-prop__btn mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <p className="pg__note">
            Ten a mano el nombre del titular y el período de la reserva.
          </p>
        </div>
      </section>
    </>
  );
}
