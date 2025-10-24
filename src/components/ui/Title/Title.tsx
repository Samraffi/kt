import { TitleProps } from "./Title.types";

import styles from "./Title.module.scss";

const Title: React.FC<TitleProps> = ({
  children,
  as: Tag = "h2",
  size = "medium",
  color = "primary",
  className,
}) => {
  return (
    <Tag
      className={`${styles.title}  ${styles[size]} ${styles[color]} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Title;
