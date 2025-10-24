import { UlProps } from "./Ul.types";

import styles from "./Ul.module.scss";

const Ul: React.FC<UlProps> = ({ variant, className = "", children }) => {
  return (
    <ul
      className={
        variant === "callout"
          ? `${styles.list} ${className}`
          : `${styles.ul} ${className}`
      }
    >
      {children}
    </ul>
  );
};

export default Ul;
