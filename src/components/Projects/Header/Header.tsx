import { Button, Image, Title } from "../../ui";

import { HeaderProps } from "./Header.types";

import styles from "./Header.module.scss";

export const Header: React.FC<HeaderProps> = ({
  title,
  descr,
  expandedTitle,
  onClick,
}) => {
  const isExpanded = title === expandedTitle;
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Image src="/image/projectDilijan.png" alt="project" />
        <div className={styles.info} onClick={onClick}>
          <Title size="small">{title}</Title>
          <p>{descr}</p>
        </div>
      </div>
      <Button
        className={`${styles.button} ${isExpanded ? `${styles.close}` : ""}`}
        onClick={onClick}
      >
        <Image src="/image/Arrow.svg" alt="more" />
      </Button>
    </div>
  );
};
