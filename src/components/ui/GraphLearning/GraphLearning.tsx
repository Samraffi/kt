import Container from "../../Container/Container";

import InputGraphPanel from "../InputGraphPanel/InputGraphPanel";
import OutputGraphPanel from "../OutputGraphPanel/OutputGraphPanel";
import { GraphLearningProps } from "./types/component.types";

import styles from "./GraphLearning.module.scss";

const GraphLearning = ({
  progressData: { selectedTopic, learningStage },
  inputProps: { inputValue, handleInputChange, handleKeyDown },
  historyState: { commandHistory, commandStatus },
  handleCopy,
}: GraphLearningProps) => {
  return (
    <div onCopy={handleCopy} onPaste={handleCopy} className={styles.root}>
      <Container className="gridLayout">
        <InputGraphPanel
          inputValue={inputValue}
          commandHistory={commandHistory}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
        />

        <OutputGraphPanel
          learningStage={learningStage}
          selectedTopic={selectedTopic}
          type={commandStatus.type}
          message={commandStatus.message}
          inputValue={inputValue}
        />
      </Container>
    </div>
  );
};

export default GraphLearning;
