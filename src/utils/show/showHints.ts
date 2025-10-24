import { ShowHintsParams } from "../../components/ui/OutputConsole/OutputConsole.types";

import { showTheory } from "./showTheory";

export const showHints: ShowHintsParams = (learningStage, type, inputValue) => {
  if (
    !showTheory(learningStage, type, inputValue) &&
    learningStage !== "welcome" &&
    learningStage !== "menu"
  ) {
    return Boolean(inputValue.length > 0 || type !== "error");
  }

  return false;
};
