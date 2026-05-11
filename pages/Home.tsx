
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SEÇÃO 1 — HERO */}
      <section className="relative min-h-[85vh] w-full flex items-center justify-center gradient-blue overflow-hidden py-32">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578683062333-57959a19d3ee?q=80&w=2070&auto=format&fit=crop"
            alt="Hotel Luxury Architecture"
            className="w-full h-full object-cover opacity-15 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08152a] via-[#0d2039]/80 to-[#0d2039]/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,21,42,0.4)_100%)]"></div>
        </div>

        {/* Watermarks */}
        <div className="absolute top-10 left-10 watermark watermark-animate opacity-[0.02]">
          <img src="/2.svg" alt="" className="w-40 h-40 brightness-0 invert" />
        </div>
        <div className="absolute bottom-20 right-20 watermark watermark-animate opacity-[0.02]" style={{ animationDelay: '-8s' }}>
          <img src="/2.svg" alt="" className="w-56 h-56 brightness-0 invert" />
        </div>

        {/* Hero Content - 100% Centralizado */}
        <div className="relative z-10 w-full px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
            {/* Tag Line - Centralizada */}
            <div className="inline-flex items-center space-x-6 mb-12 reveal">
              <div className="h-[1px] w-12 bg-[#c5a059]"></div>
              <h4 className="text-[#c5a059] font-heading text-[9px] uppercase tracking-[0.8em] font-semibold whitespace-nowrap">
                NÃO SOMOS REDE DE HOTÉIS
              </h4>
              <div className="h-[1px] w-12 bg-[#c5a059]"></div>
            </div>

            {/* Logo Principal - MÉRITUM HOTÉIS - Centralizado */}
            <div className="mb-12 reveal w-full flex justify-center" style={{ transitionDelay: '0.15s' }}>
              <img
                src="/3-white.svg"
                alt="Méritum Hotéis"
                className="w-full max-w-4xl h-auto px-4"
              />
            </div>

            {/* Subtitle - Centralizada */}
            <p className="text-white/95 text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto mb-12 reveal text-center tracking-tight" style={{ transitionDelay: '0.3s' }}>
              Atuamos na gestão hoteleira, desenvolvendo cada hotel de forma individual e alinhada à sua realidade.
            </p>

            {/* CTA Button - Centralizado */}
            <div className="reveal flex justify-center" style={{ transitionDelay: '0.45s' }}>
              <Link
                to="/atuacao"
                className="group inline-flex items-center px-14 py-6 gradient-gold text-white font-heading text-[10px] uppercase tracking-[0.5em] font-bold hover:shadow-2xl hover:shadow-[#c5a059]/30 transition-all duration-700 hover:scale-105"
              >
                Conheça nossa atuação <ArrowRight className="ml-5 group-hover:translate-x-3 transition-transform duration-700" size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
          <ChevronDown size={28} strokeWidth={1.5} />
        </div>
      </section>

      {/* SEÇÃO 2 — NOSSA VISÃO DE GESTÃO */}
      <section className="py-40 md:py-48 bg-white relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-20 right-10 watermark watermark-animate opacity-[0.015]">
          <img src="/3.svg" alt="" className="w-96 h-96" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative">
          <div className="max-w-4xl reveal">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0d2039] leading-[1.1] mb-16 tracking-tight">
              Gestão hoteleira não é padronização.
            </h2>
            <div className="divider-line w-full mb-16"></div>
            <div className="space-y-8 text-xl md:text-2xl text-[#0d2039] font-light leading-[1.8] tracking-tight">
              <p className="reveal" style={{ transitionDelay: '0.1s' }}>
                Cada hotel possui uma história, uma estrutura, uma equipe e um mercado distintos.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.2s' }}>
                Por isso, não acreditamos em modelos prontos ou fórmulas replicáveis.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.3s' }}>
                Nossa atuação parte da realidade do empreendimento, respeitando sua identidade e tomando decisões compatíveis com seu momento operacional e financeiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O QUE FAZEMOS */}
      <section className="py-40 md:py-48 bg-[#f8f9fa] border-y border-[#0d2039]/5 relative overflow-hidden">
        {/* Watermarks */}
        <div className="absolute top-20 right-10 watermark watermark-animate opacity-[0.02]">
          <img src="/2.svg" alt="" className="w-80 h-80" />
        </div>
        <div className="absolute bottom-10 left-20 watermark watermark-animate opacity-[0.015]" style={{ animationDelay: '-12s' }}>
          <img src="/3.svg" alt="" className="w-64 h-64" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="mb-24 reveal">
            <div className="flex items-center gap-8 mb-8">
              <img src="/2.svg" alt="" className="w-14 h-14 opacity-15 hover:opacity-25 transition-opacity duration-700" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0d2039] leading-[1.1] tracking-tight">
                O que fazemos
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-[#0d2039] font-light leading-[1.8] max-w-3xl tracking-tight">
              Atuamos de forma prática na gestão e no desenvolvimento de operações hoteleiras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Gestão Operacional",
                items: [
                  "Organização de rotinas",
                  "Padronização funcional (sem engessar)",
                  "Acompanhamento diário da operação"
                ]
              },
              {
                title: "Gestão Comercial",
                items: [
                  "Estratégia de vendas",
                  "Distribuição e canais",
                  "Apoio a marketing e posicionamento"
                ]
              },
              {
                title: "Gestão de Custos e Processos",
                items: [
                  "Leitura de custos operacionais",
                  "Ajustes de processos",
                  "Apoio à tomada de decisão"
                ]
              },
              {
                title: "Hospitalidade e Experiência",
                items: [
                  "Atendimento",
                  "Cultura de serviço",
                  "Organização da experiência do hóspede"
                ]
              }
            ].map((area, i) => (
              <div key={i} className="bg-white p-10 md:p-12 border border-[#0d2039]/8 hover-lift reveal hover:border-[#c5a059]/30 transition-all duration-700 group relative overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                {/* Shine effect ao hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="divider-line w-12 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <h3 className="text-2xl font-serif text-[#0d2039] mb-8 font-normal tracking-tight leading-tight group-hover:text-[#c5a059] transition-colors duration-500">
                  {area.title}
                </h3>
                <ul className="space-y-5">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start opacity-0 reveal" style={{ animationDelay: `${(i * 0.1) + (j * 0.05)}s`, animation: 'fadeInUp 0.6s ease-out forwards' }}>
                      <span className="text-[#c5a059] mr-4 mt-1 text-lg group-hover:scale-125 transition-transform duration-500 inline-block">•</span>
                      <span className="text-[#0d2039] text-base font-light leading-relaxed tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="divider-line w-12 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — COMO ATUAMOS */}
      <section className="py-40 md:py-48 bg-white relative overflow-hidden">
        {/* Watermarks */}
        <div className="absolute bottom-20 left-10 watermark watermark-animate opacity-[0.015]">
          <img src="/2.svg" alt="" className="w-72 h-72" />
        </div>
        <div className="absolute top-10 right-20 watermark watermark-animate opacity-[0.02]" style={{ animationDelay: '-15s' }}>
          <img src="/3.svg" alt="" className="w-80 h-80" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative">
          <div className="mb-24 reveal">
            <div className="flex items-center gap-8 mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0d2039] leading-[1.1] tracking-tight">
                Como atuamos
              </h2>
              <img src="/2.svg" alt="" className="w-14 h-14 opacity-15 hover:opacity-25 transition-opacity duration-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-20">
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
              <div key={i} className="reveal group relative" style={{ transitionDelay: `${i * 0.15}s` }}>
                {/* Número de fundo decorativo */}
                <div className="absolute -top-8 -left-4 text-[12rem] font-serif text-[#c5a059]/5 leading-none pointer-events-none group-hover:text-[#c5a059]/10 transition-colors duration-1000">
                  {step.number}
                </div>

                <div className="flex items-baseline mb-8 relative z-10">
                  <span className="text-8xl font-serif text-[#c5a059]/20 mr-6 group-hover:text-[#c5a059]/50 group-hover:scale-110 transition-all duration-700 leading-none inline-block">{step.number}</span>
                  <h3 className="text-3xl font-serif text-[#0d2039] font-normal tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                </div>
                <div className="divider-line w-16 mb-6 group-hover:w-24 transition-all duration-700"></div>
                <p className="text-[#0d2039] text-lg font-light leading-[1.8] tracking-tight relative z-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — O QUE JÁ É FEITO NA PRÁTICA */}
      <section className="py-40 md:py-48 gradient-blue text-white relative overflow-hidden">
        {/* Watermarks */}
        <div className="absolute top-10 right-20 watermark watermark-animate opacity-[0.03]">
          <img src="/2.svg" alt="" className="w-64 h-64 brightness-0 invert" />
        </div>
        <div className="absolute bottom-20 left-10 watermark watermark-animate opacity-[0.02]" style={{ animationDelay: '-10s' }}>
          <img src="/3.svg" alt="" className="w-72 h-72 brightness-0 invert" />
        </div>

        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="mb-24 reveal">
            <div className="flex items-center gap-6 mb-10">
              <div className="divider-line w-16"></div>
              <h4 className="text-[#c5a059] font-heading text-[9px] uppercase tracking-[0.8em] font-semibold">
                Prova Real
              </h4>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8 tracking-tight">
              O que já fazemos na prática
            </h2>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-[1.8] max-w-3xl tracking-tight">
              Exemplo real de atuação em hotel independente.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <div className="lg:col-span-7 reveal">
              <div className="mb-12">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <h3 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight flex-1">
                    HOTEL COLONIAL IGUAÇU — FOZ DO IGUAÇU/PR
                  </h3>
                  <a
                    href="https://hotelcolonialfoz.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[#5a9d72] hover:text-[#7ec49a] transition-all duration-700 mt-2"
                    title="Visitar site do hotel (abre em nova aba)"
                  >
                    <span className="text-[9px] uppercase tracking-[0.4em] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">Visitar</span>
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" strokeWidth={1.5} />
                  </a>
                </div>
                <div
                  className="w-full mb-8 h-px opacity-55 bg-gradient-to-r from-transparent via-[#4a8a62] to-transparent"
                  aria-hidden
                />
              </div>

              <p className="text-white/95 text-lg md:text-xl font-light leading-[1.8] mb-10 tracking-tight">
                <strong className="font-medium text-[#5a9d72]">Atuação da Méritum Hotéis:</strong>
              </p>

              <ul className="space-y-6 mb-16">
                {[
                  "Gestão operacional do hotel",
                  "Organização de processos internos",
                  "Apoio à gestão comercial e distribuição",
                  "Estruturação de rotinas de atendimento e hospitalidade",
                  "Apoio à tomada de decisão estratégica"
                ].map((item, i) => (
                  <li key={i} className="flex items-start reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <span className="text-[#4a8a62] mr-5 mt-1 text-lg drop-shadow-[0_0_12px_rgba(90,157,114,0.35)]" aria-hidden>
                      •
                    </span>
                    <span className="text-white/95 text-lg font-light leading-[1.8] tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/5 border-l-2 border-[#4a8a62] shadow-[inset_0_0_0_1px_rgba(74,138,98,0.22)] p-8 mt-12 backdrop-blur-sm">
                <p className="text-white/85 text-base font-light leading-[1.8] italic tracking-tight mb-6">
                  Observação importante: A atuação respeita a identidade, estrutura e momento do empreendimento, sem descaracterização do hotel.
                </p>
                <div className="divider-line w-full my-6 opacity-20"></div>
                <a
                  href="https://hotelcolonialfoz.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-wrap items-center gap-3 transition-all duration-700"
                >
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white">
                    Conheça o Hotel Colonial Iguaçu
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#5a9d72] group-hover:text-[#7ec49a] group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700"
                    strokeWidth={2}
                  />
                </a>
                <p className="mt-4 text-[10px] leading-relaxed text-white/35 font-light tracking-wide max-w-md">
                  O link abre o site oficial do hotel em uma nova aba; você sai desta página da Méritum.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 reveal hover-scale" style={{ transitionDelay: '0.2s' }}>
              <a
                href="https://hotelcolonialfoz.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
                title="Visitar site do Hotel Colonial Iguaçu (abre em nova aba)"
              >
                <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-[#4a8a62]/50 hover:border-[#5a9d72]/65">
                  <img
                    src="/assets/hotel-colonial-iguacu.png"
                    alt="Hotel Colonial Iguaçu — abrir site oficial"
                    className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-1000"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — PARA QUEM É NOSSO TRABALHO */}
      <section className="py-40 md:py-48 bg-white relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute bottom-10 right-10 watermark watermark-animate opacity-[0.015]">
          <img src="/3.svg" alt="" className="w-96 h-96" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative">
          <div className="mb-24 reveal">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0d2039] leading-[1.1] mb-8 tracking-tight">
              Para quem atuamos
            </h2>
            <div className="divider-line w-24"></div>
          </div>

          <div className="max-w-4xl reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-[#0d2039] font-light leading-[1.8] mb-16 tracking-tight">
              Atuamos junto a hotéis independentes e empreendimentos hoteleiros que buscam:
            </p>

            <ul className="space-y-8 mb-16">
              {[
                "Gestão profissional",
                "Organização operacional",
                "Apoio estratégico",
                "Respeito à identidade do negócio"
              ].map((item, i) => (
                <li key={i} className="flex items-start reveal group" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="text-[#c5a059] mr-6 mt-1 text-2xl group-hover:scale-125 transition-transform duration-500">•</span>
                  <span className="text-[#0d2039] text-xl font-light leading-[1.8] tracking-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f8f9fa] border-l-2 border-[#0d2039] p-10 hover:border-[#c5a059] transition-colors duration-700">
              <p className="text-[#0d2039] text-lg font-medium leading-[1.8] tracking-tight">
                Não atuamos com modelos de rede ou padronizações forçadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — CHAMADA FINAL */}
      <section className="py-40 md:py-48 bg-[#f8f9fa] border-t border-[#0d2039]/10 relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 watermark watermark-animate opacity-[0.01]">
          <img src="/3.svg" alt="" className="w-[32rem] h-[32rem]" />
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#c5a059]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-[#c5a059]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-[#c5a059]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-4xl mx-auto px-8 text-center relative reveal">
          <div className="divider-line w-24 mx-auto mb-16 animate-expand-width" style={{ animationDelay: '0.3s' }}></div>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#0d2039] font-light leading-[1.3] mb-16 tracking-tight font-serif">
            Não trabalhamos com propostas genéricas.<br/>
            <span className="inline-block reveal" style={{ transitionDelay: '0.2s' }}>
              Cada projeto começa com o entendimento da realidade do hotel.
            </span>
          </p>
          <div className="divider-line w-24 mx-auto mb-16 animate-expand-width" style={{ animationDelay: '0.5s' }}></div>
          <div className="reveal" style={{ transitionDelay: '0.4s' }}>
            <Link
              to="/contato"
              className="group inline-flex items-center px-14 py-6 gradient-blue text-white font-heading text-[10px] uppercase tracking-[0.5em] font-bold hover:shadow-2xl hover:shadow-[#0d2039]/30 transition-all duration-700 hover:scale-105 btn-glow relative overflow-hidden"
            >
              <span className="relative z-10 !text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">Fale Conosco</span>
              <ArrowRight className="ml-5 group-hover:translate-x-3 transition-transform duration-700 relative z-10 !text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
