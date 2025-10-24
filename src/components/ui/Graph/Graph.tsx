import { ReactFlow } from "@xyflow/react";
import clsx from "clsx";
import React from "react";

import { useGraph } from "../../../hooks/useGraph";

import GraphControls from "../GraphControls/GraphControls";
import GraphEdge from "../GraphEdge/GraphEdge";
import GraphNode from "../GraphNode/GraphNode";
import TopicSelectorNode from "../GraphNode/TopicSelectorNode";

import styles from "./Graph.module.scss";
import "@xyflow/react/dist/style.css";

interface GraphWithTopicProps {
  className?: string;
  onTopicChange?: (topic: string | null, relatedCommands: string[]) => void;
}

const Graph = ({ className, onTopicChange }: GraphWithTopicProps) => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    selectedTopic,
    selectedRelatedCommands,
  } = useGraph();

  // Notify parent component when topic changes
  React.useEffect(() => {
    if (onTopicChange) {
      onTopicChange(selectedTopic, selectedRelatedCommands);
    }
  }, [selectedTopic, selectedRelatedCommands, onTopicChange]);

  // Define custom edge and node types
  const edgeTypes = {
    custom: GraphEdge,
  };

  const nodeTypes = {
    custom: GraphNode,
    topicSelector: TopicSelectorNode,
  };

  return (
    <div className={clsx(styles.root, className)} aria-label="graph">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <GraphControls />
      </ReactFlow>
    </div>
  );
};

export default Graph;
