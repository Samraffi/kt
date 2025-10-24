import { CommandHistoryItem } from "../../components/ui/CLILog/CLILog.types";
import { CLIMessageContent } from "../../components/ui/CLIMessage/CLIMessage.types";
import { CommandHistoryType } from "../../components/ui/Console/types/command.types";

export const createTypeMessagePayload: (
  type: CommandHistoryType,
  showCommandList: boolean,
  messageContent: CLIMessageContent
) => CommandHistoryItem = (type, showCommandList, messageContent) => ({
  type: type,
  showCommandList: showCommandList,
  message: messageContent,
});
