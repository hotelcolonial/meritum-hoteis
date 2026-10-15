/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function PousadaHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/pousada-piscina-pergolado.jpg", width: 2000, height: 1333 }} mobile={HERO_MOBILE.pousadaPergolado} eager className="ph-hero__bg" alt="Piscina da Pousada Cataratas sob o pergolado com espreguiçadeiras" style={{ objectPosition: "50% 60%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Pousada Cataratas, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-pousada.png" width={259} height={114} sizes="240px" className="ph-hero__logo" alt="Pousada Cataratas" />
        {" "}
        <p className="ph-hero__tagline">
          O descanso perto
          <br />
          de{" "}
          <em>
            tudo
          </em>
        </p>
      </div>
      {children}
    </section>
  );
}

export default function PousadaContent() {
  return (
    <>
      <nav className="ph-subnav" aria-label="Seções da página">
        <a href="#visao-geral" className="is-active">
          Visão geral
        </a>
        {" "}
        <a href="#diferenciais">
          Diferenciais
        </a>
        {" "}
        <a href="#localizacao">
          Localização
        </a>
        {" "}
        <a href="#galeria">
          Galeria
        </a>
        {" "}
        <a href="#cafe-da-manha">
          Café da manhã
        </a>
        {" "}
        <a href="#reservar">
          Reservar
        </a>
      </nav>
      <section className="ph-intro ph-sec" id="visao-geral">
        <div className="ph-intro__inner">
          <div className="ph-intro__text">
            <h1 className="ph-intro__title">
              Aconchego e
              <br />
              <em>
                localização
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              No coração de Foz do Iguaçu, a 100 metros da Avenida das Cataratas, a Pousada Cataratas é o ponto de partida ideal para conhecer a cidade. Um lugar acolhedor, com café da manhã incluso e estacionamento gratuito, para descansar depois de cada passeio.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://pousadacataratas.com.br" target="_blank" rel="noopener">
              Visitar site da pousada
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/pousada-fachada.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fachada da Pousada Cataratas com árvores na calçada" />
          </figure>
        </div>
      </section>
      <section className="ph-stats">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              apartamentos
            </p>
            <p className="ph-stat__value">
              27
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              da Avenida das Cataratas
            </p>
            <p className="ph-stat__value">
              100 m
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              hóspedes por quarto
            </p>
            <p className="ph-stat__value">
              2 a 5
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              recepção
            </p>
            <p className="ph-stat__value">
              24 h
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina da Pousada Cataratas vista de cima, com guarda-sóis verdes" style={{ objectPosition: "50% 70%" }} />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Depois de um dia de passeios, a piscina e as áreas de lazer da pousada são um convite para desacelerar. Tudo pensado para que a estadia seja simples, tranquila e perto de tudo.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="diferenciais">
        <h2 className="ph-pillars__title ph-in">
          Nossos{" "}
          <em>
            diferenciais
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Café da manhã incluso
            </h3>
            <p className="ix-row__text">
              Todas as diárias incluem café da manhã com pães caseiros e frutas, para começar o dia sem pressa antes de sair para explorar.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Piscina e lazer
            </h3>
            <p className="ix-row__text">
              Áreas de lazer ao ar livre para aproveitar o calor de Foz entre um passeio e outro.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Quartos para toda a família
            </h3>
            <p className="ix-row__text">
              Quartos Duplo de 13 m², Triplo de 18 m², Quádruplo de 22 m² e Quíntuplo de 26 m², para casais, famílias e grupos de até cinco pessoas.
            </p>
          </div>
        </div>
        {" "}
        <div className="ph-duo">
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/pousada-quarto-quintuplo.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Quarto Quíntuplo da Pousada Cataratas" loading="lazy" />
          </figure>
          {" "}
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/pousada-espaco-kids.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Espaço kids da Pousada Cataratas" loading="lazy" />
          </figure>
        </div>
      </section>
      <section className="ph-location ph-sec" id="localizacao">
        <div className="ph-location__inner">
          <div className="ph-location__text ph-in">
            <h2 className="ph-location__title">
              <em>
                Localização
              </em>
            </h2>
            {" "}
            <p className="ph-location__body">
              A pousada fica na Rua Parigot de Souza, 180, Foz do Iguaçu, PR, a 100 metros da Avenida das Cataratas, com estacionamento privativo gratuito.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              Telefone e WhatsApp 0800 002 9215
              <br />
              reservas@pousadacataratas.com.br
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Pousada%20Cataratas%2C%20Rua%20Parigot%20de%20Souza%20180%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa da Pousada Cataratas" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galeria de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 8">
            <Image src="/assets/pousada-jardim-piscina.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardim com palmeiras ao lado da piscina da Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 8">
            <Image src="/assets/pousada-quarto-quadruplo.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Quarto Quádruplo da Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 8">
            <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina da Pousada Cataratas vista de cima" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 8">
            <Image src="/assets/pousada-fachada.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fachada da Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 5 de 8">
            <Image src="/assets/pousada-quarto-quintuplo.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Quarto Quíntuplo da Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 6 de 8">
            <Image src="/assets/pousada-espaco-kids.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Espaço kids da Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 7 de 8">
            <Image src="/assets/pousada-cafe-da-manha.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Café da manhã da Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 8 de 8">
            <Image src="/assets/pousada-piscina-pergolado.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina sob o pergolado da Pousada Cataratas" draggable="false" />
          </button>
        </div>
        {" "}
        <button className="ph-gallery__arrow ph-gallery__arrow--prev is-disabled" type="button" aria-label="Foto anterior">
          ‹
        </button>
        {" "}
        <button className="ph-gallery__arrow ph-gallery__arrow--next" type="button" aria-label="Próxima foto">
          ›
        </button>
      </section>
      <section className="ph-dining ph-sec" id="cafe-da-manha">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/pousada-cafe-da-manha.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Café da manhã servido na Pousada Cataratas" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Café da
              <br />
              <em>
                manhã
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Todas as diárias da Pousada Cataratas incluem café da manhã. Um começo de dia tranquilo, com energia para aproveitar tudo o que Foz do Iguaçu tem a oferecer.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-book ph-book--pc ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserve{" "}
            <em>
              direto
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Reserve pelo site oficial da Pousada Cataratas e fale diretamente com a nossa equipe, do primeiro contato ao check-out.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://pousadacataratas.com.br" target="_blank" rel="noopener">
                Ver disponibilidade
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <p className="ph-book__owner ph-in">
            É proprietário de um hotel?{" "}
            <Link href="/gestao">
              Conheça a gestão Méritum
            </Link>
          </p>
        </div>
      </section>
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-pousada">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-pousada">
            Outras propriedades Méritum
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/hotel-colonial-iguacu">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Lobby do Hotel Colonial Iguaçu" loading="lazy" />
              </span>
              {" "}
              <span className="mn-pf__name">
                Hotel Colonial Iguaçu
              </span>
              {" "}
              <span className="mn-pf__stats">
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    1970
                  </span>
                  <span className="mn-pf__desc">
                    Recebendo hóspedes desde
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    1,2 km
                  </span>
                  <span className="mn-pf__desc">
                    da entrada do Parque Nacional do Iguaçu
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Na Rodovia das Cataratas, km 20, em meio à Mata Atlântica preservada. Piscina aquecida e piscina externa, trilha ecológica, salas de eventos para até 180 pessoas e traslado gratuito ao aeroporto nas reservas diretas.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-focus ph-in" href="/villa-colonial">
              <span className="mn-pf__media">
                <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de saladas do restaurante Villa Colonial" loading="lazy" />
              </span>
              {" "}
              <span className="mn-pf__name">
                Villa Colonial
              </span>
              {" "}
              <span className="mn-pf__stats">
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    3
                  </span>
                  <span className="mn-pf__desc">
                    refeições por dia, todos os dias
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    180
                  </span>
                  <span className="mn-pf__desc">
                    pessoas em eventos no hotel
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                O restaurante do Hotel Colonial Iguaçu, com buffet de culinária regional e internacional, jantares temáticos e cardápios sob medida para eventos.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-focus ph-in" href="/colonial-autopark">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Estacionamento Colonial Autopark" loading="lazy" />
              </span>
              {" "}
              <span className="mn-pf__name">
                Colonial Autopark
              </span>
              {" "}
              <span className="mn-pf__stats">
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    24 h
                  </span>
                  <span className="mn-pf__desc">
                    aberto todos os dias
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    Grátis
                  </span>
                  <span className="mn-pf__desc">
                    traslado de ida e volta ao aeroporto IGU
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Estacionamento dentro do Hotel Colonial Iguaçu, na Rodovia das Cataratas, pertinho do Aeroporto Internacional de Foz do Iguaçu, com vaga monitorada.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
