import { CommandHistory } from "../CLILog/CLILog.types";
import {
  ChangeHandler,
  KeyboardHandler,
} from "../GraphLearning/types/base.types";

export type InputGraphPanelProps = {
  inputValue: string;
  commandHistory: CommandHistory;
  handleInputChange: ChangeHandler;
  handleKeyDown: KeyboardHandler;
};
