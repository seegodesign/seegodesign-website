import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
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
    id: 'auditStatus',
    question: 'When was your last accessibility audit?',
    options: [
      { value: 'recent', label: 'Within the last year' },
      { value: 'older', label: 'More than a year ago' },
      { value: 'never', label: 'Never' },
    ],
  },
  {
    id: 'wcagTarget',
    question: 'Do you need to meet WCAG AA or legal requirements?',
    options: [
      { value: 'required', label: 'Yes, required' },
      { value: 'bestPractice', label: 'Not required, but important' },
      { value: 'unsure', label: 'Not sure' },
    ],
  },
  {
    id: 'keyboardAccess',
    question: 'Can users navigate your site using only a keyboard?',
    options: [
      { value: 'yes', label: 'Yes, full keyboard access' },
      { value: 'unsure', label: 'Not sure' },
      { value: 'no', label: 'No, there are blockers' },
    ],
  },
  {
    id: 'focusStates',
    question: 'How visible are your focus states on buttons and links?',
    options: [
      { value: 'clear', label: 'Clear and consistent' },
      { value: 'inconsistent', label: 'Inconsistent' },
      { value: 'invisible', label: 'Hard to see or missing' },
    ],
  },
  {
    id: 'colorContrast',
    question: 'Have you checked color contrast ratios for text?',
    options: [
      { value: 'good', label: 'Yes, meets WCAG' },
      { value: 'notChecked', label: 'Not yet' },
      { value: 'poor', label: 'We have contrast issues' },
    ],
  },
  {
    id: 'formsErrors',
    question: 'How do forms handle labels and error messages?',
    options: [
      { value: 'solid', label: 'Proper labels and error summaries' },
      { value: 'inconsistent', label: 'Some fields are unclear' },
      { value: 'broken', label: 'Errors are confusing or missing' },
    ],
  },
  {
    id: 'mediaAltText',
    question: 'Do images and videos have alt text or captions?',
    options: [
      { value: 'consistent', label: 'Yes, consistently' },
      { value: 'some', label: 'Some of them do' },
      { value: 'missing', label: 'Missing or incomplete' },
    ],
  },
  {
    id: 'dynamicComponents',
    question: 'How custom are your interactive components (modals, menus, tabs)?',
    options: [
      { value: 'standard', label: 'Mostly standard components' },
      { value: 'custom', label: 'Many custom components' },
      { value: 'unsure', label: 'Not sure' },
    ],
  },
  {
    id: 'documents',
    question: 'Do you publish PDFs or downloadable documents?',
    options: [
      { value: 'none', label: 'No' },
      { value: 'some', label: 'A few documents' },
      { value: 'many', label: 'Yes, a lot of them' },
    ],
  },
  {
    id: 'monitoring',
    question: 'Do you have ongoing accessibility monitoring in place?',
    options: [
      { value: 'yes', label: 'Yes, we monitor regularly' },
      { value: 'sometimes', label: 'Occasional checks' },
      { value: 'none', label: 'No monitoring yet' },
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

    setTimeout(() => {
      if (isLastQuestion) {
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
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-1" style={{ backgroundColor: 'var(--engine-border)' }}>
        <div
          className="h-1 transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: 'var(--engine-primary)',
          }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
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
                <span
                  className="text-lg"
                  style={{
                    color: currentAnswer === option.value ? 'var(--engine-text)' : 'var(--engine-text-strong)',
                    fontWeight: currentAnswer === option.value ? '600' : '500',
                  }}
                >
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <div className="flex gap-4 mt-12">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all"
                style={{
                  border: '2px solid var(--engine-border)',
                  color: 'var(--engine-text-muted)',
                  backgroundColor: 'var(--engine-card-bg)',
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
