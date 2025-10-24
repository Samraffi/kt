import { translitMap } from "../constans/translit";

export const translit = (text: string): string => {
  return text
    .split("")
    .map((char) => translitMap[char as keyof typeof translitMap] ?? char)
    .join("");
};
