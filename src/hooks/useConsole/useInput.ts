import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | string) => {
    setInputValue(typeof e !== "string" ? e.target.value : "");
  };

  return {
    inputValue,
    handleInputChange,
  };
};

export { useInput };
