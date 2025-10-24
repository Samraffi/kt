import { KeyboardEvent } from "react";

import {
  LearningStage,
  SelectedTopic,
} from "../../OutputGraphPanel/OutputGraphPanel.types";

export type UseGraphLearningParams = (
  data: any,
  selectedTopic: SelectedTopic,
  state: {
    inputValue: string;
    learningStage: LearningStage;
  },
  callbacks: {
    addToHistory: (...args: any[]) => void;
    handleInputChange: (value: string) => void;
    onStageChange: (stage: LearningStage) => void;
    handleCommandStatus: (status: any) => void;
    handleSelectedTopic: (topic: SelectedTopic | null) => void;
  }
) => {
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
};
