import { useRef } from "react";

const useScroll = () => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  return {
    scrollableDivRef,
    handleScrollToBottom: () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.scrollTop =
          scrollableDivRef.current.scrollHeight;
      }
    },
  };
};

export { useScroll };
