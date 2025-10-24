import { CommandType } from "../components/ui/Console/types/command.types";
import { TaskData } from "../components/ui/OutputConsole/OutputConsole.types";
import { CONSOLE_COMMANDS } from "../constans/console";

export const commandParser = (
  inputValue: string,
  data: TaskData[],
  selectedTask: TaskData
): { type: CommandType } => {
  const trimmed = inputValue.trim();

  if (trimmed === CONSOLE_COMMANDS.EMPTY) return { type: "EMPTY" };

  if (trimmed === CONSOLE_COMMANDS.START) return { type: "START" };

  if (trimmed === CONSOLE_COMMANDS.QUIT) return { type: "QUIT" };

  if (trimmed === CONSOLE_COMMANDS.QUIT_CONFIRM)
    return { type: "QUIT_CONFIRM" };

  const numberValue = parseInt(trimmed);
  if (!isNaN(numberValue) && numberValue > 0)
    if (numberValue <= data.length) return { type: "SELECT" };
    else return { type: "INVALID_SELECTION" };

  if (selectedTask && selectedTask.correctCommand === inputValue.trim())
    return { type: "VALIDATE" };

  return { type: "ERROR" };
};
