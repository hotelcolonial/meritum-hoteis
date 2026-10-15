/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "next/link";

export function ColonialHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/web/join-hotel-colonial.jpg", width: 1024, height: 682 }} mobile={HERO_MOBILE.pergola} eager className="ph-hero__bg" alt="Jardim e piscina do Hotel Colonial Iguaçu cercados de vegetação" />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Hotel Colonial Iguaçu, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-colonial.png" width={200} height={158} sizes="240px" className="ph-hero__logo" alt="Hotel Colonial Iguaçu" />
        {" "}
        <p className="ph-hero__tagline">
          Natureza,{" "}
          <em>
            história
          </em>
          <br />
          e conforto
        </p>
      </div>
      {children}
    </section>
  );
}

export default function ColonialContent() {
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
        <a href="#gastronomia">
          Gastronomia
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
              Tradição e
              <br />
              <em>
                natureza
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Na Rodovia das Cataratas, km 20, a 1,2 km da entrada do Parque Nacional do Iguaçu, o Hotel Colonial Iguaçu une o conforto de um hotel completo à tranquilidade de uma grande área verde. Um lugar para descansar, explorar Foz do Iguaçu e voltar sempre.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://hotelcolonialfoz.com.br" target="_blank" rel="noopener">
              Visitar site do hotel
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media">
            <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Recepção e lobby do Hotel Colonial Iguaçu" />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--long">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              Recebendo hóspedes desde
            </p>
            <p className="ph-stat__value">
              1970
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              da entrada do Parque Nacional do Iguaçu
            </p>
            <p className="ph-stat__value">
              1,2 km
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              pessoas na maior sala de eventos
            </p>
            <p className="ph-stat__value">
              180
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              check-in e check-out
            </p>
            <p className="ph-stat__value">
              14h e 12h
            </p>
          </div>
        </div>
      </section>
      <section className="ph-managed ph-sec">
        <p className="ph-managed__text ph-in">
          Gerido pela{" "}
          <em>
            Méritum Hotéis
          </em>
          {" "}sob o modelo de arrendamento, com gestão operacional, comercial e de hospitalidade.
        </p>
        {" "}
        <Link className="ph-managed__link ph-in mn-focus" href="/gestao#modelos">
          Conheça a gestão Méritum{" "}
          <span aria-hidden="true">
            →
          </span>
        </Link>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/hotel-colonial-iguacu.png" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardins e piscina do Hotel Colonial Iguaçu" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Cercado por uma grande área verde, o Hotel Colonial foi pensado para quem quer desacelerar sem abrir mão de estar perto de tudo. Aqui o dia pode começar com a natureza e terminar com um bom descanso, depois de conhecer o melhor de Foz do Iguaçu.
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
              Uma grande área verde
            </h3>
            <p className="ix-row__text">
              Jardins e natureza por todos os lados, para respirar fundo e descansar de verdade.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Piscinas para relaxar
            </h3>
            <p className="ix-row__text">
              Espaços de lazer ao ar livre para aproveitar o calor de Foz em família ou a dois.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Café e gastronomia
            </h3>
            <p className="ix-row__text">
              Sabores da região servidos com cuidado, do café da manhã ao fim do dia.
            </p>
          </div>
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
              O hotel fica na Rodovia das Cataratas, km 20, 11237, Parque Nacional do Iguaçu, Foz do Iguaçu, PR, o caminho que leva às principais atrações da cidade.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              Telefone e WhatsApp 0800 819 1993
              <br />
              reservas@hotelcolonialfoz.com.br
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa do Hotel Colonial Iguaçu" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galeria de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 4">
            <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardim e área da piscina do Hotel Colonial Iguaçu" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 4">
            <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Recepção e lobby do hotel" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 4">
            <Image src="/assets/web/portfolio/foto-villa.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salão do restaurante Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 4">
            <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Área de estacionamento do Colonial Autopark" draggable="false" />
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
      <section className="ph-film" aria-label="Vídeo do hotel">
        <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="100vw" className="ph-film__poster" alt="Recepção do Hotel Colonial Iguaçu" />
        {" "}
        <div className="ph-film__overlay"></div>
      </section>
      <section className="ph-dining ph-sec" id="gastronomia">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/web/portfolio/foto-villa.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salão do restaurante Villa Colonial com mesas postas" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Café e
              <br />
              <em>
                gastronomia
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              No Villa Colonial, a cozinha valoriza os sabores da região em um ambiente acolhedor. Do café da manhã ao jantar, cada refeição é parte da experiência de estar no Colonial.
            </p>
            {" "}
            <Link className="ph-dining__link" href="/villa-colonial">
              Conhecer o Villa Colonial
            </Link>
          </div>
        </div>
      </section>
      <section className="ph-book ph-sec" id="reservar">
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
              Reserve pelo site oficial do Hotel Colonial Iguaçu e fale diretamente com a nossa equipe, do primeiro contato ao check-out.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://hotelcolonialfoz.com.br" target="_blank" rel="noopener">
                Ver disponibilidade
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-colonial">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-colonial">
            Outras propriedades Méritum
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/pousada-cataratas">
              <span className="mn-pf__media">
                <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina da Pousada Cataratas vista de cima, com guarda-sóis verdes" loading="lazy" style={{ objectPosition: "50% 70%" }} />
              </span>
              {" "}
              <span className="mn-pf__name">
                Pousada Cataratas
              </span>
              {" "}
              <span className="mn-pf__stats">
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    27
                  </span>
                  <span className="mn-pf__desc">
                    apartamentos
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    100 m
                  </span>
                  <span className="mn-pf__desc">
                    da Avenida das Cataratas
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                No coração de Foz do Iguaçu, na Rua Parigot de Souza, 180. Piscina, café da manhã incluso, estacionamento gratuito e recepção 24 horas.
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
