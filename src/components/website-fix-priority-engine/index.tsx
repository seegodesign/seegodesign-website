"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { LandingScreen } from '@/components/website-fix-priority-engine/components/LandingScreen';
import { QuestionnaireScreen } from '@/components/website-fix-priority-engine/components/QuestionnaireScreen';
import { ResultsScreen } from '@/components/website-fix-priority-engine/components/ResultsScreen';
import { VIPDayPage } from '@/components/website-fix-priority-engine/components/VIPDayPage';
import { ConfirmationPage } from '@/components/website-fix-priority-engine/components/ConfirmationPage';
import type { Answers } from '@/components/website-fix-priority-engine/types';
import { calculatePriorities } from '@/components/website-fix-priority-engine/utils/scoring';

export default function WebsiteFixPriorityEngine() {
  const searchParams = useSearchParams();
  const [screen, setScreen] = useState<
    'landing' | 'questionnaire' | 'results' | 'vipday' | 'confirmation'
  >('landing');
  const [answers, setAnswers] = useState<Answers>({});

  const status = searchParams.get('status');

  useEffect(() => {
    if (status === 'success') {
      const timer = window.setTimeout(() => {
        setScreen('confirmation');
      }, 0);
      return () => window.clearTimeout(timer);
    } else if (status === 'cancel') {
      const timer = window.setTimeout(() => {
        setScreen('vipday');
      }, 0);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [status]);

  const handleStart = () => {
    setScreen('questionnaire');
  };

  const handleComplete = (finalAnswers: Answers) => {
    setAnswers(finalAnswers);
    setScreen('results');
  };

  const handleRestart = () => {
    setAnswers({});
    setScreen('landing');
  };

  const handleViewVIPDay = () => {
    setScreen('vipday');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToResults = () => {
    setScreen('results');
  };

  const priorities = calculatePriorities(answers);

  return (
    <div
      className="border border-slate-700/60 shadow-[0_25px_60px_rgba(8,15,30,0.45)] backdrop-blur-sm"
    >
      <div key={screen} className="animate-section-rise">
        {screen === 'landing' && <LandingScreen onStart={handleStart} />}
        {screen === 'questionnaire' && <QuestionnaireScreen onComplete={handleComplete} />}
        {screen === 'results' && (
          <ResultsScreen
            answers={answers}
            onRestart={handleRestart}
            onViewVIPDay={handleViewVIPDay}
          />
        )}
        {screen === 'vipday' && (
          <VIPDayPage
            priorities={priorities}
            onBack={handleBackToResults}
          />
        )}
        {screen === 'confirmation' && <ConfirmationPage onBackToResults={handleBackToResults} />}
      </div>
    </div>
  );
}
