import type { H1Props } from "./H1.types";

import styles from "./H1.module.scss";

const H1 = ({ className, children }: H1Props) => {
  let baseClassName = styles.mainTitle;

  if (className) {
    baseClassName = baseClassName.concat(" ", styles[className]);
  }

  return (
    <h1 className={baseClassName} data-testid="main-title">
      {children}
    </h1>
  );
};

export default H1;
