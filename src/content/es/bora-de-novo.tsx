/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/bora-de-novo.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";

export function BoraDeNovoHero({ children }: { children: ReactNode }) {
  return (
    <section style={{ position: "relative", height: "auto", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      {children}
    </section>
  );
}

export default function BoraDeNovoContent() {
  return (
    <>
      <section className="bn-hero">
        <figure className="bn-hero__media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" preload fetchPriority="high" alt="Piscina rodeada de jardines al atardecer" />
        </figure>
        {" "}
        <div className="bn-hero__text">
          <p className="bn-hero__kicker">
            Programa de fidelidad Méritum Hotéis
          </p>
          {" "}
          <h1 className="bn-hero__title">
            Bora de{" "}
            <em>
              novo?
            </em>
          </h1>
          {" "}
          <p className="bn-hero__lead">
            Si ya te hospedaste en una propiedad Méritum, tienes ventajas exclusivas para volver.
          </p>
        </div>
      </section>
      <section className="bn-perks">
        <div className="bn-perks__inner bn-how2">
          <h2 className="bn-how2__title ph-in">
            Cómo funciona
          </h2>
          {" "}
          <div className="bn-how2__body ph-in">
            <p className="bn-step">
              <span className="bn-step__n">
                1
              </span>
              Ya te hospedaste en una propiedad Méritum.
            </p>
            {" "}
            <p className="bn-step">
              <span className="bn-step__n">
                2
              </span>
              En tu próxima reserva, habla directamente con la propiedad por los canales oficiales y di que quieres usar el Bora de Novo.
            </p>
            {" "}
            <p className="bn-step">
              <span className="bn-step__n">
                3
              </span>
              El equipo confirma tu hospedaje anterior por CPF, correo electrónico, teléfono o nombre del titular y aplica las condiciones especiales.
            </p>
            {" "}
            <p className="bn-perks__note ph-in">
              El programa no es acumulable con paquetes, feriados, promociones de temporada u otras condiciones especiales.
            </p>
          </div>
        </div>
      </section>
      <section className="bn-how">
        <div className="bn-how__inner">
          <h2 className="bn-how__title ph-in">
            ¿Listo para{" "}
            <em>
              volver?
            </em>
          </h2>
          {" "}
          <div className="bn-how__side ph-in">
            <p className="bn-how__text">
              Comunícate por los canales oficiales de la propiedad donde te hospedaste, indica que quieres aprovechar el Bora de Novo y consulta las condiciones disponibles para tu próxima estadía.
            </p>
            {" "}
            <div className="bn-how__btns">
              <a className="bn-how__btn mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                WhatsApp Hotel Colonial
              </a>
              {" "}
              <a className="bn-how__btn mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                WhatsApp Pousada Cataratas
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bn-faq" id="duvidas">
        <div className="bn-faq__inner">
          <h2 className="bn-faq__title">
            Preguntas{" "}
            <em>
              frecuentes
            </em>
          </h2>
          {" "}
          <div className="bn-faq__list ph-in">
            <details className="bn-faq__item">
              <summary>
                ¿Quién puede participar en el Bora de Novo?
              </summary>
              <p>
                Huéspedes que ya se hospedaron anteriormente en una propiedad Méritum y desean regresar para una nueva estadía, aprovechando las condiciones especiales ofrecidas.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                ¿Cuáles son los beneficios para quien vuelve?
              </summary>
              <p>
                Cada propiedad define sus condiciones especiales para quien regresa. Consulta los beneficios disponibles en los canales oficiales de la propiedad donde te hospedaste.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                ¿Cómo se confirma que ya fui huésped?
              </summary>
              <p>
                La confirmación puede hacerse mediante datos como CPF, correo electrónico, teléfono, nombre del titular de la reserva o comprobante de un hospedaje anterior. El equipo de reservas hace la verificación antes de la confirmación final del beneficio.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                ¿Y si no encuentro el comprobante del hospedaje anterior?
              </summary>
              <p>
                No hay problema. El equipo puede intentar localizar tu reserva anterior mediante otros datos, como CPF, correo electrónico, teléfono o nombre completo del titular. Si no es posible confirmar el hospedaje anterior, es posible que el beneficio no se aplique.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                ¿Puedo usar el Bora de Novo en feriados o paquetes especiales?
              </summary>
              <p>
                No. El programa no es acumulable con paquetes, feriados, promociones de temporada u otras condiciones especiales. Está pensado para nuevas reservas en períodos elegibles, según la disponibilidad que informe el equipo de reservas.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                ¿Cómo reservo con esta condición?
              </summary>
              <p>
                Comunícate directamente con la propiedad por los canales oficiales, indica que quieres aprovechar el Bora de Novo y envía los datos necesarios para verificar el hospedaje anterior.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                ¿Necesito haber hecho la reserva anterior directamente con la propiedad?
              </summary>
              <p>
                No necesariamente. Si ya te hospedaste anteriormente, el equipo puede verificar el historial de la estadía mediante los datos que informes. El beneficio se otorga según la disponibilidad y la validación de la reserva anterior.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
