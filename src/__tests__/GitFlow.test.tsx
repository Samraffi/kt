import { render, screen } from "@testing-library/react";

import GitFlow from "../components/GitFlow/GitFlow";
import { GitFlowProps } from "../components/GitFlow/GitFlow.types";

export const GITFLOW_MOCK_DATA: GitFlowProps = {
  mainTitle: "Git Flow",
  definition: "Используется git workflow по текущему варианту.",
  branches: [
    {
      name: "Главная ветка",
      type: "develop",
      description: "содержит основной поток разработки",
    },
    {
      name: "Фичевые ветки",
      type: "от develop",
      description: "отходят от develop и мержатся обратно",
    },
    {
      name: "Релизные ветки",
      type: "от develop",
      description:
        "фиксятся и мержатся в main; если в develop появились новые коммиты — они тоже попадают туда",
    },
    {
      name: "Хотфиксы",
      type: "от main",
      description: "создаются от main и мержатся обратно",
    },
  ],
};

describe("Компонент GitFlow", () => {
  test("Корректно отображает заголовок", () => {
    render(<GitFlow {...GITFLOW_MOCK_DATA} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(GITFLOW_MOCK_DATA.mainTitle);
  });
});
