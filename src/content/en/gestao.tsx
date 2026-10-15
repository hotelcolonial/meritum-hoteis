/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/gestao.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function GestaoHero({ children }: { children: ReactNode }) {
  return (
    <section className="mn-hh mn-hh--sub" style={{ position: "relative", height: "64svh", minHeight: "520px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/colonial-pergola-piscina.jpg", width: 2576, height: 1840 }} mobile={HERO_MOBILE.pergola} eager className="mn-hh__img" alt="Pergola with a pool table and the pool in the background at Hotel Colonial Iguaçu" style={{ objectPosition: "50% 40%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Hotel Colonial Iguaçu, Foz do Iguaçu
      </p>
      <div className="gs-hero__content">
        <h1 className="gs-hero__title">
          Hotel management is not
          <br />
          <em>
            standardization.
          </em>
        </h1>
        {" "}
        <p className="gs-hero__lead">
          Every hotel has its own history, structure, team and market. Our work starts from the reality of your property and respects its identity.
        </p>
        {" "}
        <a className="gs-hero__cta mn-focus" href="#formulario">
          Talk to Méritum{" "}
          <span aria-hidden="true">
            →
          </span>
        </a>
      </div>
      {children}
    </section>
  );
}

export default function GestaoContent() {
  return (
    <>
      <section className="gx gx--white" id="pilares" aria-labelledby="gx-pilares-title">
        <div className="gx__inner">
          <h2 className="gx__title ph-in" id="gx-pilares-title">
            What we do
          </h2>
          {" "}
          <div className="gx__list">
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Operations Management
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  We organize the hotel’s routines and standardize what needs to be standardized, without making the team rigid. We follow the operation closely, every day.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Sales Management
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  We define the sales strategy, manage distribution across the right channels and support marketing to position the hotel where it deserves to be.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Costs and Processes
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  We review operating costs carefully, adjust processes and give the owner the information they need to make confident decisions.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Hospitality and Experience
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  We take care of guest service and build a service culture that shapes every moment of the guest experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gs-method" id="como-atuamos">
        <div className="gs-method__inner">
          <header className="gs-method__head ph-in">
            <h2 className="gs-method__title">
              How we{" "}
              <em>
                work
              </em>
            </h2>
            {" "}
            <p className="gs-method__lead">
              Our methodology starts from an understanding of the hotel’s reality and evolves gradually, without artificial disruptions.
            </p>
          </header>
          {" "}
          <div className="ix-list ix-list--dark gs-method__ix">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Assessment
              </h3>
              <p className="ix-row__text">
                Understanding the operation, structure, team and market.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Organization
              </h3>
              <p className="ix-row__text">
                Adjustments to processes, routines and operational workflows.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Development
              </h3>
              <p className="ix-row__text">
                Gradual evolution of management, without artificial disruptions or unrealistic promises.
              </p>
            </div>
          </div>
          {" "}
          <div className="ix-list ix-list--dark gs-method__ix">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Transparency as standard
              </h3>
              <p className="ix-row__text">
                We do not believe in black box management. The owner has access to the business indicators and takes part in strategic decisions.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Tailored technology
              </h3>
              <p className="ix-row__text">
                We do not impose software to serve our own scale. We audit and select the tools that best fit the specific reality of your hotel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gs-models" id="modelos">
        <div className="gs-models__inner">
          <h2 className="gs-models__title ph-in">
            Engagement{" "}
            <em>
              models
            </em>
          </h2>
          {" "}
          <p className="gs-models__lead ph-in">
            At Méritum, the priority is increasing the value of the real estate asset and the net margin of the managed property.
          </p>
          {" "}
          <div className="gs-models__grid">
            <article className="gs-model ph-in">
              <h3>
                Hotel management
              </h3>
              {" "}
              <p>
                Méritum takes over the management of the hotel and answers for the operation: it organizes processes, structures routines and oversees day-to-day activities, while the owner retains ownership and the identity of the business.
              </p>
            </article>
            {" "}
            <article className="gs-model ph-in">
              <h3>
                Asset leasing
              </h3>
              {" "}
              <p>
                Méritum takes over full operational management of the hotel, organizing processes and ensuring daily operations. The owner receives a stable return, without worrying about day-to-day management.
              </p>
              {" "}
              <p className="gs-model__case">
                A real example: Hotel Colonial Iguaçu is operated by Méritum under this model.{" "}
                <Link className="gs-model__caselink mn-focus" href="/hotel-colonial-iguacu">
                  Discover the hotel{" "}
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </p>
            </article>
          </div>
          {" "}
          <div className="gs-fit2 ph-in">
            <div className="gs-fit2__col">
              <h3 className="gs-fit2__title">
                We work with
              </h3>
              {" "}
              <p className="gs-fit2__item">
                Independent hotels
              </p>
              {" "}
              <p className="gs-fit2__item">
                Respect for identity
              </p>
              {" "}
              <p className="gs-fit2__item">
                Strategic support
              </p>
            </div>
            {" "}
            <div className="gs-fit2__col">
              <h3 className="gs-fit2__title">
                We do not work with
              </h3>
              {" "}
              <p className="gs-fit2__item">
                Chain models
              </p>
              {" "}
              <p className="gs-fit2__item">
                Remote consulting
              </p>
              {" "}
              <p className="gs-fit2__item">
                Unrealistic promises
              </p>
            </div>
          </div>
        </div>
      </section>
      <span id="formulario" className="gx-anchor" aria-hidden="true"></span>
      <section className="mn-join" id="fale-conosco" aria-labelledby="mn-join-title">
        <figure className="mn-join__media">
          <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrance of Hotel Colonial Iguaçu" />
        </figure>
        {" "}
        <div className="mn-join__panel">
          <div className="mn-join__content">
            <h2 className="mn-join__title" id="mn-join-title">
              Let’s talk about{" "}
              <em>
                your hotel.
              </em>
            </h2>
            {" "}
            <p className="mn-join__text">
              Every project begins with understanding the hotel’s reality. Tell us a little about your property and we will schedule an initial conversation.
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
                <label className="mn-join__label" htmlFor="mj-cargo">
                  Job title or role
                </label>
                {" "}
                <input className="mn-join__input" id="mj-cargo" name="cargo" type="text" autoComplete="organization-title" aria-invalid="false" aria-describedby="mj-cargo-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-email">
                  Work email
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
              <div className="mn-join__field mn-join__full">
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
                  Request a technical meeting
                </span>
              </button>
              {" "}
              <div className="mn-join__full gs-join__notes">
                <p className="gs-join__note">
                  We do not make commercial proposals without a prior assessment. Once you get in touch, we will schedule a technical visit to your property.
                </p>
                {" "}
                <p className="gs-join__note">
                  Commitment to confidentiality: all initial exchanges of information are protected by confidentiality. We understand how sensitive operational and financial data are in the hotel industry.
                </p>
              </div>
            </form>
            {" "}
            <div className="mn-join__status" role="status" aria-live="polite"></div>
          </div>
        </div>
      </section>
    </>
  );
}
