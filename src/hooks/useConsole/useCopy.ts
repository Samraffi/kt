import { ClipboardEvent, useCallback } from "react";

const useCopy = () => {
  const handleCopy = useCallback((event: ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();

    console.log("Копипаст запрещен!");
  }, []);

  return {
    handleCopy,
  };
};

export { useCopy };
