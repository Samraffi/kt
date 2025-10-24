import { ShowTheoryParams } from "../../components/ui/OutputConsole/OutputConsole.types";

export const showTheory: ShowTheoryParams = (
  learningStage,
  type,
  inputValue
) => {
  return Boolean(
    learningStage !== "welcome" &&
      learningStage !== "menu" &&
      type === "error" &&
      inputValue.length === 0
  );
};
