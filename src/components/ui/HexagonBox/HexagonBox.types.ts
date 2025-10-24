import { PropsWithChildren } from "react";

export interface HexagonBoxProps extends PropsWithChildren {
  className?: string;
  fill?: boolean;
  borderColor: "green" | "darkgreen" | "darkestgreen" | "yellow" | "grey";
}
