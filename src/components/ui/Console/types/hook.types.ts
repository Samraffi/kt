import { CommandHistoryItem } from "../../CLILog/CLILog.types";
import {
  CommandStatusType,
  LearningStage,
  TaskData,
} from "../../OutputConsole/OutputConsole.types";

import { KeyboardHandler } from "./base.types";
import { CommandType } from "./command.types";

export type OnStatusParams = (status: CommandStatusType) => void;
export type OnSelectParams = (option: TaskData | null) => void;
export type LearningStageHandler = (stage: LearningStage) => void;

export type CommandProcessorCallbacks = {
  handleSelectedTask: (task: TaskData | null) => void;
  onStageChange: LearningStageHandler;
  handleInputChange: (value: string) => void;
  addToHistory: (
    command: string,
    showCommandList: boolean,
    message?: string | any
  ) => void;
  updateState: (
    data: [CommandHistoryItem],
    type: CommandType,
    indexToChange: number
  ) => void;
  updateAndInsertState: (
    showCommandList: boolean,
    inputValue: string,
    welcomeData: TaskData[],
    indexToChange: number
  ) => void;
  handleCommandStatus: (status: any) => void;
};

export type UseConsoleParams = (
  data: TaskData[],
  selectedTask: TaskData,
  state: {
    inputValue: string;
    learningStage: LearningStage;
  },
  callbacks: CommandProcessorCallbacks
) => { handleKeyDown: KeyboardHandler };
