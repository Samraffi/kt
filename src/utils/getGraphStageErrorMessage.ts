import { GraphCommandType } from "../components/ui/GraphLearning/types/graph.types";
import { LearningStage } from "../components/ui/OutputGraphPanel/OutputGraphPanel.types";

export const getGraphStageErrorMessage = (
  type: GraphCommandType,
  stage: LearningStage
): string => {
  const errorMessages: Record<LearningStage, string> = {
    welcome: "Введите 'start' для начала обучения работе с графами",
    topic_selection: "Выберите тему для изучения (введите номер от 0 до 5)",
    graph_interaction:
      "Используйте команды: 'create node', 'create edge', или 'validate'",
    validation: "Обучение завершено. Введите 'quit' для выхода",
  };

  return errorMessages[stage] || "Неизвестная ошибка";
};
