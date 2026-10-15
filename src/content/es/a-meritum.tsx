/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/a-meritum.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";

export function AMeritumHero({ children }: { children: ReactNode }) {
  return (
    <section className="mn-hh mn-hh--sub" style={{ position: "relative", height: "64svh", minHeight: "520px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/web/join-hotel-colonial.jpg", width: 1024, height: 682 }} mobile={HERO_MOBILE.pousadaPiscina} eager className="mn-hh__img" alt="Jardín y área de la piscina del Hotel Colonial Iguaçu" mobileAlt="Piscina de la Pousada Cataratas vista desde arriba" />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        <span className="mq-mobile">Pousada Cataratas, Foz do Iguaçu</span>
        <span className="mq-desktop">Hotel Colonial Iguaçu, Foz do Iguaçu</span>
      </p>
      <div className="gs-hero__content">
        <h1 className="gs-hero__title">
          Nuestro mérito es
          <br />
          <em>
            tu resultado.
          </em>
        </h1>
        {" "}
        <p className="gs-hero__lead">
          Méritum Hotéis es una administradora hotelera de Foz do Iguaçu. Asumimos la gestión de hoteles independientes y desarrollamos cada uno de forma individual, respetando su identidad.
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
            Nuestra historia
          </h2>
          {" "}
          <p className="am-story__subtitle am-in">
            La gestión hotelera no es estandarización
          </p>
          {" "}
          <p className="am-story__body am-in">
            Méritum Hotéis fue fundada en 2025, en Foz do Iguaçu, de la unión entre experiencia hotelera de campo y visión estratégica. No somos consultores que entregan informes: somos operadores que asumen la gestión, organizan procesos y responden por la operación.
          </p>
          {" "}
          <p className="am-story__body am-in">
            El primer paso fue el Hotel Colonial Iguaçu, en la Rodovia das Cataratas, donde Méritum asumió la gestión preservando el nombre, la historia y la identidad del hotel. Es allí donde nuestro método se pone en práctica todos los días.
          </p>
          {" "}
          <p className="am-story__body am-in">
            A partir de él, el portafolio creció con la Pousada Cataratas, el restaurante Villa Colonial y el Colonial Autopark. En cada uno, Méritum trabaja tras bastidores: la fachada es del negocio, la eficiencia es nuestra.
          </p>
          {" "}
          <p className="am-story__body am-in">
            Para nosotros, propietario y huésped caminan juntos. Una operación bien cuidada valoriza el activo de quien invierte y ofrece una mejor estadía a quien se hospeda.
          </p>
          {" "}
          <h3 className="am-story__label am-in">
            Nuestro portafolio
          </h3>
          {" "}
          <p className="am-story__body am-in">
            Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial y Colonial Autopark.
          </p>
          {" "}
          <h3 className="am-story__label am-story__label--next am-in">
            Dónde estamos
          </h3>
          {" "}
          <p className="am-story__body am-in">
            Rodovia BR-469, 11237, Cataratas, Foz do Iguaçu, PR. En la triple frontera entre Brasil, Argentina y Paraguay, a pocos minutos de las Cataratas del Iguazú.
          </p>
        </div>
        {" "}
        <figure className="am-story__media am-in-media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardín y área de la piscina del Hotel Colonial Iguaçu" />
        </figure>
      </section>
      <section className="am-purpose">
        <p className="am-purpose__eyebrow ph-in">
          Nuestra visión
        </p>
        {" "}
        <p className="am-purpose__text ph-in">
          Administrar un hotel es equilibrar el{" "}
          <em>
            rigor operativo
          </em>
          {" "}con el respeto a la identidad del negocio.
        </p>
      </section>
      <section className="am-values">
        <div className="am-values__inner">
          <h2 className="am-values__title ph-in">
            Lo que nos{" "}
            <em>
              guía
            </em>
          </h2>
          {" "}
          <div className="ix-list">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Independencia de marca
              </h3>
              <p className="ix-row__text">
                Preservamos el nombre, la historia y la identidad de cada hotel. La gestión de Méritum ocurre tras bastidores, sin desvirtuar el proyecto hotelero.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Decisiones basadas en la realidad
              </h3>
              <p className="ix-row__text">
                Nuestra gestión parte del entendimiento de la operación real, sin promesas irreales ni expectativas que la estructura no pueda sostener.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Transparencia operativa
              </h3>
              <p className="ix-row__text">
                La gestión no es una caja negra. El propietario sigue los indicadores del negocio y participa en las decisiones estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
