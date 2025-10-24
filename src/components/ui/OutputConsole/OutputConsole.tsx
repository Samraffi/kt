import clsx from "clsx";

import { PROGRESS_STEPS, STAGE_LABELS } from "../../../constans/console";
import { getCurrentStepIndex } from "../../../utils/get/getCurrentStepIndex";
import { getStatusIcon } from "../../../utils/get/getStatusIcon";
import { showCalculateProgress } from "../../../utils/show/showCalculateProgress";
import { showHints } from "../../../utils/show/showHints";
import { showTheory } from "../../../utils/show/showTheory";

import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import StateIndicator from "../StateIndicator/StateIndicator";
import { OutputConsoleProps } from "./OutputConsole.types";

import styles from "./OutputConsole.module.scss";

const OutputConsole = ({
  learningStage,
  selectedTask: { task, hints, theory },
  type,
  message,
  inputValue = "",
}: OutputConsoleProps) => {
  return (
    <div className={clsx(styles.rightColumn, styles.scaledContent)}>
      <div className={styles.stageIndicator}>
        <h4 className={styles.stageTitle}>Этап обучения:</h4>
        <div className={`${styles.stageBadge} ${styles[learningStage]}`}>
          {learningStage && STAGE_LABELS[learningStage]}
        </div>
      </div>

      <div className={styles.taskSection}>
        <h3 className={styles.taskTitle}>Задача:</h3>
        <p className={styles.taskText}>{task}</p>
      </div>

      <ProgressIndicator
        progress={showCalculateProgress(learningStage)}
        steps={PROGRESS_STEPS}
        currentStep={getCurrentStepIndex(learningStage)}
        animated={true}
      />

      <StateIndicator
        learningStage={learningStage}
        type={type}
        inputValue={inputValue}
      />

      {showHints(learningStage, type, inputValue) && hints.length > 0 && (
        <div className={`${styles.hintsSection} ${styles.contentHint}`}>
          <h4 className={styles.hintsTitle}>Подсказки:</h4>
          <ul className={styles.hintsList}>
            {hints.map((hint, index) => (
              <li key={index} className={styles.hintItem}>
                {hint}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showTheory(learningStage, type, inputValue) && (
        <div className={`${styles.theorySection} ${styles.contentTheory}`}>
          <div className={styles.theoryContainer}>
            <h4 className={styles.theoryTitle}>💡 Теория команды:</h4>
            <div className={styles.theoryContent}>{theory}</div>
          </div>
        </div>
      )}

      <div className={styles.fixed}>
        <div className={styles.feedbackSection}>
          <h4 className={styles.feedbackTitle}>Статус команды:</h4>
          <div className={`${styles.statusContainer} ${styles[type]}`}>
            <span className={styles.statusIcon}>{getStatusIcon(type)}</span>
            <p className={styles.feedbackText}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputConsole;
