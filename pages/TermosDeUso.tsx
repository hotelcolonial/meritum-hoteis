import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermosDeUso: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0d2039] to-[#08152a] py-32 overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
          <img src="/3.svg" alt="" className="w-[600px] h-[600px] brightness-0 invert" />
        </div>

        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors duration-300 group"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Voltar
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 tracking-tight">
              Termos de Uso
            </h1>
            <div className="h-[1px] w-24 bg-[#c5a059] mb-6"></div>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                1. Aceitação dos Termos
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Ao acessar e utilizar o website da Méritum Hotéis, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. 
                Se você não concorda com qualquer parte destes termos, não deve utilizar nosso website.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                2. Uso do Website
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                O conteúdo deste website é fornecido apenas para fins informativos. Você concorda em utilizar este website apenas para fins legais 
                e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e aproveitamento deste website por qualquer terceiro.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Você não deve usar este website de forma que possa danificar, desativar, sobrecarregar ou comprometer nossos servidores ou redes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Você não deve tentar obter acesso não autorizado a qualquer parte do website, contas de computador, sistemas ou redes conectados ao website.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Você não deve usar este website para transmitir qualquer material que seja difamatório, ofensivo, ameaçador, vulgar, obsceno ou de outra forma objetável.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                3. Propriedade Intelectual
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Todo o conteúdo deste website, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, 
                é propriedade da Méritum Hotéis ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais brasileiras e internacionais.
              </p>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, executar publicamente, republicar, baixar, 
                armazenar ou transmitir qualquer material de nosso website sem nossa prévia autorização por escrito.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                4. Informações Fornecidas
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Ao fornecer informações através deste website, você declara e garante que todas as informações são precisas, completas e atualizadas. 
                Você é responsável por manter a confidencialidade de qualquer senha ou identificação que possa receber para acessar partes restritas deste website.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                5. Limitação de Responsabilidade
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                A Méritum Hotéis não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou 
                da incapacidade de usar este website, mesmo que tenhamos sido avisados da possibilidade de tais danos.
              </p>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Este website é fornecido "como está" sem garantias de qualquer tipo, expressas ou implícitas, incluindo, mas não limitado a, garantias de 
                comercialização, adequação a um propósito específico ou não violação.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                6. Links para Sites de Terceiros
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Este website pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência. A Méritum Hotéis não tem controle 
                sobre o conteúdo desses sites e não assume responsabilidade por eles. A inclusão de qualquer link não implica endosso por nossa parte do site vinculado.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                7. Modificações dos Termos
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Reservamo-nos o direito de modificar estes termos de uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação neste website. 
                É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer modificações.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                8. Lei Aplicável
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Estes termos de uso são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos 
                será submetida à jurisdição exclusiva dos tribunais competentes de Foz do Iguaçu, Paraná, Brasil.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                9. Contato
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Se você tiver dúvidas sobre estes termos de uso, entre em contato conosco:
              </p>
              <div className="bg-[#f8f9fa] border-l-4 border-[#c5a059] p-6 mt-6">
                <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                  <strong className="font-semibold">Méritum Hotéis</strong><br/>
                  Email: <a href="mailto:contato@meritumhoteis.com.br" className="text-[#c5a059] hover:underline">contato@meritumhoteis.com.br</a><br/>
                  Foz do Iguaçu, PR - Brasil
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosDeUso;
