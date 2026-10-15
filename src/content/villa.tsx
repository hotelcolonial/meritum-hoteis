/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function VillaHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/villa-salao-noite.jpg", width: 2000, height: 1334 }} mobile={HERO_MOBILE.villaSalao} eager className="ph-hero__bg" alt="Salão do restaurante Villa Colonial à noite, com mesas postas" style={{ objectPosition: "50% 50%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Villa Colonial, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-villa.png" width={400} height={225} sizes="240px" className="ph-hero__logo" alt="Villa Colonial Gastronomia e Eventos" />
        {" "}
        <p className="ph-hero__tagline">
          Onde cada refeição
          <br />
          vira{" "}
          <em>
            celebração
          </em>
        </p>
      </div>
      {children}
    </section>
  );
}

export default function VillaContent() {
  return (
    <>
      <nav className="ph-subnav" aria-label="Seções da página">
        <a href="#visao-geral" className="is-active">
          Visão geral
        </a>
        {" "}
        <a href="#experiencias">
          Experiências
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
        <a href="#eventos">
          Eventos
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
              Gastronomia e
              <br />
              <em>
                eventos
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Dentro do Hotel Colonial Iguaçu, na Rodovia das Cataratas, o Villa Colonial reúne boa mesa e celebrações em um ambiente acolhedor, cercado de natureza. Um lugar para uma refeição tranquila ou para os momentos que merecem ser lembrados.
            </p>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/villa-buffet-familia.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Mãe e filho se servindo no buffet do Villa Colonial" style={{ objectPosition: "62% 40%" }} />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--three ph-stats--vc">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              café da manhã
            </p>
            <p className="ph-stat__value">
              06h30 às 10h
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              almoço
            </p>
            <p className="ph-stat__value">
              11h30 às 16h
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              jantar
            </p>
            <p className="ph-stat__value">
              19h às 22h30
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de saladas do Villa Colonial" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Uma cozinha que valoriza os sabores da região, servida com cuidado em um salão amplo e iluminado. Do café da manhã ao jantar, cada detalhe é pensado para que a experiência vá além do prato.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="experiencias">
        <h2 className="ph-pillars__title ph-in">
          Nossas{" "}
          <em>
            experiências
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Sabores da região
            </h3>
            <p className="ix-row__text">
              Buffet de culinária regional e internacional, com receitas que contam a história de Foz do Iguaçu.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Um salão acolhedor
            </h3>
            <p className="ix-row__text">
              Ambiente amplo e tranquilo, ideal para refeições em família, com amigos ou a trabalho.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Celebrações sob medida
            </h3>
            <p className="ix-row__text">
              Gastronomia para eventos, do coffee break ao jantar de celebração, organizada do começo ao fim.
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
              O Villa Colonial fica dentro do Hotel Colonial Iguaçu, na Rodovia das Cataratas, km 20, 11237, Parque Nacional do Iguaçu, Foz do Iguaçu, PR. Uma parada perfeita no caminho para as principais atrações da cidade.
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
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa do Villa Colonial" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galeria de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 5">
            <Image src="/assets/villa-salao-noite.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salão do Villa Colonial à noite" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 5">
            <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de saladas do Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 5">
            <Image src="/assets/villa-buffet-familia.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Mãe e filho no buffet do Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 5">
            <Image src="/assets/villa-buffet-quente.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de pratos quentes do Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 5 de 5">
            <Image src="/assets/villa-vinhos.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Vinhos no salão do Villa Colonial" draggable="false" />
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
      <section className="ph-film" aria-label="Buffet do Villa Colonial">
        <Image src="/assets/villa-buffet-quente.jpg" width={2000} height={1334} sizes="100vw" className="ph-film__poster" alt="Hóspedes se servindo no buffet de pratos quentes do Villa Colonial" style={{ objectPosition: "50% 35%" }} />
        {" "}
        <div className="ph-film__overlay"></div>
      </section>
      <section className="ph-dining ph-sec" id="eventos">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/villa-vinhos.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Vinhos e louças preparados no salão do Villa Colonial" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Seu evento
              <br />
              no{" "}
              <em>
                Villa
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Do planejamento ao último convidado, cuidamos de cada detalhe para que o seu evento aconteça do jeito que você imaginou. Casamentos, aniversários, formaturas e eventos corporativos com a estrutura do Hotel Colonial.
            </p>
            {" "}
            <a className="ph-dining__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
              Solicitar orçamento
            </a>
          </div>
        </div>
      </section>
      <section className="ph-book ph-book--vc ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserve sua{" "}
            <em>
              mesa
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Garanta o seu lugar para o almoço ou o jantar e fale diretamente com a nossa equipe.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Reservar mesa
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-villa">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-villa">
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
