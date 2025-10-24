import {
  CommandStatusType,
  LearningStage,
} from "../OutputConsole/OutputConsole.types";

export type StateIndicatorProps = {
  learningStage: LearningStage;
  type: CommandStatusType["type"];
  inputValue: string;
};
