/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/villa.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function VillaHero({ children }: { children: ReactNode }) {
  return (
    <section className="ph-hh" style={{ position: "relative", height: "78svh", minHeight: "560px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/villa-salao-noite.jpg", width: 2000, height: 1334 }} mobile={HERO_MOBILE.villaSalao} eager className="ph-hero__bg" alt="Dining room of the Villa Colonial restaurant at night, with tables set" style={{ objectPosition: "50% 50%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Villa Colonial, Foz do Iguaçu
      </p>
      <div className="ph-hero__content">
        <Image src="/assets/web/portfolio/logo-villa.png" width={400} height={225} sizes="240px" className="ph-hero__logo" alt="Villa Colonial Gastronomia e Eventos" />
        {" "}
        <p className="ph-hero__tagline">
          Where every meal
          <br />
          becomes a{" "}
          <em>
            celebration
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
      <nav className="ph-subnav" aria-label="Page sections">
        <a href="#visao-geral" className="is-active">
          Overview
        </a>
        {" "}
        <a href="#experiencias">
          Experiences
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
        <a href="#eventos">
          Events
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
              Dining and
              <br />
              <em>
                events
              </em>
            </h1>
            {" "}
            <p className="ph-intro__body">
              Inside Hotel Colonial Iguaçu, on Rodovia das Cataratas, Villa Colonial brings together good food and celebrations in a welcoming setting surrounded by nature. A place for a relaxed meal or for the moments worth remembering.
            </p>
          </div>
          {" "}
          <figure className="ph-intro__media ph-in">
            <Image src="/assets/villa-buffet-familia.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Mother and son serving themselves at the Villa Colonial buffet" style={{ objectPosition: "62% 40%" }} />
          </figure>
        </div>
      </section>
      <section className="ph-stats ph-stats--three ph-stats--vc">
        <div className="ph-stats__inner">
          <div className="ph-stat">
            <p className="ph-stat__label">
              breakfast
            </p>
            <p className="ph-stat__value">
              6:30 AM to 10 AM
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              lunch
            </p>
            <p className="ph-stat__value">
              11:30 AM to 4 PM
            </p>
          </div>
          {" "}
          <div className="ph-stat">
            <p className="ph-stat__label">
              dinner
            </p>
            <p className="ph-stat__value">
              7 PM to 10:30 PM
            </p>
          </div>
        </div>
      </section>
      <section className="ph-feature">
        <div className="ph-feature__inner">
          <figure className="ph-feature__media ph-in">
            <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salad buffet at Villa Colonial" />
          </figure>
          {" "}
          <div className="ph-feature__text ph-in">
            <p className="ph-feature__body">
              A kitchen that celebrates regional flavors, served with care in a spacious, bright dining room. From breakfast to dinner, every detail is designed so the experience goes beyond the plate.
            </p>
          </div>
        </div>
      </section>
      <section className="ph-pillars ph-pillars--ix ph-sec" id="experiencias">
        <h2 className="ph-pillars__title ph-in">
          Our{" "}
          <em>
            experiences
          </em>
        </h2>
        {" "}
        <div className="ix-list">
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Regional flavors
            </h3>
            <p className="ix-row__text">
              A buffet of regional and international cuisine, with recipes that tell the story of Foz do Iguaçu.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              A welcoming dining room
            </h3>
            <p className="ix-row__text">
              A spacious, quiet setting, ideal for meals with family, with friends or for business.
            </p>
          </div>
          {" "}
          <div className="ix-row ph-in">
            <h3 className="ix-row__name">
              Tailored celebrations
            </h3>
            <p className="ix-row__text">
              Catering for events, from coffee breaks to celebration dinners, organized from start to finish.
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
              Villa Colonial is located inside Hotel Colonial Iguaçu, on Rodovia das Cataratas, km 20, 11237, Parque Nacional do Iguaçu, Foz do Iguaçu, PR. A perfect stop on the way to the city’s main attractions.
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
              <iframe src="https://maps.google.com/maps?q=Hotel%20Colonial%20Igua%C3%A7u%2C%20Rodovia%20das%20Cataratas%20km%2020%2C%20Foz%20do%20Igua%C3%A7u&t=m&z=15&output=embed" title="Map of Villa Colonial" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="ph-gallery ph-sec" id="galeria" aria-label="Photo gallery">
        <div className="ph-gallery__track">
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 1 of 5">
            <Image src="/assets/villa-salao-noite.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Villa Colonial dining room at night" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 2 of 5">
            <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Salad buffet at Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 3 of 5">
            <Image src="/assets/villa-buffet-familia.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Mother and son at the Villa Colonial buffet" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 4 of 5">
            <Image src="/assets/villa-buffet-quente.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Hot dish buffet at Villa Colonial" draggable="false" />
          </button>
          {" "}
          <button className="ph-gallery__item ph-in" type="button" aria-label="Enlarge photo 5 of 5">
            <Image src="/assets/villa-vinhos.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Wines in the Villa Colonial dining room" draggable="false" />
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
      <section className="ph-film" aria-label="Villa Colonial buffet">
        <Image src="/assets/villa-buffet-quente.jpg" width={2000} height={1334} sizes="100vw" className="ph-film__poster" alt="Guests serving themselves at the Villa Colonial hot dish buffet" style={{ objectPosition: "50% 35%" }} />
        {" "}
        <div className="ph-film__overlay"></div>
      </section>
      <section className="ph-dining ph-sec" id="eventos">
        <div className="ph-dining__inner">
          <figure className="ph-dining__media ph-in">
            <Image src="/assets/villa-vinhos.jpg" width={2000} height={1334} sizes="(max-width: 1023px) 100vw, 50vw" alt="Wines and tableware set out in the Villa Colonial dining room" />
          </figure>
          {" "}
          <div className="ph-dining__text ph-in">
            <h2 className="ph-dining__title">
              Your event
              <br />
              at{" "}
              <em>
                Villa
              </em>
            </h2>
            {" "}
            <p className="ph-dining__body">
              From planning to the last guest, we take care of every detail so your event happens just the way you imagined. Weddings, birthdays, graduations and corporate events with the facilities of Hotel Colonial.
            </p>
            {" "}
            <a className="ph-dining__link" href="https://wa.me/558008191993" target="_blank" rel="noopener">
              Request a quote
            </a>
          </div>
        </div>
      </section>
      <section className="ph-book ph-book--vc ph-sec" id="reservar">
        <div className="ph-book__inner">
          <h2 className="ph-book__title ph-in">
            Reserve your{" "}
            <em>
              table
            </em>
          </h2>
          {" "}
          <div className="ph-book__side ph-in">
            <p className="ph-book__body">
              Save your seat for lunch or dinner and talk directly with our team.
            </p>
            {" "}
            <div className="ph-book__actions">
              <a className="ph-book__btn" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Book a table
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
      <section className="ph-more ph-more--pf" aria-labelledby="ph-more-title-villa">
        <div className="ph-more__inner">
          <h2 className="ph-more__title ph-in" id="ph-more-title-villa">
            Other Méritum properties
          </h2>
          {" "}
          <div className="ph-more__grid">
            <Link className="mn-pf__item mn-focus ph-in" href="/hotel-colonial-iguacu">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Lobby at Hotel Colonial Iguaçu" loading="lazy" />
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
                    from the entrance to Iguaçu National Park
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                On Rodovia das Cataratas, km 20, amid preserved Atlantic Forest. Heated pool and outdoor pool, nature trail, event rooms for up to 180 people and a free airport shuttle with direct bookings.
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
