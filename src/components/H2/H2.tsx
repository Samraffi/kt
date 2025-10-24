import type { H2Props } from "./H2.types";

import styles from "./H2.module.scss";

const H2 = ({ children }: H2Props) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default H2;
