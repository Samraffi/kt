import { CommandHistoryItem } from "../components/ui/CLILog/CLILog.types";
import { CLIMessageContent } from "../components/ui/CLIMessage/CLIMessage.types";
import { createTypeMessagePayload } from "./create/createTypeMessagePayload";

export const normalizeMessagePayload = (
  messagePayload: CLIMessageContent
): CommandHistoryItem => {
  if (
    typeof messagePayload === "object" &&
    messagePayload !== null &&
    "type" in messagePayload &&
    "showCommandList" in messagePayload &&
    "message" in messagePayload
  ) {
    return messagePayload as CommandHistoryItem;
  }

  return createTypeMessagePayload("default", true, messagePayload);
};
