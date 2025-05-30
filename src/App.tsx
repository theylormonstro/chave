import React, { useState } from 'react';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Offer from './components/Offer';
import AfterClick from './components/AfterClick';
import { Step, Question } from './types';

const questions: Question[] = [
  {
    id: 1,
    text: "Você já tentou viralizar e lucrar com vídeos curtos?",
    options: ["Sim", "Não", "Estou começando agora"]
  },
  {
    id: 2,
    text: "Você prefere ganhar dinheiro mostrando o rosto ou mantendo anonimato?",
    options: ["Mostrar o rosto", "Anonimato total", "Tanto faz"]
  },
  {
    id: 3,
    text: "Quantos minutos por dia você pode investir pra escalar seu conteúdo?",
    options: ["15 min", "30 min", "1h ou mais"]
  },
  {
    id: 4,
    text: "Qual dessas verdades bate mais forte em você?",
    options: [
      "Quero viver de internet",
      "Quero ganhar uma grana extra",
      "Só quero testar pra ver se funciona"
    ]
  },
  {
    id: 5,
    text: "Quer um plano direto, testado, que transforma Reels em receita em 3 dias?",
    options: ["Com certeza", "Talvez", "Não sei"]
  }
];

function App() {
  const [step, setStep] = useState<Step>(Step.HERO);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => setStep(Step.QUIZ);

  const handleCompleteQuiz = (userAnswers: string[]) => {
    setAnswers(userAnswers);
    setStep(Step.RESULT);
  };

  const handleContinue = () => setStep(Step.OFFER);
  const handleAcceptOffer = () => setStep(Step.AFTER_CLICK);

  switch (step) {
    case Step.HERO:
      return <Hero onStartQuiz={handleStart} />;
    case Step.QUIZ:
      return <Quiz questions={questions} onComplete={handleCompleteQuiz} />;
    case Step.RESULT:
      return <Result onContinue={handleContinue} />;
    case Step.OFFER:
      return <Offer onAccept={handleAcceptOffer} />;
    case Step.AFTER_CLICK:
      return <AfterClick />;
    default:
      return null;
  }
}

export default App;
