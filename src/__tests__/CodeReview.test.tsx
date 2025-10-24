import { render, screen, within } from "@testing-library/react";

import CodeReview from "../components/CodeReview/CodeReview";
import { CodeReviewDataProps } from "../components/CodeReview/CodeReview.types";

export const CODEREVIEW_MOCK_DATA: CodeReviewDataProps = {
  mainTitle: "Code review (код-ревью)",
  definition: "Процесс проверки кода другими разработчиками.",
  mainGoal: "Обеспечить качество кода и обмен знаниями в команде.",
  stages: {
    title: "Основные этапы и аспекты код-ревью",
    subsections: [
      {
        title: "Подготовка кода для ревью",
        steps: [
          {
            name: "Коммиты и Pull Request (PR)",
            description: "Разработчик создает PR для предложенных изменений.",
          },
          {
            name: "Документация",
            description: "Прикрепите все задачи и настройте autocomplete.",
          },
        ],
      },
      {
        title: "Процесс ревью",
        steps: [
          {
            name: "Ревьюеры",
            description: "Добавьте обязательных и опциональных ревьюеров.",
          },
          {
            name: "Анализ изменений",
            description: "Ревьюеры проверяют код и оставляют комментарии.",
          },
        ],
      },
      {
        title: "Внесение исправлений",
        steps: [
          {
            name: "Исправление кода",
            description: "Автор вносит изменения на основе замечаний.",
          },
        ],
      },
      {
        title: "Закрытие ревью",
        steps: [
          {
            name: "Одобрение и слияние",
            description: "После одобрения PR сливается в develop.",
          },
        ],
      },
    ],
  },
  sections: [
    {
      title: "Зачем проводить код-ревью?",
      items: [
        "Улучшение качества кода",
        "Обмен знаниями",
        "Поддержание стандартов",
      ],
    },
    {
      title: "Лучшие практики код-ревью",
      items: [
        "Четкость и конструктивность",
        "Маленькие и частые PR",
        "Определение стандартов",
      ],
    },
  ],
};

describe("Компонент CodeReview", () => {
  test("Корректно отображает заголовок, описание и основную цель", () => {
    render(<CodeReview {...CODEREVIEW_MOCK_DATA} />);

    const titleElement = screen.getByRole("heading", {
      level: 1,
      name: CODEREVIEW_MOCK_DATA.mainTitle,
    });

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(CODEREVIEW_MOCK_DATA.mainTitle);

    const definitionElement = screen.getByText(CODEREVIEW_MOCK_DATA.definition);
    expect(definitionElement).toBeInTheDocument();
    expect(definitionElement).toHaveTextContent(
      CODEREVIEW_MOCK_DATA.definition
    );

    const mainGoalElement = screen.getByText(CODEREVIEW_MOCK_DATA.mainGoal, {
      exact: false,
    });
    expect(mainGoalElement).toBeInTheDocument();
    expect(mainGoalElement).toHaveTextContent(CODEREVIEW_MOCK_DATA.mainGoal);
  });

  test("Отображает основные этапы и аспекты код-ревью", () => {
    render(<CodeReview {...CODEREVIEW_MOCK_DATA} />);

    const titleElement = screen.getByRole("heading", {
      level: 2,
      name: CODEREVIEW_MOCK_DATA.stages.title,
    });

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(CODEREVIEW_MOCK_DATA.stages.title);

    CODEREVIEW_MOCK_DATA.stages.subsections.forEach((subsection, index) => {
      const subsectionTitleElement = screen.getByRole("heading", {
        level: 3,
        name: subsection.title,
      });

      expect(subsectionTitleElement).toBeInTheDocument();
      expect(subsectionTitleElement).toHaveTextContent(subsection.title);

      const subsectionContainers = screen.getAllByTestId("subSection");
      const subsectionContainer = subsectionContainers[index];

      subsection.steps
        .filter((step) => step.name)
        .forEach((step) => {
          expect(
            within(subsectionContainer).getByText(
              (content, element) =>
                element?.tagName.toLowerCase() === "strong" &&
                content.includes(step.name)
            )
          ).toBeInTheDocument();
          expect(
            within(subsectionContainer).getByText(step.description)
          ).toBeInTheDocument();
        });
    });
  });

  test("Отображает бенефиты и лучшие практики", () => {
    render(<CodeReview {...CODEREVIEW_MOCK_DATA} />);

    CODEREVIEW_MOCK_DATA.sections.forEach((section) => {
      const headingElement = screen.getByRole("heading", {
        level: 2,
        name: section.title,
      });

      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveTextContent(section.title);

      section.items.forEach((item) => {
        const listElement = screen.getByText(item);
        expect(listElement).toBeInTheDocument();
        expect(listElement).toHaveTextContent(item);
      });
    });
  });
});
