import {
  CLIMessageContent,
  CLIMessageProps,
} from "../CLIMessage/CLIMessage.types";
import { CommandHistoryType } from "../Console/types/command.types";

export type CommandHistoryItem = {
  type: CommandHistoryType;
  showCommandList: boolean;
  message: CLIMessageContent;
};

export type CLILogItem = CommandHistoryItem & {
  text: string;
  className?: CLIMessageProps["className"];
};

export type CommandHistory = CommandHistoryItem[];

export type CLILogProps = {
  data: (CLILogItem | CommandHistoryItem)[];
};
