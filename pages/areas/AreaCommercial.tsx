
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const AreaCommercial: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-64 pb-32 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/atuacao" className="inline-flex items-center text-[#1a2d4a] text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-[#0d2039] transition-colors">
            <ChevronLeft size={14} className="mr-2" /> Voltar para Atuação
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0d2039] mb-8 leading-tight">
              Gestão Comercial
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed">
              Estratégia de vendas, distribuição e canais, apoio a marketing e posicionamento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8f9fa] border-y border-[#0d2039]/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Estratégia de Vendas</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Desenvolvimento de estratégias de vendas compatíveis com a realidade do hotel e seu mercado, sem promessas irreais.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Distribuição e Canais</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Organização da presença em canais de distribuição, sempre respeitando a identidade e o posicionamento do hotel.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Apoio a Marketing</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Apoio ao marketing e posicionamento, baseado na realidade do empreendimento, sem criar expectativas que a operação não possa entregar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-8">Posicionamento de Mercado</h2>
              <p className="text-[#1a2d4a] font-light leading-relaxed mb-6 text-lg">
                Não usamos fórmulas prontas. Cada hotel exige uma estratégia de canais e posicionamento específica, compatível com sua identidade e mercado.
              </p>
              <ul className="space-y-4">
                <li className="p-4 bg-[#f8f9fa] border-l-4 border-[#0d2039]">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#0d2039] mb-1">Estratégia Personalizada</h4>
                  <p className="text-sm text-[#1a2d4a] font-light">Desenvolvimento de estratégia comercial baseada na realidade do hotel e seu mercado.</p>
                </li>
                <li className="p-4 bg-[#f8f9fa] border-l-4 border-[#0d2039]">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#0d2039] mb-1">Comunicação Realista</h4>
                  <p className="text-sm text-[#1a2d4a] font-light">Comunicação baseada na realidade do hotel, evitando promessas que a operação não possa entregar.</p>
                </li>
              </ul>
            </div>
            <div className="bg-[#f8f9fa] p-12">
              <h3 className="text-2xl font-serif text-[#0d2039] mb-6">Foco na Realidade</h3>
              <p className="text-[#1a2d4a] font-light leading-relaxed text-base">
                Nossa gestão comercial parte do entendimento da realidade do hotel, sem criar expectativas irreais ou promessas que a estrutura não possa suportar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaCommercial;
