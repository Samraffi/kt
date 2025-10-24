import { HistoryCommandsGenerator } from "../../components/ui/Console/types/history.types";
import { INITIAL_SYSTEM_HISTORY } from "../../constans/console";

import { createTypeMessagePayload } from "../create/createTypeMessagePayload";

export const getHistoryCommands: HistoryCommandsGenerator = (
  arrCommands,
  inputValue,
  showCommandList
) => {
  const newCommandItem = createTypeMessagePayload(
    "default",
    showCommandList,
    inputValue
  );

  if (inputValue === "") return arrCommands;

  if (inputValue === "start") return [...arrCommands, newCommandItem];

  if (
    arrCommands[arrCommands.length - 1].message === "quit" &&
    inputValue === "yes"
  ) {
    return INITIAL_SYSTEM_HISTORY.map((item) => ({
      type: "default" as const,
      showCommandList: true,
      message: item.message,
      text: item.text,
      className: item.className,
    }));
  }

  return [...arrCommands, newCommandItem];
};
