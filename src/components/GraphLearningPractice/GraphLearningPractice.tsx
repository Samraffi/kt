import React, { useCallback, useState } from "react";

import { GRAPH_TOPICS_DATA } from "../../constans/graph";

import LearningGraph from "../ui/LearningGraph/LearningGraph";
import { LearningStage } from "../ui/OutputGraphPanel/OutputGraphPanel.types";
import TopicSelector from "../ui/TopicSelector/TopicSelector";
import { GraphLearningPracticeProps } from "./GraphLearningPractice.types";

import styles from "./GraphLearningPractice.module.scss";

const GraphLearningPractice = ({ title }: GraphLearningPracticeProps) => {
  // State management
  const [learningStage, setLearningStage] = useState<LearningStage>("welcome");
  const [selectedTopic, setSelectedTopic] = useState(GRAPH_TOPICS_DATA[0]);

  // Callbacks for the learning system
  const callbacks = {
    handleSelectedTopic: useCallback((topic: any) => {
      if (topic) {
        setSelectedTopic(topic);
      }
    }, []),
  };

  // Graph interaction callbacks
  const handleNodeCreate = useCallback((nodeId: string, nodeData: any) => {
    console.log("Node created:", nodeId, nodeData);
  }, []);

  const handleEdgeCreate = useCallback((edgeId: string, edgeData: any) => {
    console.log("Edge created:", edgeId, edgeData);
  }, []);

  const handleGraphValidate = useCallback((isValid: boolean) => {
    console.log("Graph validation:", isValid);
    if (isValid) {
      setLearningStage("validation");
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.statusIndicator}>
          <span className={styles.stageBadge}>
            {learningStage === "welcome" && "🎯 Приветствие"}
            {learningStage === "topic_selection" && "📋 Выбор темы"}
            {learningStage === "graph_interaction" &&
              "🔗 Взаимодействие с графом"}
            {learningStage === "validation" && "✅ Проверка результата"}
          </span>
        </div>
      </div>

      <div className={styles.content}>
        {/* Graph Visualization Panel */}
        <div className={styles.graphPanel}>
          <LearningGraph
            selectedTopic={selectedTopic.topic}
            learningStage={learningStage}
            onNodeCreate={handleNodeCreate}
            onEdgeCreate={handleEdgeCreate}
            onGraphValidate={handleGraphValidate}
          />
        </div>

        {/* Topic Selection Panel */}
        <div className={styles.topicPanel}>
          <TopicSelector
            selectedTopic={selectedTopic}
            onTopicSelect={callbacks.handleSelectedTopic}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphLearningPractice;
