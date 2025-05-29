import React, { useEffect, useState } from 'react';

interface AfterClickProps {
  onComplete: () => void;
}

const AfterClick: React.FC<AfterClickProps> = ({ onComplete }) => {
  const [countdown, setCountdown] = useState(3);
  const [loadingText, setLoadingText] = useState("Desbloqueando acesso ao Desafio");
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Handle dots animation
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    // Handle loading text changes
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const texts = [
          "Desbloqueando acesso ao Desafio",
          "Preparando seus templates",
          "Configurando área de membros",
          "Finalizando preparativos"
        ];
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 2000);

    // Handle countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Give a little extra time for visual effect before completing
          setTimeout(onComplete, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(countdownInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-900">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-block rounded-full p-3 bg-blue-600/20">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          {loadingText}<span className="inline-block w-8 text-left">{dots}</span>
        </h2>
        
        <p className="text-blue-400 text-lg">
          Você será redirecionado em {countdown}...
        </p>
        
        <div className="mt-8 w-full bg-gray-800 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(3 - countdown) / 3 * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AfterClick;