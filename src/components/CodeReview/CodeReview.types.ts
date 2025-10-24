export type CodeReviewItem = {
  name: string;
  description: string;
};

export type CodeReviewSubsection = {
  title: string;
  steps: CodeReviewItem[];
};

export type CodeReviewStage = {
  title: string;
  subsections: CodeReviewSubsection[];
};

export type CodeReviewSection = {
  title: string;
  items: string[];
};

export type CodeReviewDataProps = {
  mainTitle: string;
  definition: string;
  mainGoal: string;
  stages: CodeReviewStage;
  sections: CodeReviewSection[];
};
