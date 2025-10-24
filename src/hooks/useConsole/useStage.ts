import { useState } from "react";

import { LearningStageHandler } from "../../components/ui/Console/types/hook.types";
import { LearningStage } from "../../components/ui/OutputConsole/OutputConsole.types";

const useStage = () => {
  const [learningStage, setLearningStage] = useState<LearningStage>("welcome");

  const onStageChange: LearningStageHandler = (stage) => {
    setLearningStage(stage);
  };

  return {
    learningStage,
    onStageChange,
  };
};

export { useStage };
