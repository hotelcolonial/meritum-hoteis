/* Gerado a partir do export do Claude Design (tools/convert.py). */
/* Versão em espanhol de src/content/gestao.tsx. Só os textos mudam. */
import type { ReactNode } from "react";
import Image from "next/image";
import HeroImage, { HERO_MOBILE } from "@/components/HeroImage";
import Link from "@/components/LocaleLink";

export function GestaoHero({ children }: { children: ReactNode }) {
  return (
    <section className="mn-hh mn-hh--sub" style={{ position: "relative", height: "64svh", minHeight: "520px", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      <HeroImage desktop={{ src: "/assets/colonial-pergola-piscina.jpg", width: 2576, height: 1840 }} mobile={HERO_MOBILE.pergola} eager className="mn-hh__img" alt="Pérgola con mesa de billar y piscina al fondo en el Hotel Colonial Iguaçu" style={{ objectPosition: "50% 40%" }} />
      <div className="mn-hh__grad mn-hh__grad--top" aria-hidden="true"></div>
      <div className="mn-hh__grad mn-hh__grad--bottom" aria-hidden="true"></div>
      <p className="mn-hh__caption">
        Hotel Colonial Iguaçu, Foz do Iguaçu
      </p>
      <div className="gs-hero__content">
        <h1 className="gs-hero__title">
          La gestión hotelera no es
          <br />
          <em>
            estandarización.
          </em>
        </h1>
        {" "}
        <p className="gs-hero__lead">
          Cada hotel tiene una historia, una estructura, un equipo y un mercado distintos. Nuestro trabajo parte de la realidad del establecimiento y respeta su identidad.
        </p>
        {" "}
        <a className="gs-hero__cta mn-focus" href="#formulario">
          Habla con Méritum{" "}
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
            Lo que hacemos
          </h2>
          {" "}
          <div className="gx__list">
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Gestión Operativa
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Organizamos las rutinas del hotel y estandarizamos lo que necesita estandarizarse, sin quitarle flexibilidad al equipo. Seguimos la operación de cerca, todos los días.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Gestión Comercial
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Definimos la estrategia de ventas, cuidamos la distribución en los canales correctos y apoyamos el marketing para posicionar el hotel donde merece estar.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Costos y Procesos
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Analizamos los costos operativos con atención, ajustamos procesos y le damos al propietario la información que necesita para decidir con seguridad.
                </p>
              </div>
            </div>
            {" "}
            <div className="gx-row ph-in">
              <h3 className="gx-row__name">
                Hospitalidad y Experiencia
              </h3>
              {" "}
              <div className="gx-row__body">
                <p className="gx-row__text">
                  Cuidamos la atención y construimos una cultura de servicio que organiza cada momento de la experiencia del huésped.
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
              Cómo{" "}
              <em>
                trabajamos
              </em>
            </h2>
            {" "}
            <p className="gs-method__lead">
              Nuestra metodología parte del entendimiento de la realidad del hotel y evoluciona de forma gradual, sin rupturas artificiales.
            </p>
          </header>
          {" "}
          <div className="ix-list ix-list--dark gs-method__ix">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Diagnóstico
              </h3>
              <p className="ix-row__text">
                Entendimiento de la operación, la estructura, el equipo y el mercado.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Organización
              </h3>
              <p className="ix-row__text">
                Ajustes de procesos, rutinas y flujos operativos.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Desarrollo
              </h3>
              <p className="ix-row__text">
                Evolución gradual de la gestión, sin rupturas artificiales ni promesas irreales.
              </p>
            </div>
          </div>
          {" "}
          <div className="ix-list ix-list--dark gs-method__ix">
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Transparencia como norma
              </h3>
              <p className="ix-row__text">
                No creemos en una gestión de caja negra. El propietario tiene acceso a los indicadores del negocio y participa en las decisiones estratégicas.
              </p>
            </div>
            {" "}
            <div className="ix-row ph-in">
              <h3 className="ix-row__name">
                Tecnología a la medida
              </h3>
              <p className="ix-row__text">
                No imponemos software en beneficio de nuestra propia escala. Auditamos y seleccionamos las herramientas que mejor se adaptan a la realidad específica de tu hotel.
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
              trabajo
            </em>
          </h2>
          {" "}
          <p className="gs-models__lead ph-in">
            En Méritum, la prioridad es la valorización del activo inmobiliario y el margen neto de la unidad administrada.
          </p>
          {" "}
          <div className="gs-models__grid">
            <article className="gs-model ph-in">
              <h3>
                Gestión hotelera
              </h3>
              {" "}
              <p>
                Méritum asume la gestión del hotel y responde por la operación: organiza procesos, estructura rutinas y sigue el día a día, mientras el propietario conserva la propiedad y la identidad del negocio.
              </p>
            </article>
            {" "}
            <article className="gs-model ph-in">
              <h3>
                Arrendamiento de activos
              </h3>
              {" "}
              <p>
                Méritum asume la gestión operativa completa del hotel, organizando procesos y garantizando la operación diaria. El propietario recibe una remuneración estable, sin preocuparse por la gestión del día a día.
              </p>
              {" "}
              <p className="gs-model__case">
                Ejemplo real: el Hotel Colonial Iguaçu es operado por Méritum bajo este modelo.{" "}
                <Link className="gs-model__caselink mn-focus" href="/hotel-colonial-iguacu">
                  Conoce el hotel{" "}
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
                Trabajamos con
              </h3>
              {" "}
              <p className="gs-fit2__item">
                Hoteles independientes
              </p>
              {" "}
              <p className="gs-fit2__item">
                Respeto a la identidad
              </p>
              {" "}
              <p className="gs-fit2__item">
                Apoyo estratégico
              </p>
            </div>
            {" "}
            <div className="gs-fit2__col">
              <h3 className="gs-fit2__title">
                No trabajamos con
              </h3>
              {" "}
              <p className="gs-fit2__item">
                Modelos de cadena
              </p>
              {" "}
              <p className="gs-fit2__item">
                Consultoría remota
              </p>
              {" "}
              <p className="gs-fit2__item">
                Promesas irreales
              </p>
            </div>
          </div>
        </div>
      </section>
      <span id="formulario" className="gx-anchor" aria-hidden="true"></span>
      <section className="mn-join" id="fale-conosco" aria-labelledby="mn-join-title">
        <figure className="mn-join__media">
          <Image src="/assets/autopark-entrada-hotel.jpg" width={2000} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" alt="Entrada del Hotel Colonial Iguaçu" />
        </figure>
        {" "}
        <div className="mn-join__panel">
          <div className="mn-join__content">
            <h2 className="mn-join__title" id="mn-join-title">
              Hablemos de{" "}
              <em>
                tu hotel.
              </em>
            </h2>
            {" "}
            <p className="mn-join__text">
              Cada proyecto empieza con el entendimiento de la realidad del hotel. Cuéntanos un poco sobre tu establecimiento y agendamos una primera conversación.
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
                <label className="mn-join__label" htmlFor="mj-cargo">
                  Cargo o función
                </label>
                {" "}
                <input className="mn-join__input" id="mj-cargo" name="cargo" type="text" autoComplete="organization-title" aria-invalid="false" aria-describedby="mj-cargo-err" />
              </div>
              {" "}
              <div className="mn-join__field">
                <label className="mn-join__label" htmlFor="mj-email">
                  Correo electrónico corporativo
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
              <div className="mn-join__field mn-join__full">
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
                  Solicitar reunión técnica
                </span>
              </button>
              {" "}
              <div className="mn-join__full gs-join__notes">
                <p className="gs-join__note">
                  No hacemos propuestas comerciales sin un diagnóstico previo. A partir de tu contacto, agendamos una visita técnica al establecimiento.
                </p>
                {" "}
                <p className="gs-join__note">
                  Compromiso con la discreción: todo intercambio inicial de información está protegido por confidencialidad. Entendemos la sensibilidad de los datos operativos y financieros de la hotelería.
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
