/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/bora-de-novo.tsx. Só os textos mudam. */
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
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" preload fetchPriority="high" alt="Pool surrounded by gardens at sunset" />
        </figure>
        {" "}
        <div className="bn-hero__text">
          <p className="bn-hero__kicker">
            Méritum Hotéis loyalty program
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
            If you have already stayed at a Méritum property, you have exclusive benefits to come back.
          </p>
        </div>
      </section>
      <section className="bn-perks">
        <div className="bn-perks__inner bn-how2">
          <h2 className="bn-how2__title ph-in">
            How it works
          </h2>
          {" "}
          <div className="bn-how2__body ph-in">
            <p className="bn-step">
              <span className="bn-step__n">
                1
              </span>
              You have already stayed at a Méritum property.
            </p>
            {" "}
            <p className="bn-step">
              <span className="bn-step__n">
                2
              </span>
              For your next reservation, contact the property directly through its official channels and say you want to use Bora de Novo.
            </p>
            {" "}
            <p className="bn-step">
              <span className="bn-step__n">
                3
              </span>
              The team confirms your previous stay by CPF, email, phone or the name of the reservation holder and applies the special conditions.
            </p>
            {" "}
            <p className="bn-perks__note ph-in">
              The program cannot be combined with packages, holidays, seasonal promotions or other special conditions.
            </p>
          </div>
        </div>
      </section>
      <section className="bn-how">
        <div className="bn-how__inner">
          <h2 className="bn-how__title ph-in">
            Ready to{" "}
            <em>
              come back?
            </em>
          </h2>
          {" "}
          <div className="bn-how__side ph-in">
            <p className="bn-how__text">
              Contact the property where you stayed through its official channels, let them know you want to take advantage of Bora de Novo and check the conditions available for your next stay.
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
            Frequently asked{" "}
            <em>
              questions
            </em>
          </h2>
          {" "}
          <div className="bn-faq__list ph-in">
            <details className="bn-faq__item">
              <summary>
                Who can join Bora de Novo?
              </summary>
              <p>
                Guests who have previously stayed at a Méritum property and want to return for a new stay, taking advantage of the special conditions offered.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                What are the benefits for returning guests?
              </summary>
              <p>
                Each property sets its own special conditions for returning guests. Check the benefits available through the official channels of the property where you stayed.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                How is it confirmed that I have been a guest before?
              </summary>
              <p>
                Confirmation can be made using details such as your CPF, email, phone, the name of the reservation holder or proof of a previous stay. The reservations team checks this before the benefit is finally confirmed.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                What if I cannot find proof of my previous stay?
              </summary>
              <p>
                No problem. The team can try to locate your previous reservation using other details, such as your CPF, email, phone or the full name of the reservation holder. If the previous stay cannot be confirmed, the benefit may not be applied.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Can I use Bora de Novo on holidays or for special packages?
              </summary>
              <p>
                No. The program cannot be combined with packages, holidays, seasonal promotions or other special conditions. It is intended for new reservations in eligible periods, subject to the availability provided by the reservations team.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                How do I book with this condition?
              </summary>
              <p>
                Contact the property directly through its official channels, let them know you want to take advantage of Bora de Novo and send the details needed to verify your previous stay.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Do I need to have made my previous reservation directly with the property?
              </summary>
              <p>
                Not necessarily. If you have stayed with us before, the team can check your stay history using the details you provide. The benefit is granted subject to availability and validation of the previous reservation.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
