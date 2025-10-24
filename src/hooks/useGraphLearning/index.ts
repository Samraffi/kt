import { KeyboardEvent } from "react";

import { UseGraphLearningParams } from "../../components/ui/GraphLearning/types/hook.types";
import { createGraphPayloadArguments } from "../../utils/graphCommandProcessing/createGraphPayloadArguments";
import { getGraphMessagePayload } from "../../utils/graphCommandProcessing/getGraphMessagePayload";
import { graphStageMap } from "../../utils/graphCommandProcessing/graphStageMap";
import { processGraphCommand } from "../../utils/graphCommandProcessing/processGraphCommand";

const useGraphLearning: UseGraphLearningParams = (
  data,
  selectedTopic,
  state,
  callbacks
) => {
  const { inputValue, learningStage } = state;
  const {
    addToHistory,
    handleInputChange,
    onStageChange,
    handleCommandStatus,
    handleSelectedTopic,
  } = callbacks;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const {
        status: { type, isAllowed, topicName },
        messagePayload,
        selectedTopicByNumber,
      } = processGraphCommand({
        inputValue,
        selectedTopic,
        learningStage,
      });

      isAllowed && onStageChange(graphStageMap()[type]);
      isAllowed && handleSelectedTopic(selectedTopicByNumber);

      handleCommandStatus(
        getGraphMessagePayload(type, topicName, learningStage)
      );

      addToHistory.apply(
        null,
        createGraphPayloadArguments(inputValue, type, messagePayload)
      );
      handleInputChange("");
    }
  };

  return {
    handleKeyDown,
  };
};

export { useGraphLearning };
