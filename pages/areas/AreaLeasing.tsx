
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';

const AreaLeasing: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-64 pb-32 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/atuacao" className="inline-flex items-center text-[#1a2d4a] text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-[#0d2039] transition-colors">
            <ChevronLeft size={14} className="mr-2" /> Voltar para Atuação
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0d2039] mb-8 leading-tight">
              Arrendamento de Ativos
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed">
              Modelo de atuação onde a Méritum assume a gestão operacional do hotel, garantindo ao proprietário uma remuneração estável.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8f9fa] border-y border-[#0d2039]/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Gestão Operacional</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                A Méritum assume a gestão operacional completa do hotel, organizando processos e garantindo a operação diária.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Remuneração Estável</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                O proprietário recebe uma remuneração estável, sem se preocupar com a gestão operacional do dia a dia.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Respeito à Identidade</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                A atuação respeita a identidade, estrutura e momento do empreendimento, sem descaracterização do hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-8">Exemplo Real</h2>
              <div className="space-y-8">
                <p className="text-[#1a2d4a] font-light leading-relaxed text-lg">
                  O Hotel Colonial Iguaçu, em Foz do Iguaçu/PR, é um exemplo real de atuação da Meritum Hotéis sob o modelo de arrendamento.
                </p>
                <p className="text-[#1a2d4a] font-light leading-relaxed">
                  A atuação inclui gestão operacional, organização de processos internos, apoio à gestão comercial e distribuição, estruturação de rotinas de atendimento e hospitalidade, e apoio à tomada de decisão estratégica.
                </p>
                <div className="bg-[#f8f9fa] border-l-4 border-[#c5a059] p-6 mt-8">
                  <p className="text-[#1a2d4a] text-sm font-light leading-relaxed italic">
                    A atuação respeita a identidade, estrutura e momento do empreendimento, sem descaracterização do hotel.
                  </p>
                </div>
                <Link 
                  to="/caso-real" 
                  className="inline-flex items-center text-[#0d2039] text-[11px] uppercase tracking-[0.4em] font-bold border-b border-[#0d2039] pb-2 hover:text-[#c5a059] transition-all"
                >
                  Ver Caso Real <ArrowRight size={14} className="ml-4" />
                </Link>
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden grayscale brightness-75">
              <img 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop" 
                alt="Hotel Colonial Iguaçu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaLeasing;
