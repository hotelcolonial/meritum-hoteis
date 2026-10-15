/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/autopark.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function AutoparkHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/autopark-vista-aerea.jpg", width: 2000, height: 1333 }} mobile={HERO_MOBILE.autoparkAraucaria} eager className="ph-hero__bg" alt="Vista del estacionamiento del Colonial Autopark con la fuente y la vegetación al fondo" style={{ objectPosition: "50% 55%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Colonial Autopark, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-autopark.png" width={245} height={206} sizes="240px" className="ph-hero__logo" alt="Colonial Autopark" />
        {" "}
        <p className="ph-hero__tagline">
          Estaciona,{" "}
          <em>
            vuela
          </em>
          <br />
          y vuelve tranquilo
        </p>
      </div>
      {children}
    </section>
  );
}

export default function AutoparkContent() {
  return (
    <>
      <nav className="ph-subnav" aria-label="Secciones de la página">
        <a href="#visao-geral" className="is-active">
          Panorama
        </a>
        {" "}
        <a href="#como-funciona">
          Cómo funciona
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
        <a href="#com-hotel">
          Con hotel
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
              Estaciona y
              <br />
              <em>
                vuela
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Muy cerca del Aeropuerto Internacional de Foz do Iguaçu, el Colonial Autopark cuida tu auto mientras viajas. Tú estacionas, nosotros te llevamos al aeropuerto y te recogemos al regreso, según el horario de tu vuelo.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://colonialautopark.com.br" target="_blank" rel="noopener">
              Visitar el sitio del Autopark
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrada del Hotel Colonial Iguaçu con el estacionamiento del Autopark" />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--three">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              abierto 7 días a la semana
            </p>
            <p className="ph-stat__value">
              24 h
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              traslado de ida y vuelta al aeropuerto IGU
            </p>
            <p className="ph-stat__value">
              Gratis
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              lugar seguro
            </p>
            <p className="ph-stat__value">
              Monitoreado
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/autopark-estacionamento.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Autos estacionados en el Colonial Autopark bajo los árboles" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Estacionamiento seguro dentro de la estructura del Hotel Colonial Iguaçu, con equipo en el lugar y atención las 24 horas. Una preocupación menos para quien sale de viaje.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="como-funciona">
        <h2 className="ph-pillars__title ph-in">
          Cómo{" "}
          <em>
            funciona
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Llegas y estacionas
            </h3>
            <p className="ix-row__text">
              Deja el auto en el Autopark con tranquilidad, en un espacio seguro y monitoreado.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Te llevamos al aeropuerto
            </h3>
            <p className="ix-row__text">
              El traslado está incluido y se ajusta al horario de tu vuelo.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Al regreso, te recogemos
            </h3>
            <p className="ix-row__text">
              Al aterrizar, solo tienes que avisarnos. El traslado te lleva de vuelta hasta tu auto.
            </p>
          </div>
        </div>
        {" "}
        <div className="ph-duo ph-duo--one">
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fuente y araucaria en la entrada del Colonial Autopark" loading="lazy" />
          </figure>
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
              El Autopark está en la Rodovia das Cataratas, km 20, 11237, dentro del Hotel Colonial Iguaçu, muy cerca del Aeropuerto Internacional de Foz do Iguaçu.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              WhatsApp 0800 819 1993
              <br />
              Central de reservas (45) 3529 7711
              <br />
              Atención administrativa de lunes a viernes, de 9:00 a 19:00
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa del Colonial Autopark" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galería de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 4">
            <Image src="/assets/autopark-vista-aerea.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Vista del estacionamiento del Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 4">
            <Image src="/assets/autopark-estacionamento.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Autos estacionados en el Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 4">
            <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fuente y araucaria en la entrada del Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 4">
            <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrada del Hotel Colonial Iguaçu" draggable="false" />
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
      <section className="ph-dining ph-sec" id="com-hotel">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardín y área de la piscina del Hotel Colonial Iguaçu" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Estaciona, hospédate
              <br />
              y{" "}
              <em>
                vuela
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              ¿Viajas temprano o llegas tarde? Combina el estacionamiento con una noche en el Hotel Colonial Iguaçu, con desayuno, y sigue al aeropuerto descansado.
            </p>
            {" "}
            <Link className="ph-dining__link" href="/hotel-colonial-iguacu">
              Conocer el Hotel Colonial
            </Link>
          </div>
        </div>
      </section>
      <section className="ph-book ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserva tu{" "}
            <em>
              lugar
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Asegura tu lugar antes de viajar y habla directamente con nuestro equipo. Abierto las 24 horas, 7 días a la semana, con WhatsApp 0800 819 1993.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://colonialautopark.com.br" target="_blank" rel="noopener">
                Reservar lugar
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-autopark">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-autopark">
            Otras propiedades Méritum
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/hotel-colonial-iguacu">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Lobby del Hotel Colonial Iguaçu" loading="lazy" />
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
                    Recibiendo huéspedes desde
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    1,2 km
                  </span>
                  <span className="mn-pf__desc">
                    de la entrada del Parque Nacional do Iguaçu
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                En la Rodovia das Cataratas, km 20, en medio de la Mata Atlántica preservada. Piscina climatizada y piscina exterior, sendero ecológico, salones de eventos para hasta 180 personas y traslado gratuito al aeropuerto en las reservas directas.
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
          </div>
        </div>
      </section>
    </>
  );
}
