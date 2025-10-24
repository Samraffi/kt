export interface GraphEdgeProps {
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
  };
}
