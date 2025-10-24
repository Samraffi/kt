import { HexagonTitle } from "../../ui";

import { DescriptionProps } from "./Description.types";

import styles from "./Description.module.scss";

export const Description: React.FC<DescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.description}>
      <HexagonTitle color="green">{title}</HexagonTitle>
      <p>{description}</p>
    </div>
  );
};
