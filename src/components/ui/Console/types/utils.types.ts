import { TaskData } from "../../OutputConsole/OutputConsole.types";

import { CommandType } from "./command.types";

export type GetKeyDownDataArgs = {
  inputValue: string;
  data: TaskData[];
  type: CommandType;
  payload: number | undefined;
  correctCommand: string;
  theory: string;
};
