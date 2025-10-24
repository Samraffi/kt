import { ChangeEvent, ClipboardEvent, KeyboardEvent } from "react";

export type ChangeHandler = (e: ChangeEvent<HTMLInputElement> | string) => void;
export type KeyboardHandler = (event: KeyboardEvent<HTMLInputElement>) => void;
export type ClipboardHandler = (event: ClipboardEvent<HTMLDivElement>) => void;

export type AddToHistoryHandler = (
  inputValue: string,
  showCommandList: boolean
) => void;
