/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/autopark.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function AutoparkHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/autopark-vista-aerea.jpg", width: 2000, height: 1333 }} mobile={HERO_MOBILE.autoparkAraucaria} eager className="ph-hero__bg" alt="View of the Colonial Autopark parking lot with the fountain and the forest in the background" style={{ objectPosition: "50% 55%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Colonial Autopark, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-autopark.png" width={245} height={206} sizes="240px" className="ph-hero__logo" alt="Colonial Autopark" />
        {" "}
        <p className="ph-hero__tagline">
          Park,{" "}
          <em>
            fly
          </em>
          <br />
          and come back worry-free
        </p>
      </div>
      {children}
    </section>
  );
}

export default function AutoparkContent() {
  return (
    <>
      <nav className="ph-subnav" aria-label="Page sections">
        <a href="#visao-geral" className="is-active">
          Overview
        </a>
        {" "}
        <a href="#como-funciona">
          How it works
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
        <a href="#com-hotel">
          With hotel
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
              Park and
              <br />
              <em>
                fly
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Close to Foz do Iguaçu International Airport, Colonial Autopark takes care of your car while you travel. You park, we take you to the airport and pick you up when you return, in line with your flight schedule.
            </p>
            {" "}
            <a className="ph-intro__link" href="https://colonialautopark.com.br" target="_blank" rel="noopener">
              Visit the Autopark website
            </a>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrance of Hotel Colonial Iguaçu with the Autopark parking lot" />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--three">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              open 7 days a week
            </p>
            <p className="ph-stat__value">
              24 h
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              round-trip shuttle to IGU airport
            </p>
            <p className="ph-stat__value">
              Free
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              secure space
            </p>
            <p className="ph-stat__value">
              Monitored
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/autopark-estacionamento.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Cars parked under the trees at Colonial Autopark" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              Secure parking within the grounds of Hotel Colonial Iguaçu, with an on-site team and 24-hour service. One less thing to worry about when you travel.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="como-funciona">
        <h2 className="ph-pillars__title ph-in">
          How{" "}
          <em>
            it works
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              You arrive and park
            </h3>
            <p className="ix-row__text">
              Leave your car at the Autopark with peace of mind, in a secure, monitored space.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              We take you to the airport
            </h3>
            <p className="ix-row__text">
              The shuttle is included and follows your flight schedule.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              When you return, we pick you up
            </h3>
            <p className="ix-row__text">
              When you land, just let us know. The shuttle takes you back to your car.
            </p>
          </div>
        </div>
        {" "}
        <div className="ph-duo ph-duo--one">
          <figure className="ph-duo__fig ph-in">
            <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fountain and araucaria tree at the Colonial Autopark entrance" loading="lazy" />
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
              The Autopark is located at Rodovia das Cataratas, km 20, 11237, inside Hotel Colonial Iguaçu, close to Foz do Iguaçu International Airport.
            </p>
            {" "}
            <p className="ph-location__body ph-location__contact">
              WhatsApp 0800 819 1993
              <br />
              Reservations center (45) 3529 7711
              <br />
              Administrative office Monday to Friday, from 9 AM to 7 PM
            </p>
          </div>
          {" "}
          <div className="ph-location__map ph-in">
            <div className="ph-location__frame">
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Map of Colonial Autopark" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Photo gallery">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 1 of 4">
            <Image src="/assets/autopark-vista-aerea.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="View of the Colonial Autopark parking lot" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 2 of 4">
            <Image src="/assets/autopark-estacionamento.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Cars parked at Colonial Autopark" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 3 of 4">
            <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fountain and araucaria tree at the Colonial Autopark entrance" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 4 of 4">
            <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrance of Hotel Colonial Iguaçu" draggable="false" />
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
      <section className="ph-dining ph-sec" id="com-hotel">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Garden and pool area at Hotel Colonial Iguaçu" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Park, stay
              <br />
              and{" "}
              <em>
                fly
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              Leaving early or arriving late? Combine your parking with a night at Hotel Colonial Iguaçu, breakfast included, and head to the airport well rested.
            </p>
            {" "}
            <Link className="ph-dining__link" href="/hotel-colonial-iguacu">
              Discover Hotel Colonial
            </Link>
          </div>
        </div>
      </section>
      <section className="ph-book ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserve your{" "}
            <em>
              space
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Secure your parking space before you travel and talk directly with our team. Open 24 hours, 7 days a week, with WhatsApp 0800 819 1993.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://colonialautopark.com.br" target="_blank" rel="noopener">
                Reserve a space
              </a>
              {" "}
              <a className="ph-book__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-autopark">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-autopark">
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
            <Link className="mn-pf__item mn-focus ph-in" href="/pousada-cataratas">
              <span className="mn-pf__media">
                <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Pousada Cataratas pool seen from above, with green umbrellas" loading="lazy" style={{ objectPosition: "50% 70%" }} />
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
          </div>
        </div>
      </section>
    </>
  );
}
