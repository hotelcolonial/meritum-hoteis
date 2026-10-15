/* Gerado a partir do export do Claude Design (tools/convert.py). */
import type { ReactNode } from "react";
import Image from "next/image";

export function BoraDeNovoHero({ children }: { children: ReactNode }) {
  return (
    <section style={{ position: "relative", height: "auto", background: "rgb(5, 39, 68)", overflow: "hidden" }}>
      {children}
    </section>
  );
}

export default function BoraDeNovoContent() {
  return (
    <>
      <section className="bn-hero">
        <figure className="bn-hero__media">
          <Image src="/assets/web/join-hotel-colonial.jpg" width={1024} height={682} sizes="(max-width: 1023px) 100vw, 50vw" preload fetchPriority="high" alt="Piscina cercada de jardins ao entardecer" />
        </figure>
        {" "}
        <div className="bn-hero__text">
          <p className="bn-hero__kicker">
            Programa de fidelidade Méritum Hotéis
          </p>
          {" "}
          <h1 className="bn-hero__title">
            Bora de{" "}
            <em>
              novo?
            </em>
          </h1>
          {" "}
          <p className="bn-hero__lead">
            Quem já se hospedou em uma propriedade Méritum tem vantagens exclusivas para voltar.
          </p>
        </div>
      </section>
      <section className="bn-perks">
        <div className="bn-perks__inner bn-how2">
          <h2 className="bn-how2__title ph-in">
            Como funciona
          </h2>
          {" "}
          <div className="bn-how2__body ph-in">
            <p className="bn-step">
              <span className="bn-step__n">
                1
              </span>
              Você já se hospedou em uma propriedade Méritum.
            </p>
            {" "}
            <p className="bn-step">
              <span className="bn-step__n">
                2
              </span>
              Na próxima reserva, fale direto com a propriedade pelos canais oficiais e diga que quer usar o Bora de Novo.
            </p>
            {" "}
            <p className="bn-step">
              <span className="bn-step__n">
                3
              </span>
              A equipe confirma a sua hospedagem anterior por CPF, e-mail, telefone ou nome do titular e aplica as condições especiais.
            </p>
            {" "}
            <p className="bn-perks__note ph-in">
              O programa não é cumulativo com pacotes, feriados, promoções sazonais ou outras condições especiais.
            </p>
          </div>
        </div>
      </section>
      <section className="bn-how">
        <div className="bn-how__inner">
          <h2 className="bn-how__title ph-in">
            Pronto para{" "}
            <em>
              voltar?
            </em>
          </h2>
          {" "}
          <div className="bn-how__side ph-in">
            <p className="bn-how__text">
              Entre em contato pelos canais oficiais da propriedade onde você se hospedou, informe que deseja aproveitar o Bora de Novo e confira as condições disponíveis para a sua próxima estadia.
            </p>
            {" "}
            <div className="bn-how__btns">
              <a className="bn-how__btn mn-focus" href="https://wa.me/558008191993" target="_blank" rel="noopener">
                WhatsApp Hotel Colonial
              </a>
              {" "}
              <a className="bn-how__btn mn-focus" href="https://wa.me/558000029215" target="_blank" rel="noopener">
                WhatsApp Pousada Cataratas
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bn-faq" id="duvidas">
        <div className="bn-faq__inner">
          <h2 className="bn-faq__title">
            Dúvidas{" "}
            <em>
              frequentes
            </em>
          </h2>
          {" "}
          <div className="bn-faq__list ph-in">
            <details className="bn-faq__item">
              <summary>
                Quem pode participar do Bora de Novo?
              </summary>
              <p>
                Hóspedes que já se hospedaram anteriormente em uma propriedade Méritum e desejam retornar em uma nova estadia, aproveitando as condições especiais oferecidas.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Quais são os benefícios para quem volta?
              </summary>
              <p>
                Cada propriedade define as suas condições especiais para quem retorna. Consulte os benefícios disponíveis nos canais oficiais da propriedade onde você se hospedou.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Como é confirmado que eu já fui hóspede?
              </summary>
              <p>
                A confirmação pode ser feita por meio de dados como CPF, e-mail, telefone, nome do titular da reserva ou comprovante de uma hospedagem anterior. A equipe de reservas faz a verificação antes da confirmação final do benefício.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                E se eu não encontrar o comprovante da hospedagem anterior?
              </summary>
              <p>
                Não tem problema. A equipe pode tentar localizar a sua reserva anterior por meio de outros dados, como CPF, e-mail, telefone ou nome completo do titular. Caso não seja possível confirmar a hospedagem anterior, o benefício pode não ser aplicado.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Posso usar o Bora de Novo em feriados ou pacotes especiais?
              </summary>
              <p>
                Não. O programa não é cumulativo com pacotes, feriados, promoções sazonais ou outras condições especiais. Ele é voltado para novas reservas em períodos elegíveis, conforme disponibilidade informada pela equipe de reservas.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Como faço para reservar com essa condição?
              </summary>
              <p>
                Entre em contato diretamente com a propriedade pelos canais oficiais, informe que deseja aproveitar o Bora de Novo e envie os dados necessários para a verificação da hospedagem anterior.
              </p>
            </details>
            {" "}
            <details className="bn-faq__item">
              <summary>
                Preciso ter feito a reserva anterior diretamente com a propriedade?
              </summary>
              <p>
                Não necessariamente. Se você já se hospedou anteriormente, a equipe pode verificar o histórico da estadia por meio dos dados informados. O benefício é concedido conforme disponibilidade e validação da reserva anterior.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
