import { CommandHistoryItem } from "../../CLILog/CLILog.types";
import { TaskData } from "../../OutputConsole/OutputConsole.types";

export type CommandType =
  | "START"
  | "SELECT"
  | "VALIDATE"
  | "QUIT"
  | "QUIT_CONFIRM"
  | "EMPTY"
  | "INVALID_SELECTION"
  | "ERROR";

export const isQuitCommand = (type: CommandType): boolean => {
  return type === "QUIT" || type === "QUIT_CONFIRM";
};

export const needsMessagePayloadMap = (type: CommandType): boolean => {
  return type === "START" || type === "SELECT" || type === "VALIDATE";
};
export type CommandHistoryType = "default" | "ok" | "hint" | "error";

export type KeyDownProcessingContext = {
  inputValue: string;
  data: TaskData[];
  type: CommandType;
  selectedTask: TaskData;
};

export type CommandVerification = {
  inputValue: string;
  correctCommand: string;
};

export type ValidationResponseParams = (
  validation: CommandVerification
) => CommandHistoryItem;

export type StatusPayloadValue =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | { type: "idle"; message: string };
