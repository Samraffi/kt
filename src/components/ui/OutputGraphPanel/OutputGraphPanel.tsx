import clsx from "clsx";

import {
  calculateProgress,
  getCurrentStepIndex,
  showHints,
  showTheory,
} from "../../../utils/outputGraphPanel";

import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import { OutputGraphPanelProps } from "./OutputGraphPanel.types";

import styles from "./OutputGraphPanel.module.scss";

const OutputGraphPanel = ({
  learningStage,
  selectedTopic: { topic, description, workflow, benefits, hints },
  type,
  message,
  inputValue = "",
}: OutputGraphPanelProps) => {
  return (
    <div className={clsx(styles.rightColumn, styles.scaledContent)}>
      <div className={styles.stageIndicator}>
        <h4 className={styles.stageTitle}>Этап обучения:</h4>
        <div className={`${styles.stageBadge} ${styles[learningStage]}`}>
          {learningStage === "welcome" && "🎯 Приветствие"}
          {learningStage === "topic_selection" && "📋 Выбор темы"}
          {learningStage === "graph_interaction" &&
            "🔗 Взаимодействие с графом"}
          {learningStage === "validation" && "✅ Проверка результата"}
        </div>
      </div>

      <div className={styles.topicSection}>
        <h3 className={styles.topicTitle}>Тема:</h3>
        <p className={styles.topicText}>{topic}</p>
        <p className={styles.topicDescription}>{description}</p>
      </div>

      <ProgressIndicator
        progress={calculateProgress(learningStage)}
        steps={[
          "Знакомство с графом",
          "Выбор темы",
          "Создание узлов и связей",
          "Проверка результата",
        ]}
        currentStep={getCurrentStepIndex(learningStage)}
        animated={true}
      />

      <div className={styles.contentStateIndicator}>
        {showTheory(type, inputValue, description) && (
          <div className={styles.stateBadge}>
            <span className={styles.stateIcon}>📚</span>
            <span className={styles.stateText}>Режим обучения</span>
          </div>
        )}
        {showHints(type, inputValue) &&
          !showTheory(type, inputValue, description) && (
            <div className={styles.stateBadge}>
              <span className={styles.stateIcon}>🎯</span>
              <span className={styles.stateText}>Режим подсказок</span>
            </div>
          )}
      </div>

      {showHints(type, inputValue) && hints.length > 0 && (
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

      {showTheory(type, inputValue, description) && (
        <div className={`${styles.theorySection} ${styles.contentTheory}`}>
          <div className={styles.theoryContainer}>
            <h4 className={styles.theoryTitle}>💡 Теория темы:</h4>
            <div className={styles.theoryContent}>
              <h5>Описание:</h5>
              <p>{description}</p>

              <h5>Рабочий процесс:</h5>
              <ul>
                {workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>

              <h5>Преимущества:</h5>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className={styles.fixed}>
        <div className={styles.feedbackSection}>
          <h4 className={styles.feedbackTitle}>Статус действия:</h4>
          <div className={`${styles.statusContainer} ${styles[type]}`}>
            <span className={styles.statusIcon}>
              {type === "success" ? "✅" : type === "error" ? "❌" : "⏳"}
            </span>
            <p className={styles.feedbackText}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputGraphPanel;
