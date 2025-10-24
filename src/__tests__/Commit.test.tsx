import { render, screen } from "@testing-library/react";

import Commit from "../components/Commit/Commit";
import { CommitProps } from "../components/Commit/Commit.types";

export const COMMIT_MOCK_DATA: CommitProps = {
  mainTitle: "Тест заголовка",
  definition:
    "Commit — это операция в системе контроля версий (Git), сохраняющая изменения локально и позволяющая фиксировать состояние проекта.",
  location: [
    "Можно делать локальные коммиты на своём компьютере.",
    "Можно отправлять коммиты на удалённый сервер, чтобы иметь резервную копию.",
  ],
  badPractice: [
    "использовать ctrl+z для отмены написанного",
    "копировать и вставлять код без фиксации",
  ],
  goodPractice: [
    "использовать git add для подготовки изменений",
    "фиксировать изменения коммитом с осмысленным сообщением",
  ],
  purpose: [
    "Отслеживание изменений",
    "Документация с историей",
    "Возможность отката",
    "Сотрудничество в команде",
  ],
  conclusion: {
    title: "Почему коммиты важны",
    description:
      "Коммиты помогают сохранять историю изменений понятной и доходчивой для всех участников проекта.",
  },
};

describe("Компонент Commit", () => {
  test("Корректно отображает заголовок", () => {
    render(<Commit {...COMMIT_MOCK_DATA} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(COMMIT_MOCK_DATA.mainTitle);
  });
});
