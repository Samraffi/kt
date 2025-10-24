import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "@xyflow/react";
import React, { useEffect, useRef, useState } from "react";

import styles from "./GraphEdge.module.scss";

export type EdgeValidationState = "correct" | "incorrect" | "unchecked";

interface GraphEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: any;
  targetPosition: any;
  style?: React.CSSProperties;
  data?: {
    label?: string;
    predefinedLabels?: string[];
    onLabelChange?: (edgeId: string, label: string) => void;
    onOpenDropdown?: (
      edgeId: string,
      position: { x: number; y: number }
    ) => void;
    validationState?: EdgeValidationState;
    validationHint?: string;
  };
}

const GraphEdge: React.FC<GraphEdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  data,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [showHint, setShowHint] = useState(false);
  const hintRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentLabel = data?.label || "Новая связь";
  const onOpenDropdown = data?.onOpenDropdown;
  const validationState = data?.validationState || "unchecked";
  const validationHint = data?.validationHint;

  // Close hint when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hintRef.current && !hintRef.current.contains(event.target as Node)) {
        setShowHint(false);
      }
    };

    if (showHint) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHint]);

  const handleLabelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (onOpenDropdown && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const position = {
        x: rect.left + rect.width / 2,
        y: rect.bottom + 10,
      };
      onOpenDropdown(id, position);
    }
  };

  // Get edge color based on validation state
  const getEdgeColor = () => {
    switch (validationState) {
      case "correct":
        return "#4caf50"; // Green
      case "incorrect":
        return "#f44336"; // Red
      default:
        return "#555"; // Default gray
    }
  };

  // Get edge style with validation colors
  const edgeStyle = {
    ...style,
    stroke: getEdgeColor(),
    strokeWidth: validationState !== "unchecked" ? 3 : 2,
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={edgeStyle} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <div className={styles.edgeDropdown}>
            <button
              ref={buttonRef}
              onClick={handleLabelClick}
              className={`${styles.dropdownButton} ${styles[validationState]}`}
            >
              <span>{currentLabel}</span>
              <span className={styles.arrow}>▼</span>
              {validationState === "correct" && (
                <span className={styles.validationIcon}>✓</span>
              )}
              {validationState === "incorrect" && (
                <span className={styles.validationIcon}>✗</span>
              )}
            </button>

            {/* Show hint for incorrect connections */}
            {validationState === "incorrect" && validationHint && (
              <div className={styles.hintContainer} ref={hintRef}>
                <button
                  className={styles.hintButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowHint(!showHint);
                  }}
                  title="Показать подсказку"
                >
                  💡
                </button>
                {showHint && (
                  <div className={styles.hintTooltip}>
                    <div className={styles.hintTitle}>Подсказка:</div>
                    <div className={styles.hintText}>{validationHint}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default GraphEdge;
