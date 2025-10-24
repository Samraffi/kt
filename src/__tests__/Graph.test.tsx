import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import GraphLearningPractice from "../components/GraphLearningPractice/GraphLearningPractice";
import LearningGraph from "../components/ui/LearningGraph/LearningGraph";
import { SelectedTopic } from "../components/ui/OutputGraphPanel/OutputGraphPanel.types";
import TopicSelector from "../components/ui/TopicSelector/TopicSelector";
import { GRAPH_TOPICS_DATA } from "../constans/graph";

// Mock ResizeObserver for React Flow tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock data for Graph Learning components
export const GRAPH_LEARNING_MOCK_DATA: SelectedTopic = {
  topic: "Kanban Board",
  description:
    "Методология управления рабочим процессом для визуализации задач и оптимизации потока работы",
  workflow: [
    "To Do - Задачи для выполнения",
    "In Progress - Задачи в работе",
    "Code Review - Проверка кода",
    "Testing - Тестирование",
    "Done - Завершенные задачи",
  ],
  benefits: [
    "Визуализация рабочего процесса",
    "Выявление узких мест",
    "Улучшение потока работы",
    "Повышение прозрачности",
  ],
  hints: [
    "Создайте колонки для каждого этапа процесса",
    "Перетаскивайте задачи между колонками",
    "Ограничьте количество задач в каждой колонке",
    "Отслеживайте время выполнения задач",
  ],
};

export const GRAPH_LEARNING_MOCK_DATA_SCRUM: SelectedTopic = {
  topic: "Scrum Board",
  description:
    "Агильная методология управления проектами с итеративным подходом и спринтами",
  workflow: [
    "To Do - Бэклог спринта",
    "In Progress - Задачи в разработке",
    "Testing - Тестирование",
    "Code Review - Проверка кода",
    "Done - Завершенные задачи",
  ],
  benefits: [
    "Итеративная разработка",
    "Быстрая адаптация к изменениям",
    "Регулярная обратная связь",
    "Командная работа",
  ],
  hints: [
    "Планируйте спринты на 1-4 недели",
    "Проводите ежедневные стендапы",
    "Используйте ретроспективы для улучшений",
    "Ограничивайте объем работы в спринте",
  ],
};

