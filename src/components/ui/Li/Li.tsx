import { LiProps } from "./Li.types";

import styles from "./Li.module.scss";

const Li: React.FC<LiProps> = ({
  variant,
  className = "",
  children,
  onClick,
}) => {
  return (
    <li
      className={
        variant === "callout" ? `${styles.listItem} ${className}` : className
      }
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default Li;
