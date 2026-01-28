"use client";

import { useState } from 'react';
import { LandingScreen } from '@/components/accessibility-fix-priority-engine/components/LandingScreen';
import { QuestionnaireScreen } from '@/components/accessibility-fix-priority-engine/components/QuestionnaireScreen';
import { ResultsScreen } from '@/components/accessibility-fix-priority-engine/components/ResultsScreen';
import { VIPDayPage } from '@/components/accessibility-fix-priority-engine/components/VIPDayPage';
import type { Answers } from '@/components/accessibility-fix-priority-engine/types';
import { calculatePriorities } from '@/components/accessibility-fix-priority-engine/utils/scoring';
import { trackEvent } from '@/lib/analytics';

export default function AccessibilityFixPriorityEngine() {
  const [screen, setScreen] = useState<'landing' | 'questionnaire' | 'results' | 'vipday'>('landing');
  const [answers, setAnswers] = useState<Answers>({});

  const handleStart = () => {
    trackEvent('click', {
      event_category: 'tool_usage',
      event_label: 'accessibility_tool_started',
    });
    setScreen('questionnaire');
  };

  const handleComplete = (finalAnswers: Answers) => {
    trackEvent('form_submit', {
      event_category: 'tool_usage',
      event_label: 'accessibility_questionnaire_completed',
    });
    setAnswers(finalAnswers);
    setScreen('results');
  };

  const handleRestart = () => {
    trackEvent('click', {
      event_category: 'tool_usage',
      event_label: 'accessibility_tool_restarted',
    });
    setAnswers({});
    setScreen('landing');
  };

  const handleViewVIPDay = () => {
    trackEvent('click', {
      event_category: 'engagement',
      event_label: 'accessibility_vip_day_viewed',
    });
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
