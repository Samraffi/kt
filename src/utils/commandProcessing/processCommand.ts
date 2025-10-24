import { ProcessCommand } from "../../components/ui/Console/types/process.types";
import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";
import { commandParser } from "../../utils/commandParser";

import { checkCommandPermission } from "./checkCommandPermission";
import { stageMap } from "./stageMap";

const processCommand: ProcessCommand = ({
  inputValue,
  isQuitConfirmation,
  data,
  learningStage,
  selectedTask,
}) => {
  const type = commandParser(inputValue, data, selectedTask).type;
  const taskNumber = parseInt(inputValue.trim()) - 1;
  const taskName =
    type === "SELECT" ? data[taskNumber].task : selectedTask.task;

  return {
    isAllowed: checkCommandPermission(type, learningStage),
    process: {
      processedCommandStatus: [
        isQuitConfirmation,
        type,
        taskName || "",
        learningStage,
      ],
      currentStage: stageMap()[
        type as "START" | "SELECT" | "VALIDATE"
      ] as LearningStage,
    },
    confirmation: {
      confirmationState: null,
      selectedTaskByNumber: type === "SELECT" ? data[taskNumber] : null,
    },
  };
};

export { processCommand };
