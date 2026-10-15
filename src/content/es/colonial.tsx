/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/colonial.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function ColonialHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/colonial-jardim-piscina.jpg", width: 2576, height: 1717 }} mobile={HERO_MOBILE.colonialJardim} eager className="ph-hero__bg" alt="Jardín y piscina del Hotel Colonial Iguaçu rodeados de vegetación" />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Hotel Colonial Iguaçu, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-colonial.png" width={200} height={158} sizes="240px" className="ph-hero__logo" alt="Hotel Colonial Iguaçu" />
        {" "}
        <p className="ph-hero__tagline">
          Naturaleza,{" "}
          <em>
            historia
          </em>
          <br />
          y confort
        </p>
      </div>
      {children}
    </section>
  );
}

export default function ColonialContent() {
  return (
    <>
      <nav className="ph-subnav" aria-label="Secciones de la página">
        <a href="#visao-geral" className="is-active">
          Vista general
        </a>
        {" "}
        <a href="#diferenciais">
          Diferenciales
        </a>
        {" "}
        <a href="#localizacao">
          Ubicación
        </a>
        {" "}
        <a href="#galeria">
          Galería
        </a>
        {" "}
        <a href="#gastronomia">
          Gastronomía
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
              Tradición y
              <br />
              <em>
                naturaleza
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              En la Rodovia das Cataratas, km 20, a 1,2 km de la entrada del Parque Nacional do Iguaçu, el Hotel Colonial Iguaçu une el confort de un hotel completo con la tranquilidad de una gran área verde. Un lugar para descansar, explorar Foz do Iguaçu y volver siempre.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://hotelcolonialfoz.com.br" target="_blank" rel="noopener">
              Visitar el sitio del hotel
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media">
            <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Recepción y lobby del Hotel Colonial Iguaçu" />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--long">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              Recibiendo huéspedes desde
            </p>
            <p className="ph-stat__value">
              1970
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              de la entrada del Parque Nacional do Iguaçu
            </p>
            <p className="ph-stat__value">
              1,2 km
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              personas en el salón de eventos más grande
            </p>
            <p className="ph-stat__value">
              180
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              check-in y check-out
            </p>
            <p className="ph-stat__value">
              14:00 y 12:00
            </p>
          </div>
        </div>
      </section>
      <section className="ph-managed ph-sec">
        <p className="ph-managed__text ph-in">
          Administrado por{" "}
          <em>
            Méritum Hotéis
          </em>
          {" "}bajo el modelo de arrendamiento, con gestión operativa, comercial y de hospitalidad.
        </p>
        {" "}
        <Link className="ph-managed__link ph-in mn-focus" href="/gestao#modelos">
          Conoce la gestión Méritum{" "}
          <span aria-hidden="true">
            →
          </span>
        </Link>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/hotel-colonial-iguacu.png" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardines y piscina del Hotel Colonial Iguaçu" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Rodeado de una gran área verde, el Hotel Colonial fue pensado para quienes quieren bajar el ritmo sin renunciar a estar cerca de todo. Aquí el día puede empezar con la naturaleza y terminar con un buen descanso, después de conocer lo mejor de Foz do Iguaçu.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="diferenciais">
        <h2 className="ph-pillars__title ph-in">
          Nuestros{" "}
          <em>
            diferenciales
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Una gran área verde
            </h3>
            <p className="ix-row__text">
              Jardines y naturaleza por todas partes, para respirar hondo y descansar de verdad.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Piscinas para relajarse
            </h3>
            <p className="ix-row__text">
              Espacios de recreación al aire libre para disfrutar del calor de Foz en familia o en pareja.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Café y gastronomía
            </h3>
            <p className="ix-row__text">
              Sabores de la región servidos con esmero, desde el desayuno hasta el final del día.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-location ph-sec" id="localizacao">
        <div className="ph-location__inner">
          <div className="ph-location__text ph-in">
            <h2 className="ph-location__title">
              <em>
                Ubicación
              </em>
            </h2>
            {" "}
            <p className="ph-location__body">
              El hotel está en la Rodovia das Cataratas, km 20, 11237, Parque Nacional do Iguaçu, Foz do Iguaçu, PR, el camino que lleva a las principales atracciones de la ciudad.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              Teléfono y WhatsApp 0800 819 1993
              <br />
              reservas@hotelcolonialfoz.com.br
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa del Hotel Colonial Iguaçu" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galería de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 4">
            <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardín y área de la piscina del Hotel Colonial Iguaçu" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 4">
            <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Recepción y lobby del hotel" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 4">
            <Image src="/assets/web/portfolio/foto-villa.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salón del restaurante Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 4">
            <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Área de estacionamiento del Colonial Autopark" draggable="false" />
          </button>
        </div>
        {" "}
        <button className="ph-gallery__arrow ph-gallery__arrow--prev is-disabled" type="button" aria-label="Foto anterior">
          ‹
        </button>
        {" "}
        <button className="ph-gallery__arrow ph-gallery__arrow--next" type="button" aria-label="Foto siguiente">
          ›
        </button>
      </section>
      <section className="ph-film" aria-label="Video del hotel">
        <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="100vw" className="ph-film__poster" alt="Recepción del Hotel Colonial Iguaçu" />
        {" "}
        <div className="ph-film__overlay"></div>
      </section>
      <section className="ph-dining ph-sec" id="gastronomia">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/web/portfolio/foto-villa.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salón del restaurante Villa Colonial con mesas puestas" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Café y
              <br />
              <em>
                gastronomía
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              En el Villa Colonial, la cocina valora los sabores de la región en un ambiente acogedor. Desde el desayuno hasta la cena, cada comida es parte de la experiencia de estar en el Colonial.
            </p>
            {" "}
            <Link className="ph-dining__link" href="/villa-colonial">
              Conocer el Villa Colonial
            </Link>
          </div>
        </div>
      </section>
      <section className="ph-book ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserva{" "}
            <em>
              directo
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Reserva en el sitio oficial del Hotel Colonial Iguaçu y habla directamente con nuestro equipo, desde el primer contacto hasta el check-out.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://hotelcolonialfoz.com.br" target="_blank" rel="noopener">
                Ver disponibilidad
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <p className="ph-book__owner ph-in">
            ¿Eres propietario de un hotel?{" "}
            <Link href="/gestao">
              Conoce la gestión Méritum
            </Link>
          </p>
        </div>
      </section>
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-colonial">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-colonial">
            Otras propiedades Méritum
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/pousada-cataratas">
              <span className="mn-pf__media">
                <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina de la Pousada Cataratas vista desde arriba, con sombrillas verdes" loading="lazy" style={{ objectPosition: "50% 70%" }} />
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
                    habitaciones
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    100 m
                  </span>
                  <span className="mn-pf__desc">
                    de la Avenida das Cataratas
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                En el corazón de Foz do Iguaçu, en la Rua Parigot de Souza, 180. Piscina, desayuno incluido, estacionamiento gratuito y recepción las 24 horas.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-focus ph-in" href="/villa-colonial">
              <span className="mn-pf__media">
                <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de ensaladas del restaurante Villa Colonial" loading="lazy" />
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
                    comidas al día, todos los días
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    180
                  </span>
                  <span className="mn-pf__desc">
                    personas en eventos en el hotel
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                El restaurante del Hotel Colonial Iguaçu, con buffet de cocina regional e internacional, cenas temáticas y menús a la medida para eventos.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-focus ph-in" href="/colonial-autopark">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Estacionamiento Colonial Autopark" loading="lazy" />
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
                    abierto todos los días
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    Gratis
                  </span>
                  <span className="mn-pf__desc">
                    traslado de ida y vuelta al aeropuerto IGU
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Estacionamiento dentro del Hotel Colonial Iguaçu, en la Rodovia das Cataratas, muy cerca del Aeropuerto Internacional de Foz do Iguaçu, con espacio monitoreado.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
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
