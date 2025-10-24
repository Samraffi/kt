export type Phase = {
  title: string;
  points: string[];
};

export type Benefits = {
  title: string;
  points: string[];
};

export type PullRequestProps = {
  mainTitle: string;
  definition: string;
  companyProcess: {
    title: string;
    description: string;
  };
  phases: Phase[];
  benefits: Benefits;
};
