import React from "react";

import { GRAPH_TOPICS_DATA } from "../../../constans/graph";

import { SelectedTopic } from "../OutputGraphPanel/OutputGraphPanel.types";

import styles from "./TopicSelector.module.scss";

interface TopicSelectorProps {
  selectedTopic: SelectedTopic;
  onTopicSelect: (topic: SelectedTopic) => void;
}

const TopicSelector = ({
  selectedTopic,
  onTopicSelect,
}: TopicSelectorProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Выберите тему для изучения</h2>
        <p className={styles.subtitle}>
          Каждая тема содержит интерактивные карточки, которые вы можете
          соединить самостоятельно
        </p>
      </div>

      {/* Selected Topic Info - Moved to top for visibility */}
      <div className={styles.selectedTopicInfo}>
        <h3 className={styles.infoTitle}>
          Выбранная тема: {selectedTopic.topic}
        </h3>
        <p className={styles.infoDescription}>{selectedTopic.description}</p>

        <div className={styles.workflowPreview}>
          <h4>Шаги процесса:</h4>
          <div className={styles.stepsList}>
            {selectedTopic.workflow.map((step, index) => (
              <div key={index} className={styles.stepItem}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <span className={styles.stepText}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.benefitsPreview}>
          <h4>Преимущества:</h4>
          <ul className={styles.benefitsList}>
            {selectedTopic.benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.topicsGrid}>
        {GRAPH_TOPICS_DATA.map((topic) => (
          <div
            key={topic.topic}
            className={`${styles.topicCard} ${
              selectedTopic.topic === topic.topic ? styles.selected : ""
            }`}
            onClick={() => onTopicSelect(topic)}
          >
            <div className={styles.topicIcon}>
              {topic.topic === "Kanban Board" && "📋"}
              {topic.topic === "Scrum Board" && "🏃"}
              {topic.topic === "Git Flow" && "🌿"}
              {topic.topic === "CI/CD Pipeline" && "🔄"}
              {topic.topic === "Testing Strategy" && "🧪"}
              {topic.topic === "Code Review Process" && "👀"}
            </div>

            <h3 className={styles.topicTitle}>{topic.topic}</h3>
            <p className={styles.topicDescription}>{topic.description}</p>

            <div className={styles.topicStats}>
              <span className={styles.stepCount}>
                {topic.workflow.length} шагов
              </span>
              <span className={styles.benefitCount}>
                {topic.benefits.length} преимуществ
              </span>
            </div>

            {selectedTopic.topic === topic.topic && (
              <div className={styles.selectedIndicator}>
                <span className={styles.checkmark}>✓</span>
                <span>Выбрано</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;
