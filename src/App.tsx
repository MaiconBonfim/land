import React, { useState } from 'react';
import { Flame, Heart, Clock, Star, ArrowRight, MessageCircle, Sparkles, Shield, ChevronDown, ChevronUp, Quote, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-pink-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-down">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
                Desperte Sua Energia Natural
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Descubra o poder dos suplementos naturais para uma vida mais vibrante e saudável
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105">
                  Conheça Nossos Produtos
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Interactive Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Benefícios Exclusivos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "100% Natural",
                description: "Ingredientes naturais selecionados para máxima eficácia",
                color: "from-green-500"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Resultados Rápidos",
                description: "Efeitos perceptíveis em poucas semanas de uso",
                color: "from-blue-500"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Clinicamente Testado",
                description: "Produtos aprovados e seguros para uso contínuo",
                color: "from-yellow-500"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${benefit.color} to-transparent p-1 rounded-2xl`}>
                  <div className="bg-black rounded-2xl p-6 h-full">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <div className={`text-${benefit.color.split('-')[1]}`}>
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Potensil Prazer Diário - Feminino */}
            <div className="bg-gradient-to-br from-pink-900/50 to-black rounded-3xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-pink-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-pink-500">Potensil Prazer Diário</h3>
                <p className="text-pink-300 mt-2">Feminino</p>
              </div>
              <div className="space-y-4">
                <div className="bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-pink-400">Benefícios</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Ameniza sintomas da TPM</li>
                    <li>• Regula o Eixo Hormonal</li>
                    <li>• Disposição e Energia Todo Dia</li>
                    <li>• Maior Controle das Sensações</li>
                  </ul>
                </div>
                <div className="bg-pink-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-pink-400">Composição</h4>
                  <p className="text-gray-300 text-sm">Maca Negra, Crisina, Ginseng, Canela, Ginkobiloba, Libifem, Ashwagandha, KSM-66</p>
                </div>
                <div className="text-center">
                  <span className="text-pink-500 block mb-2">30 Cápsulas</span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>

            {/* Potensexy - Libido Extremo */}
            <div className="bg-gradient-to-br from-blue-900/50 to-black rounded-3xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Flame className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-500">Potensexy</h3>
                <p className="text-yellow-300 mt-2">Libido Extremo</p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-yellow-400">Benefícios</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Aumento do apetite sexual</li>
                    <li>• Maior Prazer e Virilidade</li>
                    <li>• Aumento da Vitalidade</li>
                    <li>• Ereções Fortes e Duradouras</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-yellow-400">Composição</h4>
                  <p className="text-gray-300 text-sm">Tribulus Black, Feno grego, Mucuna, Epmedium, Vigor X, Testo Booster, Testofen</p>
                </div>
                <div className="text-center">
                  <span className="text-yellow-500 block mb-2">15 Cápsulas</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-all">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>

            {/* Potensil - Potência Diária */}
            <div className="bg-gradient-to-br from-blue-900/50 to-black rounded-3xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-500">Potensil</h3>
                <p className="text-blue-300 mt-2">Potência Diária</p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Benefícios</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Prolonga desempenho e vigor</li>
                    <li>• Aumento de testosterona</li>
                    <li>• Disposição e energia diária</li>
                    <li>• Melhora do desempenho físico</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Composição</h4>
                  <p className="text-gray-300 text-sm">Epmedium, Tribulus Black, Maca Peruana, Marapuama, Long Jack, Saw Palmetto</p>
                </div>
                <div className="text-center">
                  <span className="text-blue-500 block mb-2">30 Cápsulas</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Seal Section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-900/20 to-green-900/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">100% Natural</h2>
            <p className="text-gray-400">
              Todos os nossos produtos são feitos com ingredientes naturais de alta qualidade, 
              garantindo eficácia e segurança para sua saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O Que Dizem Nossos Clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria S.",
                product: "Potensil Prazer Diário",
                text: "Notei uma diferença incrível na minha disposição logo na primeira semana. Recomendo muito!",
                rating: 5,
                color: "pink"
              },
              {
                name: "João P.",
                product: "Potensexy",
                text: "Produto excepcional! Superou todas as minhas expectativas. Resultado garantido.",
                rating: 5,
                color: "yellow"
              },
              {
                name: "Carlos M.",
                product: "Potensil",
                text: "Uso há 3 meses e não troco por nada. Energia e disposição em outro nível!",
                rating: 5,
                color: "blue"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-${testimonial.color}-500/20 to-transparent p-6 rounded-2xl backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300`}
              >
                <Quote className={`w-10 h-10 text-${testimonial.color}-500 mb-4`} />
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 text-${testimonial.color}-500 fill-current`} />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-${testimonial.color}-500/20 flex items-center justify-center`}>
                    <span className={`text-${testimonial.color}-500 font-bold`}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className={`text-${testimonial.color}-500 text-sm`}>{testimonial.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Como funcionam os produtos?",
                a: "Nossos produtos são formulados com ingredientes naturais que trabalham em sinergia para potencializar sua energia e vitalidade. Cada produto tem uma fórmula específica para atender diferentes necessidades."
              },
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "Os resultados podem variar de pessoa para pessoa, mas a maioria dos usuários relata melhorias significativas após 2-3 semanas de uso contínuo."
              },
              {
                q: "Os produtos têm contraindicações?",
                a: "Por serem 100% naturais, nossos produtos são seguros para a maioria das pessoas. No entanto, recomendamos consultar um profissional de saúde antes de iniciar o uso."
              },
              {
                q: "Posso tomar junto com outros suplementos?",
                a: "Sim, nossos produtos são seguros para uso em conjunto com outros suplementos. Porém, sempre recomendamos consultar um profissional de saúde."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-gradient-to-r from-gray-900 to-black flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold">{faq.q}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`bg-black/50 transition-all duration-300 ease-in-out ${
                    activeAccordion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="px-6 py-4 text-gray-400">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Dúvidas?</h2>
          <p className="text-gray-400 mb-8">Nossa equipe está pronta para ajudar você a escolher o produto ideal</p>
          <button className="bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all">
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista
          </button>
        </div>
      </section>

      {/* Footer with Effect */}
      <footer className="bg-black py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-pink-500">Poten</span>
                <span className="text-blue-500">sil</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Produtos naturais para sua energia e vitalidade
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Potensil Prazer Diário</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Potensexy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Potensil</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Receba novidades e promoções exclusivas</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 rounded-full px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 transition-colors">
                  Assinar
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Potensil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;