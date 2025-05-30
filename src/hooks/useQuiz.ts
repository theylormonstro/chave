import { useState, useCallback, useEffect } from 'react';
import { Question } from '../types';

export const useQuiz = (
  questions: Question[],
  onComplete: (answers: string[]) => void
) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill('')
  );
  const [progress, setProgress] = useState(0);

  const selectAnswer = useCallback(
    (answer: string) => {
      setAnswers((prev) => {
        const updated = [...prev];
        updated[currentQuestionIndex] = answer;
        return updated;
      });
    },
    [currentQuestionIndex]
  );

  const nextQuestion = useCallback(() => {
    if (!answers[currentQuestionIndex]) return; // bloqueia avanço sem resposta

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onComplete(answers);
    }
  }, [currentQuestionIndex, questions.length, answers, onComplete]);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);

  return {
    currentQuestionIndex,
    answers,
    selectAnswer,
    nextQuestion,
    isLastQuestion,
    progress,
  };
};
