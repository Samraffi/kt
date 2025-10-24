import { ReactNode } from "react";

export interface CustomLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  color?: "primary" | "secondary";
  align?: "start" | "center" | "end";
}
