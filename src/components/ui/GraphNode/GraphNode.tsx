import { Handle, Position } from "@xyflow/react";
import React, { useState } from "react";

import styles from "./GraphNode.module.scss";

interface GraphNodeProps {
  id: string;
  data: {
    label: string;
    description?: string;
  };
  type?: "input" | "default" | "output" | "decision";
}

const GraphNode: React.FC<GraphNodeProps> = ({ id, data, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getNodeClass = () => {
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
        style={{ background: "#555" }}
      />

      <div className={styles.nodeContent}>
        <div className={styles.nodeLabel}>{data.label}</div>

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
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default GraphNode;
