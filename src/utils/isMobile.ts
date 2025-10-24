export const isMobile = (): boolean => {
  return /Android|iPhone/i.test(navigator.userAgent);
};
