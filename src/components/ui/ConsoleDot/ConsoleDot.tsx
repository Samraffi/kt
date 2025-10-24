import clsx from "clsx";

import { ConsoleDotProps } from "./ConsoleDot.types";

import styles from "./ConsoleDot.module.scss";

const ConsoleDot = ({ className }: ConsoleDotProps) => {
  return <span className={clsx(styles.dot, styles[className])} />;
};

export default ConsoleDot;