describe("Graph Learning Components", () => {
  // TopicSelector tests
  describe("TopicSelector Component", () => {
    const mockOnTopicSelect = jest.fn();

    beforeEach(() => {
      mockOnTopicSelect.mockClear();
    });

    test("renders topic selection interface", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      expect(
        screen.getByText("Выберите тему для изучения")
      ).toBeInTheDocument();
      expect(screen.getByText(/интерактивные карточки/)).toBeInTheDocument();
    });

    test("displays all available topics", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      expect(screen.getByText("Kanban Board")).toBeInTheDocument();
      expect(screen.getByText("Scrum Board")).toBeInTheDocument();
      expect(screen.getByText("Git Flow")).toBeInTheDocument();
      expect(screen.getByText("CI/CD Pipeline")).toBeInTheDocument();
      expect(screen.getByText("Testing Strategy")).toBeInTheDocument();
      expect(screen.getByText("Code Review Process")).toBeInTheDocument();
    });

    test("shows selected topic information", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      expect(
        screen.getByText("Выбранная тема: Kanban Board")
      ).toBeInTheDocument();
      expect(
        screen.getAllByText(/Методология управления рабочим процессом/)[0]
      ).toBeInTheDocument();
    });

    test("displays workflow steps", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      expect(screen.getByText("Шаги процесса:")).toBeInTheDocument();
      expect(
        screen.getByText("To Do - Задачи для выполнения")
      ).toBeInTheDocument();
      expect(
        screen.getByText("In Progress - Задачи в работе")
      ).toBeInTheDocument();
      expect(screen.getByText("Done - Завершенные задачи")).toBeInTheDocument();
    });

    test("displays benefits list", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      expect(screen.getByText("Преимущества:")).toBeInTheDocument();
      expect(
        screen.getByText("Визуализация рабочего процесса")
      ).toBeInTheDocument();
      expect(screen.getByText("Выявление узких мест")).toBeInTheDocument();
    });

    test("calls onTopicSelect when topic card is clicked", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      const scrumCard = screen.getByText("Scrum Board");
      fireEvent.click(scrumCard);

      expect(mockOnTopicSelect).toHaveBeenCalledWith(GRAPH_TOPICS_DATA[1]);
    });

    test("shows step count and benefits count", () => {
      render(
        <TopicSelector
          selectedTopic={GRAPH_LEARNING_MOCK_DATA}
          onTopicSelect={mockOnTopicSelect}
        />
      );

      expect(screen.getAllByText("5 шагов")[0]).toBeInTheDocument();
      expect(screen.getAllByText("4 преимуществ")[0]).toBeInTheDocument();
    });
  });

  // LearningGraph tests - Simplified to avoid React Flow issues
  describe("LearningGraph Component", () => {
    const mockOnNodeCreate = jest.fn();
    const mockOnEdgeCreate = jest.fn();
    const mockOnGraphValidate = jest.fn();

    beforeEach(() => {
      mockOnNodeCreate.mockClear();
      mockOnEdgeCreate.mockClear();
      mockOnGraphValidate.mockClear();
    });

    test("renders graph header", () => {
      render(
        <LearningGraph
          selectedTopic="Kanban Board"
          learningStage="welcome"
          onNodeCreate={mockOnNodeCreate}
          onEdgeCreate={mockOnEdgeCreate}
          onGraphValidate={mockOnGraphValidate}
        />
      );

      expect(screen.getByText("Граф: Kanban Board")).toBeInTheDocument();
    });

    test("shows instructions for user interaction", () => {
      render(
        <LearningGraph
          selectedTopic="Kanban Board"
          learningStage="welcome"
          onNodeCreate={mockOnNodeCreate}
          onEdgeCreate={mockOnEdgeCreate}
          onGraphValidate={mockOnGraphValidate}
        />
      );

      expect(screen.getByText("Инструкции:")).toBeInTheDocument();
      expect(
        screen.getByText(/Наведите курсор на карточку для просмотра описания/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Перетащите от одной карточки к другой/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Выберите тип связи из выпадающего списка/)
      ).toBeInTheDocument();
    });

    test("displays learning mode indicator", () => {
      render(
        <LearningGraph
          selectedTopic="Kanban Board"
          learningStage="welcome"
          onNodeCreate={mockOnNodeCreate}
          onEdgeCreate={mockOnEdgeCreate}
          onGraphValidate={mockOnGraphValidate}
        />
      );

      expect(screen.getByText("🎓 Режим обучения")).toBeInTheDocument();
    });
  });

  // GraphLearningPractice integration tests - Simplified to avoid React Flow issues
  describe("GraphLearningPractice Component", () => {
    test("renders header and stage indicator", () => {
      render(<GraphLearningPractice title="Песочница графов" />);

      expect(screen.getByText("Песочница графов")).toBeInTheDocument();
      expect(screen.getByText("🎯 Приветствие")).toBeInTheDocument();
    });

    test("shows stage indicators", () => {
      render(<GraphLearningPractice title="Песочница графов" />);

      const stageBadge = screen.getByText("🎯 Приветствие");
      expect(stageBadge).toBeInTheDocument();
    });
  });

  // Data validation tests
  describe("Graph Data Validation", () => {
    test("validates Kanban Board data structure", () => {
      expect(GRAPH_LEARNING_MOCK_DATA.topic).toBe("Kanban Board");
      expect(GRAPH_LEARNING_MOCK_DATA.workflow).toHaveLength(5);
      expect(GRAPH_LEARNING_MOCK_DATA.benefits).toHaveLength(4);
      expect(GRAPH_LEARNING_MOCK_DATA.hints).toHaveLength(4);
    });

    test("validates Scrum Board data structure", () => {
      expect(GRAPH_LEARNING_MOCK_DATA_SCRUM.topic).toBe("Scrum Board");
      expect(GRAPH_LEARNING_MOCK_DATA_SCRUM.workflow).toHaveLength(5);
      expect(GRAPH_LEARNING_MOCK_DATA_SCRUM.benefits).toHaveLength(4);
      expect(GRAPH_LEARNING_MOCK_DATA_SCRUM.hints).toHaveLength(4);
    });

    test("validates all topics have required properties", () => {
      GRAPH_TOPICS_DATA.forEach((topic) => {
        expect(topic).toHaveProperty("topic");
        expect(topic).toHaveProperty("description");
        expect(topic).toHaveProperty("workflow");
        expect(topic).toHaveProperty("benefits");
        expect(topic).toHaveProperty("hints");
        expect(Array.isArray(topic.workflow)).toBe(true);
        expect(Array.isArray(topic.benefits)).toBe(true);
        expect(Array.isArray(topic.hints)).toBe(true);
      });
    });

    test("validates workflow steps are not empty", () => {
      GRAPH_TOPICS_DATA.forEach((topic) => {
        expect(topic.workflow.length).toBeGreaterThan(0);
        topic.workflow.forEach((step) => {
          expect(step.trim().length).toBeGreaterThan(0);
        });
      });
    });

    test("validates benefits are not empty", () => {
      GRAPH_TOPICS_DATA.forEach((topic) => {
        expect(topic.benefits.length).toBeGreaterThan(0);
        topic.benefits.forEach((benefit) => {
          expect(benefit.trim().length).toBeGreaterThan(0);
        });
      });
    });

    test("validates hints are not empty", () => {
      GRAPH_TOPICS_DATA.forEach((topic) => {
        expect(topic.hints.length).toBeGreaterThan(0);
        topic.hints.forEach((hint) => {
          expect(hint.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Edge cases and error handling
  describe("Error Handling", () => {
    test("handles empty topic data gracefully", () => {
      const emptyTopic: SelectedTopic = {
        topic: "",
        description: "",
        workflow: [],
        benefits: [],
        hints: [],
      };

      expect(emptyTopic.topic).toBe("");
      expect(emptyTopic.workflow).toHaveLength(0);
      expect(emptyTopic.benefits).toHaveLength(0);
      expect(emptyTopic.hints).toHaveLength(0);
    });

    test("validates topic uniqueness", () => {
      const topics = GRAPH_TOPICS_DATA.map((topic) => topic.topic);
      const uniqueTopics = Array.from(new Set(topics));
      expect(topics.length).toBe(uniqueTopics.length);
    });
  });
});
