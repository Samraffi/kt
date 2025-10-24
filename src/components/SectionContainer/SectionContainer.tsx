import H2 from "../H2/H2";
import H3 from "../H3/H3";
import { SectionContainerProps } from "./SectionContainer.types";

import styles from "./SectionContainer.module.scss";

const SectionContainer = ({
  variant = "section",
  tag,
  title,
  testId,
  children,
}: SectionContainerProps) => {
  let result = <H2>{title}</H2>;
  if (tag === "h3") {
    result = <H3>{title}</H3>;
  }

  return (
    <div
      className={variant === "subSection" ? styles.subSection : styles.section}
      data-testid={testId ? testId : null}
    >
      {result}
      {children}
    </div>
  );
};

export default SectionContainer;
