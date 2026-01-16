import type { Answers, Priority } from '../types';

const priorities: Priority[] = [
  {
    id: 'keyboard',
    title: 'Fix keyboard navigation + focus states',
    why: 'Keyboard access is the fastest way to reduce legal exposure and improve usability for all users.',
    impact: 'High',
    effort: 'Low',
    actions: [
      'Audit tab order, skip links, and focus traps across core flows.',
      'Add visible focus indicators and logical keyboard shortcuts.',
      'Retest with screen readers for navigation clarity.',
    ],
  },
  {
    id: 'contrast',
    title: 'Resolve color contrast and hierarchy gaps',
    why: 'Low-contrast UI is a top WCAG failure and can break readability across critical pages.',
    impact: 'High',
    effort: 'Medium',
    actions: [
      'Update typography, contrast ratios, and button states to WCAG AA.',
      'Apply accessible color tokens to your design system.',
      'Validate across light/dark surfaces and imagery.',
    ],
  },
  {
    id: 'forms',
    title: 'Repair forms, labels, and error handling',
    why: 'Forms are a common complaint trigger and the #1 conversion blocker for assistive tech users.',
    impact: 'High',
    effort: 'Medium',
    actions: [
      'Add proper labels, instructions, and inline error summaries.',
      'Ensure required fields are announced clearly.',
      'Validate with keyboard-only and screen reader flows.',
    ],
  },
  {
    id: 'media',
    title: 'Add alt text, captions, and media fallbacks',
    why: 'Missing descriptions and captions create immediate compliance gaps on marketing pages.',
    impact: 'Medium',
    effort: 'Low',
    actions: [
      'Write meaningful alt text for images and icons.',
      'Add captions/transcripts for video and audio.',
      'Replace decorative imagery with CSS or aria-hidden.',
    ],
  },
  {
    id: 'dynamic',
    title: 'Fix ARIA + dynamic component semantics',
    why: 'Custom components often fail WCAG without proper roles, states, and announcements.',
    impact: 'High',
    effort: 'Medium',
    actions: [
      'Audit menus, modals, accordions, and notifications.',
      'Add roles, aria-live regions, and state updates.',
      'Document component accessibility patterns for reuse.',
    ],
  },
  {
    id: 'documents',
    title: 'Remediate PDFs and downloadable assets',
    why: 'Legal complaints often include inaccessible PDFs and support documentation.',
    impact: 'Medium',
    effort: 'Medium',
    actions: [
      'Tag PDFs properly with headings and reading order.',
      'Convert critical files to accessible HTML pages.',
      'Create an accessibility statement for document access.',
    ],
  },
  {
    id: 'monitoring',
    title: 'Set up ongoing accessibility monitoring',
    why: 'Compliance is a moving target—monitoring prevents regressions after fixes.',
    impact: 'Medium',
    effort: 'Low',
    actions: [
      'Schedule quarterly audits and release reviews.',
      'Add automated regression checks to CI.',
      'Report progress to legal and leadership teams.',
    ],
  },
];

type ScoreMap = Record<string, number>;

const addScore = (scores: ScoreMap, id: string, amount: number) => {
  scores[id] = (scores[id] || 0) + amount;
};

export const calculatePriorities = (answers: Answers): Priority[] => {
  const scores: ScoreMap = {};

  if (answers.keyboardAccess === 'no' || answers.keyboardAccess === 'unsure') {
    addScore(scores, 'keyboard', 4);
    addScore(scores, 'dynamic', 2);
  }
  if (answers.focusStates === 'invisible' || answers.focusStates === 'inconsistent') {
    addScore(scores, 'keyboard', 3);
    addScore(scores, 'contrast', 2);
  }
  if (answers.colorContrast === 'poor' || answers.colorContrast === 'notChecked') {
    addScore(scores, 'contrast', 4);
  }
  if (answers.formsErrors === 'broken' || answers.formsErrors === 'inconsistent') {
    addScore(scores, 'forms', 4);
    addScore(scores, 'keyboard', 1);
  }
  if (answers.mediaAltText === 'missing' || answers.mediaAltText === 'some') {
    addScore(scores, 'media', 4);
  }
  if (answers.dynamicComponents === 'custom' || answers.dynamicComponents === 'unsure') {
    addScore(scores, 'dynamic', 4);
  }
  if (answers.documents === 'many' || answers.documents === 'some') {
    addScore(scores, 'documents', 4);
  }
  if (answers.auditStatus === 'never') {
    addScore(scores, 'keyboard', 1);
    addScore(scores, 'contrast', 1);
    addScore(scores, 'forms', 1);
    addScore(scores, 'dynamic', 1);
  }
  if (answers.monitoring === 'none') {
    addScore(scores, 'monitoring', 4);
  }
  if (answers.wcagTarget === 'required') {
    addScore(scores, 'monitoring', 1);
    addScore(scores, 'forms', 1);
  }

  return [...priorities]
    .map((priority) => ({
      ...priority,
      score: scores[priority.id] || 0,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ score, ...priority }) => priority);
};
