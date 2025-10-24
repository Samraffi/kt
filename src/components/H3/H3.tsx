import type { H3Props } from "./H3.types";

import styles from "./H3.module.scss";

const H3 = ({ className, children }: H3Props) => {
  return <h3 className={className ? styles[className] : ""}>{children}</h3>;
};

export default H3;
