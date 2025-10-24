import H2 from "../H2/H2";
import H3 from "../H3/H3";
import SimpleList from "../SimpleList/SimpleList";
import { SimpleSectionProps } from "./SimpleSection.types";

import styles from "./SimpleSection.module.scss";

const SimpleSection = ({
  variant = "section",
  tag,
  title,
  data,
}: SimpleSectionProps) => {
  let result = <H2>{title}</H2>;
  if (tag === "h3") {
    result = <H3>{title}</H3>;
  }

  return (
    <div
      className={variant === "subSection" ? styles.subSection : styles.section}
    >
      {result}
      <SimpleList data={data} />
    </div>
  );
};

export default SimpleSection;
