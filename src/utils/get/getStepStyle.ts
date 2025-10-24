export const getStepStyle = (index: number, currentStep: number) => {
  if (index < currentStep) {
    return "completed";
  }
  if (index === currentStep) {
    return "current";
  }

  return "upcoming";
};
