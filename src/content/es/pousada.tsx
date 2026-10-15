/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/pousada.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function PousadaHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/pousada-piscina-pergolado.jpg", width: 2000, height: 1333 }} mobile={HERO_MOBILE.pousadaPergolado} eager className="ph-hero__bg" alt="Piscina de la Pousada Cataratas bajo la pérgola con sillas reclinables" style={{ objectPosition: "50% 60%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Pousada Cataratas, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-pousada.png" width={259} height={114} sizes="240px" className="ph-hero__logo" alt="Pousada Cataratas" />
        {" "}
        <p className="ph-hero__tagline">
          El descanso cerca
          <br />
          de{" "}
          <em>
            todo
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
      <nav className="ph-subnav" aria-label="Secciones de la página">
        <a href="#visao-geral" className="is-active">
          Panorama
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
        <a href="#cafe-da-manha">
          Desayuno
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
              Calidez y
              <br />
              <em>
                ubicación
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              En el corazón de Foz do Iguaçu, a 100 metros de la Avenida das Cataratas, la Pousada Cataratas es el punto de partida ideal para conocer la ciudad. Un lugar acogedor, con desayuno incluido y estacionamiento gratuito, para descansar después de cada paseo.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://pousadacataratas.com.br" target="_blank" rel="noopener">
              Visitar el sitio de la posada
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/pousada-fachada.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fachada de la Pousada Cataratas con árboles en la acera" />
          </figure>
        </div>
      </section>
      <section className="ph-stats">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              habitaciones
            </p>
            <p className="ph-stat__value">
              27
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              de la Avenida das Cataratas
            </p>
            <p className="ph-stat__value">
              100 m
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              huéspedes por habitación
            </p>
            <p className="ph-stat__value">
              2 a 5
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              recepción
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
            <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina de la Pousada Cataratas vista desde arriba, con sombrillas verdes" style={{ objectPosition: "50% 70%" }} />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Después de un día de paseos, la piscina y las áreas de recreación de la posada son una invitación a bajar el ritmo. Todo pensado para que la estadía sea simple, tranquila y cerca de todo.
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
              Desayuno incluido
            </h3>
            <p className="ix-row__text">
              Todas las tarifas incluyen desayuno con panes caseros y frutas, para empezar el día sin prisa antes de salir a explorar.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Piscina y recreación
            </h3>
            <p className="ix-row__text">
              Áreas de recreación al aire libre para disfrutar del calor de Foz entre un paseo y otro.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Habitaciones para toda la familia
            </h3>
            <p className="ix-row__text">
              Habitaciones Doble de 13 m², Triple de 18 m², Cuádruple de 22 m² y Quíntuple de 26 m², para parejas, familias y grupos de hasta cinco personas.
            </p>
          </div>
        </div>
        {" "}
        <div className="ph-duo">
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/pousada-quarto-quintuplo.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Habitación Quíntuple de la Pousada Cataratas" loading="lazy" />
          </figure>
          {" "}
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/pousada-espaco-kids.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Espacio infantil de la Pousada Cataratas" loading="lazy" />
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
              La posada está en la Rua Parigot de Souza, 180, Foz do Iguaçu, PR, a 100 metros de la Avenida das Cataratas, con estacionamiento privado gratuito.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              Teléfono y WhatsApp 0800 002 9215
              <br />
              reservas@pousadacataratas.com.br
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Pousada%20Cataratas%2C%20Rua%20Parigot%20de%20Souza%20180%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Mapa de la Pousada Cataratas" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Galería de fotos">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 1 de 8">
            <Image src="/assets/pousada-jardim-piscina.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardín con palmeras junto a la piscina de la Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 2 de 8">
            <Image src="/assets/pousada-quarto-quadruplo.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Habitación Cuádruple de la Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 3 de 8">
            <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina de la Pousada Cataratas vista desde arriba" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 4 de 8">
            <Image src="/assets/pousada-fachada.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fachada de la Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 5 de 8">
            <Image src="/assets/pousada-quarto-quintuplo.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Habitación Quíntuple de la Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 6 de 8">
            <Image src="/assets/pousada-espaco-kids.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Espacio infantil de la Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 7 de 8">
            <Image src="/assets/pousada-cafe-da-manha.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Desayuno de la Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Ampliar foto 8 de 8">
            <Image src="/assets/pousada-piscina-pergolado.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina bajo la pérgola de la Pousada Cataratas" draggable="false" />
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
      <section className="ph-dining ph-sec" id="cafe-da-manha">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/pousada-cafe-da-manha.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Desayuno servido en la Pousada Cataratas" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              El
              <br />
              <em>
                desayuno
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Todas las tarifas de la Pousada Cataratas incluyen desayuno. Un comienzo de día tranquilo, con energía para disfrutar todo lo que Foz do Iguaçu tiene para ofrecer.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-book ph-book--pc ph-sec" id="reservar">
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
              Reserva en el sitio oficial de la Pousada Cataratas y habla directamente con nuestro equipo, desde el primer contacto hasta el check-out.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://pousadacataratas.com.br" target="_blank" rel="noopener">
                Ver disponibilidad
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558000029215" target="_blank" rel="noopener">
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-pousada">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-pousada">
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
