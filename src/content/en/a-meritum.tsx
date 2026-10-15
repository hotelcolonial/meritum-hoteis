/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/a-meritum.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";

export function AMeritumHero({ children }: { children: ReactNode }) {
  return (
    <section className="mn-hh mn-hh--sub" style={{ position: "relative", height: "64svh", minHeight: "520px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/web/join-hotel-colonial.jpg", width: 1024, height: 682 }} mobile={HERO_MOBILE.pousadaPiscina} eager className="mn-hh__img" alt="Garden and pool area at Hotel Colonial Iguaçu" mobileAlt="Aerial view of the Pousada Cataratas pool" />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        <span className="mq-mobile">Pousada Cataratas, Foz do Iguaçu</span>
        <span className="mq-desktop">Hotel Colonial Iguaçu, Foz do Iguaçu</span>
      </p>
      <div className="gs-hero__content">
        <h1 className="gs-hero__title">
          Our merit is
          <br />
          <em>
            your result.
          </em>
        </h1>
        {" "}
        <p className="gs-hero__lead">
          Méritum Hotéis is a hotel management company based in Foz do Iguaçu. We take over the management of independent hotels and develop each one individually, respecting its identity.
        </p>
      </div>
      {children}
    </section>
  );
}

export default function AMeritumContent() {
  return (
    <>
      <section className="am-story" id="historia">
        <div className="am-story__text">
          <h2 className="am-story__title am-in">
            Our story
          </h2>
          {" "}
          <p className="am-story__subtitle am-in">
            Hotel management is not standardization
          </p>
          {" "}
          <p className="am-story__body am-in">
            Méritum Hotéis was founded in 2025, in Foz do Iguaçu, bringing together hands-on hotel experience and strategic vision. We are not consultants who deliver reports: we are operators who take over management, organize processes and answer for the operation.
          </p>
          {" "}
          <p className="am-story__body am-in">
            The first step was Hotel Colonial Iguaçu, on Rodovia das Cataratas, where Méritum took over management while preserving the hotel’s name, history and identity. That is where our method is put into practice every day.
          </p>
          {" "}
          <p className="am-story__body am-in">
            From there, the portfolio grew to include Pousada Cataratas, the Villa Colonial restaurant and Colonial Autopark. In each one, Méritum works behind the scenes: the storefront belongs to the business, the efficiency is ours.
          </p>
          {" "}
          <p className="am-story__body am-in">
            For us, owner and guest go hand in hand. A well-run operation adds value to the investor’s asset and delivers a better stay to the guest.
          </p>
          {" "}
          <h3 className="am-story__label am-in">
            Our portfolio
          </h3>
          {" "}
          <p className="am-story__body am-in">
            Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial and Colonial Autopark.
          </p>
          {" "}
          <h3 className="am-story__label am-story__label--next am-in">
            Where we are
          </h3>
          {" "}
          <p className="am-story__body am-in">
            Rodovia BR-469, 11237, Cataratas, Foz do Iguaçu, PR. On the triple border between Brazil, Argentina and Paraguay, just a few minutes from Iguaçu Falls.
          </p>
        </div>
        {" "}
        <figure className="am-story__media am-in-media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Garden and pool area at Hotel Colonial Iguaçu" />
        </figure>
      </section>
      <section className="am-purpose">
        <p className="am-purpose__eyebrow ph-in">
          Our vision
        </p>
        {" "}
        <p className="am-purpose__text ph-in">
          Managing a hotel means balancing{" "}
          <em>
            operational rigor
          </em>
          {" "}with respect for the identity of the business.
        </p>
      </section>
      <section className="am-values">
        <div className="am-values__inner">
          <h2 className="am-values__title ph-in">
            What{" "}
            <em>
              guides us
            </em>
          </h2>
          {" "}
          <div className="ix-list">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Brand independence
              </h3>
              <p className="ix-row__text">
                We preserve the name, history and identity of each hotel. Méritum’s management happens behind the scenes, without changing the character of the property.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Decisions grounded in reality
              </h3>
              <p className="ix-row__text">
                Our management starts from an understanding of the real operation, without unrealistic promises or expectations the structure cannot support.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Operational transparency
              </h3>
              <p className="ix-row__text">
                Management is not a black box. The owner follows the business indicators and takes part in strategic decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
