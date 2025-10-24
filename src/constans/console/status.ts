import { CommandStatusType } from "../../components/ui/OutputConsole/OutputConsole.types";

export const INITIAL_COMMAND_STATUS: CommandStatusType = {
  type: "idle",
  message: "Готов к вводу команды...",
};

export const STAGE_LABELS = {
  welcome: "🎯 Приветствие",
  menu: "📋 Выбор задачи",
  task_selected: "✅ Задача выбрана",
  command_input: "⌨️ Ввод команды",
};

export const PROGRESS_STEPS = [
  "Знакомство с консолью",
  "Выбор задачи",
  "Изучение команды",
  "Практическое применение",
];
