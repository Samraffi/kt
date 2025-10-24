import { INITIAL_COMMAND_STATUS } from "../../constans/console";
import { LEARNING_TASKS } from "../../constans/processes/learningTasks";
import { useConsole } from "../../hooks/useConsole";
import { useCommandHistory } from "../../hooks/useConsole/useCommandHistory";
import { useConsoleMenu } from "../../hooks/useConsole/useConsoleMenu";
import { useCopy } from "../../hooks/useConsole/useCopy";
import { useInput } from "../../hooks/useConsole/useInput";
import { useStage } from "../../hooks/useConsole/useStage";
import { useStatus } from "../../hooks/useConsole/useStatus";

import Card from "../Card/Card";
import H2 from "../H2/H2";
import { Console } from "../ui";

const CodingPractice = () => {
  const { selectedTask, handleSelectedTask } = useConsoleMenu(
    LEARNING_TASKS[0]
  );
  const { learningStage, onStageChange } = useStage();
  const { inputValue, handleInputChange } = useInput();
  const { commandHistory, updateState, updateAndInsertState, addToHistory } =
    useCommandHistory();
  const { commandStatus, handleCommandStatus } = useStatus(
    INITIAL_COMMAND_STATUS
  );
  const { handleCopy } = useCopy();

  const { handleKeyDown } = useConsole(
    LEARNING_TASKS,
    selectedTask,
    {
      inputValue,
      learningStage,
    },
    {
      handleSelectedTask,
      onStageChange,
      handleInputChange,
      addToHistory,
      updateState,
      updateAndInsertState,
      handleCommandStatus,
    }
  );

  return (
    <Card>
      <H2>"Песочница команд"</H2>
      <Console
        progressData={{ selectedTask, learningStage }}
        inputProps={{
          inputValue,
          handleInputChange,
          handleKeyDown,
        }}
        historyState={{ commandHistory, commandStatus }}
        handleCopy={handleCopy}
      />
    </Card>
  );
};

export default CodingPractice;
