import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";

export const stageMap: () => Record<
  "START" | "SELECT" | "VALIDATE",
  LearningStage
> = () => {
  return {
    START: "menu",
    SELECT: "task_selected",
    VALIDATE: "welcome",
  };
};
