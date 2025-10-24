export const getCurrentStepIndex = (stage: string): number => {
  const stepMap: Record<string, number> = {
    welcome: 0,
    menu: 1,
    task_selected: 2,
    command_input: 3,
  };
  return stepMap[stage] || 0;
};
