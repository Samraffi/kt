import type { CardProps } from "./Card.types";

import styles from "./Card.module.scss";

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
