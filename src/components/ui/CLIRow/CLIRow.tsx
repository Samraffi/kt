import { CLIRowProps } from "./CLIRow.types";

import styles from "./CLIRow.module.scss";

const CLIRow = ({ text, className, children }: CLIRowProps) => {
  return (
    <div className={styles.promptRow}>
      <p className={className ? styles[className] : ""}>
        <span className={styles.prompt}>{text}</span>
        <>{children}</>
      </p>
    </div>
  );
};

export default CLIRow;
