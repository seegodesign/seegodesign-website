'use client';

import { useEffect, useState } from 'react';
import { LandingScreen } from '@/components/app-decision-tool-engine/components/LandingScreen';
import { QuestionnaireScreen } from '@/components/app-decision-tool-engine/components/QuestionnaireScreen';
import { ResultsScreen } from '@/components/app-decision-tool-engine/components/ResultsScreen';
import type { Answers } from '@/components/app-decision-tool-engine/types';

const resultsStorageKey = 'app-decision-tool-results';

export default function AppDecisionToolEngine() {
  const [screen, setScreen] = useState<'landing' | 'questionnaire' | 'results'>('landing');
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(resultsStorageKey);
    if (!stored) return;
    try {
      const data = JSON.parse(stored) as { answers?: Answers };
      if (data?.answers) {
        setAnswers(data.answers);
        setScreen('results');
      }
    } catch {
      window.localStorage.removeItem(resultsStorageKey);
    }
  }, []);

  const handleStart = () => {
    setScreen('questionnaire');
  };

  const handleComplete = (finalAnswers: Answers) => {
    setAnswers(finalAnswers);
    setScreen('results');
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(resultsStorageKey, JSON.stringify({ answers: finalAnswers }));
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setScreen('landing');
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(resultsStorageKey);
    }
  };

  return (
    <div
      className="border border-slate-700/60 shadow-[0_25px_60px_rgba(8,15,30,0.45)] backdrop-blur-sm"
    >
      <div key={screen} className="animate-section-rise">
        {screen === 'landing' && <LandingScreen onStart={handleStart} />}
        {screen === 'questionnaire' && <QuestionnaireScreen onComplete={handleComplete} />}
        {screen === 'results' && <ResultsScreen answers={answers} onRestart={handleRestart} />}
      </div>
    </div>
  );
}
