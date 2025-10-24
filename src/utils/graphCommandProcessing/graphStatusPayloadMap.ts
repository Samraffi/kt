export const graphStatusPayloadMap = (topicName: string) => ({
  START: {
    type: "success" as const,
    message: `Добро пожаловать в обучение работе с графами! Тема: ${topicName}`,
  },
  SELECT_TOPIC: {
    type: "success" as const,
    message: `Тема "${topicName}" выбрана. Теперь вы можете взаимодействовать с графом.`,
  },
  CREATE_NODE: {
    type: "success" as const,
    message: "Узел создан успешно! Теперь создайте связи между узлами.",
  },
  CREATE_EDGE: {
    type: "success" as const,
    message: "Связь создана успешно! Проверьте правильность построения графа.",
  },
  VALIDATE_GRAPH: {
    type: "success" as const,
    message: "Граф построен правильно! Отличная работа!",
  },
  QUIT: {
    type: "idle" as const,
    message: "Обучение завершено. До свидания!",
  },
  ERROR: {
    type: "error" as const,
    message: "Неверная команда. Попробуйте еще раз.",
  },
});
