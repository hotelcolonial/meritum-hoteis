/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function GestaoHero({ children }: { children: ReactNode }) {
  return (
    <section className="mn-hh mn-hh--sub" style={{ position: "relative", height: "64svh", minHeight: "520px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/colonial-pergola-piscina.jpg", width: 2576, height: 1840 }} mobile={HERO_MOBILE.pergola} eager className="mn-hh__img" alt="Pérgola com mesa de bilhar e piscina ao fundo no Hotel Colonial Iguaçu" style={{ objectPosition: "50% 40%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Hotel Colonial Iguaçu, Foz do Iguaçu
      </p>
      <div className="gs-hero__content">
        <h1 className="gs-hero__title">
          Gestão hoteleira não é
          <br />
          <em>
            padronização.
          </em>
        </h1>
        {" "}
        <p className="gs-hero__lead">
          Cada hotel possui uma história, uma estrutura, uma equipe e um mercado distintos. Nossa atuação parte da realidade do empreendimento e respeita a sua identidade.
        </p>
        {" "}
        <a className="gs-hero__cta mn-focus" href="#formulario">
          Fale com a Méritum{" "}
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
            O que fazemos
          </h2>
          {" "}
          <div className="gx__list">
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Gestão Operacional
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Organizamos as rotinas do hotel e padronizamos o que precisa ser padronizado, sem engessar a equipe. Acompanhamos a operação de perto, todos os dias.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Gestão Comercial
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Definimos a estratégia de vendas, cuidamos da distribuição nos canais certos e apoiamos o marketing para posicionar o hotel onde ele merece estar.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Custos e Processos
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Lemos os custos operacionais com atenção, ajustamos processos e damos ao proprietário a informação que ele precisa para decidir com segurança.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Hospitalidade e Experiência
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Cuidamos do atendimento e construímos uma cultura de serviço que organiza cada momento da experiência do hóspede.
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
              Como{" "}
              <em>
                atuamos
              </em>
            </h2>
            {" "}
            <p className="gs-method__lead">
              Nossa metodologia parte do entendimento da realidade do hotel e evolui de forma gradual, sem rupturas artificiais.
            </p>
          </header>
          {" "}
          <div className="ix-list ix-list--dark gs-method__ix">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Diagnóstico
              </h3>
              <p className="ix-row__text">
                Entendimento da operação, estrutura, equipe e mercado.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Organização
              </h3>
              <p className="ix-row__text">
                Ajustes de processos, rotinas e fluxos operacionais.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Desenvolvimento
              </h3>
              <p className="ix-row__text">
                Evolução gradual da gestão, sem rupturas artificiais ou promessas irreais.
              </p>
            </div>
          </div>
          {" "}
          <div className="ix-list ix-list--dark gs-method__ix">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Transparência como norma
              </h3>
              <p className="ix-row__text">
                Não acreditamos em gestão de caixa preta. O proprietário tem acesso aos indicadores do negócio e participa das decisões estratégicas.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Tecnologia sob medida
              </h3>
              <p className="ix-row__text">
                Não impomos softwares para benefício de escala própria. Auditamos e selecionamos as ferramentas que melhor atendem a realidade específica do seu hotel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gs-models" id="modelos">
        <div className="gs-models__inner">
          <h2 className="gs-models__title ph-in">
            Modelos de{" "}
            <em>
              atuação
            </em>
          </h2>
          {" "}
          <p className="gs-models__lead ph-in">
            Na Méritum, a prioridade é a valorização do ativo imobiliário e a margem líquida da unidade gerida.
          </p>
          {" "}
          <div className="gs-models__grid">
            <article className="gs-model ph-in">
              <h3>
                Gestão hoteleira
              </h3>
              {" "}
              <p>
                A Méritum assume a gestão do hotel e responde pela operação: organiza processos, estrutura rotinas e acompanha o dia a dia, enquanto o proprietário mantém a propriedade e a identidade do negócio.
              </p>
            </article>
            {" "}
            <article className="gs-model ph-in">
              <h3>
                Arrendamento de ativos
              </h3>
              {" "}
              <p>
                A Méritum assume a gestão operacional completa do hotel, organizando processos e garantindo a operação diária. O proprietário recebe uma remuneração estável, sem se preocupar com a gestão do dia a dia.
              </p>
              {" "}
              <p className="gs-model__case">
                Exemplo real: o Hotel Colonial Iguaçu é operado pela Méritum neste modelo.{" "}
                <Link className="gs-model__caselink mn-focus" href="/hotel-colonial-iguacu">
                  Conheça o hotel{" "}
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
                Atuamos com
              </h3>
              {" "}
              <p className="gs-fit2__item">
                Hotéis independentes
              </p>
              {" "}
              <p className="gs-fit2__item">
                Respeito à identidade
              </p>
              {" "}
              <p className="gs-fit2__item">
                Apoio estratégico
              </p>
            </div>
            {" "}
            <div className="gs-fit2__col">
              <h3 className="gs-fit2__title">
                Não atuamos com
              </h3>
              {" "}
              <p className="gs-fit2__item">
                Modelos de rede
              </p>
              {" "}
              <p className="gs-fit2__item">
                Consultoria remota
              </p>
              {" "}
              <p className="gs-fit2__item">
                Promessas irreais
              </p>
            </div>
          </div>
        </div>
      </section>
      <span id="formulario" className="gx-anchor" aria-hidden="true"></span>
      <section className="mn-join" id="fale-conosco" aria-labelledby="mn-join-title">
        <figure className="mn-join__media">
          <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrada do Hotel Colonial Iguaçu" />
        </figure>
        {" "}
        <div className="mn-join__panel">
          <div className="mn-join__content">
            <h2 className="mn-join__title" id="mn-join-title">
              Vamos conversar sobre o{" "}
              <em>
                seu hotel.
              </em>
            </h2>
            {" "}
            <p className="mn-join__text">
              Cada projeto começa com o entendimento da realidade do hotel. Conte um pouco sobre o seu empreendimento e agendamos uma primeira conversa.
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
                <label className="mn-join__label" htmlFor="mj-cargo">
                  Cargo ou função
                </label>
                {" "}
                <input className="mn-join__input" id="mj-cargo" name="cargo" type="text" autoComplete="organization-title" aria-invalid="false" aria-describedby="mj-cargo-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-email">
                  E-mail corporativo
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
              <div className="mn-join__field mn-join__full">
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
                  Solicitar reunião técnica
                </span>
              </button>
              {" "}
              <div className="mn-join__full gs-join__notes">
                <p className="gs-join__note">
                  Não fazemos propostas comerciais sem diagnóstico prévio. A partir do seu contato, agendamos uma visita técnica ao empreendimento.
                </p>
                {" "}
                <p className="gs-join__note">
                  Compromisso com o sigilo: toda troca inicial de informações é protegida por confidencialidade. Entendemos a sensibilidade dos dados operacionais e financeiros da hotelaria.
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
