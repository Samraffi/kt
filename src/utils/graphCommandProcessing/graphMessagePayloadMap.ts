import { CLIMessageContent } from "../../components/ui/CLIMessage/CLIMessage.types";
import { SelectedTopic } from "../../components/ui/OutputGraphPanel/OutputGraphPanel.types";

export const graphMessagePayloadMap = (
  selectedTopic: SelectedTopic,
  topicName: string
) => ({
  START: [
    { type: "text", content: "🎯 " },
    { type: "strong", content: "Добро пожаловать" },
    {
      type: "text",
      content:
        " в интерактивное обучение работе с графами! Выберите тему для изучения.",
    },
  ] as CLIMessageContent,
  SELECT_TOPIC: [
    { type: "text", content: "✅ " },
    { type: "strong", content: `Тема "${topicName}" выбрана` },
    {
      type: "text",
      content: ". Теперь вы можете создавать узлы и связи в графе.",
    },
  ] as CLIMessageContent,
  CREATE_NODE: [
    { type: "text", content: "🔗 " },
    { type: "strong", content: "Узел создан" },
    {
      type: "text",
      content: ". Добавьте связи между узлами для завершения графа.",
    },
  ] as CLIMessageContent,
  CREATE_EDGE: [
    { type: "text", content: "➡️ " },
    { type: "strong", content: "Связь создана" },
    {
      type: "text",
      content: ". Проверьте правильность построения графа.",
    },
  ] as CLIMessageContent,
  VALIDATE_GRAPH: [
    { type: "text", content: "🎉 " },
    { type: "strong", content: "Граф построен правильно!" },
    {
      type: "text",
      content: " Отличная работа! Вы успешно изучили работу с графами.",
    },
  ] as CLIMessageContent,
});
