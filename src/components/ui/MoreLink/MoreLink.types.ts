import { ReactNode } from "react";

export interface MoreLinkProps {
  to: string;
  children: ReactNode;
  color?: "primary" | "secondary";
  align?: "start" | "center" | "end";
}
