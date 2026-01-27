import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Answers } from '@/components/app-decision-tool-engine/types';

interface QuestionnaireScreenProps {
  onComplete: (answers: Answers) => void;
}

interface Question {
  id: keyof Answers;
  question: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 'appGoal',
    question: 'What is the main goal for this app?',
    options: [
      { value: 'revenue', label: 'Launch a new revenue product' },
      { value: 'validate', label: 'Validate an idea fast' },
      { value: 'operations', label: 'Replace manual operations' },
      { value: 'marketplace', label: 'Build a marketplace' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'primaryAction',
    question: 'What is the single most important action users take?',
    options: [
      { value: 'purchase', label: 'Make a purchase or booking' },
      { value: 'submit', label: 'Submit a request or form' },
      { value: 'create', label: 'Create and share content' },
      { value: 'match', label: 'Match people or items in real time' },
      { value: 'track', label: 'Track progress or tasks' },
    ],
  },
  {
    id: 'targetUsers',
    question: 'Who is this for?',
    options: [
      { value: 'consumer', label: 'Everyday consumers' },
      { value: 'business', label: 'Small business teams' },
      { value: 'internal', label: 'Our internal team only' },
      { value: 'niche', label: 'A niche professional audience' },
    ],
  },
  {
    id: 'usageFrequency',
    question: 'How often will people use it?',
    options: [
      { value: 'daily', label: 'Daily' },
      { value: 'weekly', label: 'A few times per week' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'occasional', label: 'Occasional or seasonal' },
    ],
  },
  {
    id: 'platformIntent',
    question: 'Which platforms do you need first?',
    options: [
      { value: 'web', label: 'Web only' },
      { value: 'ios', label: 'iOS only' },
      { value: 'android', label: 'Android only' },
      { value: 'ios-android', label: 'iOS + Android' },
      { value: 'all', label: 'Web + Mobile apps' },
    ],
  },
  {
    id: 'featureScope',
    question: 'How many core features are required for a first release?',
    options: [
      { value: '1-2', label: '1-2 core features' },
      { value: '3-4', label: '3-4 core features' },
      { value: '5-7', label: '5-7 features' },
      { value: '8+', label: '8+ features' },
    ],
  },
  {
    id: 'mvpTradeoff',
    question: 'If you had to launch in 8 weeks, what would you ship?',
    options: [
      { value: 'core-only', label: 'Only the core action' },
      { value: 'core-plus', label: 'Core action + one nice-to-have' },
      { value: 'most', label: 'Still need most features' },
      { value: 'unsure', label: 'Not sure what to cut yet' },
    ],
  },
  {
    id: 'monetization',
    question: 'How clear is monetization?',
    options: [
      { value: 'clear', label: 'Clear pricing or ROI' },
      { value: 'some', label: 'Some idea, not tested' },
      { value: 'unsure', label: 'Not sure yet' },
      { value: 'internal', label: 'Not monetized (internal tool)' },
    ],
  },
  {
    id: 'dataComplexity',
    question: 'What level of accounts or data is involved?',
    options: [
      { value: 'public', label: 'No accounts (public info only)' },
      { value: 'basic', label: 'Basic login + profile' },
      { value: 'ugc', label: 'User uploads or content' },
      { value: 'sensitive', label: 'Sensitive data or permissions' },
    ],
  },
  {
    id: 'integrations',
    question: 'What integrations do you need?',
    options: [
      { value: 'none', label: 'None' },
      { value: 'standard', label: '1-2 standard tools' },
      { value: 'payments', label: 'Payments or CRM' },
      { value: 'advanced', label: 'Multiple APIs, AI, or real-time features' },
    ],
  },
  {
    id: 'validationLevel',
    question: 'What proof do you have that people want this?',
    options: [
      { value: 'paying', label: 'Paying or committed users' },
      { value: 'interested', label: 'Strong interest list' },
      { value: 'interviews', label: 'A few interviews' },
      { value: 'none', label: 'No real validation yet' },
    ],
  },
  {
    id: 'timelineClarity',
    question: 'How clear is your timeline?',
    options: [
      { value: 'short', label: 'Need it in 3 months' },
      { value: 'medium', label: '3-6 months' },
      { value: 'flexible', label: 'Flexible' },
      { value: 'unknown', label: 'No timeline yet' },
    ],
  },
  {
    id: 'teamReadiness',
    question: 'How ready is your team or budget?',
    options: [
      { value: 'team', label: 'We have a dev/design team' },
      { value: 'budget-no-team', label: 'Budget set, no team yet' },
      { value: 'budget-unclear', label: 'Budget is unclear' },
      { value: 'diy', label: 'Hoping to DIY' },
    ],
  },
  {
    id: 'scopeConfidence',
    question: 'How clear are you on the MVP scope?',
    options: [
      { value: 'clear', label: 'Very clear' },
      { value: 'somewhat', label: 'Somewhat clear' },
      { value: 'fuzzy', label: 'Still fuzzy' },
      { value: 'everything', label: 'Everything feels important' },
    ],
  },
];

const storageKey = 'app-decision-tool-progress';

export function QuestionnaireScreen({ onComplete }: QuestionnaireScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const isLastQuestion = currentStep === questions.length - 1;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return;
    try {
      const data = JSON.parse(stored) as { answers?: Answers; currentStep?: number };
      const nextAnswers = data?.answers;
      const nextStep =
        typeof data?.currentStep === 'number'
          ? Math.min(Math.max(data.currentStep, 0), questions.length - 1)
          : null;

      if (nextAnswers || typeof nextStep === 'number') {
        // Defer state updates to avoid synchronous setState in effect warnings.
        queueMicrotask(() => {
          if (nextAnswers) {
            setAnswers(nextAnswers);
          }
          if (typeof nextStep === 'number') {
            setCurrentStep(nextStep);
          }
        });
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey, JSON.stringify({ answers, currentStep }));
  }, [answers, currentStep]);

  const currentAnswer = answers[currentQuestion.id];

  const handleChoice = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (isLastQuestion) {
        window.localStorage.removeItem(storageKey);
        onComplete(newAnswers);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }, 200);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="questionnaire">
      <div className="questionnaire__progress">
        <div
          className="questionnaire__progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="questionnaire__content">
        <div key={currentStep} className="questionnaire__card animate-section-rise">
          <div className="questionnaire__header">
            <p className="questionnaire__eyebrow">
              Question {currentStep + 1} of {questions.length}
            </p>
            <h2 className="questionnaire__question">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="questionnaire__options">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChoice(option.value)}
                className="questionnaire__option"
              >
                <span
                  className="questionnaire__option-label">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <div className="questionnaire__footer">
              <button
                onClick={handleBack}
                className="questionnaire__back"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
