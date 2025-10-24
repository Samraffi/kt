import { useCallback, useState } from "react";

import { TaskData } from "../../components/ui/OutputConsole/OutputConsole.types";

const useConsoleMenu = (initialData: TaskData) => {
  const [selectedTask, setSelectedTask] = useState(initialData);

  const handleSelectedTask = useCallback((option: TaskData | null) => {
    option && setSelectedTask(option);
  }, []);

  return {
    selectedTask,
    handleSelectedTask,
  };
};

export { useConsoleMenu };
