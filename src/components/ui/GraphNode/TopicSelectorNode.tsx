import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";

import { GRAPH_MENU_DATA } from "../../../constans/processes/graphMenu";

import styles from "./GraphNode.module.scss";

interface TopicSelectorNodeProps {
  id: string;
  data: {
    label: string;
    description?: string;
    onTopicSelect?: (topic: string, relatedCommands: string[]) => void;
  };
}

const TopicSelectorNode: React.FC<TopicSelectorNodeProps> = ({ id, data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const availableTopics = GRAPH_MENU_DATA.filter((item) => item.topic !== null);

  const handleTopicSelect = (topic: string, relatedCommands: string[]) => {
    setSelectedTopic(topic);
    setIsDropdownOpen(false);
    if (data.onTopicSelect) {
      data.onTopicSelect(topic, relatedCommands);
    }
  };

  return (
    <div className={styles.topicSelectorNode}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
      />

      <div className={styles.nodeContent}>
        <div className={styles.nodeLabel}>
          {selectedTopic ? `Выбрано: ${selectedTopic}` : data.label}
        </div>

        <div className={styles.topicDropdown}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`${styles.dropdownButton} ${isDropdownOpen ? styles.open : ""}`}
          >
            <span>{selectedTopic ? "Изменить тему" : "Выберите тему"}</span>
            <span className={styles.arrow}>▼</span>
          </button>

          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {availableTopics.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleTopicSelect(item.topic!, item.relatedCommands)
                  }
                  className={styles.dropdownItem}
                >
                  {item.topic}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedTopic && (
          <div className={styles.selectedTopicInfo}>
            <div className={styles.topicDescription}>
              Тема выбрана: {selectedTopic}
            </div>
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default TopicSelectorNode;
