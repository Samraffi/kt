export type Feature = {
  title: string;
  description: string;
};

export type Platform = {
  name: string;
  description: string;
  advantages: string;
};

export type Summary = {
  title: string;
  points: string[];
};

export type PrivatePackagesProps = {
  mainTitle: string;
  definition: string;
  features: Feature[];
  platforms: Platform[];
  artifactTypes: string[];
  process: string[];
  whenToUse: string[];
  summary: Summary;
};
