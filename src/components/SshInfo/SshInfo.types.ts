export type SetupStep = {
  title: string;
  startContent?: string;
  middleContent?: string;
  commands: string[];
  contentTemplate?: string[];
};

export type SshInfoProps = {
  mainTitle: string;
  description: string;
  setup_steps: SetupStep[];
};
