import React, { useState } from 'react';
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
    // Scroll to top when starting quiz
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentStep(Step.RESULT);
    // Scroll to top when showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToOffer = () => {
    setCurrentStep(Step.OFFER);
    // Scroll to top when showing offer
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptOffer = () => {
    setCurrentStep(Step.AFTER_CLICK);
    // Scroll to top when showing loading screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    // In a real application, this would redirect to checkout
    window.location.href = 'https://checkout.example.com';
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {currentStep === Step.HERO && <Hero onStartQuiz={handleStartQuiz} />}
      
      {currentStep === Step.QUIZ && (
        <Quiz 
          questions={questions} 
          onComplete={handleQuizComplete} 
        />
      )}
      
      {currentStep === Step.RESULT && (
        <Result onContinue={handleContinueToOffer} />
      )}
      
      {currentStep === Step.OFFER && (
        <Offer onAccept={handleAcceptOffer} />
      )}
      
      {currentStep === Step.AFTER_CLICK && (
        <AfterClick onComplete={handleLoadingComplete} />
      )}
    </div>
  );
}

export default App;