import { showHints } from "../../../utils/show/showHints";
import { showTheory } from "../../../utils/show/showTheory";

import { StateIndicatorProps } from "./StateIndicator.types";

import styles from "./StateIndicator.module.scss";

const StateIndicator = ({
  learningStage,
  type,
  inputValue,
}: StateIndicatorProps) => {
  return (
    <div className={styles.contentStateIndicator}>
      {showTheory(learningStage, type, inputValue) && (
        <div className={styles.stateBadge}>
          <span className={styles.stateIcon}>📚</span>
          <span className={styles.stateText}>Режим обучения</span>
        </div>
      )}
      {showHints(learningStage, type, inputValue) && (
        <div className={styles.stateBadge}>
          <span className={styles.stateIcon}>🎯</span>
          <span className={styles.stateText}>Режим подсказок</span>
        </div>
      )}
    </div>
  );
};

export default StateIndicator;
