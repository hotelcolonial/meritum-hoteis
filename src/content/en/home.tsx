/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/home.tsx. Só os textos mudam. */
import Image from "next/image";
import Link from "@/components/LocaleLink";

export default function HomeContent() {
  return (
    <>
      <section id="quem-somos" className="mn-qs">
        <div className="mn-qs__inner">
          <p className="mn-qs__label mn-rv">
            Who we are
          </p>
          {" "}
          <div className="mn-qs__body mn-rv">
            <p className="mn-qs__phrase">
              Méritum is not a hotel chain. It is a hotel management company that develops each hotel individually, respecting its identity and strengthening its results.
            </p>
            {" "}
            <Link className="mn-qs__link mn-focus" href="/a-meritum">
              Get to know Méritum{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section id="portfolio" className="mn-pf">
        <div className="mn-pf__inner">
          <header className="mn-pf__head">
            <h2 className="mn-pf__title">
              Our portfolio
            </h2>
            {" "}
            <p className="mn-pf__sub">
              The brands Méritum manages in Foz do Iguaçu, each with its own identity.
            </p>
          </header>
          {" "}
          <div className="mn-pf__grid">
            <Link className="mn-pf__item mn-pf__item--colonial mn-focus" href="/hotel-colonial-iguacu">
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
                    from the entrance to Iguaçu National Park
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
            <Link className="mn-pf__item mn-pf__item--pousada mn-focus" href="/pousada-cataratas">
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
            <Link className="mn-pf__item mn-pf__item--villa mn-focus" href="/villa-colonial">
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
            <Link className="mn-pf__item mn-pf__item--autopark mn-focus" href="/colonial-autopark">
              <span className="mn-pf__media">
                <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fountain and araucaria tree at the entrance of Colonial Autopark" loading="lazy" />
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
                Parking inside Hotel Colonial Iguaçu, on Rodovia das Cataratas, just minutes from Foz do Iguaçu International Airport, with a monitored parking space.
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
      <section className="mn-idx" id="o-que-fazemos" aria-labelledby="mn-idx-title">
        <div className="mn-idx__inner">
          <header className="mn-idx__head">
            <h2 className="mn-idx__title" id="mn-idx-title">
              Hands-on management,
              <br />
              real results.
            </h2>
            {" "}
            <div className="mn-idx__side">
              <p className="mn-idx__lead">
                We take a hands-on approach to managing and developing hotel operations.
              </p>
              {" "}
              <Link className="mn-pillars__link mn-focus" href="/gestao">
                Talk to Méritum{" "}
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </header>
          {" "}
          <div className="mn-idx__list">
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Operations management
              </span>
              {" "}
              <span className="mn-idx__text">
                We organize the hotel’s routines and standardize what needs to be standardized, without making the team rigid.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Sales management
              </span>
              {" "}
              <span className="mn-idx__text">
                We define the sales strategy, manage distribution across the right channels and support marketing to position the hotel where it deserves to be.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Costs and processes
              </span>
              {" "}
              <span className="mn-idx__text">
                We review operating costs carefully, adjust processes and give the owner the information they need to make confident decisions.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Hospitality and experience
              </span>
              {" "}
              <span className="mn-idx__text">
                We take care of guest service and build a service culture that shapes every moment of the guest experience.
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mn-pq" aria-labelledby="mn-pq-title">
        <div className="mn-pq__inner">
          <h2 className="mn-pq__title mn-rv" id="mn-pq-title">
            Who we work with
          </h2>
          {" "}
          <div className="mn-pq__body mn-rv">
            <p className="mn-pq__text">
              We work with independent hotels and hotel properties seeking professional management, operational organization and strategic support.
            </p>
            {" "}
            <Link className="mn-qs__link mn-focus" href="/gestao#pilares">
              See how we work{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mn-join" id="quero-a-meritum" aria-labelledby="mn-join-title">
        <figure className="mn-join__media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Garden and pool area at Hotel Colonial Iguaçu" />
        </figure>
        {" "}
        <div className="mn-join__panel">
          <div className="mn-join__content">
            <h2 className="mn-join__title" id="mn-join-title">
              Your hotel operation can go{" "}
              <em>
                further.
              </em>
            </h2>
            {" "}
            <p className="mn-join__text">
              Tell us a little about your hotel. Our team will analyze your situation and get back to you with a proposal designed for your business.
            </p>
            {" "}
            <form className="mn-join__form" noValidate>
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-nome">
                  Name
                </label>
                {" "}
                <input className="mn-join__input" id="mj-nome" name="nome" type="text" autoComplete="name" aria-invalid="false" aria-describedby="mj-nome-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-email">
                  Email
                </label>
                {" "}
                <input className="mn-join__input" id="mj-email" name="email" type="email" autoComplete="email" aria-invalid="false" aria-describedby="mj-email-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-whatsapp">
                  WhatsApp
                </label>
                {" "}
                <input className="mn-join__input" id="mj-whatsapp" name="whatsapp" type="tel" inputMode="numeric" autoComplete="tel" placeholder="(45) 99999 9999" maxLength={15} aria-invalid="false" aria-describedby="mj-whatsapp-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-hotel">
                  Hotel name
                </label>
                {" "}
                <input className="mn-join__input" id="mj-hotel" name="hotel" type="text" aria-invalid="false" aria-describedby="mj-hotel-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-cidade">
                  City
                </label>
                {" "}
                <input className="mn-join__input" id="mj-cidade" name="cidade" type="text" autoComplete="address-level2" aria-invalid="false" aria-describedby="mj-cidade-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-quartos">
                  Number of rooms
                </label>
                {" "}
                <select className="mn-join__input mn-join__select" id="mj-quartos" name="quartos" aria-invalid="false" aria-describedby="mj-quartos-err">
                  <option value="">
                    Select
                  </option>
                  {" "}
                  <option value="ate-20">
                    Up to 20
                  </option>
                  {" "}
                  <option value="21-50">
                    21 to 50
                  </option>
                  {" "}
                  <option value="51-100">
                    51 to 100
                  </option>
                  {" "}
                  <option value="100+">
                    More than 100
                  </option>
                </select>
              </div>
              {" "}
              <div className="mn-join__field mn-join__full">
                <label className="mn-join__label" htmlFor="mj-desafio">
                  What is your hotel’s biggest challenge today?
                </label>
                {" "}
                <textarea className="mn-join__input mn-join__textarea" id="mj-desafio" name="desafio" rows={2}></textarea>
              </div>
              {" "}
              <div className="mn-join__field mn-join__full">
                <label className="mn-join__check" htmlFor="mj-privacidade">
                  <input className="mn-join__box" id="mj-privacidade" name="privacidade" type="checkbox" aria-invalid="false" aria-describedby="mj-privacidade-err" />
                  {" "}
                  <span>
                    I agree to the{" "}
                    <a href="#" className="mn-join__link">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>
              {" "}
              <button type="submit" className="mn-join__submit mn-join__full">
                <span className="sc-interp">
                  I want to talk to Méritum
                </span>
              </button>
            </form>
            {" "}
            <div className="mn-join__status" role="status" aria-live="polite"></div>
          </div>
        </div>
      </section>
    </>
  );
}
