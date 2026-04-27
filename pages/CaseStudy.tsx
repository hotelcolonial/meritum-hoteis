
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-56 pb-32 bg-[#0d2039] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 grayscale">
            <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop" alt="Hotel Colonial Iguaçu" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <Link to="/atuacao" className="inline-flex items-center text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold mb-16 hover:opacity-50 transition-opacity">
            <ChevronLeft size={14} className="mr-2" /> Voltar para Atuação
          </Link>
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 reveal">
                <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.6em] mb-8 font-bold">Prova Real</h4>
                <div className="flex items-start justify-between gap-6 mb-12">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.9] flex-1">
                     Hotel Colonial Iguaçu
                  </h1>
                  <a
                    href="https://hotelcolonialfoz.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[#c5a059] hover:text-white transition-all duration-700 mt-4"
                    title="Visitar site do hotel"
                  >
                    <span className="text-[9px] uppercase tracking-[0.4em] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">Visitar</span>
                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" strokeWidth={1.5} />
                  </a>
                </div>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                  Exemplo real de atuação em hotel independente.
                </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="border-l border-white/20 pl-8 pb-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#c5a059] mb-2 font-bold">Localização</p>
                    <p className="text-xl font-serif italic font-light">Foz do Iguaçu, Paraná</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-40">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7 reveal">
                <h2 className="text-4xl font-serif text-[#0d2039] mb-10 leading-tight">O que já fazemos na prática</h2>
                <p className="text-[#1a2d4a] text-lg font-light leading-relaxed mb-8">
                    A atuação da Meritum Hotéis no Hotel Colonial Iguaçu respeita a identidade, estrutura e momento do empreendimento, sem descaracterização do hotel.
                </p>
                
                <div className="mb-12">
                  <p className="text-[#0d2039] text-base font-medium mb-6">
                    Atuação da Meritum Hotéis:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Gestão operacional do hotel",
                      "Organização de processos internos",
                      "Apoio à gestão comercial e distribuição",
                      "Estruturação de rotinas de atendimento e hospitalidade",
                      "Apoio à tomada de decisão estratégica"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#c5a059] mr-3 mt-1">•</span>
                        <span className="text-[#1a2d4a] text-base font-light leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#f8f9fa] border-l-4 border-[#c5a059] p-8 mt-8">
                  <p className="text-[#1a2d4a] text-sm font-light leading-relaxed italic mb-6">
                    Observação importante: A atuação respeita a identidade, estrutura e momento do empreendimento, sem descaracterização do hotel.
                  </p>
                  <div className="h-[1px] bg-[#0d2039]/10 my-6"></div>
                  <a
                    href="https://hotelcolonialfoz.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[#c5a059] hover:text-white transition-all duration-300"
                  >
                    <span className="text-[9px] uppercase tracking-[0.4em] font-semibold">Conheça o Hotel Colonial Iguaçu</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" strokeWidth={1.5} />
                  </a>
                </div>
            </div>
            
            <div className="lg:col-span-5 reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="aspect-[4/5] overflow-hidden grayscale brightness-75">
                    <img 
                      src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop" 
                      alt="Hotel Colonial Iguaçu" 
                      className="w-full h-full object-cover"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[500px] overflow-hidden reveal">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover" alt="Hotel Detail" />
            </div>
            <div className="h-[500px] overflow-hidden reveal" style={{ transitionDelay: '0.2s' }}>
                <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover" alt="Hotel Detail" />
            </div>
            <div className="h-[500px] overflow-hidden reveal" style={{ transitionDelay: '0.4s' }}>
                <img src="https://images.unsplash.com/photo-1563911536285-501f3d8b2124?q=80&w=2070&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover" alt="Hotel Detail" />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#0d2039] text-white text-center">
        <div className="max-w-3xl mx-auto px-8 reveal">
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
              Não trabalhamos com propostas genéricas.<br/>
              Cada projeto começa com o entendimento da realidade do hotel.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center px-12 py-5 bg-[#c5a059] text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#b8924e] transition-all duration-300"
            >
              Fale Conosco <ArrowRight size={16} className="ml-4" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
