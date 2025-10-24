import { CLIMessageContent } from "../../components/ui/CLIMessage/CLIMessage.types";
import { GraphCommandType } from "../../components/ui/GraphLearning/types/graph.types";
import { LearningStage } from "../../components/ui/OutputGraphPanel/OutputGraphPanel.types";
import { GRAPH_CONFIG } from "../../constans/processes/graphConfig";
import { graphStatusPayloadMap } from "../../utils/graphCommandProcessing/graphStatusPayloadMap";

import { getGraphStageErrorMessage } from "../getGraphStageErrorMessage";

const getGraphMessagePayload = (
  type: GraphCommandType,
  topicName: string,
  learningStage: LearningStage
): any | CLIMessageContent | Record<GraphCommandType, any> => {
  if (type === "QUIT")
    return {
      type: "idle",
      message: GRAPH_CONFIG.confirmationMessages,
    };

  if (type !== "ERROR") return graphStatusPayloadMap(topicName)[type];

  return {
    type: "error",
    message: getGraphStageErrorMessage("ERROR", learningStage),
  };
};

export { getGraphMessagePayload };
