export type Branch = {
  name: string;
  type: string;
  description: string;
};

export type GitFlowProps = {
  mainTitle: string;
  definition: string;
  branches: Branch[];
};
