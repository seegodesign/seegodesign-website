import type { Answers } from '@/components/app-decision-tool-engine/types';

export type ComplexityTier = 'Low' | 'Medium' | 'High';

export type AppDecisionResults = {
  readinessScore: number;
  complexityTier: ComplexityTier;
  riskFlags: string[];
  summary: string;
  insights: string[];
  recommendedNextStep: string;
};

const clampScore = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

const platformLabel = (value?: string) => {
  switch (value) {
    case 'web':
      return 'a web app';
    case 'ios':
      return 'an iOS app';
    case 'android':
      return 'an Android app';
    case 'ios-android':
      return 'native iOS + Android apps';
    case 'all':
      return 'web + mobile apps';
    default:
      return 'a product';
  }
};

const actionLabel = (value?: string) => {
  switch (value) {
    case 'purchase':
      return 'make a purchase or booking';
    case 'submit':
      return 'submit a request';
    case 'create':
      return 'create and share content';
    case 'match':
      return 'match people or items in real time';
    case 'track':
      return 'track progress or tasks';
    default:
      return 'take a core action';
  }
};

const audienceLabel = (value?: string) => {
  switch (value) {
    case 'consumer':
      return 'everyday consumers';
    case 'business':
      return 'small business teams';
    case 'internal':
      return 'your internal team';
    case 'niche':
      return 'a niche professional audience';
    default:
      return 'your target users';
  }
};

const frequencyLabel = (value?: string) => {
  switch (value) {
    case 'daily':
      return 'daily';
    case 'weekly':
      return 'a few times per week';
    case 'monthly':
      return 'monthly';
    case 'occasional':
      return 'occasionally';
    default:
      return 'regularly';
  }
};

const pickRecommendedNextStep = (readinessScore: number, complexityTier: ComplexityTier, validationLevel?: string) => {
  if (readinessScore >= 75 && complexityTier === 'Low') {
    return 'Full Build';
  }
  if (readinessScore >= 65 && complexityTier !== 'High') {
    return 'Prototype';
  }
  if (validationLevel === 'none' || readinessScore < 55) {
    return 'Validate';
  }
  return 'Scope MVP';
};

