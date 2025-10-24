import { useRef, useState } from "react";

const useFocus = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    focus,
    inputRef,
    focusInput: () => {
      if (inputRef.current) {
        setFocus(true);
        inputRef.current.focus();
      }
    },
    blurInput: () => {
      if (inputRef.current) {
        setFocus(false);
        inputRef.current.blur();
      }
    },
  };
};

export { useFocus };
