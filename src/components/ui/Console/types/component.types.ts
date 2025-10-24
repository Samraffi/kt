import { CommandHistory } from "../../CLILog/CLILog.types";
import {
  CommandStatusType,
  LearningStage,
  TaskData,
} from "../../OutputConsole/OutputConsole.types";

import { ChangeHandler, ClipboardHandler, KeyboardHandler } from "./base.types";

export type ConsoleProps = {
  progressData: {
    selectedTask: TaskData;
    learningStage: LearningStage;
  };
  inputProps: {
    inputValue: string;
    handleInputChange: ChangeHandler;
    handleKeyDown: KeyboardHandler;
  };
  historyState: {
    commandHistory: CommandHistory;
    commandStatus: CommandStatusType;
  };
  handleCopy: ClipboardHandler;
  availableCommands?: TaskData[];
  selectedCommand?: TaskData | null;
  onCommandSelect?: (command: TaskData) => void;
};
