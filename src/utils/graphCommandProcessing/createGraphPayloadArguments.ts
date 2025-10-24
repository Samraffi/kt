import { GraphCommandType } from "../../components/ui/GraphLearning/types/graph.types";
import { Args } from "../../components/ui/GraphLearning/types/history.types";
import {
  LearningStage,
  SelectedTopic,
} from "../../components/ui/OutputGraphPanel/OutputGraphPanel.types";
import { getGraphStageErrorMessage } from "../../utils/getGraphStageErrorMessage";
import { graphMessagePayloadMap } from "../../utils/graphCommandProcessing/graphMessagePayloadMap";

import { getGraphMessagePayload } from "./getGraphMessagePayload";

const createGraphPayloadArguments = (
  inputValue: string,
  type: GraphCommandType,
  messagePayload: {
    selectedTopic: SelectedTopic;
    topicName: string;
    learningStage: LearningStage;
  }
): [...entryArgs: Args] => {
  const { selectedTopic, topicName, learningStage } = messagePayload;

  return [
    inputValue,
    type === "VALIDATE_GRAPH" ? false : true,
    type !== "ERROR" && type !== "QUIT"
      ? graphMessagePayloadMap(selectedTopic, topicName)[type]
      : type === "QUIT"
        ? getGraphMessagePayload(type, topicName, learningStage)
        : getGraphStageErrorMessage(type, learningStage),
  ];
};

export { createGraphPayloadArguments };
