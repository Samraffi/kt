import { CommandHistoryItem } from "../../CLILog/CLILog.types";
import { SelectedTopic } from "../../OutputGraphPanel/OutputGraphPanel.types";

export type GraphCommandType =
  | "START"
  | "SELECT_TOPIC"
  | "CREATE_NODE"
  | "CREATE_EDGE"
  | "VALIDATE_GRAPH"
  | "QUIT"
  | "ERROR";
export type GraphCommandHistoryType = "default" | "ok" | "hint" | "error";

export type GraphKeyDownProcessingContext = {
  inputValue: string;
  selectedTopic: SelectedTopic;
  type: GraphCommandType;
};

export type GraphValidation = {
  inputValue: string;
  expectedAction: string;
};

export type GraphValidationResponseParams = (
  validation: GraphValidation
) => CommandHistoryItem;

export type GraphStatusPayloadValue =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | { type: "idle"; message: string };
