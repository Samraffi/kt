import { CommandHistoryItem } from "../CLILog/CLILog.types";
import { RenderContentNodeProps } from "../RenderContentNode/RenderContentNode.types";

export type CLIMessageContent =
  | string
  | RenderContentNodeProps[]
  | CommandHistoryItem;

export type CLIMessageProps = {
  className: string;
  message: CLIMessageContent;
};
