
import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-56 pb-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="max-w-4xl reveal">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0d2039] mb-12 leading-[1] tracking-tight">
              Para quem atuamos
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed max-w-2xl">
              Atuamos junto a hotéis independentes e empreendimentos hoteleiros que buscam gestão profissional, organização operacional e apoio estratégico.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="pb-40">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-px bg-gray-100">
            {/* Atuamos Com */}
            <div className="bg-white p-16 md:p-24 reveal">
              <h3 className="text-xl font-serif text-[#0d2039] mb-12">Atuamos com</h3>
              <ul className="space-y-12">
                {[
                  { 
                    title: "Hotéis Independentes", 
                    desc: "Empreendimentos que buscam gestão profissional e organização operacional, mantendo a propriedade do negócio." 
                  },
                  { 
                    title: "Respeito à Identidade", 
                    desc: "Hotéis que valorizam sua história e identidade, sem interesse em modelos de rede ou padronizações forçadas." 
                  },
                  { 
                    title: "Apoio Estratégico", 
                    desc: "Empreendimentos que buscam apoio à tomada de decisão e desenvolvimento gradual da gestão." 
                  }
                ].map((item, i) => (
                  <li key={i}>
                    <h4 className="font-serif text-[#0d2039] text-2xl mb-3">{item.title}</h4>
                    <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Não Atuamos Com */}
            <div className="bg-[#f8f9fa] p-16 md:p-24 reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-xl font-serif text-[#0d2039] mb-12">Não atuamos com</h3>
              <ul className="space-y-12">
                {[
                  { 
                    title: "Modelos de Rede", 
                    desc: "Não atuamos com modelos de rede ou padronizações forçadas que descaracterizem a identidade do hotel." 
                  },
                  { 
                    title: "Consultoria Remota", 
                    desc: "Se não pudermos atuar diretamente na operação, não é o nosso modelo de trabalho." 
                  },
                  { 
                    title: "Promessas Irreais", 
                    desc: "Não trabalhamos com expectativas que a estrutura e o momento do empreendimento não possam suportar." 
                  }
                ].map((item, i) => (
                  <li key={i}>
                    <h4 className="font-serif text-[#0d2039] text-2xl mb-3">{item.title}</h4>
                    <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Statement */}
      <section className="py-40 border-t border-gray-100 text-center reveal">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xl md:text-2xl font-light text-[#1a2d4a] leading-relaxed mb-8">
            Não trabalhamos com propostas genéricas.<br/>
            Cada projeto começa com o entendimento da realidade do hotel.
          </p>
          <p className="text-sm text-[#1a2d4a] font-light tracking-wide uppercase">
            Estamos prontos para analisar a viabilidade do seu empreendimento.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TargetAudience;
