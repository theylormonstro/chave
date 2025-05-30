import React from 'react';
import Button from './Button';
import { useQuiz } from '../hooks/useQuiz';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (answers: string[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const {
    currentQuestionIndex,
    answers,
    selectAnswer,
    nextQuestion,
    isLastQuestion,
    progress,
  } = useQuiz(questions, onComplete);

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Algo deu errado. Nenhuma pergunta encontrada.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16">
      {/* Barra de progresso */}
      <div className="w-full max-w-2xl mb-8">
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-gray-400 mt-2 text-sm">
          Pergunta {currentQuestionIndex + 1} de {questions.length}
        </div>
      </div>

      {/* Card da pergunta */}
      <div className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          {currentQuestion.text}
        </h2>

        <div className="space-y-3 mt-8">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(option)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center 
                ${
                  currentAnswer === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 border 
                ${
                  currentAnswer === option
                    ? 'border-white bg-blue-500'
                    : 'border-gray-400'
                }`}
              >
                {currentAnswer === option && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            onClick={nextQuestion}
            disabled={!currentAnswer}
            className={!currentAnswer ? 'opacity-50 cursor-not-allowed' : ''}
          >
            {isLastQuestion ? 'Ver resultado' : 'Próxima pergunta'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
