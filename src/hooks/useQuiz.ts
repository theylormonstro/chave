import { useState, useCallback, useEffect } from 'react';
import { Question } from '../types';

export const useQuiz = (questions: Question[], onComplete: (answers: string[]) => void) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(undefined));
  const [progress, setProgress] = useState(0);

  const selectAnswer = useCallback((answer: string) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answer;
      return newAnswers;
    });
  }, [currentQuestionIndex]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  }, [currentQuestionIndex, questions.length, answers, onComplete]);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    // Calculate progress
    setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
  }, [currentQuestionIndex, questions.length]);

  return {
    currentQuestionIndex,
    answers,
    selectAnswer,
    nextQuestion,
    isLastQuestion,
    progress
  };
};