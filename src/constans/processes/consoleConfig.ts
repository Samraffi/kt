export const CONSOLE_CONFIG = {
  stages: {
    welcome: {
      allowedCommands: ["START", "QUIT"],
    },
    menu: {
      allowedCommands: ["SELECT", "QUIT"],
    },
    task_selected: {
      allowedCommands: ["QUIT"],
    },
    command_input: {
      allowedCommands: ["VALIDATE", "QUIT"],
    },
  },

  confirmationMessages: {
    quit: "Вы действительно хотите выйти из обучения? Введите 'yes' для подтверждения или любую другую команду для продолжения.",
    quitConfirmed: "До свидания! Обучение завершено.",
    quitCancelled: "Обучение продолжается",
  },

  stageErrors: {
    welcome:
      "На этапе приветствия доступны команды 'start' для начала обучения или 'quit' для выхода.",
    menu: "На этапе выбора задачи введите номер задачи (например, 01) или 'quit' для выхода.",
    task_selected:
      "Введите правильную команду для выполнения задачи или 'quit' для выхода.",
    command_input:
      "Введите правильную команду для выполнения задачи или 'quit' для выхода.",
    yes_outsid_confirmation:
      "Команда 'yes' доступна только для подтверждения выхода",
    invalid_task:
      "Неверный номер задачи. Введите число от 01 до количества доступных задач.",
    command_not_allowed: "Эта команда не разрешена на текущем этапе обучения.",
    empty_input: "Введите команду или номер задачи.",
    unknown: "Неизвестная команда",
  },

  commandMessages: {
    start: "Добро пожаловать! Обучение начато. Выберите задачу для изучения.",
    select: "Задача выбрана: ",
  },
} as const;
