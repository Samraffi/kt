export const showCalculateProgress = (stage: string): number => {
  const progressMap: Record<string, number> = {
    welcome: 25,
    menu: 50,
    task_selected: 75,
    command_input: 100,
  };
  return progressMap[stage] || 0;
};
