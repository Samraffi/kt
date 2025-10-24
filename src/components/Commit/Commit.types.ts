export type CommitProps = {
  mainTitle: string;
  definition: string;
  location: string[];
  badPractice: string[];
  goodPractice: string[];
  purpose: string[];
  conclusion: {
    title: string;
    description: string;
  };
};
