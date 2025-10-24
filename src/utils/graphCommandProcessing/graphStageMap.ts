import { GraphCommandType } from "../../components/ui/GraphLearning/types/graph.types";
import { LearningStage } from "../../components/ui/OutputGraphPanel/OutputGraphPanel.types";

export const graphStageMap: () => Record<
  GraphCommandType,
  LearningStage
> = () => {
  return {
    START: "topic_selection",
    SELECT_TOPIC: "graph_interaction",
    CREATE_NODE: "graph_interaction",
    CREATE_EDGE: "graph_interaction",
    VALIDATE_GRAPH: "validation",
    QUIT: "topic_selection",
    ERROR: "topic_selection",
  };
};
