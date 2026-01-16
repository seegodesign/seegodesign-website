export type Answers = {
  auditStatus?: string;
  wcagTarget?: string;
  keyboardAccess?: string;
  focusStates?: string;
  colorContrast?: string;
  formsErrors?: string;
  mediaAltText?: string;
  dynamicComponents?: string;
  documents?: string;
  monitoring?: string;
};

export type Priority = {
  id: string;
  title: string;
  why: string;
  impact: 'High' | 'Medium';
  effort: 'Low' | 'Medium';
  actions: string[];
};
