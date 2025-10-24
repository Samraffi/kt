import { CommandHistory } from "../../CLILog/CLILog.types";

import { AddToHistoryHandler } from "./base.types";

export type Args = Parameters<AddToHistoryHandler>;
export type HistoryEntry = {
  inputValue: Args[0];
  showCommandList: Args[1];
};

export type HistoryCommandsGenerator = (
  arrCommands: CommandHistory,
  ...entryArgs: Args
) => CommandHistory;
