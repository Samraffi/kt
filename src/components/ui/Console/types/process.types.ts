import { CLIMessageContent } from "../../CLIMessage/CLIMessage.types";
import {
  LearningStage,
  TaskData,
} from "../../OutputConsole/OutputConsole.types";

import { CommandType, StatusPayloadValue } from "./command.types";

export type CommandInputData = {
  inputValue: string;
  isQuitConfirmation: boolean;
  data: TaskData[];
  learningStage: LearningStage;
  selectedTask: TaskData;
};

export type ProcessCommand = (commandInputData: CommandInputData) => {
  isAllowed: boolean;
  process: {
    processedCommandStatus:
      | any
      | CLIMessageContent
      | Record<CommandType, StatusPayloadValue>;
    currentStage: LearningStage;
  };
  confirmation: {
    confirmationState: boolean | null;
    selectedTaskByNumber: TaskData | null;
  };
};
