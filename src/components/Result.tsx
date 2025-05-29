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
    </div>
  );
};

export default Result;
