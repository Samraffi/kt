export type GraphElement = {
  topic: string | null;
  relatedCommands: string[];
};

export type GraphProps = {
  className?: string;
  topic?: string;
  relatedCommands?: string[];
};

export type FlowNode = {
  id: string;
  type: "custom" | "topicSelector";
  data: {
    label: string;
    description?: string;
    onTopicSelect?: (topic: string, relatedCommands: string[]) => void;
  };
  position: { x: number; y: number };
};

export type FlowEdge = {
  id: string;
  source: string;
  target: string;
  type?: "default" | "straight" | "step" | "smoothstep" | "custom";
  label?: string;
  data?: {
    label?: string;
    predefinedLabels?: string[];
    onLabelChange?: (edgeId: string, label: string) => void;
  };
  sourceHandle?: string | null;
  targetHandle?: string | null;
};
