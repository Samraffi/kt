export const TASK_SELECTION_PROMPT =
  "Отлично! А теперь введите номер команды для изучения.";
export const COMMAND_INPUT_PROMPT = ">> Введите команду";
export const COMMAND_INPUT_EXAMPLE = "01";

export const SUCCESS_MESSAGE = "Отлично! Команда выполнена правильно.";

export const SUCCESS_MESSAGE_INSTRUCTION = (taskName: string) =>
  `Отлично! А теперь введите команду. Вам нужно ${taskName.charAt(0).toLowerCase()}${taskName.slice(1)}`;
export const SUCCESS_MESSAGE_DISPLAY = (taskName: string) =>
  `Команда загружена: ${taskName}`;
