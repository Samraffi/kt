export interface GraphNodeProps {
  id: string;
  data: {
    label: string;
    description?: string;
  };
  type?: "input" | "default" | "output" | "decision";
}

export type GraphNodeType = "input" | "default" | "output" | "decision";
