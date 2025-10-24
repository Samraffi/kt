type Solution = {
  solution: string;
  results: string[];
};

export interface ContentProps {
  data: { problem: string; solutions: Solution[] };
}
