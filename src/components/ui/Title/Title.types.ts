import { ElementType, PropsWithChildren } from "react";

export interface TitleProps extends PropsWithChildren {
  as?: ElementType;
  size?: "big" | "medium" | "small";
  color?: "primary" | "secondary";
  className?: string;
}
