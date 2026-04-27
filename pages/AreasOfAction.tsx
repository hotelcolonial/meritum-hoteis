
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FadeImage: React.FC<{src: string, alt: string, className?: string}> = ({src, alt, className}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img 
      src={src} 
      alt={alt} 
      onLoad={() => setLoaded(true)}
      className={`${className} img-fade ${loaded ? 'loaded' : ''}`}
    />
  );
};

const AreasOfAction: React.FC = () => {
  const areas = [
    {
      id: 'operacoes',
      title: "Gestão Operacional",
      description: "Organização de rotinas, padronização funcional (sem engessar) e acompanhamento diário da operação.",
      path: "/atuacao/operacoes",
      img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop&grayscale=true"
    },
    {
      id: 'comercial',
      title: "Gestão Comercial",
      description: "Estratégia de vendas, distribuição e canais, apoio a marketing e posicionamento.",
      path: "/atuacao/comercial",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&grayscale=true"
    },
    {
      id: 'custos',
      title: "Gestão de Custos e Processos",
      description: "Leitura de custos operacionais, ajustes de processos e apoio à tomada de decisão.",
      path: "/atuacao",
      img: "https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?q=80&w=2070&auto=format&fit=crop&grayscale=true"
    },
    {
      id: 'hospitalidade',
      title: "Hospitalidade e Experiência",
      description: "Atendimento, cultura de serviço e organização da experiência do hóspede.",
      path: "/atuacao",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&grayscale=true"
    }
  ];

  return (
    <div className="bg-white">
      <section className="pt-56 pb-32 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-4xl reveal">
            <h1 className="text-5xl md:text-7xl font-serif text-[#0d2039] mb-12 leading-tight">
              O que fazemos
            </h1>
            <p className="text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed mb-8">
              Atuamos de forma prática na gestão e no desenvolvimento de operações hoteleiras.
            </p>
            <div className="h-[2px] w-24 bg-[#c5a059] reveal" style={{ transitionDelay: '0.3s' }}></div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <Link 
                key={area.id} 
                to={area.path} 
                className="group relative h-[500px] overflow-hidden flex flex-col justify-end p-12 reveal transition-all duration-700 hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 z-0">
                  <FadeImage src={area.img} alt={area.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 opacity-40 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2039] via-[#0d2039]/60 to-transparent"></div>
                </div>
                
                <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-6">
                  <h3 className="text-3xl font-serif text-white mb-6 leading-none">{area.title}</h3>
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 max-h-0 group-hover:max-h-32 overflow-hidden">
                    {area.description}
                  </p>
                  <div className="flex items-center text-white text-[10px] uppercase tracking-widest font-bold border-t border-white/10 pt-6 mt-2">
                    Saiba mais <ArrowRight size={14} className="ml-4 group-hover:translate-x-4 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#f8f9fa]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0d2039] mb-10 leading-tight">
              Atuação prática e direta
            </h2>
            <p className="text-lg text-[#1a2d4a] font-light leading-relaxed mb-10">
              Nossa atuação parte da realidade do empreendimento, respeitando sua identidade e tomando decisões compatíveis com seu momento operacional e financeiro.
            </p>
            <p className="text-base text-[#1a2d4a] font-light leading-relaxed">
              Não trabalhamos com modelos prontos ou fórmulas replicáveis. Cada hotel possui uma história, uma estrutura, uma equipe e um mercado distintos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreasOfAction;
