export type Phase = {
  title: string;
  time: string;
  goal: string;
  process: string;
  result: string;
};

export type Characteristics = {
  title: string;
  list: string[];
};

export type Role = {
  title: string;
  list: string[];
};

export type SprintProps = {
  mainTitle: string;
  definition: string;
  phases: Phase[];
  characteristics: Characteristics;
  role: Role;
};
