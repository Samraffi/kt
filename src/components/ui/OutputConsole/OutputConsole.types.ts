export type LearningStage =
  | "welcome"
  | "menu"
  | "task_selected"
  | "command_input";

export type CommandStatus = "success" | "error" | "idle" | "ok";

export type TaskData = {
  topic: string;
  correctCommand: string;
  task: string;
  theory: string;
  hints: string[];
};

export type CommandStatusType = {
  type: CommandStatus;
  message: string;
};

export type ShowHintsParams = (
  learningStage: LearningStage,
  type: CommandStatus,
  inputValue: string
) => boolean;

export type ShowTheoryParams = (
  learningStage: LearningStage,
  type: CommandStatus,
  inputValue: string
) => boolean;

export type OutputConsoleProps = {
  learningStage: LearningStage;
  selectedTask: TaskData;
  type: CommandStatusType["type"];
  message: CommandStatusType["message"];
  inputValue?: string;
};
