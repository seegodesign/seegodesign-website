import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Answers } from '../types';

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
    id: 'goal',
    question: 'What is your primary website goal?',
    options: [
      { value: 'leads', label: 'Generate leads' },
      { value: 'sales', label: 'Drive sales' },
      { value: 'bookings', label: 'Get bookings or appointments' },
      { value: 'credibility', label: 'Build credibility and trust' },
    ],
  },
  {
    id: 'businessType',
    question: 'What type of business do you run?',
    options: [
      { value: 'service', label: 'Service-based business' },
      { value: 'ecommerce', label: 'E-commerce / Online store' },
      { value: 'personal', label: 'Personal brand / Coach / Consultant' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'cta',
    question: 'Do you have a clear primary call to action on your homepage?',
    options: [
      { value: 'yes', label: 'Yes, it is clear' },
      { value: 'notReally', label: 'Not really' },
      { value: 'no', label: 'No, not yet' },
    ],
  },
  {
    id: 'clarity',
    question: 'How clear is your homepage message?',
    options: [
      { value: 'veryClear', label: 'Very clear - visitors get it immediately' },
      { value: 'somewhatClear', label: 'Somewhat clear - could be better' },
      { value: 'confusing', label: 'Confusing - needs work' },
    ],
  },
  {
    id: 'traffic',
    question: 'How much traffic does your website get monthly?',
    options: [
      { value: 'low', label: 'Low (less than 500 visitors)' },
      { value: 'medium', label: 'Medium (500 - 5,000 visitors)' },
      { value: 'high', label: 'High (5,000+ visitors)' },
    ],
  },
  {
    id: 'mobileConfidence',
    question: 'How confident are you in your mobile experience?',
    options: [
      { value: 'confident', label: 'Confident - it works great' },
      { value: 'unsure', label: 'Unsure - have not tested much' },
      { value: 'poor', label: 'Poor - it needs improvement' },
    ],
  },
  {
    id: 'speedConfidence',
    question: 'How fast does your website feel?',
    options: [
      { value: 'fast', label: 'Fast - loads quickly' },
      { value: 'okay', label: 'Okay - could be faster' },
      { value: 'slow', label: 'Slow - frustratingly slow' },
    ],
  },
  {
    id: 'tracking',
    question: 'Do you have conversion tracking set up?',
    options: [
      { value: 'yes', label: 'Yes, tracking everything' },
      { value: 'partially', label: 'Partially - some tracking' },
      { value: 'no', label: 'No, nothing set up yet' },
    ],
  },
  {
    id: 'contentFreshness',
    question: 'How fresh is your website content?',
    options: [
      { value: 'regular', label: 'Updated regularly' },
      { value: 'outdated', label: 'Somewhat outdated' },
      { value: 'veryOutdated', label: 'Very outdated' },
    ],
  },
  {
    id: 'frustration',
    question: 'What frustrates you most about your current website?',
    options: [
      { value: 'noLeads', label: 'It is not generating enough leads' },
      { value: 'dontUnderstand', label: 'Visitors do not understand what I do' },
      { value: 'slow', label: 'Site feels slow or clunky' },
      { value: 'mobileBad', label: 'Mobile experience is not great' },
      { value: 'noData', label: 'I do not know what is working' },
    ],
  },
];

export function QuestionnaireScreen({ onComplete }: QuestionnaireScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const isLastQuestion = currentStep === questions.length - 1;

  const currentAnswer = answers[currentQuestion.id];

  const handleChoice = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    // Automatically advance to next question or complete
    setTimeout(() => {
      if (isLastQuestion) {
        onComplete(newAnswers);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }, 200); // Small delay for visual feedback
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1" style={{ backgroundColor: 'var(--engine-border)' }}>
        <div
          className="h-1 transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: 'var(--engine-primary)'
          }}
        />
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 min-h-[800px]">
        <div key={currentStep} className="max-w-2xl w-full animate-section-rise">
          <div className="mb-10">
            <p
              className="text-sm mb-4 font-medium"
              style={{ color: 'var(--engine-text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
            >
              Question {currentStep + 1} of {questions.length}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold"
              style={{ color: 'var(--engine-text)', lineHeight: '1.3', letterSpacing: '-0.01em' }}
            >
              {currentQuestion.question}
            </h2>
          </div>

          {/* Question Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChoice(option.value)}
                className="w-full text-left px-6 py-5 rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: currentAnswer === option.value ? 'var(--engine-highlight-bg)' : 'var(--engine-card-bg)',
                  border: `2px solid ${currentAnswer === option.value ? 'var(--engine-primary)' : 'var(--engine-border)'}`,
                  boxShadow: currentAnswer === option.value
                    ? '0 10px 24px rgba(15, 23, 42, 0.35)'
                    : '0 4px 12px rgba(15, 23, 42, 0.25)',
                }}
                onMouseEnter={(e) => {
                  if (currentAnswer !== option.value) {
                    e.currentTarget.style.borderColor = 'var(--engine-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--engine-highlight-bg)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentAnswer !== option.value) {
                    e.currentTarget.style.borderColor = 'var(--engine-border)';
                    e.currentTarget.style.backgroundColor = 'var(--engine-card-bg)';
                  }
                }}
              >
                <span className="text-lg" style={{
                  color: currentAnswer === option.value ? 'var(--engine-text)' : 'var(--engine-text-strong)',
                  fontWeight: currentAnswer === option.value ? '600' : '500'
                }}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Back Button Only */}
          {currentStep > 0 && (
            <div className="flex gap-4 mt-12">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all"
                style={{
                  border: '2px solid var(--engine-border)',
                  color: 'var(--engine-text-muted)',
                  backgroundColor: 'var(--engine-card-bg)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--engine-primary)';
                  e.currentTarget.style.color = 'var(--engine-text)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--engine-border)';
                  e.currentTarget.style.color = 'var(--engine-text-muted)';
                }}
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
