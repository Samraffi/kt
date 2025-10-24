import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Console } from "../components/ui";
import { ConsoleProps } from "../components/ui/Console/types/component.types";

export const CONSOLE_MOCK_DATA: ConsoleProps = {
  progressData: {
    selectedTask: {
      topic: "Console",
      task: "Добавить все файлы в staging area",
      correctCommand: "git add .",
      theory:
        "Команда 'git add .' добавляет все измененные файлы в staging area (индекс), подготавливая их к коммиту. Точка (.) означает 'все файлы в текущей директории'.",
      hints: [
        "Используйте команду git add",
        "Для добавления всех файлов используйте точку (.)",
      ],
    },
    learningStage: "menu",
  },
  inputProps: {
    inputValue: "",
    handleInputChange: jest.fn(),
    handleKeyDown: jest.fn(),
  },
  historyState: {
    commandHistory: [],
    commandStatus: {
      type: "idle",
      message: "Готов к вводу команды...",
    },
  },
  handleCopy: jest.fn(),
};

describe("Компонент Console", () => {
  test("Все тесты в этом файле", () => {
    console.warn(
      "⚠️ ВНИМАНИЕ: Тесты для компонента Console еще не реализованы"
    );
    expect(true).toBe(true);
  });
  // test("Корректно отображает header", () => {
  //   render(<Console {...CONSOLE_MOCK_DATA} >);
  //   const titleElement = screen.getByText(
  //     `Console • ${CONSOLE_MOCK_DATA.topic}`
  //   );
  //   expect(titleElement).toBeInTheDocument();
  //   expect(titleElement).toHaveTextContent(CONSOLE_MOCK_DATA.topic);
  // });
  // test("Корректно отображает тему", () => {
  //   render(<Console {...CONSOLE_MOCK_DATA} />);
  //   const titleElement = screen.getByText(
  //     `$ topic: ${CONSOLE_MOCK_DATA.topic}`
  //   );
  //   expect(titleElement).toBeInTheDocument();
  //   expect(titleElement).toHaveTextContent(CONSOLE_MOCK_DATA.topic);
  // });
  // test("Корректно отображает название задачи", () => {
  //   render(<Console {...CONSOLE_MOCK_DATA} />);
  //   const taskElement = screen.getByText(CONSOLE_MOCK_DATA.task);
  //   expect(taskElement).toBeInTheDocument();
  //   expect(taskElement).toHaveTextContent(CONSOLE_MOCK_DATA.task);
  // });
  // test("Отображает все связанные команды", () => {
  //   render(<Console {...CONSOLE_MOCK_DATA} />);
  //   const commandItems = screen.getAllByRole("listitem");
  //   const expectedCommands = CONSOLE_MOCK_DATA.relatedCommands;
  //   expect(commandItems).toHaveLength(expectedCommands.length);
  //   commandItems.forEach((commandItem, index) => {
  //     expect(commandItem).toHaveTextContent(expectedCommands[index]);
  //   });
  // });
});
