import { getStepStyle } from "../../../utils/get/getStepStyle";

import { ProgressStepProps } from "./ProgressStep.types";

import styles from "./ProgressStep.module.scss";

const ProgressStep = ({ currentStep = 0, index, step }: ProgressStepProps) => {
  const className = getStepStyle(index, currentStep);

  return (
    <div className={`${styles.step} ${styles[className]}`}>
      <div className={styles.stepIndicator}>
        {index < currentStep ? (
          <span className={styles.stepIcon}>✓</span>
        ) : (
          <span className={styles.stepNumber}>{index + 1}</span>
        )}
      </div>
      <span className={styles.stepLabel}>{step}</span>
    </div>
  );
};

export default ProgressStep;
