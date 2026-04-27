import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PoliticaPrivacidade: React.FC = () => {
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
              Política de Privacidade
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
                1. Introdução
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                A Méritum Hotéis ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e a segurança dos dados pessoais de nossos usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nosso website.
              </p>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Ao utilizar nosso website, você concorda com a coleta e uso de informações de acordo com esta política. Esta política está em conformidade com a 
                Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) do Brasil.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                2. Informações que Coletamos
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Podemos coletar os seguintes tipos de informações pessoais:
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Informações de Identificação:</strong> nome, endereço de e-mail, número de telefone, endereço postal.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Informações Técnicas:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Informações de Comunicação:</strong> mensagens enviadas através de formulários de contato, correspondências por e-mail.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                3. Como Utilizamos suas Informações
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Utilizamos as informações coletadas para os seguintes propósitos:
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Responder a suas solicitações e fornecer informações sobre nossos serviços.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Melhorar e personalizar sua experiência em nosso website.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Enviar comunicações relacionadas aos nossos serviços (com seu consentimento).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Cumprir obrigações legais e regulamentares.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    Prevenir fraudes e garantir a segurança de nossos sistemas.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                4. Compartilhamento de Informações
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Prestadores de Serviços:</strong> podemos compartilhar informações com empresas que nos auxiliam na operação do website, 
                    desde que estejam obrigadas a manter a confidencialidade.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Obrigações Legais:</strong> quando exigido por lei, ordem judicial ou processo legal.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Proteção de Direitos:</strong> para proteger nossos direitos, propriedade ou segurança, ou de nossos usuários.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                5. Segurança dos Dados
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, 
                alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.
              </p>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Utilizamos tecnologias como criptografia SSL/TLS para proteger dados transmitidos e mantemos controles de acesso rigorosos para proteger informações armazenadas.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                6. Cookies e Tecnologias Similares
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Nosso website pode utilizar cookies e tecnologias similares para melhorar sua experiência. Cookies são pequenos arquivos de texto armazenados em seu dispositivo.
              </p>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do website. Utilizamos cookies essenciais para o 
                funcionamento do site e cookies analíticos para entender como os visitantes interagem com nosso website.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                7. Seus Direitos (LGPD)
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                De acordo com a LGPD, você possui os seguintes direitos sobre seus dados pessoais:
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Confirmação e Acesso:</strong> direito de saber se tratamos seus dados e acessar essas informações.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Correção:</strong> direito de solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Anonimização, Bloqueio ou Eliminação:</strong> direito de solicitar a eliminação de dados desnecessários ou excessivos.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Portabilidade:</strong> direito de solicitar a portabilidade de seus dados para outro fornecedor.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5a059] mr-4 mt-2 text-xl">•</span>
                  <span className="text-lg text-[#0d2039] font-light leading-[1.8]">
                    <strong className="font-semibold">Revogação do Consentimento:</strong> direito de retirar seu consentimento a qualquer momento.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                8. Retenção de Dados
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção 
                mais longo seja exigido ou permitido por lei. Quando não houver mais necessidade de reter seus dados, eles serão excluídos ou anonimizados de forma segura.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                9. Alterações nesta Política
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e 
                atualizando a data de "Última atualização". Recomendamos que você revise esta política periodicamente.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0d2039] mb-6 tracking-tight">
                10. Contato
              </h2>
              <div className="h-[1px] w-16 bg-[#c5a059] mb-6"></div>
              <p className="text-lg text-[#0d2039] font-light leading-[1.8] mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos sob a LGPD, entre em contato conosco:
              </p>
              <div className="bg-[#f8f9fa] border-l-4 border-[#c5a059] p-6 mt-6">
                <p className="text-lg text-[#0d2039] font-light leading-[1.8]">
                  <strong className="font-semibold">Méritum Hotéis</strong><br/>
                  <strong className="font-semibold">Encarregado de Proteção de Dados (DPO)</strong><br/>
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

export default PoliticaPrivacidade;
