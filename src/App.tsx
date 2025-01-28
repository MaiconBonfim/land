import React from 'react';
import { Flame, Heart, Clock, Star, ArrowRight, MessageCircle, Sparkles, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Linha <span className="text-pink-500">Poten</span><span className="text-blue-500">sil</span>
          </h1>
          <p className="text-xl text-gray-400">Produtos naturais para sua energia e vitalidade</p>
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
    </div>
  );
}

export default App;