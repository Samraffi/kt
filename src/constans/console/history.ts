import { CLILogItem } from "../../components/ui/CLILog/CLILog.types";

export const INITIAL_SYSTEM_HISTORY: CLILogItem[] = [
  {
    type: "default",
    className: "",
    text: "$console@demo:~$",
    showCommandList: true,
    message:
      "====================================================================",
  },
  {
    type: "default",
    className: "",
    text: "$console@demo:~$",
    showCommandList: true,
    message: "🛠️ ГЛАВНОЕ МЕНЮ ОБУЧЕНИЯ: БАЗА ПРОГРАММИРОВАНИЯ И TOOLS 🛠️",
  },
  {
    type: "default",
    className: "mb10",
    text: "$console@demo:~$",
    showCommandList: true,
    message:
      "====================================================================",
  },
  {
    type: "default",
    className: "",
    text: "$console@demo:~$",
    showCommandList: true,
    message: [
      { type: "text", content: "👋 " },
      { type: "strong", content: "Добро пожаловать" },
      {
        type: "text",
        content:
          " в интерактивный обучающий курс по основам программирования! Я ваш консольный наставник. Моя цель — помочь вам освоить базу. Чтобы начать наше занятие, пожалуйста, введите слово ",
      },
      { type: "strong", content: [{ type: "italic", content: "start" }] },
      { type: "text", content: " и нажмите Enter." },
    ],
  },
];

export const CONSOLE_COMMANDS = {
  START: "start",
  QUIT: "quit",
  QUIT_CONFIRM: "yes",
  EMPTY: "",
} as const;
