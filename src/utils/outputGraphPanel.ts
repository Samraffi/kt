import {
  ShowHintsParams,
  ShowTheoryParams,
} from "../components/ui/OutputGraphPanel/OutputGraphPanel.types";

export const showHints: ShowHintsParams = (type, inputValue) => {
  return inputValue.length > 0 || type !== "error";
};

export const showTheory: ShowTheoryParams = (type, inputValue, theory) => {
  return (
    type === "error" &&
    inputValue.length === 0 &&
    theory &&
    theory.trim() !== ""
  );
};

export const calculateProgress = (stage: string): number => {
  const progressMap: Record<string, number> = {
    welcome: 25,
    topic_selection: 50,
    graph_interaction: 75,
    validation: 100,
  };
  return progressMap[stage] || 0;
};

export const getCurrentStepIndex = (stage: string): number => {
  const stepMap: Record<string, number> = {
    welcome: 0,
    topic_selection: 1,
    graph_interaction: 2,
    validation: 3,
  };
  return stepMap[stage] || 0;
};
