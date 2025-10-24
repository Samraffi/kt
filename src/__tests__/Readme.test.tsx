import { render, screen } from "@testing-library/react";

import Readme from "../components/Readme/Readme";
import { ReadmeDataProps } from "../components/Readme/Readme.types";

export const README_MOCK_DATA: ReadmeDataProps = {
  mainTitle: "Описание модуля",
  description: "Краткая информация о модуле",
  cards: [
    {
      title: "Скрипты",
      desc: "Команды для запуска и тестирования",
      icon: "⚡️",
    },
    {
      title: "Конфигурация",
      desc: "Переменные окружения и настройки",
      icon: "🛠",
    },
    {
      title: "Релиз",
      desc: "2.3.1",
      icon: "🚢",
    },
  ],
};

describe("Компонент Readme", () => {
  test("Корректно отображает заголовок", () => {
    render(<Readme {...README_MOCK_DATA} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(README_MOCK_DATA.mainTitle);
  });
});
