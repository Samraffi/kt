import { ChangeEvent, KeyboardEvent } from "react";

import { CommandHistory } from "../CLILog/CLILog.types";

export type InputConsoleProps = {
  commandHistory: CommandHistory;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  inputValue: string;
};
