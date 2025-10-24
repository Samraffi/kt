export type ReadmeSection = {
  title: string;
  desc: string;
  icon: string;
};

export type ReadmeDataProps = {
  mainTitle: string;
  description: string;
  cards: ReadmeSection[];
};
