import {
  CommandStatus,
  CommandStatusType,
} from "../GraphLearning/types/base.types";

export type LearningStage =
  | "welcome"
  | "topic_selection"
  | "graph_interaction"
  | "validation";

export type SelectedTopic = {
  topic: string;
  description: string;
  workflow: string[];
  benefits: string[];
  hints: string[];
};

export type OutputGraphPanelProps = {
  learningStage: LearningStage;
  selectedTopic: SelectedTopic;
  type: CommandStatusType["type"];
  message: CommandStatusType["message"];
  inputValue?: string;
};

export type ShowHintsParams = (
  type: CommandStatus,
  inputValue: string
) => boolean;

export type ShowTheoryParams = (
  type: CommandStatus,
  inputValue: string,
  theory: string | undefined
) => string | boolean | undefined;
