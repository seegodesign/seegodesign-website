"use client";

import { useEffect, useState, type CSSProperties } from 'react';
import { useSearchParams } from 'next/navigation';
import { LandingScreen } from './components/LandingScreen';
import { QuestionnaireScreen } from './components/QuestionnaireScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { VIPDayPage } from './components/VIPDayPage';
import { ConfirmationPage } from './components/ConfirmationPage';
import type { Answers } from './types';
import { calculatePriorities } from './utils/scoring';

const engineTheme = {
  '--engine-page-bg': '#0b1828',
  '--engine-card-bg': '#111f2e',
  '--engine-card-soft': '#0f1c2b',
  '--engine-text': '#f8fafc',
  '--engine-text-strong': '#e2e8f0',
  '--engine-text-muted': '#94a3b8',
  '--engine-border': 'rgba(148, 163, 184, 0.25)',
  '--engine-primary': 'var(--brand-primary)',
  '--engine-primary-strong': '#a3e35b',
  '--engine-primary-contrast': '#0b1828',
  '--engine-cta': 'var(--brand-primary)',
  '--engine-cta-hover': '#9be14b',
  '--engine-highlight-bg': 'rgba(125, 202, 47, 0.12)',
  '--engine-warning': '#fbbf24',
  '--engine-warning-bg': 'rgba(251, 191, 36, 0.15)',
  '--engine-success': '#22c55e',
  '--engine-success-bg': 'rgba(34, 197, 94, 0.15)',
  '--engine-danger': '#f87171',
} as CSSProperties;

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
      style={engineTheme}
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
