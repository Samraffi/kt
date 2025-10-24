import { useCallback, useState } from "react";

import { CommandStatusType } from "../../components/ui/OutputConsole/OutputConsole.types";

const useStatus = (initialData: CommandStatusType) => {
  const [commandStatus, setCommandStatus] = useState(initialData);

  const handleCommandStatus = useCallback(
    (option: CommandStatusType | null) => {
      option && setCommandStatus(option);
    },
    []
  );

  return {
    commandStatus,
    handleCommandStatus,
  };
};

export { useStatus };
