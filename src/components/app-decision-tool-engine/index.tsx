'use client';

import { useState } from 'react';
import { LandingScreen } from '@/components/app-decision-tool-engine/components/LandingScreen';
import { QuestionnaireScreen } from '@/components/app-decision-tool-engine/components/QuestionnaireScreen';
import { ResultsScreen } from '@/components/app-decision-tool-engine/components/ResultsScreen';
import type { Answers } from '@/components/app-decision-tool-engine/types';
import { trackEvent } from '@/lib/analytics';

const resultsStorageKey = 'app-decision-tool-results';

export default function AppDecisionToolEngine() {
  const [answers, setAnswers] = useState<Answers>(() => {
    if (typeof window === 'undefined') return {};
    const stored = window.localStorage.getItem(resultsStorageKey);
    if (!stored) return {};
    try {
      const data = JSON.parse(stored) as { answers?: Answers };
      return data?.answers ?? {};
    } catch {
      window.localStorage.removeItem(resultsStorageKey);
      return {};
    }
  });
  const [screen, setScreen] = useState<'landing' | 'questionnaire' | 'results'>(() => {
    if (typeof window === 'undefined') return 'landing';
    const stored = window.localStorage.getItem(resultsStorageKey);
    if (!stored) return 'landing';
    try {
      const data = JSON.parse(stored) as { answers?: Answers };
      return data?.answers ? 'results' : 'landing';
    } catch {
      window.localStorage.removeItem(resultsStorageKey);
      return 'landing';
    }
  });

  const handleStart = () => {
    trackEvent('click', {
      event_category: 'tool_usage',
      event_label: 'app_decision_tool_started',
    });
    setScreen('questionnaire');
  };

  const handleComplete = (finalAnswers: Answers) => {
    trackEvent('form_submit', {
      event_category: 'tool_usage',
      event_label: 'app_decision_questionnaire_completed',
    });
    setAnswers(finalAnswers);
    setScreen('results');
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(resultsStorageKey, JSON.stringify({ answers: finalAnswers }));
    }
  };

  const handleRestart = () => {
    trackEvent('click', {
      event_category: 'tool_usage',
      event_label: 'app_decision_tool_restarted',
    });
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
