/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/home.tsx. Só os textos mudam. */
import Image from "next/image";
import Link from "@/components/LocaleLink";

export default function HomeContent() {
  return (
    <>
      <section id="quem-somos" className="mn-qs">
        <div className="mn-qs__inner">
          <p className="mn-qs__label mn-rv">
            Quiénes somos
          </p>
          {" "}
          <div className="mn-qs__body mn-rv">
            <p className="mn-qs__phrase">
              Méritum no es una cadena de hoteles. Es una administradora hotelera que desarrolla cada hotel de forma individual, respetando su identidad y fortaleciendo sus resultados.
            </p>
            {" "}
            <Link className="mn-qs__link mn-focus" href="/a-meritum">
              Conoce Méritum{" "}
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
              Nuestro portafolio
            </h2>
            {" "}
            <p className="mn-pf__sub">
              Las marcas que Méritum administra en Foz do Iguaçu, cada una con su identidad.
            </p>
          </header>
          {" "}
          <div className="mn-pf__grid">
            <Link className="mn-pf__item mn-pf__item--colonial mn-focus" href="/hotel-colonial-iguacu">
              <span className="mn-pf__media">
                <Image src="/assets/web/portfolio/foto-colonial.jpg" width={1600} height={1067} sizes="(max-width: 1023px) 100vw, 50vw" alt="Lobby del Hotel Colonial Iguaçu" loading="lazy" />
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
                    Recibiendo huéspedes desde
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    1,2 km
                  </span>
                  <span className="mn-pf__desc">
                    de la entrada del Parque Nacional do Iguaçu
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                En la Rodovia das Cataratas, km 20, en medio de la Mata Atlántica preservada. Piscina climatizada y piscina exterior, sendero ecológico, salones de eventos para hasta 180 personas y traslado gratuito al aeropuerto en las reservas directas.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-pf__item--pousada mn-focus" href="/pousada-cataratas">
              <span className="mn-pf__media">
                <Image src="/assets/pousada-cataratas-piscina.jpg" width={2576} height={1717} sizes="(max-width: 1023px) 100vw, 50vw" alt="Piscina de la Pousada Cataratas vista desde arriba, con sombrillas verdes" loading="lazy" style={{ objectPosition: "50% 70%" }} />
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
                    habitaciones
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    100 m
                  </span>
                  <span className="mn-pf__desc">
                    de la Avenida das Cataratas
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                En el corazón de Foz do Iguaçu, en la Rua Parigot de Souza, 180. Piscina, desayuno incluido, estacionamiento gratuito y recepción las 24 horas.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-pf__item--villa mn-focus" href="/villa-colonial">
              <span className="mn-pf__media">
                <Image src="/assets/villa-buffet-saladas.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Buffet de ensaladas del restaurante Villa Colonial" loading="lazy" />
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
                    comidas al día, todos los días
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    180
                  </span>
                  <span className="mn-pf__desc">
                    personas en eventos en el hotel
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                El restaurante del Hotel Colonial Iguaçu, con buffet de cocina regional e internacional, cenas temáticas y menús a la medida para eventos.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
                <span aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
            {" "}
            <Link className="mn-pf__item mn-pf__item--autopark mn-focus" href="/colonial-autopark">
              <span className="mn-pf__media">
                <Image src="/assets/autopark-fonte-araucaria.jpg" width={2000} height={1333} sizes="(max-width: 1023px) 100vw, 50vw" alt="Fuente y araucaria en la entrada del Colonial Autopark" loading="lazy" />
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
                    abierto todos los días
                  </span>
                </span>
                <span className="mn-pf__stat">
                  <span className="mn-pf__val">
                    Gratis
                  </span>
                  <span className="mn-pf__desc">
                    traslado de ida y vuelta al aeropuerto IGU
                  </span>
                </span>
              </span>
              {" "}
              <span className="mn-pf__text">
                Estacionamiento dentro del Hotel Colonial Iguaçu, en la Rodovia das Cataratas, muy cerca del Aeropuerto Internacional de Foz do Iguaçu, con espacio monitoreado.
              </span>
              {" "}
              <span className="mn-pf__link">
                Conocer{" "}
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
              Gestión práctica,
              <br />
              resultado real.
            </h2>
            {" "}
            <div className="mn-idx__side">
              <p className="mn-idx__lead">
                Actuamos de forma práctica en la gestión y el desarrollo de operaciones hoteleras.
              </p>
              {" "}
              <Link className="mn-pillars__link mn-focus" href="/gestao">
                Habla con Méritum{" "}
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
                Gestión operativa
              </span>
              {" "}
              <span className="mn-idx__text">
                Organizamos las rutinas del hotel y estandarizamos lo que necesita estandarizarse, sin quitarle flexibilidad al equipo.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Gestión comercial
              </span>
              {" "}
              <span className="mn-idx__text">
                Definimos la estrategia de ventas, cuidamos la distribución en los canales correctos y apoyamos el marketing para posicionar el hotel donde merece estar.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Costos y procesos
              </span>
              {" "}
              <span className="mn-idx__text">
                Analizamos los costos operativos con atención, ajustamos procesos y le damos al propietario la información que necesita para decidir con seguridad.
              </span>
            </Link>
            {" "}
            <Link className="mn-idx__row mn-focus" href="/gestao">
              <span className="mn-idx__name">
                Hospitalidad y experiencia
              </span>
              {" "}
              <span className="mn-idx__text">
                Cuidamos la atención y construimos una cultura de servicio que organiza cada momento de la experiencia del huésped.
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mn-pq" aria-labelledby="mn-pq-title">
        <div className="mn-pq__inner">
          <h2 className="mn-pq__title mn-rv" id="mn-pq-title">
            Para quién trabajamos
          </h2>
          {" "}
          <div className="mn-pq__body mn-rv">
            <p className="mn-pq__text">
              Trabajamos con hoteles independientes y establecimientos hoteleros que buscan gestión profesional, organización operativa y apoyo estratégico.
            </p>
            {" "}
            <Link className="mn-qs__link mn-focus" href="/gestao#pilares">
              Mira cómo trabajamos{" "}
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="mn-join" id="quero-a-meritum" aria-labelledby="mn-join-title">
        <figure className="mn-join__media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" alt="Jardín y área de la piscina del Hotel Colonial Iguaçu" />
        </figure>
        {" "}
        <div className="mn-join__panel">
          <div className="mn-join__content">
            <h2 className="mn-join__title" id="mn-join-title">
              Tu operación hotelera puede llegar{" "}
              <em>
                más lejos.
              </em>
            </h2>
            {" "}
            <p className="mn-join__text">
              Cuéntanos un poco sobre tu hotel. Nuestro equipo analiza tu realidad y te responde con una propuesta pensada para tu negocio.
            </p>
            {" "}
            <form className="mn-join__form" noValidate>
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-nome">
                  Nombre
                </label>
                {" "}
                <input className="mn-join__input" id="mj-nome" name="nome" type="text" autoComplete="name" aria-invalid="false" aria-describedby="mj-nome-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-email">
                  Correo electrónico
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
                  Nombre del hotel
                </label>
                {" "}
                <input className="mn-join__input" id="mj-hotel" name="hotel" type="text" aria-invalid="false" aria-describedby="mj-hotel-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-cidade">
                  Ciudad
                </label>
                {" "}
                <input className="mn-join__input" id="mj-cidade" name="cidade" type="text" autoComplete="address-level2" aria-invalid="false" aria-describedby="mj-cidade-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-quartos">
                  Número de habitaciones
                </label>
                {" "}
                <select className="mn-join__input mn-join__select" id="mj-quartos" name="quartos" aria-invalid="false" aria-describedby="mj-quartos-err">
                  <option value="">
                    Selecciona
                  </option>
                  {" "}
                  <option value="ate-20">
                    Hasta 20
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
                    Más de 100
                  </option>
                </select>
              </div>
              {" "}
              <div className="mn-join__field mn-join__full">
                <label className="mn-join__label" htmlFor="mj-desafio">
                  ¿Cuál es hoy el mayor desafío de tu hotel?
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
                    Acepto la{" "}
                    <a href="#" className="mn-join__link">
                      Política de Privacidad
                    </a>
                  </span>
                </label>
              </div>
              {" "}
              <button type="submit" className="mn-join__submit mn-join__full">
                <span className="sc-interp">
                  Quiero conversar con Méritum
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
