import Typography from "../Typography/Typography";
import { LabelValuePairProps } from "./LabelValuePair.types";

import styles from "./LabelValuePair.module.scss";

const LabelValuePair = ({
  align,
  className,
  text,
  strongText,
}: LabelValuePairProps) => {
  let baseClassName = "";
  if (align === "center") {
    baseClassName = baseClassName.concat("", styles.center);
  }

  if (className) {
    baseClassName = baseClassName.concat(" ", styles[className]);
  }

  return (
    <Typography
      className={`${styles.labelValuePair} ${baseClassName}`}
      text={text}
      strongText={strongText}
    />
  );
};

export default LabelValuePair;
