import { ReactNode } from "react";

export interface LiProps {
  variant?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}
