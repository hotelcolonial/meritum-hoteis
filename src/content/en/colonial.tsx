/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/colonial.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function ColonialHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/colonial-jardim-piscina.jpg", width: 2576, height: 1717 }} mobile={HERO_MOBILE.colonialJardim} eager className="ph-hero__bg" alt="Garden and pool at Hotel Colonial Iguaçu surrounded by greenery" />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Hotel Colonial Iguaçu, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-colonial.png" width={200} height={158} sizes="240px" className="ph-hero__logo" alt="Hotel Colonial Iguaçu" />
        {" "}
        <p className="ph-hero__tagline">
          Nature,{" "}
          <em>
            history
          </em>
          <br />
          and comfort
        </p>
      </div>
      {children}
    </section>
  );
}

export default function ColonialContent() {
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
        <a href="#gastronomia">
          Dining
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
              Tradition and
              <br />
              <em>
                nature
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              On Rodovia das Cataratas, km 20, just 1.2 km from the entrance to Iguaçu National Park, Hotel Colonial Iguaçu combines the comfort of a full-service hotel with the tranquility of a large green area. A place to rest, explore Foz do Iguaçu and keep coming back to.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://hotelcolonialfoz.com.br" target="_blank" rel="noopener">
              Visit the hotel website
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media">
            <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Front desk and lobby at Hotel Colonial Iguaçu" />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--long">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              Welcoming guests since
            </p>
            <p className="ph-stat__value">
              1970
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              from the entrance to Iguaçu National Park
            </p>
            <p className="ph-stat__value">
              1.2 km
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              people in the largest event room
            </p>
            <p className="ph-stat__value">
              180
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              check-in and check-out
            </p>
            <p className="ph-stat__value">
              2 PM and 12 PM
            </p>
          </div>
        </div>
      </section>
      <section className="ph-managed ph-sec">
        <p className="ph-managed__text ph-in">
          Managed by{" "}
          <em>
            Méritum Hotéis
          </em>
          {" "}under the leasing model, with operational, commercial and hospitality management.
        </p>
        {" "}
        <Link className="ph-managed__link ph-in mn-focus" href="/gestao#modelos">
          Discover Méritum management{" "}
          <span aria-hidden="true">
            →
          </span>
        </Link>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/hotel-colonial-iguacu.png" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Gardens and pool at Hotel Colonial Iguaçu" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Surrounded by a large green area, Hotel Colonial was designed for those who want to slow down while staying close to everything. Here your day can begin with nature and end with a good rest, after discovering the best of Foz do Iguaçu.
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
              A large green area
            </h3>
            <p className="ix-row__text">
              Gardens and nature all around, so you can breathe deeply and truly rest.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Pools to relax
            </h3>
            <p className="ix-row__text">
              Outdoor leisure areas to enjoy the Foz heat with your family or as a couple.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Breakfast and dining
            </h3>
            <p className="ix-row__text">
              Regional flavors served with care, from breakfast to the end of the day.
            </p>
          </div>
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
              The hotel is located on Rodovia das Cataratas, km 20, 11237, Parque Nacional do Iguaçu, Foz do Iguaçu, PR, the road that leads to the city’s main attractions.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              Phone and WhatsApp 0800 819 1993
              <br />
              reservas@hotelcolonialfoz.com.br
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Map of Hotel Colonial Iguaçu" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Photo gallery">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 1 of 4">
            <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Garden and pool area at Hotel Colonial Iguaçu" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 2 of 4">
            <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Hotel front desk and lobby" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 3 of 4">
            <Image src="/assets/web/portfolio/foto-villa.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Dining room of the Villa Colonial restaurant" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 4 of 4">
            <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Colonial Autopark parking area" draggable="false" />
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
      <section className="ph-film" aria-label="Hotel video">
        <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="100vw" className="ph-film__poster" alt="Front desk at Hotel Colonial Iguaçu" />
        {" "}
        <div className="ph-film__overlay"></div>
      </section>
      <section className="ph-dining ph-sec" id="gastronomia">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/web/portfolio/foto-villa.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Dining room of the Villa Colonial restaurant with tables set" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Breakfast and
              <br />
              <em>
                dining
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              At Villa Colonial, the kitchen celebrates regional flavors in a welcoming setting. From breakfast to dinner, every meal is part of the experience of staying at the Colonial.
            </p>
            {" "}
            <Link className="ph-dining__link" href="/villa-colonial">
              Discover Villa Colonial
            </Link>
          </div>
        </div>
      </section>
      <section className="ph-book ph-sec" id="reservar">
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
              Book through the official Hotel Colonial Iguaçu website and talk directly with our team, from your first contact to check-out.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://hotelcolonialfoz.com.br" target="_blank" rel="noopener">
                Check availability
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <p className="ph-book__owner ph-in">
            Do you own a hotel?{" "}
            <Link href="/gestao">
              Discover Méritum management
            </Link>
          </p>
        </div>
      </section>
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-colonial">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-colonial">
            Other Méritum properties
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/pousada-cataratas">
              <span className="mn-pf__media">
                <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Aerial view of the Pousada Cataratas pool, with green umbrellas" loading="lazy" style={{ objectPosition: "50% 70%" }} />
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
                    rooms
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    100 m
                  </span>
                  <span className="mn-pf__desc">
                    from Avenida das Cataratas
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                In the heart of Foz do Iguaçu, at Rua Parigot de Souza, 180. Pool, breakfast included, free parking and a 24-hour front desk.
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
                The restaurant at Hotel Colonial Iguaçu, with a buffet of regional and international cuisine, themed dinners and custom menus for events.
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
                <Image src="/assets/web/portfolio/foto-autopark.jpg" width={1600} height={900} sizes="(max-width: 1023px) 100vw, 50vw" alt="Colonial Autopark parking" loading="lazy" />
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
