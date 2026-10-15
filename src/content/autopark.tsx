/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function AutoparkHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/autopark-vista-aerea.jpg", width: 2000, height: 1333 }} mobile={HERO_MOBILE.autoparkAraucaria} eager className="ph-hero__bg" alt="Vista do estacionamento do Colonial Autopark com a fonte e a mata ao fundo" style={{ objectPosition: "50% 55%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Colonial Autopark, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-autopark.png" width={245} height={206} sizes="240px" className="ph-hero__logo" alt="Colonial Autopark" />
        {" "}
        <p className="ph-hero__tagline">
          Estacione,{" "}
          <em>
            voe
          </em>
          <br />
          e volte tranquilo
        </p>
      </div>
      {children}
    </section>
  );
}

export default function AutoparkContent() {
  return (
    <>
      <nav className="ph-subnav" aria-label="Seções da página">
        <a href="#visao-geral" className="is-active">
          Visão geral
        </a>
        {" "}
        <a href="#como-funciona">
          Como funciona
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
        <a href="#com-hotel">
          Com hotel
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
              Estacione e
              <br />
              <em>
                voe
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Pertinho do Aeroporto Internacional de Foz do Iguaçu, o Colonial Autopark cuida do seu carro enquanto você viaja. Você estaciona, nós levamos você até o aeroporto e buscamos na volta, no horário do seu voo.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://colonialautopark.com.br" target="_blank" rel="noopener">
              Visitar site do Autopark
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrada do Hotel Colonial Iguaçu com o estacionamento do Autopark" />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--three">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              aberto 7 dias por semana
            </p>
            <p className="ph-stat__value">
              24 h
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              traslado de ida e volta ao aeroporto IGU
            </p>
            <p className="ph-stat__value">
              Grátis
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              vaga segura
            </p>
            <p className="ph-stat__value">
              Monitorada
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/autopark-estacionamento.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Carros estacionados no Colonial Autopark sob as árvores" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Estacionamento seguro dentro da estrutura do Hotel Colonial Iguaçu, com equipe no local e atendimento 24 horas. Uma preocupação a menos para quem sai de viagem.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="como-funciona">
        <h2 className="ph-pillars__title ph-in">
          Como{" "}
          <em>
            funciona
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Você chega e estaciona
            </h3>
            <p className="ix-row__text">
              Deixe o carro no Autopark com tranquilidade, em um espaço seguro e monitorado.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Levamos você ao aeroporto
            </h3>
            <p className="ix-row__text">
              O transfer está incluso e acompanha o horário do seu voo.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Na volta, buscamos você
            </h3>
            <p className="ix-row__text">
              Ao desembarcar, é só avisar. O transfer leva você de volta até o seu carro.
            </p>
          </div>
        </div>
        {" "}
        <div className="ph-duo ph-duo--one">
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fonte e araucária na entrada do Colonial Autopark" loading="lazy" />
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
              O Autopark fica na Rodovia das Cataratas, km 20, 11237, dentro do Hotel Colonial Iguaçu, pertinho do Aeroporto Internacional de Foz do Iguaçu.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              WhatsApp 0800 819 1993
              <br />
              Central de reservas (45) 3529 7711
              <br />
              Atendimento administrativo de segunda a sexta, das 9h às 19h
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa do Colonial Autopark" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galeria de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 4">
            <Image src="/assets/autopark-vista-aerea.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Vista do estacionamento do Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 4">
            <Image src="/assets/autopark-estacionamento.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Carros estacionados no Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 4">
            <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fonte e araucária na entrada do Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 4">
            <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrada do Hotel Colonial Iguaçu" draggable="false" />
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
      <section className="ph-dining ph-sec" id="com-hotel">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardim e área da piscina do Hotel Colonial Iguaçu" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Estacione, hospede-se
              <br />
              e{" "}
              <em>
                voe
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Vai viajar cedo ou chega tarde? Combine o estacionamento com uma diária no Hotel Colonial Iguaçu, com café da manhã, e siga para o aeroporto descansado.
            </p>
            {" "}
            <Link className="ph-dining__link" href="/hotel-colonial-iguacu">
              Conhecer o Hotel Colonial
            </Link>
          </div>
        </div>
      </section>
      <section className="ph-book ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserve sua{" "}
            <em>
              vaga
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Garanta sua vaga antes de viajar e fale diretamente com a nossa equipe. Aberto 24 horas, 7 dias por semana, com WhatsApp 0800 819 1993.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://colonialautopark.com.br" target="_blank" rel="noopener">
                Reservar vaga
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-autopark">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-autopark">
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
          </div>
        </div>
      </section>
    </>
  );
}
