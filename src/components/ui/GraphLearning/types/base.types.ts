import { ChangeEvent, ClipboardEvent, KeyboardEvent } from "react";

import { CLIMessageContent } from "../../CLIMessage/CLIMessage.types";

export type CommandString = string;

export type CommandStatus = "success" | "error" | "idle";

export type CommandStatusType = {
  type: CommandStatus;
  message: string;
};

export type ChangeHandler = (e: ChangeEvent<HTMLInputElement> | string) => void;
export type KeyboardHandler = (event: KeyboardEvent<HTMLInputElement>) => void;
export type ClipboardHandler = (event: ClipboardEvent<HTMLDivElement>) => void;

export type AddToHistoryHandler = (
  inputValue: string,
  showCommandList: boolean,
  messagePayload: CLIMessageContent
) => void;
