export type GraphPracticeElement = {
  topic: string | null;
  relatedCommands: string[];
};

export type GraphPractice = GraphPracticeElement[];

export type GraphPracticeDataProps = {
  title: string;
  data: GraphPractice;
  isGraphOpen: boolean;
  selectedGraphValue: GraphPracticeElement;
  handleGraphToggle: () => void;
  handleGraphSelect: (option: GraphPracticeElement) => void;
};
