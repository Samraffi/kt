import type { BoxProps } from "./Box.types";

import styles from "./Box.module.scss";

const Box = ({ children }: BoxProps) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
