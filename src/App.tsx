import React from 'react';
import { Flame, ShieldCheck, Award, ArrowRight, MessageCircle, Sparkles, Heart, Clock, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="flex gap-2">
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">Novo</span>
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">Natural</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Desperte sua <span className="text-yellow-400">Energia e Libido</span> Natural
            </h1>
            <p className="text-gray-400 text-lg">
              Fórmula exclusiva que potencializa sua energia vital e restaura o equilíbrio natural do seu corpo.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Flame className="w-5 h-5" />
              Quero Aumentar Minha Libido
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="animate-float bg-yellow-400/20 rounded-full p-8">
              <img 
                src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?auto=format&fit=crop&w=800"
                alt="Suplemento Premium"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios Exclusivos</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Flame className="w-8 h-8" />, title: "Aumento da Libido", desc: "Melhora do desejo e disposição" },
              { icon: <Heart className="w-8 h-8" />, title: "Energia Vital", desc: "Mais disposição no dia a dia" },
              { icon: <Clock className="w-8 h-8" />, title: "Resultados Rápidos", desc: "Efeitos em até 40 minutos" },
              { icon: <Sparkles className="w-8 h-8" />, title: "100% Natural", desc: "Sem contraindicações" }
            ].map((item, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-2xl border border-yellow-400/20 hover:border-yellow-400 transition-all">
                <div className="text-yellow-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Escolha seu Plano</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { months: 3, price: 97.00, savings: "Economize 40%", pills: 90 },
              { months: 6, price: 77.00, savings: "Melhor Valor", highlight: true, pills: 180 },
              { months: 1, price: 147.00, savings: "Experimente", pills: 30 }
            ].map((plan, index) => (
              <div key={index} 
                className={`bg-zinc-900 rounded-2xl p-6 ${
                  plan.highlight 
                    ? 'border-2 border-yellow-400 transform scale-105' 
                    : 'border border-yellow-400/20'
                }`}
              >
                <div className="text-center mb-6">
                  <span className="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-sm">{plan.savings}</span>
                  <h3 className="text-2xl font-bold mt-4">{plan.months} {plan.months === 1 ? 'Mês' : 'Meses'}</h3>
                  <p className="text-gray-400 mt-2">{plan.pills} cápsulas</p>
                  <div className="text-3xl font-bold mt-4">
                    <span className="text-sm">R$</span> {plan.price.toFixed(2)}
                    <span className="text-sm text-gray-400">/mês</span>
                  </div>
                </div>
                <button className={`w-full ${
                  plan.highlight 
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                    : 'bg-zinc-800 hover:bg-zinc-700'
                  } py-3 rounded-full font-semibold transition-all`}>
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-black p-6 rounded-2xl border border-yellow-400/20">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "Notei uma diferença incrível na minha disposição e energia. Recomendo totalmente!"
                </p>
                <div className="text-sm text-gray-500">
                  Cliente Verificado
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Como funciona o produto?", a: "Nossa fórmula natural age estimulando a produção de hormônios e melhorando a circulação sanguínea." },
              { q: "Quanto tempo para ver resultados?", a: "Os primeiros resultados podem ser percebidos em até 40 minutos após a ingestão." },
              { q: "Tem contraindicações?", a: "Por ser 100% natural, não possui contraindicações. Mas sempre consulte seu médico." },
              { q: "É seguro para ambos os sexos?", a: "Sim, nossa fórmula é desenvolvida para ser eficaz e segura tanto para homens quanto para mulheres." }
            ].map((item, index) => (
              <details key={index} className="bg-zinc-900 rounded-lg p-6 group border border-yellow-400/20">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <ArrowRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ainda tem dúvidas?</h2>
          <p className="mb-8">Nossos especialistas estão prontos para te ajudar!</p>
          <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-zinc-900 transition-all">
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;