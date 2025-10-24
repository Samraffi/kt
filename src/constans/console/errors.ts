import { CommandHistoryItem } from "../../components/ui/CLILog/CLILog.types";
import { CommandType } from "../../components/ui/Console/types/command.types";
import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";
import { createDefaultPayload } from "../../utils/create/createDefaultPayload";
import { createErrorPayload } from "../../utils/create/createErrorPayload";
import { createNonLoggableError } from "../../utils/create/createNonLoggableError";
import { createOkPayload } from "../../utils/create/createOkPayload";

import { CONSOLE_CONFIG } from "../processes/consoleConfig";
import { SUCCESS_MESSAGE } from "./messages";

type ErrorConfigType = string;
type ErrorHandler = (errorConfig: ErrorConfigType) => CommandHistoryItem;

export const STAGE_ERROR_HANDLERS = new Map<LearningStage, ErrorHandler>([
  ["welcome", createNonLoggableError],
  ["menu", createErrorPayload],
  ["task_selected", createErrorPayload],
  ["command_input", createErrorPayload],
]);

export type PayloadCreator = (
  taskName: string,
  learningStage: LearningStage
) => CommandHistoryItem;

const errors = CONSOLE_CONFIG.stageErrors;
const commands = CONSOLE_CONFIG.commandMessages;

export const COMMAND_PAYLOAD_MAP: Record<
  Exclude<CommandType, "QUIT_CONFIRM">,
  PayloadCreator
> = {
  EMPTY: (taskName: string, learningStage: LearningStage) =>
    createNonLoggableError(errors.empty_input),
  START: (taskName: string, learningStage: LearningStage) =>
    createOkPayload(commands.start),
  SELECT: (taskName: string, learningStage: LearningStage) =>
    createOkPayload(`${commands.select}${taskName}`),
  INVALID_SELECTION: (taskName: string, learningStage: LearningStage) =>
    createErrorPayload(errors.invalid_task),
  VALIDATE: (taskName: string, learningStage: LearningStage) =>
    createOkPayload(SUCCESS_MESSAGE),
  ERROR: (taskName: string, learningStage: LearningStage) => {
    const handler = STAGE_ERROR_HANDLERS.get(learningStage);
    if (handler) return handler(errors[learningStage]);

    return createErrorPayload(errors.unknown);
  },
  QUIT: (taskName: string, learningStage: LearningStage) =>
    createDefaultPayload(CONSOLE_CONFIG.confirmationMessages.quit),
};
