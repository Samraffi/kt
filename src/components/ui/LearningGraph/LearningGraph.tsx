import {
  Edge,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";

import { CONNECTION_TYPES, GRAPH_TOPICS_DATA } from "../../../constans/graph";
import {
  GraphValidationResult,
  validateGraph,
} from "../../../utils/graphValidation/validateGraph";

import ConnectionDropdown from "../ConnectionDropdown/ConnectionDropdown";
import GraphControls from "../GraphControls/GraphControls";
import GraphEdge from "../GraphEdge/GraphEdge";
import GraphNode from "../GraphNode/GraphNode";
import LearningGraphNode from "../LearningGraphNode/LearningGraphNode";

import styles from "./LearningGraph.module.scss";
import "@xyflow/react/dist/style.css";

interface LearningGraphProps {
  className?: string;
  selectedTopic: string;
  learningStage: string;
  onNodeCreate?: (nodeId: string, nodeData: any) => void;
  onEdgeCreate?: (edgeId: string, edgeData: any) => void;
  onGraphValidate?: (isValid: boolean) => void;
}

const LearningGraph = ({
  className,
  selectedTopic,
  learningStage,
  onNodeCreate,
  onEdgeCreate,
  onGraphValidate,
}: LearningGraphProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLearningMode] = useState(true);
  const [showConnectionDropdown, setShowConnectionDropdown] = useState(false);
  const [connectionPosition, setConnectionPosition] = useState({ x: 0, y: 0 });
  const [pendingConnection, setPendingConnection] = useState<any>(null);
  const [graphContainerRef, setGraphContainerRef] =
    useState<HTMLDivElement | null>(null);
  const [validationResult, setValidationResult] =
    useState<GraphValidationResult | null>(null);
  const [showValidationFeedback, setShowValidationFeedback] = useState(false);
  const [editingEdgeId, setEditingEdgeId] = useState<string | null>(null);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  // Get topic data
  const topicData = GRAPH_TOPICS_DATA.find((t) => t.topic === selectedTopic);

  // Initialize nodes based on selected topic
  useEffect(() => {
    if (!topicData) return;

    const initialNodes: Node[] = [];
    const initialEdges: Edge[] = [];

    // Create workflow nodes as cards (no connections initially)
    topicData.workflow.forEach((step, index) => {
      const nodeId = `step-${index}`;

      // Extract short title and full description
      // Format: "Title - Short description. Long detailed description..."
      const firstPeriodIndex = step.indexOf(". ");
      const shortLabel =
        firstPeriodIndex > 0
          ? step.substring(0, firstPeriodIndex + 1) // Include the period
          : step;
      const fullDescription = step;

      initialNodes.push({
        id: nodeId,
        type: "learning",
        data: {
          label: shortLabel,
          description: fullDescription,
          isCompleted: false,
          stepNumber: index + 1,
        },
        position: {
          x: 50 + (index % 3) * 250,
          y: 100 + Math.floor(index / 3) * 200,
        },
      });
    });

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [selectedTopic, topicData, setNodes, setEdges]);

  // Validate graph completion
  useEffect(() => {
    if (learningStage === "validation") {
      const hasConnections = edges.length > 0;
      const isValid = hasConnections;
      onGraphValidate?.(isValid);
    }
  }, [edges, learningStage, onGraphValidate]);

  const onConnect = (params: any) => {
    if (!isLearningMode) return;

    // Store the connection parameters and show dropdown
    setPendingConnection(params);

    // Use the last tracked mouse position for dropdown placement
    // This will be where the user released the connection
    setConnectionPosition({
      x: lastMousePosition.x,
      y: lastMousePosition.y + 20, // Offset slightly below cursor
    });

    setShowConnectionDropdown(true);
  };

  // Track mouse movement on the graph to know where connections are made
  const handleGraphMouseMove = (event: React.MouseEvent) => {
    setLastMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleConnectionSelect = (connectionType: string) => {
    // Check if we're editing an existing edge or creating a new one
    if (editingEdgeId) {
      // Editing existing edge
      handleEdgeLabelChange(editingEdgeId, connectionType);
      setEditingEdgeId(null);
      setShowConnectionDropdown(false);
      return;
    }

    if (!pendingConnection) return;

    // Creating new edge
    // Get predefined labels for the selected topic
    const topicConnectionTypes =
      CONNECTION_TYPES[selectedTopic as keyof typeof CONNECTION_TYPES] ||
      CONNECTION_TYPES.default;

    const newEdge = {
      id: `edge-${pendingConnection.source}-${pendingConnection.target}`,
      source: pendingConnection.source,
      target: pendingConnection.target,
      type: "learning",
      data: {
        label: connectionType,
        connectionType: connectionType,
        predefinedLabels: topicConnectionTypes,
        onLabelChange: handleEdgeLabelChange,
        onOpenDropdown: handleOpenEdgeDropdown,
      },
    };

    setEdges((prev) => [...prev, newEdge]);
    onEdgeCreate?.(newEdge.id, { connected: true, connectionType });

    // Reset state
    setPendingConnection(null);
    setShowConnectionDropdown(false);
  };

  const handleDropdownClose = () => {
    setShowConnectionDropdown(false);
    setPendingConnection(null);
    setEditingEdgeId(null);
  };

  // Handle opening dropdown for existing edges
  const handleOpenEdgeDropdown = useCallback(
    (edgeId: string, position: { x: number; y: number }) => {
      // Reset any pending connection
      setPendingConnection(null);

      // Set the editing edge and position
      setEditingEdgeId(edgeId);
      setConnectionPosition(position);

      // Always ensure dropdown is shown (even if it was already open)
      setShowConnectionDropdown(true);
    },
    []
  );

  // Handle label change for existing edges
  const handleEdgeLabelChange = useCallback(
    (edgeId: string, newLabel: string) => {
      setEdges((currentEdges) =>
        currentEdges.map((edge) =>
          edge.id === edgeId
            ? {
                ...edge,
                data: {
                  ...edge.data,
                  label: newLabel,
                  connectionType: newLabel,
                },
              }
            : edge
        )
      );
    },
    [setEdges]
  );

  // Handle validation check
  const handleCheckGraph = useCallback(() => {
    const result = validateGraph(selectedTopic, nodes, edges);
    setValidationResult(result);
    setShowValidationFeedback(true);

    // Get predefined labels for the selected topic
    const topicConnectionTypes =
      CONNECTION_TYPES[selectedTopic as keyof typeof CONNECTION_TYPES] ||
      CONNECTION_TYPES.default;

    // Update edges with validation results
    setEdges((currentEdges) =>
      currentEdges.map((edge) => {
        const edgeResult = result.edgeResults.find((r) => r.edgeId === edge.id);
        return {
          ...edge,
          data: {
            ...edge.data,
            predefinedLabels: topicConnectionTypes,
            onLabelChange: handleEdgeLabelChange,
            onOpenDropdown: handleOpenEdgeDropdown,
            validationState: edgeResult
              ? edgeResult.isCorrect
                ? "correct"
                : "incorrect"
              : "unchecked",
            validationHint: edgeResult?.hint,
          },
        };
      })
    );

    // Notify parent if needed
    if (onGraphValidate) {
      onGraphValidate(result.isValid);
    }
  }, [
    selectedTopic,
    nodes,
    edges,
    setEdges,
    onGraphValidate,
    handleEdgeLabelChange,
    handleOpenEdgeDropdown,
  ]);

  // Reset validation when edges change
  useEffect(() => {
    if (validationResult) {
      setShowValidationFeedback(false);
      setValidationResult(null);

      // Get predefined labels for the selected topic
      const topicConnectionTypes =
        CONNECTION_TYPES[selectedTopic as keyof typeof CONNECTION_TYPES] ||
        CONNECTION_TYPES.default;

      // Reset edge validation states
      setEdges((currentEdges) =>
        currentEdges.map((edge) => ({
          ...edge,
          data: {
            ...edge.data,
            predefinedLabels: topicConnectionTypes,
            onLabelChange: handleEdgeLabelChange,
            onOpenDropdown: handleOpenEdgeDropdown,
            validationState: "unchecked",
            validationHint: undefined,
          },
        }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    edges.length,
    selectedTopic,
    handleEdgeLabelChange,
    handleOpenEdgeDropdown,
  ]);

  const nodeTypes = {
    learning: LearningGraphNode,
    custom: GraphNode,
  };

  const edgeTypes = {
    learning: GraphEdge,
    custom: GraphEdge,
  };

  return (
    <div className={clsx(styles.root, className)} aria-label="learning-graph">
      <div className={styles.graphHeader}>
        <div className={styles.headerLeft}>
          <h3 className={styles.graphTitle}>
            {selectedTopic
              ? `Граф: ${selectedTopic}`
              : "Выберите тему для изучения"}
          </h3>
          <div className={styles.learningMode}>
            {isLearningMode ? "🎓 Режим обучения" : "🔧 Режим редактирования"}
          </div>
        </div>
        <div className={styles.headerRight}>
          <button
            onClick={handleCheckGraph}
            className={styles.checkButton}
            disabled={edges.length === 0}
            title="Проверить правильность соединений"
          >
            ✓ Проверить
          </button>
        </div>
      </div>

      <div
        className={styles.graphContainer}
        ref={setGraphContainerRef}
        onMouseMove={handleGraphMouseMove}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          attributionPosition="bottom-left"
          className={styles.reactFlow}
        >
          <GraphControls />
        </ReactFlow>
      </div>

      {/* Connection Dropdown - moved outside graph container for better positioning */}
      {showConnectionDropdown && (
        <ConnectionDropdown
          selectedTopic={selectedTopic}
          onConnectionSelect={handleConnectionSelect}
          isVisible={showConnectionDropdown}
          position={connectionPosition}
          onClose={handleDropdownClose}
        />
      )}

      {/* Validation Feedback */}
      {showValidationFeedback && validationResult && (
        <div
          className={`${styles.validationFeedback} ${
            validationResult.isValid ? styles.success : styles.warning
          }`}
        >
          <div className={styles.feedbackHeader}>
            <h4 className={styles.feedbackTitle}>
              {validationResult.isValid ? "🎉 Успех!" : "📝 Результат проверки"}
            </h4>
            <button
              className={styles.closeButton}
              onClick={() => setShowValidationFeedback(false)}
              title="Закрыть"
            >
              ×
            </button>
          </div>
          <p className={styles.feedbackMessage}>{validationResult.feedback}</p>
          <div className={styles.feedbackStats}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Правильных:</span>
              <span className={styles.statValue}>
                {validationResult.correctConnections}
              </span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Неправильных:</span>
              <span className={styles.statValue}>
                {validationResult.incorrectConnections}
              </span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Ожидается всего:</span>
              <span className={styles.statValue}>
                {validationResult.totalExpected}
              </span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Оценка:</span>
              <span className={styles.statValue}>
                {validationResult.score.toFixed(0)}%
              </span>
            </div>
          </div>

          {validationResult.missingConnections.length > 0 && (
            <div className={styles.missingConnections}>
              <h5 className={styles.missingTitle}>Отсутствующие связи:</h5>
              <ul className={styles.missingList}>
                {validationResult.missingConnections.map((conn, index) => (
                  <li key={index} className={styles.missingItem}>
                    <strong>От:</strong> {conn.from.split(" - ")[0]} →{" "}
                    <strong>К:</strong> {conn.to.split(" - ")[0]}
                    <br />
                    <span className={styles.missingHint}>
                      💡 {conn.hint || conn.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className={styles.instructions}>
        <h4>Инструкции:</h4>
        <ul>
          <li>Наведите курсор на карточку для просмотра описания</li>
          <li>Перетащите от одной карточки к другой для создания связи</li>
          <li>Выберите тип связи из выпадающего списка</li>
          <li>Создайте правильную последовательность шагов</li>
          <li>
            <strong>Нажмите "Проверить"</strong> чтобы проверить правильность
            соединений
          </li>
          <li>
            Зеленые стрелки = правильно ✓, Красные стрелки = неправильно ✗
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LearningGraph;
