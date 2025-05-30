<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { CheckCircle, Zap } from 'lucide-react';

interface ResultProps {
  onContinue: () => void;
}

const Result: React.FC<ResultProps> = ({ onContinue }) => {
  const [showReveal, setShowReveal] = useState(false);
  const [animateProfile, setAnimateProfile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReveal(true);
    }, 1000);

    const profileTimer = setTimeout(() => {
      setAnimateProfile(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(profileTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16">
      <div className="max-w-2xl w-full bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-xl border border-gray-700 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-xl text-blue-400 font-medium mb-2">
              <span className="inline-block animate-pulse mr-2">🧠</span> 
              Com base nas suas respostas, você é um:
            </h2>
            
            <div className={`transform transition-all duration-1000 ease-out ${animateProfile ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 relative">
                <span className="relative">
                  CRIADOR INVISÍVEL™
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span>
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg">
                Alguém que pode escalar rápido sem mostrar o rosto.
                <br />Já temos o caminho pra você.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            {showReveal && (
              <>
                <div className="bg-gray-700/50 rounded-lg p-4 flex items-start space-x-3 transform transition-all duration-500 ease-out animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-white">Potencial de crescimento rápido</h3>
                    <p className="text-gray-300">Seu perfil tem potencial para crescimento acelerado sem precisar aparecer nos vídeos.</p>
                  </div>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-4 flex items-start space-x-3 transform transition-all duration-500 ease-out animate-fade-in delay-150">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-white">Monetização facilitada</h3>
                    <p className="text-gray-300">Você pode monetizar rapidamente seguindo nosso método exclusivo para Criadores Invisíveis.</p>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="flex justify-center">
            <Button onClick={onContinue} className="px-10">
              Liberar meu acesso agora
            </Button>
          </div>
        </div>
      </div>
=======
import React from 'react';

interface ResultProps {
  answers: string[];
  onContinue: () => void;
}

const Result: React.FC<ResultProps> = ({ answers, onContinue }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 bg-black text-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Desafio Concluído! 🚀
      </h1>

      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        Com base nas suas respostas, liberamos o acesso ao método que transforma Reels em receita sem precisar aparecer.
      </p>

      <div className="bg-gray-900 p-6 rounded-lg shadow-md text-left max-w-xl w-full mb-8">
        <h2 className="text-lg font-semibold mb-2 text-white">Suas respostas:</h2>
        <ul className="list-disc list-inside text-gray-300">
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={onContinue}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
      >
        Ver método agora
      </button>
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    </div>
  );
};

<<<<<<< HEAD
export default Result;
=======
export default Result;
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
