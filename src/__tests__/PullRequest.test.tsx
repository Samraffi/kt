import { render, screen } from "@testing-library/react";

import PullRequest from "../components/PullRequest/PullRequest";
import { PullRequestProps } from "../components/PullRequest/PullRequest.types";

export const PR_MOCK_DATA: PullRequestProps = {
  mainTitle: "Описание модуля",
  definition:
    "Pull request (PR) — механизм, позволяющий предложить изменения из одной ветки в другую, обычно с feature в main, используется для обзора и обсуждения.",
  companyProcess: {
    title: "Процесс в компании",
    description:
      "Создается mid-фичи, чтобы проверить направление разработки, потом ревью от коллег и слияние в develop.",
  },
  phases: [
    {
      title: "Создание PR",
      points: [
        "Разработчик завершил фичу и создает PR для объединения изменений.",
        "Указывается заголовок и описание PR для контекста.",
      ],
    },
    {
      title: "Code Review",
      points: [
        "Команда или мейнтейнеры просматривают PR, оставляют комментарии.",
        "Помогает находить ошибки и улучшать качество.",
      ],
    },
    {
      title: "CI/CD",
      points: [
        "Автотесты и CI запускаются при создании/обновлении PR.",
        "При провале — нужно исправить до merge.",
      ],
    },
    {
      title: "Обсуждение и изменения",
      points: [
        "Вносятся правки в ветку PR, они автоматически обновляют PR.",
        "Иногда требуется несколько итераций до принятия.",
      ],
    },
    {
      title: "Слияние",
      points: [
        "После одобрения PR сливается в основную ветку (merge, squash или rebase).",
        "Выбирается способ слияния по процедуре.",
      ],
    },
    {
      title: "Закрытие PR",
      points: [
        "После merge PR закрывается.",
        "Или закрывается без слияния, если изменение не актуально.",
      ],
    },
  ],
  benefits: {
    title: "Преимущества Pull Requests",
    points: [
      "Поддержание качества кода через ревью.",
      "Сохраняется история обсуждений и решений.",
      "Сотрудничество и обмен знаниями.",
      "Интеграция с CI/CD обеспечивает стабильность.",
    ],
  },
};

describe("Компонент PullRequest", () => {
  test("Корректно отображает заголовок", () => {
    render(<PullRequest {...PR_MOCK_DATA} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(PR_MOCK_DATA.mainTitle);
  });
});
