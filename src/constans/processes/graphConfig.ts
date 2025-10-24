export const GRAPH_CONFIG = {
  systemCommands: {
    exit: {
      topic: "Система",
      task: "Выйти из обучения",
      correctCommand: "quit",
      theory:
        "Команда 'quit' завершает обучение работе с графами. Перед выходом будет предложено подтверждение для предотвращения случайного выхода.",
      hints: [
        "Введите команду quit",
        "Перед выходом нужно подтвердить действие",
      ],
    },
  },

  stages: {
    welcome: {
      allowedCommands: ["START", "QUIT"],
      nextStage: "topic_selection",
      description: "Начальный экран обучения работе с графами",
    },
    topic_selection: {
      allowedCommands: ["SELECT_TOPIC", "QUIT"],
      nextStage: "graph_interaction",
      description: "Выбор темы для изучения графов",
    },
    graph_interaction: {
      allowedCommands: ["CREATE_NODE", "CREATE_EDGE", "VALIDATE_GRAPH", "QUIT"],
      nextStage: "validation",
      description: "Взаимодействие с графом - создание узлов и связей",
    },
    validation: {
      allowedCommands: ["QUIT"],
      nextStage: "topic_selection",
      description: "Проверка результата и завершение задачи",
    },
  },

  confirmationMessages: {
    quit: "Вы действительно хотите выйти из обучения работе с графами? Введите 'yes' для подтверждения или любую другую команду для продолжения.",
    quitConfirmed: "До свидания! Обучение работе с графами завершено.",
    quitCancelled: "Продолжение обучения работе с графами",
  },
} as const;
