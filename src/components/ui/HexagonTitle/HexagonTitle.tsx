import HexagonMark from "../HexagonMark/HexagonMark";
import Title from "../Title/Title";
import { HexagonTitleProps } from "./HexagonTitle.types";

import styles from "./HexagonTitle.module.scss";

const HexagonTitle: React.FC<HexagonTitleProps> = ({
  children,
  color,
  className,
}) => {
  return (
    <div className={styles.wrapper}>
      <HexagonMark color={color} />
      <Title className={className} size="small">
        {children}
      </Title>
    </div>
  );
};

export default HexagonTitle;
