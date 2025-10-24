import { CommandHistory } from "../../CLILog/CLILog.types";
import {
  LearningStage,
  SelectedTopic,
} from "../../OutputGraphPanel/OutputGraphPanel.types";

import {
  ChangeHandler,
  ClipboardHandler,
  CommandStatusType,
  KeyboardHandler,
} from "./base.types";

export type GraphLearningProps = {
  progressData: {
    selectedTopic: SelectedTopic;
    learningStage: LearningStage;
  };
  inputProps: {
    inputValue: string;
    handleInputChange: ChangeHandler;
    handleKeyDown: KeyboardHandler;
  };
  historyState: {
    commandHistory: CommandHistory;
    commandStatus: CommandStatusType;
  };
  handleCopy: ClipboardHandler;
  availableTopics?: SelectedTopic[];
  selectedTopic?: SelectedTopic | null;
  onTopicSelect?: (topic: SelectedTopic) => void;
};
