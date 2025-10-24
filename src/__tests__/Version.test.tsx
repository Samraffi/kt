import { render, screen } from "@testing-library/react";

import Version from "../components/Version/Version";
import { VersionProps } from "../components/Version/Version.types";

export const VERSION_MOCK_DATA: VersionProps = {
  mainTitle: "Версия",
  patch: {
    title: "Патч-версия",
    content:
      "Для выкатки на тествое окружение собираеся **patch** версия (увеличивается последняя цифра Х.Х.++1)",
  },
  minor: {
    title: "Минорная версия",
    content: "Для выкатки на продакшн - **минорная** версия (Х.++1.0)",
  },
  tag: {
    title: "Тэг версия",
    content:
      "При создании версии на ветке разработки проставляется **тэг** с номером версии сборки.",
  },
};

describe("Компонент Version", () => {
  test("Корректно отображает заголовок", () => {
    render(<Version {...VERSION_MOCK_DATA} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(VERSION_MOCK_DATA.mainTitle);
  });
});
