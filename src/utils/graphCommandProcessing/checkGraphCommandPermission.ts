import { GraphCommandType } from "../../components/ui/GraphLearning/types/graph.types";
import { LearningStage } from "../../components/ui/OutputGraphPanel/OutputGraphPanel.types";
import { GRAPH_CONFIG } from "../../constans/processes/graphConfig";

export const checkGraphCommandPermission = (
  commandType: GraphCommandType,
  stage?: LearningStage
) => {
  if (!stage) return false;

  if (commandType === "QUIT") return true;

  const stageConfig = GRAPH_CONFIG.stages[stage];
  if (!stageConfig) return false;

  return stageConfig.allowedCommands.includes(commandType as any);
};
