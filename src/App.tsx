import React from 'react';
import { Star, ShieldCheck, Award, ArrowRight, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="flex gap-2">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Novo Produto</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">Exclusivo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Descubra o <span className="text-orange-600">Segredo Para Emagrecer</span> De Maneira Rápida e Saudável!
            </h1>
            <p className="text-gray-600 text-lg">
              Nossa fórmula única e cientificamente comprovada irá ajudar na aceleração do seu metabolismo e queima de energia extra!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg">
              Quero Emagrecer Agora
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?auto=format&fit=crop&w=800"
                alt="Suplemento"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 hover:shadow-xl rounded-xl transition-all hover:-translate-y-1">
              <ShieldCheck className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600">Todos os nossos produtos passam por rigorosos testes clínicos.</p>
            </div>
            <div className="p-6 hover:shadow-xl rounded-xl transition-all hover:-translate-y-1">
              <Star className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compra Segura</h3>
              <p className="text-gray-600">Garantimos sua satisfação com 30 dias de garantia.</p>
            </div>
            <div className="p-6 hover:shadow-xl rounded-xl transition-all hover:-translate-y-1">
              <Award className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satisfação Garantida</h3>
              <p className="text-gray-600">Mais de 10.000 clientes satisfeitos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Escolha a melhor oferta para o seu tratamento!</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { months: 3, price: 41.48, savings: "Economize 50%" },
              { months: 6, price: 41.48, savings: "Mais Popular", highlight: true },
              { months: 1, price: 41.48, savings: "Experimente" }
            ].map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 ${plan.highlight ? 'transform scale-105 shadow-xl border-2 border-orange-500' : 'shadow-lg'}`}>
                <div className="text-center mb-6">
                  <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">{plan.savings}</span>
                  <h3 className="text-2xl font-bold mt-4">{plan.months} Mês de Tratamento</h3>
                  <div className="text-3xl font-bold mt-4">
                    <span className="text-sm">R$</span> {plan.price}
                    <span className="text-sm text-gray-500">/mês</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-all">
                  Quero Este Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <details key={item} className="bg-orange-50 rounded-lg p-6 group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  Como funciona o produto?
                  <ArrowRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-600">
                  Nossa fórmula exclusiva combina ingredientes naturais que auxiliam no processo de emagrecimento.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Dúvidas?</h2>
          <p className="mb-8">Fale com um de nossos especialistas através do botão abaixo!</p>
          <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-orange-50 transition-all">
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;