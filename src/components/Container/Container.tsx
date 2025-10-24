import clsx from "clsx";

import { ContainerProps } from "./Container.types";

import styles from "./Container.module.scss";

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={
        className ? clsx(styles[className], styles.container) : styles.container
      }
    >
      {children}
    </div>
  );
};

export default Container;
