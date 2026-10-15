/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em inglês de src/content/contato.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Link from "@/components/LocaleLink";

export function ContatoHero({ children }: { children: ReactNode }) {
  return (
    <section style={{ position: "relative", height: "auto", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      {children}
    </section>
  );
}

export default function ContatoContent() {
  return (
    <>
      <section className="ct-head">
        <div className="ct__inner">
          <div className="ct-grid">
            <h1 className="ct-head__title">
              Contact
            </h1>
            {" "}
            <p className="ct-head__lead">
              Choose a topic to talk directly with the people who can help.
            </p>
          </div>
          {" "}
          <nav className="ct-head__nav" aria-label="Topics">
            <a className="ct-link mn-focus" href="#proprietarios">
              I am a hotel owner
            </a>
            {" "}
            <a className="ct-link mn-focus" href="#hospedes">
              I am a guest
            </a>
            {" "}
            <a className="ct-link mn-focus" href="#institucional">
              Corporate
            </a>
          </nav>
        </div>
      </section>
      <section className="ct-owners" id="proprietarios">
        <div className="ct__inner ct-grid">
          <div className="ct-owners__text ph-in">
            <p className="ct-eyebrow">
              For owners
            </p>
            {" "}
            <h2 className="ct-owners__title">
              Let’s talk about your hotel
            </h2>
            {" "}
            <p className="ct-owners__body">
              Hotel management or asset leasing. Tell us a little about your property and our team will get back to you to schedule a conversation. All initial exchanges of information are confidential.
            </p>
            {" "}
            <Link className="ct-link mn-focus" href="/gestao">
              Discover our management model{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          {" "}
          <div className="ct-owners__panel mn-join__panel ph-in">
            <div className="mn-join__content">
              <p className="mn-join__text">
                Tell us a little about your hotel. Our team will look at your situation and get back to you with a proposal designed for your business.
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
        </div>
      </section>
      <section className="ct-guests" id="hospedes">
        <div className="ct__inner">
          <div className="ct-grid">
            <h2 className="ct-sec__title">
              I am a guest
            </h2>
            {" "}
            <p className="ct-sec__lead">
              Reservations, changes and questions about your stay are handled directly by each property’s team.
            </p>
          </div>
          {" "}
          <div className="ct-rows">
            <div className="ct-row ph-in">
              <h3 className="ct-row__name">
                Hotel Colonial Iguaçu and Villa Colonial
              </h3>
              {" "}
              <div className="ct-row__contact">
                <p className="ct-row__label">
                  WhatsApp and phone
                </p>
                {" "}
                <a className="ct-row__tel mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                  0800 819 1993
                </a>
                {" "}
                <a className="ct-row__mail mn-focus" href="mailto:reservas@hotelcolonialfoz.com.br">
                  reservas@hotelcolonialfoz.com.br
                </a>
              </div>
              {" "}
              <a className="ct-row__btn mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
            {" "}
            <div className="ct-row ph-in">
              <h3 className="ct-row__name">
                Pousada Cataratas
              </h3>
              {" "}
              <div className="ct-row__contact">
                <p className="ct-row__label">
                  WhatsApp and phone
                </p>
                {" "}
                <a className="ct-row__tel mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                  0800 002 9215
                </a>
                {" "}
                <a className="ct-row__mail mn-focus" href="mailto:reservas@pousadacataratas.com.br">
                  reservas@pousadacataratas.com.br
                </a>
              </div>
              {" "}
              <a className="ct-row__btn mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
            {" "}
            <div className="ct-row ph-in">
              <h3 className="ct-row__name">
                Colonial Autopark
              </h3>
              {" "}
              <div className="ct-row__contact">
                <p className="ct-row__label">
                  WhatsApp and reservations center
                </p>
                {" "}
                <a className="ct-row__tel mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                  0800 819 1993
                </a>
                {" "}
                <a className="ct-row__tel mn-focus" href="tel:+554535297711">
                  (45) 3529 7711
                </a>
                {" "}
                <a className="ct-row__mail mn-focus" href="mailto:reservas@hotelcolonialfoz.com.br">
                  reservas@hotelcolonialfoz.com.br
                </a>
              </div>
              {" "}
              <a className="ct-row__btn mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <Link className="ct-link ct-guests__more mn-focus" href="/minha-reserva">
            Already have a reservation? See how to look it up{" "}
            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
      <section className="ct-inst" id="institucional">
        <div className="ct__inner ct-grid">
          <h2 className="ct-sec__title">
            Méritum Hotéis
          </h2>
          {" "}
          <div className="ct-inst__body">
            <p className="ct-inst__addr">
              Rodovia BR-469, 11237, Cataratas
              <br />
              Foz do Iguaçu, PR, 85853-881
            </p>
            {" "}
            <a className="ct-row__mail ct-inst__mail mn-focus" href="mailto:contato@meritumhoteis.com.br">
              contato@meritumhoteis.com.br
            </a>
            {" "}
          </div>
        </div>
      </section>
    </>
  );
}
