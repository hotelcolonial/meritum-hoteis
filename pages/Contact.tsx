
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h4 className="text-meritum-gray text-xs uppercase tracking-[0.4em] mb-6 font-semibold">Contato Institucional</h4>
            <h1 className="text-5xl font-serif text-meritum-blue mb-8">Agende uma conversa técnica.</h1>
            <p className="text-[#1a2d4a] text-lg font-light leading-relaxed mb-12">
              Não fazemos propostas comerciais sem diagnóstico prévio. Entre em contato para agendarmos uma visita técnica ao seu empreendimento.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-6 shrink-0 border border-gray-100">
                  <MapPin size={20} className="text-meritum-blue" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-meritum-blue mb-1">Escritório Central</h4>
                  <p className="text-sm text-[#1a2d4a] font-light">Rua Dr. Reinaldo Schmithausen, 2555<br/>Itajaí, SC - Brasil</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-6 shrink-0 border border-gray-100">
                  <Phone size={20} className="text-meritum-blue" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-meritum-blue mb-1">Telefone</h4>
                  <p className="text-sm text-[#1a2d4a] font-light">+55 (47) 99123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-6 shrink-0 border border-gray-100">
                  <Mail size={20} className="text-meritum-blue" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-meritum-blue mb-1">E-mail</h4>
                  <p className="text-sm text-[#1a2d4a] font-light">contato@meritumhoteis.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-meritum-gray mb-2">Nome Completo</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-meritum-blue transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-meritum-gray mb-2">Cargo / Função</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-meritum-blue transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-meritum-gray mb-2">E-mail Corporativo</label>
                <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-meritum-blue transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-meritum-gray mb-2">Nome do Hotel / Empreendimento</label>
                <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-meritum-blue transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-meritum-gray mb-2">Cidade/UF</label>
                <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-meritum-blue transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-meritum-gray mb-2">Mensagem (Contexto do Desafio)</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-meritum-blue transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-meritum-blue text-white text-[10px] uppercase tracking-widest font-bold py-4 hover:bg-opacity-90 transition-all">
                Solicitar Reunião Técnica
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-meritum-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/id/119/1920/1080?grayscale" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif mb-6">Compromisso com o sigilo.</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              Toda troca de informações inicial é protegida por cláusulas de confidencialidade. Entendemos a sensibilidade dos dados operacionais e financeiros da hotelaria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
