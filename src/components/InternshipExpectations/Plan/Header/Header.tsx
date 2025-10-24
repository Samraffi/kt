import { Button, Image } from "../../../ui";

import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
  expandedTitle: string | null;
  handleExpand: (title: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  expandedTitle,
  handleExpand,
}) => {
  const isExpanded = title === expandedTitle;
  return (
    <>
      <div className={styles.accordion_title}>{title}</div>
      <Button
        className={`${styles.accordion_button} ${isExpanded ? `${styles.close}` : ""}`}
        onClick={() => handleExpand(title)}
      >
        <Image src="/image/Plus.svg" alt="more" />
      </Button>
    </>
  );
};
