import { HexagonBoxProps } from "./HexagonBox.types";

import styles from "./HexagonBox.module.scss";

const HexagonBox: React.FC<HexagonBoxProps> = ({
  children,
  className = "",
  borderColor,
  fill = false,
}) => {
  return (
    <div
      className={`${styles.hexagon} ${
        fill ? styles[`${borderColor}__fill`] : styles[borderColor]
      }  ${className}`}
    >
      <svg viewBox="0 0 231 206" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M179.684 12.2347L179.685 12.2353L226.181 92.7642C229.837 99.1008 229.837 106.899 226.181 113.236L179.685 193.765L179.684 193.765C176.029 200.101 169.269 204 161.958 204H68.9647C61.6535 204 54.8935 200.101 51.2385 193.765L51.2381 193.765L4.74182 113.236C4.74171 113.236 4.74159 113.235 4.74147 113.235C1.08617 106.899 1.08618 99.1011 4.74147 92.7648C4.74159 92.7646 4.74171 92.7644 4.74182 92.7642L51.2381 12.2353L51.2385 12.2347C54.8935 5.89935 61.6535 2 68.9647 2H161.958C169.269 2 176.029 5.89935 179.684 12.2347Z"
          className={styles.borderColor}
          strokeWidth="4"
        />
      </svg>

      <div className={styles.hexagon__content}>{children}</div>
    </div>
  );
};

export default HexagonBox;
