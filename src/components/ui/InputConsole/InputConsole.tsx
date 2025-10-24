import clsx from "clsx";

import { dotclassNames } from "../../../constans/console";
import { useFocus } from "../../../hooks/useConsole/useFocus";
import { useScroll } from "../../../hooks/useConsole/useScroll";

import CLILog from "../CLILog/CLILog";
import CLIPrompt from "../CLIPrompt/CLIPrompt";
import ConsoleDot from "../ConsoleDot/ConsoleDot";
import { InputConsoleProps } from "./InputConsole.types";

import styles from "./InputConsole.module.scss";

const InputConsole = ({
  inputValue,
  commandHistory,
  handleInputChange,
  handleKeyDown,
}: InputConsoleProps) => {
  const { focus, inputRef, focusInput, blurInput } = useFocus();
  const { scrollableDivRef, handleScrollToBottom } = useScroll();
  const variant = focus ? "text" : "default";

  return (
    <div
      onClick={() => focusInput()}
      className={clsx(styles.leftColumn, styles.scaledContent, styles[variant])}
    >
      <div className={styles.header}>
        {dotclassNames.map((dotClassName, index) => {
          return <ConsoleDot key={index} className={dotClassName} />;
        })}
        <span className={styles.title}>Console</span>
      </div>
      <div ref={scrollableDivRef} className={styles.commandsContent}>
        <CLILog data={commandHistory} />

        <CLIPrompt
          inputRef={inputRef}
          className="flex"
          value={inputValue}
          inputHandlers={{
            handleInputChange,
            handleKeyDown,
            handleScrollToBottom,
            blurInput,
          }}
        />
      </div>
    </div>
  );
};

export default InputConsole;
