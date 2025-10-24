import { CommandHistoryItem } from "../components/ui/CLILog/CLILog.types";
import { CommandStatusType } from "../components/ui/GraphLearning/types/base.types";

export const INITIAL_GRAPH_COMMAND_STATUS: CommandStatusType = {
  type: "idle",
  message: "Готов к изучению графов...",
};

export const INITIAL_GRAPH_SYSTEM_HISTORY: CommandHistoryItem[] = [
  {
    type: "default",
    showCommandList: true,
    message:
      "====================================================================",
  },
  {
    type: "default",
    showCommandList: true,
    message: "🔗 ИНТЕРАКТИВНОЕ ОБУЧЕНИЕ РАБОТЕ С ГРАФАМИ 🔗",
  },
  {
    type: "default",
    showCommandList: true,
    message:
      "====================================================================",
  },
  {
    type: "default",
    showCommandList: true,
    message: [
      { type: "text", content: "👋 " },
      { type: "strong", content: "Добро пожаловать" },
      {
        type: "text",
        content:
          " в интерактивное обучение работе с графами! Здесь вы изучите различные методологии разработки через визуальные графы. Чтобы начать, введите ",
      },
      { type: "strong", content: [{ type: "italic", content: "start" }] },
      { type: "text", content: " и нажмите Enter." },
    ],
  },
];