export const calculateAppDecisionResults = (answers: Answers): AppDecisionResults => {
  let readinessScore = 50;
  let complexityScore = 0;

  switch (answers.platformIntent) {
    case 'web':
      readinessScore += 3;
      complexityScore += 1;
      break;
    case 'ios':
    case 'android':
      readinessScore += 0;
      complexityScore += 2;
      break;
    case 'ios-android':
      readinessScore -= 5;
      complexityScore += 4;
      break;
    case 'all':
      readinessScore -= 8;
      complexityScore += 5;
      break;
    default:
      break;
  }

  switch (answers.featureScope) {
    case '1-2':
      readinessScore += 5;
      complexityScore += 1;
      break;
    case '3-4':
      readinessScore += 2;
      complexityScore += 2;
      break;
    case '5-7':
      readinessScore -= 5;
      complexityScore += 3;
      break;
    case '8+':
      readinessScore -= 10;
      complexityScore += 4;
      break;
    default:
      break;
  }

  switch (answers.mvpTradeoff) {
    case 'core-only':
      readinessScore += 10;
      break;
    case 'core-plus':
      readinessScore += 5;
      break;
    case 'most':
      readinessScore -= 10;
      break;
    case 'unsure':
      readinessScore -= 15;
      break;
    default:
      break;
  }

  switch (answers.monetization) {
    case 'clear':
      readinessScore += 10;
      break;
    case 'some':
      readinessScore += 5;
      break;
    case 'unsure':
      readinessScore -= 10;
      break;
    case 'internal':
      readinessScore += 5;
      break;
    default:
      break;
  }

  switch (answers.dataComplexity) {
    case 'public':
      complexityScore += 1;
      break;
    case 'basic':
      complexityScore += 2;
      break;
    case 'ugc':
      complexityScore += 3;
      readinessScore -= 3;
      break;
    case 'sensitive':
      complexityScore += 4;
      readinessScore -= 6;
      break;
    default:
      break;
  }

  switch (answers.integrations) {
    case 'none':
      readinessScore += 2;
      break;
    case 'standard':
      complexityScore += 1;
      break;
    case 'payments':
      complexityScore += 2;
      readinessScore -= 2;
      break;
    case 'advanced':
      complexityScore += 4;
      readinessScore -= 6;
      break;
    default:
      break;
  }

  switch (answers.validationLevel) {
    case 'paying':
      readinessScore += 20;
      break;
    case 'interested':
      readinessScore += 10;
      break;
    case 'interviews':
      readinessScore += 5;
      break;
    case 'none':
      readinessScore -= 15;
      break;
    default:
      break;
  }

  switch (answers.timelineClarity) {
    case 'short':
      readinessScore += 5;
      break;
    case 'medium':
      readinessScore += 3;
      break;
    case 'unknown':
      readinessScore -= 5;
      break;
    default:
      break;
  }

  switch (answers.teamReadiness) {
    case 'team':
      readinessScore += 10;
      break;
    case 'budget-no-team':
      readinessScore += 5;
      break;
    case 'budget-unclear':
      readinessScore -= 5;
      break;
    case 'diy':
      readinessScore -= 10;
      break;
    default:
      break;
  }

  switch (answers.scopeConfidence) {
    case 'clear':
      readinessScore += 10;
      break;
    case 'somewhat':
      readinessScore += 5;
      break;
    case 'fuzzy':
      readinessScore -= 5;
      break;
    case 'everything':
      readinessScore -= 10;
      break;
    default:
      break;
  }

  switch (answers.usageFrequency) {
    case 'daily':
      complexityScore += 2;
      break;
    case 'weekly':
      complexityScore += 1;
      break;
    default:
      break;
  }

  switch (answers.primaryAction) {
    case 'match':
      complexityScore += 3;
      break;
    case 'purchase':
    case 'create':
      complexityScore += 2;
      break;
    case 'track':
    case 'submit':
      complexityScore += 1;
      break;
    default:
      break;
  }

  switch (answers.appGoal) {
    case 'marketplace':
      complexityScore += 3;
      break;
    case 'operations':
    case 'revenue':
      complexityScore += 2;
      break;
    case 'validate':
      complexityScore += 1;
      break;
    default:
      complexityScore += 2;
      break;
  }

  switch (answers.targetUsers) {
    case 'consumer':
      complexityScore += 2;
      break;
    case 'business':
      complexityScore += 1;
      break;
    case 'internal':
      complexityScore += 0;
      break;
    case 'niche':
      complexityScore += 1;
      break;
    default:
      break;
  }

  const complexityTier: ComplexityTier =
    complexityScore <= 9 ? 'Low' : complexityScore <= 15 ? 'Medium' : 'High';

  readinessScore = clampScore(readinessScore);

  const riskFlags: string[] = [];
  const addRisk = (risk: string) => {
    if (!riskFlags.includes(risk)) {
      riskFlags.push(risk);
    }
  };

  if (answers.mvpTradeoff === 'most' || answers.mvpTradeoff === 'unsure' || answers.scopeConfidence === 'everything') {
    addRisk('Unclear MVP scope');
  }
  if ((answers.platformIntent === 'ios-android' || answers.platformIntent === 'all') && readinessScore < 70) {
    addRisk('Platform bloat');
  }
  if (answers.monetization === 'unsure' && answers.appGoal !== 'operations') {
    addRisk('Monetization gap');
  }
  if (answers.featureScope === '5-7' || answers.featureScope === '8+') {
    addRisk('Over-scoping the first release');
  }
  if (answers.dataComplexity === 'sensitive' || answers.integrations === 'advanced') {
    addRisk('Complex data or integrations');
  }
  if (answers.validationLevel === 'none' || answers.validationLevel === 'interviews') {
    addRisk('Low validation signal');
  }

  const summary = `You are planning ${platformLabel(answers.platformIntent)} for ${audienceLabel(
    answers.targetUsers
  )} to ${actionLabel(answers.primaryAction)}, used ${frequencyLabel(answers.usageFrequency)}.`;

  const insights: string[] = [];
  const addInsight = (text: string) => {
    if (!insights.includes(text)) {
      insights.push(text);
    }
  };

  if (complexityTier === 'High') {
    addInsight('This idea is more complex than most first builds. A phased rollout will protect timeline and budget.');
  } else if (complexityTier === 'Medium') {
    addInsight('This build sits in the middle range: doable, but only if the MVP is locked early.');
  } else {
    addInsight('The scope looks manageable for a first build, which improves speed to launch.');
  }

  if (answers.validationLevel === 'none') {
    addInsight('Uncomfortable truth: Without real user proof, the riskiest part is not the build - it is building the wrong thing.');
  } else if (answers.validationLevel === 'interviews') {
    addInsight('Uncomfortable truth: Interviews are a start, but they do not replace people paying or committing in advance.');
  }

  if (answers.mvpTradeoff === 'most' || answers.scopeConfidence === 'everything') {
    addInsight('Trying to ship most features at once usually delays launch by months and hides the real core action.');
  }

  if (answers.monetization === 'unsure' && answers.appGoal !== 'operations') {
    addInsight('Revenue uncertainty will slow prioritization. Clarifying pricing or ROI will speed every decision.');
  }

  if (answers.platformIntent === 'ios-android' || answers.platformIntent === 'all') {
    addInsight('Multi-platform builds multiply effort by 1.6-2x. Starting with one platform usually saves 6-10 weeks.');
  }

  if (!insights.some((insight) => insight.startsWith('Uncomfortable truth:'))) {
    addInsight('Uncomfortable truth: If you cannot explain the MVP in one sentence, development will drift and costs will rise.');
  }

  const fallbackInsights = [
    'Locking the first 2-3 screens before development prevents expensive rework later.',
    'The fastest wins come from a tight onboarding and one primary flow.',
    'A lightweight prototype will surface usability issues before engineering starts.',
  ];
  fallbackInsights.forEach((fallback) => {
    if (insights.length < 3) {
      addInsight(fallback);
    }
  });

  const recommendedNextStep = pickRecommendedNextStep(
    readinessScore,
    complexityTier,
    answers.validationLevel
  );

  return {
    readinessScore,
    complexityTier,
    riskFlags: riskFlags.slice(0, 5),
    summary,
    insights: insights.slice(0, 5),
    recommendedNextStep,
  };
};
