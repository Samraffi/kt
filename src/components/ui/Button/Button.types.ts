import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "small";
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
}
