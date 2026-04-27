
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ManagementVision: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-64 pb-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-5xl reveal">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0d2039] mb-12 leading-[0.95] tracking-tight">
              Gestão hoteleira não é padronização.
            </h1>
            <div className="h-[1px] bg-[#0d2039]/10 w-full line-reveal mb-16"></div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="space-y-6 text-lg md:text-xl text-[#1a2d4a] font-light leading-relaxed">
                <p>
                  Cada hotel possui uma história, uma estrutura, uma equipe e um mercado distintos.
                </p>
                <p>
                  Por isso, não acreditamos em modelos prontos ou fórmulas replicáveis.
                </p>
                <p>
                  Nossa atuação parte da realidade do empreendimento, respeitando sua identidade e tomando decisões compatíveis com seu momento operacional e financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciação */}
      <section className="py-40 bg-[#f8f9fa] border-y border-[#0d2039]/5">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 reveal">
              <h2 className="text-4xl md:text-5xl font-serif text-[#0d2039] mb-10 leading-tight">
                Não somos rede de hotéis.
              </h2>
              <p className="text-[#1a2d4a] text-base font-light leading-relaxed mb-8">
                O modelo de rede hoteleira tradicional prioriza a expansão da própria marca e a padronização de custos centrais. Na Méritum, a prioridade é a valorização do ativo imobiliário e a margem líquida da unidade gerida.
              </p>
              <div className="w-16 h-[1px] bg-[#c5a059] mb-12"></div>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <span className="text-[#c5a059] font-serif text-2xl italic">01.</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0d2039] uppercase tracking-widest mb-3">Autonomia da Identidade</h3>
                    <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">Preservamos o nome e a história do hotel. A marca Méritum é o motor invisível da eficiência, não a fachada do negócio.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <span className="text-[#c5a059] font-serif text-2xl italic">02.</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0d2039] uppercase tracking-widest mb-3">Tecnologia sob Medida</h3>
                    <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">Não impomos softwares para benefício de escala própria. Auditamos e selecionamos as ferramentas que melhor atendem a realidade específica do seu hotel.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <span className="text-[#c5a059] font-serif text-2xl italic">03.</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0d2039] uppercase tracking-widest mb-3">Foco na Realidade Operacional</h3>
                    <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">Nossa gestão parte do entendimento da operação real, sem promessas irreais ou expectativas que a estrutura não possa suportar.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-40">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0d2039] text-center">
              Nossa Visão de Gestão
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 border border-[#0d2039]/5 reveal hover:bg-[#f8f9fa] transition-colors duration-700">
              <h3 className="text-xl font-serif text-[#0d2039] mb-6">Respeito à Identidade</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Cada hotel mantém sua identidade e história. Nossa atuação não descaracteriza o empreendimento, mas organiza e desenvolve sua operação.
              </p>
            </div>
            
            <div className="bg-white p-12 border border-[#0d2039]/5 reveal hover:bg-[#f8f9fa] transition-colors duration-700" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-xl font-serif text-[#0d2039] mb-6">Transparência Operacional</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Gestão não é caixa preta. O proprietário tem visibilidade da operação e participa das decisões estratégicas compatíveis com o momento do negócio.
              </p>
            </div>

            <div className="bg-white p-12 border border-[#0d2039]/5 reveal hover:bg-[#f8f9fa] transition-colors duration-700" style={{ transitionDelay: '0.4s' }}>
              <h3 className="text-xl font-serif text-[#0d2039] mb-6">Desenvolvimento Gradual</h3>
              <p className="text-sm text-[#1a2d4a] font-light leading-relaxed">
                Evolução gradual da gestão, sem rupturas artificiais ou promessas irreais. Respeitamos o momento operacional e financeiro do empreendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-40 bg-[#0d2039] text-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="max-w-3xl reveal">
            <h2 className="text-4xl md:text-5xl font-serif mb-16 leading-tight">
              "Acreditamos que gerir um hotel é equilibrar o rigor operacional com o respeito à identidade do negócio."
            </h2>
            <div className="space-y-8 border-l border-[#c5a059] pl-12">
              <p className="text-white/80 text-lg font-light leading-relaxed">
                Nossa visão para a hotelaria independente é a profissionalização técnica sem a perda da hospitalidade humana. Fugimos do mediano, do genérico e do burocrático.
              </p>
              <div className="pt-8">
                <Link to="/como-atuamos" className="inline-flex items-center text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold group">
                  Conheça nosso Método <ArrowRight className="ml-6 group-hover:translate-x-4 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementVision;
