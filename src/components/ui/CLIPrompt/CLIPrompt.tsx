import clsx from "clsx";
import { KeyboardEvent } from "react";

import CLIRow from "../CLIRow/CLIRow";
import { CLIPromptProps } from "./CLIPrompt.types";

import styles from "./CLIPrompt.module.scss";

const CLIPrompt = ({
  inputRef,
  className,
  value,
  inputHandlers: {
    handleInputChange,
    handleKeyDown,
    handleScrollToBottom,
    blurInput,
  },
}: CLIPromptProps) => {
  const handleEnhancedKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);

    if (e.key === "Enter") {
      setTimeout(handleScrollToBottom, 0);
    }
  };

  return (
    <CLIRow text="$console@demo:~$" className={className}>
      <input
        ref={inputRef}
        className={clsx(styles.input)}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleEnhancedKeyDown}
        onBlur={blurInput}
        placeholder="type here..."
        aria-label="console input"
      />
    </CLIRow>
  );
};

export default CLIPrompt;
