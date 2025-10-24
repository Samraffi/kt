import type { TypographyProps } from "./Typography.types";

import styles from "./Typography.module.scss";

const Typography = ({ className = "", text, strongText }: TypographyProps) => {
  const arrClassNames = className?.split(" ");

  if (className) {
    for (const index in arrClassNames) {
      arrClassNames[index] = styles[arrClassNames[index]];
    }
  }

  return (
    <p className={arrClassNames?.join(" ")}>
      {strongText && <strong>{strongText}:</strong>} {text}
    </p>
  );
};

export default Typography;
