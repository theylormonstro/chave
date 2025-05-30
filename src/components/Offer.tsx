import React from 'react';
<<<<<<< HEAD
import Button from './Button';
import { CheckCircle, ShieldCheck, Zap, Award } from 'lucide-react';
=======
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb

interface OfferProps {
  onAccept: () => void;
}

const Offer: React.FC<OfferProps> = ({ onAccept }) => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-block px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
            ACESSO LIBERADO
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Liberado: acesso ao Desafio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Reels que Imprimem Dinheiro™
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tudo o que você precisa pra viralizar e monetizar em 3 dias — mesmo do zero e sem aparecer.
          </p>
        </div>
        
        {/* Main content - Offer details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - benefits */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Award className="w-5 h-5 text-blue-500 mr-2" /> 
              O que você vai receber:
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Desafio 3 Dias</h3>
                  <p className="text-gray-300 text-sm">PDF + vídeos + templates para resultados rápidos</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Templates prontos de Reels virais com IA</h3>
                  <p className="text-gray-300 text-sm">Modelos testados, com scripts gerados por inteligência artificial para aumentar visualizações e vendas</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">Acesso à comunidade secreta</h3>
                  <p className="text-gray-300 text-sm">Grupo exclusivo de criadores invisíveis lucrando com IA e Reels</p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white">
                    <span className="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-xs mr-2">BÔNUS</span>
                    Mini-treinamento "Funil Explosivo"
                  </h3>
                  <p className="text-gray-300 text-sm">Como criar funis de venda em vídeos curtos com IA para automatizar conversões</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex items-center text-gray-300 text-sm">
                <ShieldCheck className="w-4 h-4 text-blue-500 mr-2" />
                Garantia de 7 dias ou seu dinheiro de volta
              </div>
            </div>
          </div>
          
          {/* Right side - pricing */}
          <div className="bg-gradient-to-b from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-xl flex flex-col">
            <div className="flex-1">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Zap className="w-5 h-5 text-blue-500 mr-2" /> 
                  Oferta especial
                </h2>
                <div className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                  Por tempo limitado
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="text-gray-400 line-through text-lg">R$97</span>
                  <span className="ml-2 bg-green-600/20 text-green-500 px-2 py-0.5 rounded text-xs">
                    80% OFF
                  </span>
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">R$19</span>
                  <span className="ml-2 text-gray-300 text-sm">à vista</span>
                </div>
                
                <p className="text-gray-400 text-sm mt-2">
                  Acesso imediato a todo conteúdo após o pagamento
                </p>
              </div>
            </div>
            
            <div className="mt-auto">
            <a
  href="https://theylor.pay.yampi.com.br/r/HYY1S2P4IJ"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full inline-flex justify-center text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
>
  Quero começar agora por R$19
</a>
              
              <div className="mt-4 flex items-center justify-center text-gray-400 text-xs">
                <div className="flex space-x-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="Cartão de crédito" className="h-6 w-auto" />
                  <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="Cartão de débito" className="h-6 w-auto" />
                  <img src="https://cdn-icons-png.flaticon.com/512/217/217445.png" alt="PIX" className="h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Você está a um clique do método 🔥
      </h2>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Descubra como transformar Reels em receita com um plano simples, direto e anônimo.
      </p>
      <button
        onClick={onAccept}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
      >
        Quero acessar agora
      </button>
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    </div>
  );
};

<<<<<<< HEAD
export default Offer;
=======
export default Offer;
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
