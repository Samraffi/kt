import ProgressStep from "../ProgressStep/ProgressStep";
import { ProgressIndicatorProps } from "./ProgressIndicator.types";

import styles from "./ProgressIndicator.module.scss";

const ProgressIndicator = ({
  progress = 0,
  steps = [],
  currentStep = 0,
  showPercentage = true,
  animated = true,
}: ProgressIndicatorProps) => {
  const percentage = Math.min(100, Math.max(0, progress));

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressWrapper}>
        <div className={styles.progressInfo}>
          <span className={styles.currentStep}>
            Шаг {currentStep + 1} из {steps.length}
          </span>
          <span className={styles.percentage}>{Math.round(percentage)}%</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={`${styles.progressFill} ${styles.animated}`}
            style={{ width: `${percentage}%` }}
          />
          <div
            className={styles.progressShine}
            style={{ left: `${Math.max(0, percentage - 10)}%` }}
          />
        </div>
      </div>

      {steps.length > 0 && (
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <ProgressStep
              key={index}
              currentStep={currentStep}
              step={step}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;
