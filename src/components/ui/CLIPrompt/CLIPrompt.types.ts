import { ChangeEvent, KeyboardEvent, RefObject } from "react";

export type CLIPromptProps = {
  inputRef?: RefObject<HTMLInputElement>;
  className: string;
  value: string;
  inputHandlers: {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    handleScrollToBottom: () => void;
    blurInput: () => void;
  };
};
