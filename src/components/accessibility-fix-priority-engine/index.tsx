"use client";

import { useState, type CSSProperties } from 'react';
import { LandingScreen } from '@/components/accessibility-fix-priority-engine/components/LandingScreen';
import { QuestionnaireScreen } from '@/components/accessibility-fix-priority-engine/components/QuestionnaireScreen';
import { ResultsScreen } from '@/components/accessibility-fix-priority-engine/components/ResultsScreen';
import { VIPDayPage } from '@/components/accessibility-fix-priority-engine/components/VIPDayPage';
import type { Answers } from '@/components/accessibility-fix-priority-engine/types';
import { calculatePriorities } from '@/components/accessibility-fix-priority-engine/utils/scoring';

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
} as CSSProperties;

export default function AccessibilityFixPriorityEngine() {
  const [screen, setScreen] = useState<'landing' | 'questionnaire' | 'results' | 'vipday'>('landing');
  const [answers, setAnswers] = useState<Answers>({});

  const handleStart = () => setScreen('questionnaire');

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
      <div className="min-h-screen text-slate-100">
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
        </div>
      </div>
    </div>
  );
}
