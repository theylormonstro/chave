import { useState } from 'react';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Offer from './components/Offer';
import AfterClick from './components/AfterClick';
import { Step } from './types';
import { questions } from './data/questions';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(Step.HERO);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => {
    setCurrentStep(Step.QUIZ);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentStep(Step.RESULT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToOffer = () => {
    setCurrentStep(Step.OFFER);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptOffer = () => {
    setCurrentStep(Step.AFTER_CLICK);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    window.location.href = 'https://checkout.exemplo.com';
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {currentStep === Step.HERO && <Hero onStartQuiz={handleStartQuiz} />}
      {currentStep === Step.QUIZ && <Quiz questions={questions} onComplete={handleQuizComplete} />}
      {currentStep === Step.RESULT && <Result answers={userAnswers} onContinue={handleContinueToOffer} />}
      {currentStep === Step.OFFER && <Offer onAccept={handleAcceptOffer} />}
      {currentStep === Step.AFTER_CLICK && <AfterClick onComplete={handleLoadingComplete} />}
    </div>
  );
}

export default App;