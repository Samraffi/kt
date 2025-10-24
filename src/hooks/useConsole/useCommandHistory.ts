import { useCallback, useState } from "react";

import {
  CommandHistory,
  CommandHistoryItem,
} from "../../components/ui/CLILog/CLILog.types";
import { AddToHistoryHandler } from "../../components/ui/Console/types/base.types";
import { CommandType } from "../../components/ui/Console/types/command.types";
import { TaskData } from "../../components/ui/OutputConsole/OutputConsole.types";
import { INITIAL_SYSTEM_HISTORY } from "../../constans/console";
import { getHistoryCommands } from "../../utils/get/getHistoryCommands";
import { getTaskSelectionView } from "../../utils/get/getTaskSelectionView";

const useCommandHistory = () => {
  const [commandHistory, setCommandHistory] = useState<CommandHistory>(
    INITIAL_SYSTEM_HISTORY
  );

  const addToHistory: AddToHistoryHandler = useCallback(
    (inputValue, showCommandList) => {
      setCommandHistory((prev) => {
        return getHistoryCommands(prev, inputValue, showCommandList);
      });
    },
    []
  );

  const updateAndInsertState = useCallback(
    (
      showCommandList: boolean,
      inputValue: string,
      welcomeData: TaskData[],
      indexToChange: number
    ) => {
      setCommandHistory((prev) => {
        return [
          ...prev.slice(0, indexToChange),
          {
            ...prev[indexToChange],
            showCommandList: false,
          },
          ...([
            {
              type: "default" as const,
              showCommandList: showCommandList,
              message: inputValue,
            },
            {
              type: "default" as const,
              showCommandList: true,
              message: getTaskSelectionView(welcomeData),
            },
          ] as CommandHistoryItem[]),
        ];
      });
    },
    []
  );

  const updateState = useCallback(
    (data: any, type: CommandType, indexToChange: number) => {
      setCommandHistory((prev) => {
        if (type === "SELECT") {
          return [
            ...prev.slice(0, indexToChange),
            {
              ...prev[indexToChange],
              showCommandList: false,
            },
            ...data,
            ...prev.slice(indexToChange + 1),
          ];
        }

        return [...prev, ...data];
      });
    },
    []
  );

  return {
    commandHistory,
    updateState,
    updateAndInsertState,
    addToHistory,
  };
};

export { useCommandHistory };
