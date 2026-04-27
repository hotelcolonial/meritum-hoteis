
import React from 'react';

const HowWeWork: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-64 pb-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-4xl mb-20 reveal">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0d2039] mb-8 leading-tight">
              Como atuamos
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed">
              Nossa metodologia parte do entendimento da realidade do hotel e evolui de forma gradual, sem rupturas artificiais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                number: "1",
                title: "Diagnóstico",
                description: "Entendimento da operação, estrutura, equipe e mercado."
              },
              {
                number: "2",
                title: "Organização",
                description: "Ajustes de processos, rotinas e fluxos operacionais."
              },
              {
                number: "3",
                title: "Desenvolvimento",
                description: "Evolução gradual da gestão, sem rupturas artificiais ou promessas irreais."
              }
            ].map((step, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-serif text-[#c5a059]/30 mr-4">{step.number}</span>
                  <h3 className="text-2xl font-serif text-[#0d2039] font-medium">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#1a2d4a] text-base font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-[#f8f9fa] border-y border-[#0d2039]/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop&grayscale=true" alt="Processos Operacionais" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-8">Transparência como norma</h2>
              <p className="text-[#1a2d4a] leading-relaxed font-light mb-8 text-lg">
                Não acreditamos em gestão de "caixa preta". O proprietário tem acesso aos indicadores do negócio e participa das decisões estratégicas.
              </p>
              <div className="space-y-4">
                {[
                  "Acompanhamento da operação",
                  "Apoio à tomada de decisão",
                  "Respeito à identidade do negócio"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-white border border-[#0d2039]/5">
                    <div className="w-2 h-2 rounded-full bg-[#0d2039]"></div>
                    <span className="text-sm text-[#1a2d4a] font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
