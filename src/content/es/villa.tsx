/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/villa.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function VillaHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/villa-salao-noite.jpg", width: 2000, height: 1334 }} mobile={HERO_MOBILE.villaSalao} eager className="ph-hero__bg" alt="Salón del restaurante Villa Colonial de noche, con mesas puestas" style={{ objectPosition: "50% 50%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Villa Colonial, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-villa.png" width={400} height={225} sizes="240px" className="ph-hero__logo" alt="Villa Colonial Gastronomia e Eventos" />
        {" "}
        <p className="ph-hero__tagline">
          Donde cada comida
          <br />
          se vuelve{" "}
          <em>
            celebración
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
      <nav className="ph-subnav" aria-label="Secciones de la página">
        <a href="#visao-geral" className="is-active">
          Panorama
        </a>
        {" "}
        <a href="#experiencias">
          Experiencias
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
              Gastronomía y
              <br />
              <em>
                eventos
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Dentro del Hotel Colonial Iguaçu, en la Rodovia das Cataratas, el Villa Colonial reúne buena mesa y celebraciones en un ambiente acogedor, rodeado de naturaleza. Un lugar para una comida tranquila o para los momentos que merecen ser recordados.
            </p>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/villa-buffet-familia.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Madre e hijo sirviéndose en el buffet del Villa Colonial" style={{ objectPosition: "62% 40%" }} />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--three ph-stats--vc">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              desayuno
            </p>
            <p className="ph-stat__value">
              6:30 a 10:00
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              almuerzo
            </p>
            <p className="ph-stat__value">
              11:30 a 16:00
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              cena
            </p>
            <p className="ph-stat__value">
              19:00 a 22:30
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de ensaladas del Villa Colonial" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Una cocina que valora los sabores de la región, servida con esmero en un salón amplio e iluminado. Desde el desayuno hasta la cena, cada detalle está pensado para que la experiencia vaya más allá del plato.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="experiencias">
        <h2 className="ph-pillars__title ph-in">
          Nuestras{" "}
          <em>
            experiencias
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Sabores de la región
            </h3>
            <p className="ix-row__text">
              Buffet de cocina regional e internacional, con recetas que cuentan la historia de Foz do Iguaçu.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Un salón acogedor
            </h3>
            <p className="ix-row__text">
              Ambiente amplio y tranquilo, ideal para comidas en familia, con amigos o de trabajo.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Celebraciones a la medida
            </h3>
            <p className="ix-row__text">
              Gastronomía para eventos, desde el coffee break hasta la cena de celebración, organizada de principio a fin.
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
              El Villa Colonial está dentro del Hotel Colonial Iguaçu, en la Rodovia das Cataratas, km 20, 11237, Parque Nacional do Iguaçu, Foz do Iguaçu, PR. Una parada perfecta en el camino hacia las principales atracciones de la ciudad.
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
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa del Villa Colonial" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galería de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 5">
            <Image src="/assets/villa-salao-noite.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salón del Villa Colonial de noche" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 5">
            <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de ensaladas del Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 5">
            <Image src="/assets/villa-buffet-familia.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Madre e hijo en el buffet del Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 5">
            <Image src="/assets/villa-buffet-quente.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de platos calientes del Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 5 de 5">
            <Image src="/assets/villa-vinhos.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Vinos en el salón del Villa Colonial" draggable="false" />
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
      <section className="ph-film" aria-label="Buffet del Villa Colonial">
        <Image src="/assets/villa-buffet-quente.jpg" width={2000} height={1334} sizes="100vw" className="ph-film__poster" alt="Huéspedes sirviéndose en el buffet de platos calientes del Villa Colonial" style={{ objectPosition: "50% 35%" }} />
        {" "}
        <div className="ph-film__overlay"></div>
      </section>
      <section className="ph-dining ph-sec" id="eventos">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/villa-vinhos.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Vinos y vajilla preparados en el salón del Villa Colonial" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Tu evento
              <br />
              en el{" "}
              <em>
                Villa
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Desde la planificación hasta el último invitado, cuidamos cada detalle para que tu evento salga tal como lo imaginaste. Bodas, cumpleaños, graduaciones y eventos corporativos con la estructura del Hotel Colonial.
            </p>
            {" "}
            <a className="ph-dining__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </section>
      <section className="ph-book ph-book--vc ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserva tu{" "}
            <em>
              mesa
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Asegura tu lugar para el almuerzo o la cena y habla directamente con nuestro equipo.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Reservar mesa
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-villa">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-villa">
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
                En la Rodovia das Cataratas, km 20, en medio de la Mata Atlántica preservada. Piscina climatizada y piscina exterior, sendero ecológico, salas de eventos para hasta 180 personas y traslado gratuito al aeropuerto en las reservas directas.
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
                Estacionamiento dentro del Hotel Colonial Iguaçu, en la Rodovia das Cataratas, muy cerca del Aeropuerto Internacional de Foz do Iguaçu, con lugar monitoreado.
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
