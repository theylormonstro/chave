import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (answers: string[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 bg-black text-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        {currentQuestion.question}
      </h2>
      <div className="flex flex-col gap-4">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
