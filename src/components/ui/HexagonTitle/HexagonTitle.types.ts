import { PropsWithChildren } from "react";

export interface HexagonTitleProps extends PropsWithChildren {
  color: "green" | "darkgreen" | "yellow";
  className?: string;
}
