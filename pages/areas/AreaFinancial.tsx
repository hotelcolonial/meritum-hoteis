
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const AreaFinancial: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-64 pb-32 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/atuacao" className="inline-flex items-center text-[#1a2d4a] text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-[#0d2039] transition-colors">
            <ChevronLeft size={14} className="mr-2" /> Voltar para Atuação
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0d2039] mb-8 leading-tight">
              Gestão de Custos e Processos
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed">
              Leitura de custos operacionais, ajustes de processos e apoio à tomada de decisão.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8f9fa] border-y border-[#0d2039]/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Leitura de Custos</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Análise e compreensão dos custos operacionais do hotel, identificando oportunidades de otimização compatíveis com a realidade do empreendimento.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Ajustes de Processos</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Ajustes de processos internos para melhorar a eficiência operacional, sempre respeitando a estrutura e o momento do hotel.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Apoio à Decisão</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Apoio à tomada de decisão estratégica, fornecendo informações claras e realistas sobre a operação e suas possibilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-12">Gestão Financeira</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-[#0d2039] text-xs uppercase tracking-widest mb-4">Controle de Custos</h4>
                <p className="text-sm text-[#1a2d4a] font-light leading-relaxed mb-6">
                  Monitoramento e controle dos custos operacionais, sempre buscando eficiência sem comprometer a qualidade do serviço.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0d2039] text-xs uppercase tracking-widest mb-4">Transparência</h4>
                <p className="text-sm text-[#1a2d4a] font-light leading-relaxed mb-6">
                  O proprietário tem visibilidade dos indicadores financeiros e participa das decisões estratégicas compatíveis com o momento do negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaFinancial;
