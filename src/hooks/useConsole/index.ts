import { KeyboardEvent, useState } from "react";

import { CommandType } from "../../components/ui/Console/types/command.types";
import { UseConsoleParams } from "../../components/ui/Console/types/hook.types";
import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";
import { CONSOLE_CONFIG } from "../../constans/processes/consoleConfig";
import { processCommand } from "../../utils/commandProcessing/processCommand";
import { getMessagePayload } from "../../utils/get/getMessagePayload";

const useConsole: UseConsoleParams = (
  data,
  selectedTask,
  { inputValue, learningStage },
  callbacks
) => {
  const [isQuitConfirmation, setIsQuitConfirmation] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const {
        isAllowed,
        process: { processedCommandStatus, currentStage },
        confirmation: { confirmationState, selectedTaskByNumber },
      } = processCommand({
        isQuitConfirmation,
        inputValue,
        data,
        learningStage,
        selectedTask,
      });

      const localCommandStatus = getMessagePayload(
        ...(processedCommandStatus as [
          boolean,
          CommandType,
          string,
          LearningStage,
        ])
      );

      const type = processedCommandStatus[1];
      if (inputValue === "start") {
        if (localCommandStatus.showCommandList) {
          callbacks.updateAndInsertState(
            localCommandStatus.showCommandList,
            inputValue,
            data,
            3
          );
        }
      } else if (type === "SELECT") {
        callbacks.updateState(
          [
            {
              type: "default",
              showCommandList: localCommandStatus.showCommandList,
              message: inputValue,
            },
          ],
          type,
          5
        );
      } else {
        callbacks.addToHistory.apply(null, [
          inputValue,
          localCommandStatus.showCommandList,
        ]);
      }

      if (
        localCommandStatus.message === CONSOLE_CONFIG.confirmationMessages.quit
      )
        setIsQuitConfirmation(true);
      else if (
        localCommandStatus.message ===
          CONSOLE_CONFIG.confirmationMessages.quitConfirmed ||
        localCommandStatus.message ===
          CONSOLE_CONFIG.confirmationMessages.quitCancelled
      ) {
        setIsQuitConfirmation(false);
      }

      callbacks.handleCommandStatus(localCommandStatus);

      // Задача 3: Обновление состояния подтверждения выхода
      if (confirmationState !== null) {
        setIsQuitConfirmation(confirmationState);
      }

      // Задача 4: Обработка смены этапа обучения
      if (currentStage && isAllowed) {
        callbacks.onStageChange(currentStage);
        callbacks.handleSelectedTask(selectedTaskByNumber);
      }

      callbacks.handleInputChange("");
    }
  };

  return {
    handleKeyDown,
  };
};

export { useConsole };
