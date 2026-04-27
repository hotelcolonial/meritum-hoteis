
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const AreaOperations: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-64 pb-32 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/atuacao" className="inline-flex items-center text-[#1a2d4a] text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-[#0d2039] transition-colors">
            <ChevronLeft size={14} className="mr-2" /> Voltar para Atuação
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0d2039] mb-8 leading-tight">
              Gestão Operacional
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed">
              Organização de rotinas, padronização funcional (sem engessar) e acompanhamento diário da operação.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8f9fa] border-y border-[#0d2039]/5">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Organização de Rotinas</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Estruturação de processos internos e rotinas operacionais que garantem a eficiência do dia a dia, respeitando a identidade e a estrutura do hotel.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Padronização Funcional</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Padronização técnica de serviços sem engessar a operação, permitindo que o hotel mantenha sua identidade enquanto melhora sua eficiência.
              </p>
            </div>
            <div className="bg-white p-10 border border-[#0d2039]/5">
              <h3 className="text-xl font-serif text-[#0d2039] mb-4">Acompanhamento Diário</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Supervisão constante da operação, com ajustes e melhorias contínuas baseadas na realidade do empreendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
               <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop&grayscale=true" alt="Operação" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-8">Escopo de Atuação</h2>
              <div className="space-y-6">
                <p className="text-[#1a2d4a] font-light leading-relaxed text-lg">
                  A gestão operacional é o coração da hotelaria. Nossa metodologia foca na organização e eficiência, sempre respeitando a identidade e o momento do empreendimento.
                </p>
                <ul className="space-y-4">
                  {[
                    "Organização de processos internos",
                    "Estruturação de rotinas operacionais",
                    "Acompanhamento diário da operação",
                    "Apoio à gestão da equipe"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[#1a2d4a]">
                      <span className="text-[#c5a059] mr-3 mt-1">•</span>
                      <span className="text-base font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaOperations;
