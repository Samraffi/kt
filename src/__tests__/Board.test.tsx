import { render, screen } from "@testing-library/react";

import Board from "../components/Board/Board";
import { BoardProps } from "../components/Board/Board.types";

const BOARD_MOCK_DATA: BoardProps = {
  mainTitle: "Моя Потрясающая Доска",
  description: "Эта доска помогает организовать задачи и проекты.",
  functions: [
    "Создавать новые задачи",
    "Назначать задачи участникам",
    "Отслеживать прогресс",
    "Устанавливать сроки выполнения",
  ],
  boardTypes: [
    {
      type: "Scrum-доска",
      goal: "Управление гибкими спринтами разработки.",
      structure: "Колонки для «К выполнению», «В работе», «Выполнено».",
      features:
        "Планирование спринтов, ежедневные стендапы, управление бэклогом.",
    },
    {
      type: "Kanban-доска",
      goal: "Визуализация рабочего процесса и ограничение незавершенной работы.",
      structure: "Колонки непрерывного потока.",
      features: "Отслеживание времени цикла, лимиты НЗР, визуальные подсказки.",
    },
  ],
  context:
    "Эта доска используется командой разработчиков для их повседневных задач.",
};

describe("Компонент Board", () => {
  test("Корректно отображает заголовок", () => {
    render(<Board {...BOARD_MOCK_DATA} />);

    const titleElement = screen.getByTestId("main-title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(BOARD_MOCK_DATA.mainTitle);
  });
});
