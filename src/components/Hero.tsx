import React from 'react';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 relative overflow-hidden">
      {/* Abstract background elements */}
=======
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 relative overflow-hidden bg-black">
      {/* Background */}
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
<<<<<<< HEAD
      
=======

>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
      {/* Content */}
      <div className="max-w-4xl w-full z-10 space-y-8 text-center">
        <div className="inline-block mb-2 px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
          MÉTODO EXCLUSIVO 2025
        </div>
<<<<<<< HEAD
        
=======

>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Você consegue criar{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Reels que imprimem dinheiro
          </span>{' '}
          sem aparecer?
        </h1>
<<<<<<< HEAD
        
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Um desafio rápido que revela seu perfil e libera o acesso ao método que viraliza e lucra em menos de 7 dias.
        </p>
        
=======

        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Um desafio rápido que revela seu perfil e libera o acesso ao método que viraliza e lucra em menos de 7 dias.
        </p>

>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
        <div className="mt-10">
          <Button onClick={onStartQuiz} className="mx-auto">
            Quero tentar o desafio
          </Button>
        </div>
<<<<<<< HEAD
        
=======

>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-500 mx-auto" />
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
