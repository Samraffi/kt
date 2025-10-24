import Container from "../../Container/Container";

import InputConsole from "../InputConsole/InputConsole";
import OutputConsole from "../OutputConsole/OutputConsole";
import { ConsoleProps } from "./types/component.types";

import styles from "./Console.module.scss";

const Console = ({
  progressData: { selectedTask, learningStage },
  inputProps: { inputValue, handleInputChange, handleKeyDown },
  historyState: { commandHistory, commandStatus },
  handleCopy,
}: ConsoleProps) => {
  return (
    <div onCopy={handleCopy} onPaste={handleCopy} className={styles.root}>
      <Container className="gridLayout">
        <InputConsole
          inputValue={inputValue}
          commandHistory={commandHistory}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
        />

        <OutputConsole
          learningStage={learningStage}
          selectedTask={selectedTask}
          type={commandStatus.type}
          message={commandStatus.message}
          inputValue={inputValue}
        />
      </Container>
    </div>
  );
};

export default Console;
