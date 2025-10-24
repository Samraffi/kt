import { GraphCommandType } from "../../components/ui/GraphLearning/types/graph.types";
import { SelectedTopic } from "../../components/ui/OutputGraphPanel/OutputGraphPanel.types";
import { GRAPH_TOPICS_DATA } from "../../constans/graph";

export const graphCommandParser = (
  inputValue: string,
  selectedTopic: SelectedTopic
): { type: GraphCommandType } => {
  const trimmed = inputValue.trim().toLowerCase();

  if (trimmed === "start") {
    return { type: "START" };
  }
  if (trimmed === "quit") {
    return { type: "QUIT" };
  }

  if (trimmed === "") {
    return { type: "ERROR" };
  }

  // Check for topic selection commands
  const topicNumber = parseInt(trimmed);
  if (
    !isNaN(topicNumber) &&
    topicNumber >= 0 &&
    topicNumber < GRAPH_TOPICS_DATA.length
  ) {
    return { type: "SELECT_TOPIC" };
  }

  // Check for graph interaction commands
  if (trimmed.includes("create node") || trimmed.includes("добавить узел")) {
    return { type: "CREATE_NODE" };
  }
  if (trimmed.includes("create edge") || trimmed.includes("создать связь")) {
    return { type: "CREATE_EDGE" };
  }
  if (trimmed.includes("validate") || trimmed.includes("проверить")) {
    return { type: "VALIDATE_GRAPH" };
  }

  return { type: "ERROR" };
};
