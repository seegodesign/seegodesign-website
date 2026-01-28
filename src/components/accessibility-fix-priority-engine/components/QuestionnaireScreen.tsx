import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Answers } from '@/components/accessibility-fix-priority-engine/types';

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
    <div className="questionnaire">
      <div className="questionnaire__progress">
        <div
          className="questionnaire__progress-bar"
          style={{
            width: `${progress}%`
          }}
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
                  className="questionnaire__option-label"
                >
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
