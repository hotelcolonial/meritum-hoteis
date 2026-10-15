/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";

export function AMeritumHero({ children }: { children: ReactNode }) {
  return (
    <section className="mn-hh mn-hh--sub" style={{ position: "relative", height: "64svh", minHeight: "520px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/web/join-hotel-colonial.jpg", width: 1024, height: 682 }} mobile={HERO_MOBILE.pousadaPiscina} eager className="mn-hh__img" alt="Jardim e área da piscina do Hotel Colonial Iguaçu" mobileAlt="Piscina da Pousada Cataratas vista de cima" />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        <span className="mq-mobile">Pousada Cataratas, Foz do Iguaçu</span>
        <span className="mq-desktop">Hotel Colonial Iguaçu, Foz do Iguaçu</span>
      </p>
      <div className="gs-hero__content">
        <h1 className="gs-hero__title">
          Nosso mérito é
          <br />
          <em>
            o seu resultado.
          </em>
        </h1>
        {" "}
        <p className="gs-hero__lead">
          A Méritum Hotéis é uma gestora hoteleira de Foz do Iguaçu. Assumimos a gestão de hotéis independentes e desenvolvemos cada um de forma individual, respeitando sua identidade.
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
            Nossa história
          </h2>
          {" "}
          <p className="am-story__subtitle am-in">
            Gestão hoteleira não é padronização
          </p>
          {" "}
          <p className="am-story__body am-in">
            A Méritum Hotéis foi fundada em 2025, em Foz do Iguaçu, da união entre experiência hoteleira de campo e visão estratégica. Não somos consultores que entregam relatórios: somos operadores que assumem a gestão, organizam processos e respondem pela operação.
          </p>
          {" "}
          <p className="am-story__body am-in">
            O primeiro passo foi o Hotel Colonial Iguaçu, na Rodovia das Cataratas, onde a Méritum assumiu a gestão preservando o nome, a história e a identidade do hotel. É lá que o nosso método é colocado em prática todos os dias.
          </p>
          {" "}
          <p className="am-story__body am-in">
            A partir dele, o portfólio cresceu para a Pousada Cataratas, o restaurante Villa Colonial e o Colonial Autopark. Em cada um, a Méritum trabalha nos bastidores: a fachada é do negócio, a eficiência é nossa.
          </p>
          {" "}
          <p className="am-story__body am-in">
            Para nós, proprietário e hóspede caminham juntos. Uma operação bem cuidada valoriza o ativo de quem investe e entrega uma estadia melhor a quem se hospeda.
          </p>
          {" "}
          <h3 className="am-story__label am-in">
            Nosso portfólio
          </h3>
          {" "}
          <p className="am-story__body am-in">
            Hotel Colonial Iguaçu, Pousada Cataratas, Villa Colonial e Colonial Autopark.
          </p>
          {" "}
          <h3 className="am-story__label am-story__label--next am-in">
            Onde estamos
          </h3>
          {" "}
          <p className="am-story__body am-in">
            Rodovia BR-469, 11237, Cataratas, Foz do Iguaçu, PR. Na tríplice fronteira entre Brasil, Argentina e Paraguai, a poucos minutos das Cataratas do Iguaçu.
          </p>
        </div>
        {" "}
        <figure className="am-story__media am-in-media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardim e área da piscina do Hotel Colonial Iguaçu" />
        </figure>
      </section>
      <section className="am-purpose">
        <p className="am-purpose__eyebrow ph-in">
          Nossa visão
        </p>
        {" "}
        <p className="am-purpose__text ph-in">
          Gerir um hotel é equilibrar o{" "}
          <em>
            rigor operacional
          </em>
          {" "}com o respeito à identidade do negócio.
        </p>
      </section>
      <section className="am-values">
        <div className="am-values__inner">
          <h2 className="am-values__title ph-in">
            O que nos{" "}
            <em>
              guia
            </em>
          </h2>
          {" "}
          <div className="ix-list">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Independência de marca
              </h3>
              <p className="ix-row__text">
                Preservamos o nome, a história e a identidade de cada hotel. A gestão Méritum acontece nos bastidores, sem descaracterizar o empreendimento.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Decisões baseadas na realidade
              </h3>
              <p className="ix-row__text">
                Nossa gestão parte do entendimento da operação real, sem promessas irreais ou expectativas que a estrutura não possa suportar.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Transparência operacional
              </h3>
              <p className="ix-row__text">
                Gestão não é caixa preta. O proprietário acompanha os indicadores do negócio e participa das decisões estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
