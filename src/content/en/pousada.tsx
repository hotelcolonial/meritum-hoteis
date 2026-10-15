/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/pousada.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function PousadaHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/pousada-piscina-pergolado.jpg", width: 2000, height: 1333 }} mobile={HERO_MOBILE.pousadaPergolado} eager className="ph-hero__bg" alt="Pousada Cataratas pool under the pergola with lounge chairs" style={{ objectPosition: "50% 60%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Pousada Cataratas, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-pousada.png" width={259} height={114} sizes="240px" className="ph-hero__logo" alt="Pousada Cataratas" />
        {" "}
        <p className="ph-hero__tagline">
          Rest close
          <br />
          to{" "}
          <em>
            everything
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
      <nav className="ph-subnav" aria-label="Page sections">
        <a href="#visao-geral" className="is-active">
          Overview
        </a>
        {" "}
        <a href="#diferenciais">
          Highlights
        </a>
        {" "}
        <a href="#localizacao">
          Location
        </a>
        {" "}
        <a href="#galeria">
          Gallery
        </a>
        {" "}
        <a href="#cafe-da-manha">
          Breakfast
        </a>
        {" "}
        <a href="#reservar">
          Book
        </a>
      </nav>
      <section className="ph-intro ph-sec" id="visao-geral">
        <div className="ph-intro__inner">
          <div className="ph-intro__text">
            <h1 className="ph-intro__title">
              Comfort and
              <br />
              <em>
                location
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              In the heart of Foz do Iguaçu, 100 meters from Avenida das Cataratas, Pousada Cataratas is the ideal starting point for exploring the city. A welcoming place, with breakfast included and free parking, where you can rest after each outing.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://pousadacataratas.com.br" target="_blank" rel="noopener">
              Visit the inn’s website
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/pousada-fachada.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Facade of Pousada Cataratas with trees along the sidewalk" />
          </figure>
        </div>
      </section>
      <section className="ph-stats">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              rooms
            </p>
            <p className="ph-stat__value">
              27
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              from Avenida das Cataratas
            </p>
            <p className="ph-stat__value">
              100 m
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              guests per room
            </p>
            <p className="ph-stat__value">
              2 to 5
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              front desk
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
            <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Pousada Cataratas pool seen from above, with green umbrellas" style={{ objectPosition: "50% 70%" }} />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              After a day of sightseeing, the inn’s pool and leisure areas invite you to slow down. Everything is designed to make your stay simple, peaceful and close to everything.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="diferenciais">
        <h2 className="ph-pillars__title ph-in">
          Our{" "}
          <em>
            highlights
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Breakfast included
            </h3>
            <p className="ix-row__text">
              Every nightly rate includes breakfast with homemade bread and fruit, so you can start the day at an easy pace before heading out to explore.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Pool and leisure
            </h3>
            <p className="ix-row__text">
              Outdoor leisure areas where you can enjoy the Foz warmth between one outing and the next.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Rooms for the whole family
            </h3>
            <p className="ix-row__text">
              Double Rooms of 13 m², Triple Rooms of 18 m², Quadruple Rooms of 22 m² and Quintuple Rooms of 26 m², for couples, families and groups of up to five people.
            </p>
          </div>
        </div>
        {" "}
        <div className="ph-duo">
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/pousada-quarto-quintuplo.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Quintuple Room at Pousada Cataratas" loading="lazy" />
          </figure>
          {" "}
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/pousada-espaco-kids.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Kids’ area at Pousada Cataratas" loading="lazy" />
          </figure>
        </div>
      </section>
      <section className="ph-location ph-sec" id="localizacao">
        <div className="ph-location__inner">
          <div className="ph-location__text ph-in">
            <h2 className="ph-location__title">
              <em>
                Location
              </em>
            </h2>
            {" "}
            <p className="ph-location__body">
              The inn is located at Rua Parigot de Souza, 180, Foz do Iguaçu, PR, 100 meters from Avenida das Cataratas, with free private parking.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              Phone and WhatsApp 0800 002 9215
              <br />
              reservas@pousadacataratas.com.br
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Pousada%20Cataratas%2C%20Rua%20Parigot%20de%20Souza%20180%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Map of Pousada Cataratas" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Photo gallery">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 1 of 8">
            <Image src="/assets/pousada-jardim-piscina.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Garden with palm trees next to the Pousada Cataratas pool" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 2 of 8">
            <Image src="/assets/pousada-quarto-quadruplo.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Quadruple Room at Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 3 of 8">
            <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Pousada Cataratas pool seen from above" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 4 of 8">
            <Image src="/assets/pousada-fachada.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Facade of Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 5 of 8">
            <Image src="/assets/pousada-quarto-quintuplo.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Quintuple Room at Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 6 of 8">
            <Image src="/assets/pousada-espaco-kids.jpg" width={2000} height={1131} sizes="(max-width: 1023px) 100vw, 50vw" alt="Kids’ area at Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 7 of 8">
            <Image src="/assets/pousada-cafe-da-manha.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Breakfast at Pousada Cataratas" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 8 of 8">
            <Image src="/assets/pousada-piscina-pergolado.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Pool under the pergola at Pousada Cataratas" draggable="false" />
          </button>
        </div>
        {" "}
        <button className="ph-gallery__arrow ph-gallery__arrow--prev is-disabled" type="button" aria-label="Previous photo">
          ‹
        </button>
        {" "}
        <button className="ph-gallery__arrow ph-gallery__arrow--next" type="button" aria-label="Next photo">
          ›
        </button>
      </section>
      <section className="ph-dining ph-sec" id="cafe-da-manha">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/pousada-cafe-da-manha.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Breakfast served at Pousada Cataratas" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Our
              <br />
              <em>
                breakfast
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Every nightly rate at Pousada Cataratas includes breakfast. A peaceful start to your day, with the energy to enjoy everything Foz do Iguaçu has to offer.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-book ph-book--pc ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Book{" "}
            <em>
              direct
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Book through the official Pousada Cataratas website and talk directly with our team, from first contact to check-out.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://pousadacataratas.com.br" target="_blank" rel="noopener">
                Check availability
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <p className="ph-book__owner ph-in">
            Are you a hotel owner?{" "}
            <Link href="/gestao">
              Discover Méritum management
            </Link>
          </p>
        </div>
      </section>
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-pousada">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-pousada">
            Other Méritum properties
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/hotel-colonial-iguacu">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Lobby of Hotel Colonial Iguaçu" loading="lazy" />
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
                    Welcoming guests since
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    1.2 km
                  </span>
                  <span className="mn-pf__desc">
                    from the Iguaçu National Park entrance
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                On Rodovia das Cataratas, km 20, surrounded by preserved Atlantic Forest. Heated pool and outdoor pool, nature trail, event rooms for up to 180 people and a free airport shuttle with direct bookings.
              </span>
              {" "}
              <span className="mn-pf__link">
                Discover{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-focus ph-in" href="/villa-colonial">
              <span className="mn-pf__media">
                <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salad buffet at the Villa Colonial restaurant" loading="lazy" />
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
                    meals a day, every day
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    180
                  </span>
                  <span className="mn-pf__desc">
                    people at events in the hotel
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                The Hotel Colonial Iguaçu restaurant, with a buffet of regional and international cuisine, themed dinners and custom menus for events.
              </span>
              {" "}
              <span className="mn-pf__link">
                Discover{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-focus ph-in" href="/colonial-autopark">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Colonial Autopark parking lot" loading="lazy" />
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
                    open every day
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    Free
                  </span>
                  <span className="mn-pf__desc">
                    round-trip shuttle to IGU airport
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Parking inside Hotel Colonial Iguaçu, on Rodovia das Cataratas, close to Foz do Iguaçu International Airport, with a monitored parking space.
              </span>
              {" "}
              <span className="mn-pf__link">
                Discover{" "}
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
