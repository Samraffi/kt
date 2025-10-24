import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";

import styles from "./LearningGraphNode.module.scss";

interface LearningGraphNodeProps {
  id: string;
  data: {
    label: string;
    description?: string;
    isCompleted?: boolean;
  };
  type?: "input" | "default" | "output" | "decision";
}

const LearningGraphNode: React.FC<LearningGraphNodeProps> = ({
  id,
  data,
  type,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getNodeClass = () => {
    if (data.isCompleted) return styles.nodeCompleted;
    if (isHovered) return styles.nodeHovered;

    switch (type) {
      case "input":
        return styles.nodeInput;
      case "output":
        return styles.nodeOutput;
      case "decision":
        return styles.nodeDecision;
      default:
        return styles.nodeDefault;
    }
  };

  return (
    <div
      className={getNodeClass()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: data.isCompleted ? "#4caf50" : "#555",
          width: "8px",
          height: "8px",
        }}
      />

      <div className={styles.nodeContent}>
        <div className={styles.nodeLabel}>{data.label}</div>

        {data.isCompleted && <div className={styles.completedIcon}>✅</div>}

        {isHovered && data.description && (
          <div className={styles.nodeTooltip}>
            <div className={styles.tooltipContent}>
              <div className={styles.tooltipTitle}>{data.label}</div>
              <div className={styles.tooltipDescription}>
                {data.description}
              </div>
            </div>
            <div className={styles.tooltipArrow}></div>
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: data.isCompleted ? "#4caf50" : "#555",
          width: "8px",
          height: "8px",
        }}
      />
    </div>
  );
};

export default LearningGraphNode;
