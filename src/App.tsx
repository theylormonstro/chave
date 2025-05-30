<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
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
<<<<<<< HEAD
    // Scroll to top when starting quiz
=======
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentStep(Step.RESULT);
<<<<<<< HEAD
    // Scroll to top when showing results
=======
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueToOffer = () => {
    setCurrentStep(Step.OFFER);
<<<<<<< HEAD
    // Scroll to top when showing offer
=======
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptOffer = () => {
    setCurrentStep(Step.AFTER_CLICK);
<<<<<<< HEAD
    // Scroll to top when showing loading screen
=======
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
<<<<<<< HEAD
    // In a real application, this would redirect to checkout
    window.location.href = 'https://checkout.example.com';
=======
    window.location.href = 'https://checkout.exemplo.com';
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {currentStep === Step.HERO && <Hero onStartQuiz={handleStartQuiz} />}
<<<<<<< HEAD
      
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
=======
      {currentStep === Step.QUIZ && <Quiz questions={questions} onComplete={handleQuizComplete} />}
      {currentStep === Step.RESULT && <Result answers={userAnswers} onContinue={handleContinueToOffer} />}
      {currentStep === Step.OFFER && <Offer onAccept={handleAcceptOffer} />}
      {currentStep === Step.AFTER_CLICK && <AfterClick onComplete={handleLoadingComplete} />}
>>>>>>> 958cfd43570b6f77a2570adfbe94b31530f17ecb
    </div>
  );
}

export default App;