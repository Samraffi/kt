import { CommandHistoryItem } from "../../components/ui/CLILog/CLILog.types";
import { CommandType } from "../../components/ui/Console/types/command.types";
import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";
import { COMMAND_PAYLOAD_MAP } from "../../constans/console";
import { CONSOLE_CONFIG } from "../../constans/processes/consoleConfig";

import { createDefaultPayload } from "../create/createDefaultPayload";
import { createErrorPayload } from "../create/createErrorPayload";
import { createOkPayload } from "../create/createOkPayload";

const getMessagePayload = (
  isQuitConfirmation: boolean,
  type: CommandType,
  taskName: string,
  learningStage: LearningStage
): CommandHistoryItem => {
  if (isQuitConfirmation) {
    if (type === "QUIT_CONFIRM") {
      return createOkPayload(CONSOLE_CONFIG.confirmationMessages.quitConfirmed);
    }

    return createDefaultPayload(
      CONSOLE_CONFIG.confirmationMessages.quitCancelled
    );
  }

  if (type === "QUIT_CONFIRM") {
    return createErrorPayload(
      CONSOLE_CONFIG.stageErrors.yes_outsid_confirmation
    );
  }

  const handler =
    COMMAND_PAYLOAD_MAP[type as Exclude<CommandType, "QUIT_CONFIRM">];

  if (handler) {
    return handler(taskName, learningStage);
  }

  return createErrorPayload(
    CONSOLE_CONFIG.stageErrors[learningStage] ??
      CONSOLE_CONFIG.stageErrors.unknown
  );
};

export { getMessagePayload };
