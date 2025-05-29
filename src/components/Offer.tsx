import React from 'react';

interface OfferProps {
  onAccept: () => void;
}

const Offer: React.FC<OfferProps> = ({ onAccept }) => {
  return (
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
    </div>
  );
};

export default Offer;
