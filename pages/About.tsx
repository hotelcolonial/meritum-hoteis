
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-64 pb-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 reveal">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0d2039] leading-[0.9] tracking-tight mb-20">
                A Méritum Hotéis
              </h1>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 mt-12 border-t border-[#0d2039]/5 pt-20">
            <div className="lg:col-span-6 reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="text-[#0a1628] text-2xl md:text-3xl font-serif italic font-light leading-tight mb-8">
                "A hotelaria é um negócio de ativos imobiliários que respira através da operação diária. Nós cuidamos de ambos."
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 reveal" style={{ transitionDelay: '0.4s' }}>
              <p className="text-[#1a2d4a] text-lg font-light leading-relaxed max-w-xl">
                A Méritum nasceu da união entre experiência hoteleira de campo e visão estratégica. Não somos apenas consultores que entregam relatórios; somos operadores que assumem a gestão, organizam processos e respondem pela operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Block */}
      <section className="py-40 bg-[#0d2039] text-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 reveal">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">A hotelaria independente merece gestão profissional.</h2>
              <div className="w-16 h-[2px] bg-[#c5a059] mb-12"></div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="space-y-12">
                {[
                  { title: "Independência de Marca", text: "Preservamos o nome e a identidade do hotel, aplicando a gestão Méritum nos bastidores, sem descaracterizar o empreendimento." },
                  { title: "Decisões Baseadas na Realidade", text: "Nossa gestão parte do entendimento da operação real, sem promessas irreais ou expectativas que a estrutura não possa suportar." },
                  { title: "Transparência Operacional", text: "O proprietário tem visibilidade da operação e participa das decisões estratégicas compatíveis com o momento do negócio." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h3 className="text-[#c5a059] text-sm font-bold uppercase tracking-widest mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-base font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-48 bg-white text-center">
        <div className="max-w-4xl mx-auto px-8 reveal">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0d2039] italic leading-tight mb-12">
            "Nosso mérito é o seu resultado."
          </h2>
          <p className="text-[#1a2d4a] text-[11px] font-bold uppercase tracking-[1em]">MÉRITUM HOTÉIS</p>
        </div>
      </section>
    </div>
  );
};

export default About;
