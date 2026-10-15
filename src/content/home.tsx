/* Gerado a partir do export do Claude Design (tools/convert.py). */
import Image from "next/image";
import Link from "@/components/LocaleLink";

export default function HomeContent() {
  return (
    <>
      <section id="quem-somos" className="mn-qs">
        <div className="mn-qs__inner">
          <p className="mn-qs__label mn-rv">
            Quem somos
          </p>
          {" "}
          <div className="mn-qs__body mn-rv">
            <p className="mn-qs__phrase">
              A Méritum não é uma rede de hotéis. É uma gestora hoteleira que desenvolve cada hotel de forma individual, respeitando sua identidade e fortalecendo seus resultados.
            </p>
            {" "}
            <Link className="mn-qs__link mn-focus" href="/a-meritum">
              Conheça a Méritum{" "}
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
              Nosso portfólio
            </h2>
            {" "}
            <p className="mn-pf__sub">
              As marcas que a Méritum administra em Foz do Iguaçu, cada uma com sua identidade.
            </p>
          </header>
          {" "}
          <div className="mn-pf__grid">
            <Link className="mn-pf__item mn-pf__item--colonial mn-focus" href="/hotel-colonial-iguacu">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Lobby do Hotel Colonial Iguaçu" loading="lazy" />
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
                    Recebendo hóspedes desde
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    1,2 km
                  </span>
                  <span className="mn-pf__desc">
                    da entrada do Parque Nacional do Iguaçu
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Na Rodovia das Cataratas, km 20, em meio à Mata Atlântica preservada. Piscina aquecida e piscina externa, trilha ecológica, salas de eventos para até 180 pessoas e traslado gratuito ao aeroporto nas reservas diretas.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-pf__item--pousada mn-focus" href="/pousada-cataratas">
              <span className="mn-pf__media">
                <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina da Pousada Cataratas vista de cima, com guarda-sóis verdes" loading="lazy" style={{ objectPosition: "50% 70%" }} />
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
                    apartamentos
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    100 m
                  </span>
                  <span className="mn-pf__desc">
                    da Avenida das Cataratas
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                No coração de Foz do Iguaçu, na Rua Parigot de Souza, 180. Piscina, café da manhã incluso, estacionamento gratuito e recepção 24 horas.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-pf__item--villa mn-focus" href="/villa-colonial">
              <span className="mn-pf__media">
                <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de saladas do restaurante Villa Colonial" loading="lazy" />
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
                    refeições por dia, todos os dias
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    180
                  </span>
                  <span className="mn-pf__desc">
                    pessoas em eventos no hotel
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                O restaurante do Hotel Colonial Iguaçu, com buffet de culinária regional e internacional, jantares temáticos e cardápios sob medida para eventos.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-pf__item--autopark mn-focus" href="/colonial-autopark">
              <span className="mn-pf__media">
                <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fonte e araucária na entrada do Colonial Autopark" loading="lazy" />
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
                    aberto todos os dias
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    Grátis
                  </span>
                  <span className="mn-pf__desc">
                    traslado de ida e volta ao aeroporto IGU
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Estacionamento dentro do Hotel Colonial Iguaçu, na Rodovia das Cataratas, pertinho do Aeroporto Internacional de Foz do Iguaçu, com vaga monitorada.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conhecer{" "}
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
              Gestão prática,
              <br />
              resultado real.
            </h2>
            {" "}
            <div className="mn-idx__side">
              <p className="mn-idx__lead">
                Atuamos de forma prática na gestão e no desenvolvimento de operações hoteleiras.
              </p>
              {" "}
              <Link className="mn-pillars__link mn-focus" href="/gestao">
                Fale com a Méritum{" "}
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
                Gestão operacional
              </span>
              {" "}
              <span className="mn-idx__text">
                Organizamos as rotinas do hotel e padronizamos o que precisa ser padronizado, sem engessar a equipe.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Gestão comercial
              </span>
              {" "}
              <span className="mn-idx__text">
                Definimos a estratégia de vendas, cuidamos da distribuição nos canais certos e apoiamos o marketing para posicionar o hotel onde ele merece estar.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Custos e processos
              </span>
              {" "}
              <span className="mn-idx__text">
                Lemos os custos operacionais com atenção, ajustamos processos e damos ao proprietário a informação que ele precisa para decidir com segurança.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Hospitalidade e experiência
              </span>
              {" "}
              <span className="mn-idx__text">
                Cuidamos do atendimento e construímos uma cultura de serviço que organiza cada momento da experiência do hóspede.
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mn-pq" aria-labelledby="mn-pq-title">
        <div className="mn-pq__inner">
          <h2 className="mn-pq__title mn-rv" id="mn-pq-title">
            Para quem atuamos
          </h2>
          {" "}
          <div className="mn-pq__body mn-rv">
            <p className="mn-pq__text">
              Atuamos junto a hotéis independentes e empreendimentos hoteleiros que buscam gestão profissional, organização operacional e apoio estratégico.
            </p>
            {" "}
            <Link className="mn-qs__link mn-focus" href="/gestao#pilares">
              Veja como trabalhamos{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mn-join" id="quero-a-meritum" aria-labelledby="mn-join-title">
        <figure className="mn-join__media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardim e área da piscina do Hotel Colonial Iguaçu" />
        </figure>
        {" "}
        <div className="mn-join__panel">
          <div className="mn-join__content">
            <h2 className="mn-join__title" id="mn-join-title">
              Sua operação hoteleira pode ir{" "}
              <em>
                mais longe.
              </em>
            </h2>
            {" "}
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
      </section>
    </>
  );
}
