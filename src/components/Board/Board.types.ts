export type BoardType = {
  type: string;
  goal: string;
  structure: string;
  features: string;
};

export type BoardProps = {
  mainTitle: string;
  description: string;
  functions: string[];
  boardTypes: BoardType[];
  context: string;
};
