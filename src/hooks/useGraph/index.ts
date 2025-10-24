import {
  Connection,
  addEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback, useMemo, useState } from "react";

import { FlowEdge, FlowNode } from "../../components/ui/Graph/Graph.types";
import {
  GRAPH_PREDEFINED_LABELS,
  GRAPH_TOPICS_DATA,
} from "../../constans/graph";

const useGraph = () => {
  const [edgeLabels, setEdgeLabels] = useState<Record<string, string>>({});
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedRelatedCommands, setSelectedRelatedCommands] = useState<
    string[]
  >([]);

  const predefinedLabels = useMemo(() => {
    if (!selectedTopic) return GRAPH_PREDEFINED_LABELS.default;
    return (
      GRAPH_PREDEFINED_LABELS[
        selectedTopic as keyof typeof GRAPH_PREDEFINED_LABELS
      ] || GRAPH_PREDEFINED_LABELS.default
    );
  }, [selectedTopic]);

  const handleTopicSelect = useCallback(
    (topic: string, relatedCommands: string[]) => {
      setSelectedTopic(topic);
      setSelectedRelatedCommands(relatedCommands);
    },
    []
  );

  // Helper function to get meaningful descriptions for nodes
  const getNodeDescription = useCallback((topic: string, card: string) => {
    const topicData = GRAPH_TOPICS_DATA.find((t) => t.topic === topic);
    if (!topicData) return card;

    // Map specific cards to their descriptions
    const cardDescriptions: Record<string, Record<string, string>> = {
      "Kanban Board": {
        "To Do":
          "Задачи, которые нужно выполнить. Здесь находятся все новые задачи, ожидающие начала работы.",
        "In Progress":
          "Задачи, которые сейчас выполняются. Активная работа над задачами.",
        "Code Review":
          "Задачи на этапе проверки кода. Код проходит ревью перед тестированием.",
        Testing:
          "Задачи на этапе тестирования. Проверка функциональности и качества кода.",
        Done: "Завершенные задачи. Работа полностью выполнена и готова к релизу.",
      },
      "Scrum Board": {
        "To Do":
          "Бэклог спринта. Задачи, запланированные для выполнения в текущем спринте.",
        "In Progress":
          "Задачи в активной разработке. Команда работает над этими задачами.",
        Testing:
          "Задачи на этапе тестирования. Проверка функциональности в рамках спринта.",
        "Code Review":
          "Задачи на этапе ревью кода. Проверка качества и соответствия стандартам.",
        Done: "Завершенные задачи спринта. Готовы к демонстрации и релизу.",
      },
      "Git Flow": {
        main: "Основная ветка с стабильным кодом. Содержит только релизные версии.",
        develop:
          "Интеграционная ветка для разработки. Объединяет все новые функции.",
        "feature/*":
          "Ветки для разработки новых функций. Создаются от develop.",
        "release/*":
          "Ветки для подготовки релизов. Финальная подготовка перед релизом.",
        "hotfix/*":
          "Ветки для критических исправлений. Создаются от main для быстрых фиксов.",
      },
      "CI/CD Pipeline": {
        Source: "Исходный код в репозитории. Точка входа для всех изменений.",
        Build: "Сборка приложения. Компиляция и подготовка артефактов.",
        Test: "Автоматическое тестирование. Проверка качества и функциональности.",
        "Deploy to Dev":
          "Развертывание в dev-окружение. Тестирование в среде разработки.",
        "Deploy to Staging":
          "Развертывание в staging. Финальное тестирование перед продакшн.",
        "Deploy to Production":
          "Развертывание в продакшн. Публикация для пользователей.",
      },
      "Testing Strategy": {
        "Unit Tests":
          "Модульные тесты для отдельных компонентов. Проверка изолированной функциональности.",
        "Integration Tests":
          "Интеграционные тесты для взаимодействия компонентов. Проверка связей между модулями.",
        "E2E Tests":
          "End-to-End тесты для полных пользовательских сценариев. Проверка всего потока.",
        "Performance Tests":
          "Тесты производительности. Проверка скорости и ресурсоемкости.",
        "Security Tests":
          "Тесты безопасности. Проверка уязвимостей и защитных механизмов.",
      },
      "Code Review Process": {
        "Create PR": "Создание Pull Request. Инициация процесса ревью кода.",
        "Automated Checks":
          "Автоматические проверки. Статический анализ и тесты.",
        "Peer Review": "Ревью коллег. Проверка кода другими разработчиками.",
        "Address Feedback":
          "Исправление замечаний. Устранение найденных проблем.",
        "Approve & Merge":
          "Одобрение и слияние. Финальное одобрение и интеграция кода.",
      },
    };

    return cardDescriptions[topic]?.[card] || card;
  }, []);

  const { initialNodes, initialEdges } = useMemo(() => {
    // Always include the topic selector node
    const topicSelectorNode: FlowNode = {
      id: "topic-selector",
      type: "topicSelector",
      data: {
        label: "Выберите тему для отображения графа",
        description:
          "Выберите тему из меню, чтобы увидеть интерактивный граф с описаниями процессов",
        onTopicSelect: handleTopicSelect,
      },
      position: { x: 200, y: 50 },
    };

    if (!selectedTopic || selectedRelatedCommands.length === 0) {
      return {
        initialNodes: [topicSelectorNode],
        initialEdges: [],
      };
    }

    const nodes: FlowNode[] = [topicSelectorNode];
    const edges: FlowEdge[] = [];

    if (selectedTopic === "Kanban Board") {
      const kanbanCards = selectedRelatedCommands.filter(
        (cmd) =>
          cmd === "To Do" ||
          cmd === "In Progress" ||
          cmd === "Code Review" ||
          cmd === "Testing" ||
          cmd === "Done"
      );

      kanbanCards.forEach((card, index) => {
        const nodeId = `kanban-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label: card,
            description: getNodeDescription(selectedTopic, card),
          },
          position: {
            x: 50 + index * 140,
            y: 200,
          },
        });
      });

      const descriptionCommand = selectedRelatedCommands.find((cmd) =>
        cmd.includes("Визуализация рабочего процесса")
      );
      if (descriptionCommand) {
        nodes.push({
          id: "kanban-description",
          type: "custom",
          data: {
            label: "Описание процесса",
            description: descriptionCommand,
          },
          position: {
            x: 50,
            y: 320,
          },
        });
      }
    } else if (selectedTopic === "Scrum Board") {
      const scrumCards = selectedRelatedCommands.filter(
        (cmd) =>
          cmd === "To Do" ||
          cmd === "In Progress" ||
          cmd === "Testing" ||
          cmd === "Code Review" ||
          cmd === "Done"
      );

      scrumCards.forEach((card, index) => {
        const nodeId = `scrum-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label: card,
            description: getNodeDescription(selectedTopic, card),
          },
          position: {
            x: 50 + index * 120,
            y: 200,
          },
        });
      });

      const descriptionCommand = selectedRelatedCommands.find((cmd) =>
        cmd.includes("Управление задачами в рамках спринтов")
      );
      if (descriptionCommand) {
        nodes.push({
          id: "scrum-description",
          type: "custom",
          data: {
            label: "Описание процесса",
            description: descriptionCommand,
          },
          position: {
            x: 50,
            y: 320,
          },
        });
      }
    } else if (selectedTopic === "Git Flow") {
      const gitFlowCards = selectedRelatedCommands.filter(
        (cmd) =>
          cmd === "main" ||
          cmd === "develop" ||
          cmd === "feature/*" ||
          cmd === "release/*" ||
          cmd === "hotfix/*"
      );

      gitFlowCards.forEach((card, index) => {
        const nodeId = `gitflow-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label: card,
            description: getNodeDescription(selectedTopic, card),
          },
          position: {
            x: 50 + (index % 3) * 140,
            y: 200 + Math.floor(index / 3) * 100,
          },
        });
      });

      const descriptionCommand = selectedRelatedCommands.find((cmd) =>
        cmd.includes("Модель ветвления Git")
      );
      if (descriptionCommand) {
        nodes.push({
          id: "gitflow-description",
          type: "custom",
          data: {
            label: "Описание процесса",
            description: descriptionCommand,
          },
          position: {
            x: 50,
            y: 420,
          },
        });
      }
    } else if (selectedTopic === "CI/CD Pipeline") {
      const pipelineCards = selectedRelatedCommands.filter(
        (cmd) =>
          cmd === "Source" ||
          cmd === "Build" ||
          cmd === "Test" ||
          cmd === "Deploy to Dev" ||
          cmd === "Deploy to Staging" ||
          cmd === "Deploy to Production"
      );

      pipelineCards.forEach((card, index) => {
        const nodeId = `pipeline-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label: card,
            description: getNodeDescription(selectedTopic, card),
          },
          position: {
            x: 50 + (index % 3) * 140,
            y: 200 + Math.floor(index / 3) * 100,
          },
        });
      });

      const descriptionCommand = selectedRelatedCommands.find((cmd) =>
        cmd.includes("Автоматизация процессов")
      );
      if (descriptionCommand) {
        nodes.push({
          id: "pipeline-description",
          type: "custom",
          data: {
            label: "Описание процесса",
            description: descriptionCommand,
          },
          position: {
            x: 50,
            y: 520,
          },
        });
      }
    } else if (selectedTopic === "Testing Strategy") {
      const testingCards = selectedRelatedCommands.filter(
        (cmd) =>
          cmd === "Unit Tests" ||
          cmd === "Integration Tests" ||
          cmd === "E2E Tests" ||
          cmd === "Performance Tests" ||
          cmd === "Security Tests"
      );

      testingCards.forEach((card, index) => {
        const nodeId = `testing-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label: card,
            description: getNodeDescription(selectedTopic, card),
          },
          position: {
            x: 50 + (index % 3) * 140,
            y: 200 + Math.floor(index / 3) * 100,
          },
        });
      });

      const descriptionCommand = selectedRelatedCommands.find((cmd) =>
        cmd.includes("Комплексная стратегия тестирования")
      );
      if (descriptionCommand) {
        nodes.push({
          id: "testing-description",
          type: "custom",
          data: {
            label: "Описание процесса",
            description: descriptionCommand,
          },
          position: {
            x: 50,
            y: 420,
          },
        });
      }
    } else if (selectedTopic === "Code Review Process") {
      const reviewCards = selectedRelatedCommands.filter(
        (cmd) =>
          cmd === "Create PR" ||
          cmd === "Automated Checks" ||
          cmd === "Peer Review" ||
          cmd === "Address Feedback" ||
          cmd === "Approve & Merge"
      );

      reviewCards.forEach((card, index) => {
        const nodeId = `review-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label: card,
            description: getNodeDescription(selectedTopic, card),
          },
          position: {
            x: 50 + index * 140,
            y: 200,
          },
        });
      });

      const descriptionCommand = selectedRelatedCommands.find((cmd) =>
        cmd.includes("Процесс проверки кода")
      );
      if (descriptionCommand) {
        nodes.push({
          id: "review-description",
          type: "custom",
          data: {
            label: "Описание процесса",
            description: descriptionCommand,
          },
          position: {
            x: 50,
            y: 320,
          },
        });
      }
    } else if (selectedTopic) {
      selectedRelatedCommands.forEach((command, index) => {
        const nodeId = `command-${index}`;
        nodes.push({
          id: nodeId,
          type: "custom",
          data: {
            label:
              command.length > 50 ? command.substring(0, 50) + "..." : command,
            description: command.length > 50 ? command : undefined,
          },
          position: {
            x: 50 + (index % 3) * 140,
            y: 200 + Math.floor(index / 3) * 100,
          },
        });
      });
    }

    return { initialNodes: nodes, initialEdges: edges };
  }, [
    selectedTopic,
    selectedRelatedCommands,
    handleTopicSelect,
    getNodeDescription,
  ]);

  const [nodes, setNodes, onNodesChange] =
    useNodesState<FlowNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] =
    useEdgesState<FlowEdge>(initialEdges);

  const updateEdgeLabel = useCallback(
    (edgeId: string, label: string) => {
      setEdgeLabels((prev) => ({ ...prev, [edgeId]: label }));
      setEdges((eds) =>
        eds.map((edge) =>
          edge.id === edgeId ? { ...edge, data: { ...edge.data, label } } : edge
        )
      );
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (params: Connection) => {
      const edgeId = `${params.source}-${params.target}`;
      const newEdge: FlowEdge = {
        id: edgeId,
        source: params.source,
        target: params.target,
        type: "custom",
        data: {
          label: edgeLabels[edgeId] || "Новая связь",
          predefinedLabels,
          onLabelChange: updateEdgeLabel,
        },
        sourceHandle: params.sourceHandle || null,
        targetHandle: params.targetHandle || null,
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges, edgeLabels, predefinedLabels, updateEdgeLabel]
  );

  // Update nodes and edges when props change
  useMemo(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    predefinedLabels,
    selectedTopic,
    selectedRelatedCommands,
  };
};

export { useGraph };
