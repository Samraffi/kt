import { CommandType } from "../../components/ui/Console/types/command.types";
import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";
import { CONSOLE_CONFIG } from "../../constans/processes/consoleConfig";

export const checkCommandPermission = (
  commandType: CommandType,
  stage?: LearningStage
) => {
  if (!stage) return false;

  if (commandType === "QUIT") return true;

  const stageConfig = CONSOLE_CONFIG.stages[stage];
  if (!stageConfig) return false;

  return stageConfig.allowedCommands.includes(commandType as any);
};
