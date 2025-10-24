import {
  LearningStage,
  SelectedTopic,
} from "../../OutputGraphPanel/OutputGraphPanel.types";

import { GraphCommandType } from "./graph.types";

export type ProcessGraphCommand = (params: {
  inputValue: string;
  selectedTopic: SelectedTopic;
  learningStage: LearningStage;
}) => {
  status: {
    type: GraphCommandType;
    isAllowed: boolean;
    topicName: string;
  };
  messagePayload: {
    selectedTopic: SelectedTopic;
    topicName: string;
    learningStage: LearningStage;
  };
  selectedTopicByNumber: SelectedTopic | null;
};
