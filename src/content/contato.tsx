/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Link from "next/link";

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
              Contato
            </h1>
            {" "}
            <p className="ct-head__lead">
              Escolha o assunto para falar direto com quem pode ajudar.
            </p>
          </div>
          {" "}
          <nav className="ct-head__nav" aria-label="Assuntos">
            <a className="ct-link mn-focus" href="#proprietarios">
              Sou proprietário de hotel
            </a>
            {" "}
            <a className="ct-link mn-focus" href="#hospedes">
              Sou hóspede
            </a>
            {" "}
            <a className="ct-link mn-focus" href="#institucional">
              Institucional
            </a>
          </nav>
        </div>
      </section>
      <section className="ct-owners" id="proprietarios">
        <div className="ct__inner ct-grid">
          <div className="ct-owners__text ph-in">
            <p className="ct-eyebrow">
              Para proprietários
            </p>
            {" "}
            <h2 className="ct-owners__title">
              Vamos conversar sobre o seu hotel
            </h2>
            {" "}
            <p className="ct-owners__body">
              Gestão hoteleira ou arrendamento de ativos. Conte um pouco sobre o empreendimento e a nossa equipe retorna para agendar uma conversa. Toda troca inicial de informações é confidencial.
            </p>
            {" "}
            <Link className="ct-link mn-focus" href="/gestao">
              Conheça o modelo de gestão{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          {" "}
          <div className="ct-owners__panel mn-join__panel ph-in">
            <div className="mn-join__content">
              <p className="mn-join__text">
                Conte um pouco sobre o seu hotel. Nossa equipe analisa a sua realidade e retorna com uma proposta pensada para o seu negócio.
              </p>
              {" "}
              <form className="mn-join__form" noValidate>
                <div className="mn-join__field">
                  <label className="mn-join__label" htmlFor="mj-nome">
                    Nome
                  </label>
                  {" "}
                  <input className="mn-join__input" id="mj-nome" name="nome" type="text" autoComplete="name" aria-invalid="false" aria-describedby="mj-nome-err" />
                </div>
                {" "}
                <div className="mn-join__field">
                  <label className="mn-join__label" htmlFor="mj-email">
                    E-mail
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
                    Nome do hotel
                  </label>
                  {" "}
                  <input className="mn-join__input" id="mj-hotel" name="hotel" type="text" aria-invalid="false" aria-describedby="mj-hotel-err" />
                </div>
                {" "}
                <div className="mn-join__field">
                  <label className="mn-join__label" htmlFor="mj-cidade">
                    Cidade
                  </label>
                  {" "}
                  <input className="mn-join__input" id="mj-cidade" name="cidade" type="text" autoComplete="address-level2" aria-invalid="false" aria-describedby="mj-cidade-err" />
                </div>
                {" "}
                <div className="mn-join__field">
                  <label className="mn-join__label" htmlFor="mj-quartos">
                    Número de quartos
                  </label>
                  {" "}
                  <select className="mn-join__input mn-join__select" id="mj-quartos" name="quartos" aria-invalid="false" aria-describedby="mj-quartos-err">
                    <option value="">
                      Selecione
                    </option>
                    {" "}
                    <option value="ate-20">
                      Até 20
                    </option>
                    {" "}
                    <option value="21-50">
                      21 a 50
                    </option>
                    {" "}
                    <option value="51-100">
                      51 a 100
                    </option>
                    {" "}
                    <option value="100+">
                      Mais de 100
                    </option>
                  </select>
                </div>
                {" "}
                <div className="mn-join__field mn-join__full">
                  <label className="mn-join__label" htmlFor="mj-desafio">
                    Qual é hoje o maior desafio do seu hotel?
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
                      Concordo com a{" "}
                      <a href="#" className="mn-join__link">
                        Política de Privacidade
                      </a>
                    </span>
                  </label>
                </div>
                {" "}
                <button type="submit" className="mn-join__submit mn-join__full">
                  <span className="sc-interp">
                    Quero conversar com a Méritum
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
              Sou hóspede
            </h2>
            {" "}
            <p className="ct-sec__lead">
              Reservas, alterações e dúvidas sobre a estadia são atendidas direto pela equipe de cada propriedade.
            </p>
          </div>
          {" "}
          <div className="ct-rows">
            <div className="ct-row ph-in">
              <h3 className="ct-row__name">
                Hotel Colonial Iguaçu e Villa Colonial
              </h3>
              {" "}
              <div className="ct-row__contact">
                <p className="ct-row__label">
                  WhatsApp e telefone
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
                Falar no WhatsApp
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
                  WhatsApp e telefone
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
                Falar no WhatsApp
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
                  WhatsApp e central de reservas
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
                Falar no WhatsApp
              </a>
            </div>
          </div>
          {" "}
          <Link className="ct-link ct-guests__more mn-focus" href="/minha-reserva">
            Já tem uma reserva? Veja como consultar{" "}
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
