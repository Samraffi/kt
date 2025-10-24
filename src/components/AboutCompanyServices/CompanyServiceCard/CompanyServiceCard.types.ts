import { PropsWithChildren } from "react";

export interface CompanyServiceCardProps extends PropsWithChildren {
  color: "green" | "darkgreen" | "yellow";
  className?: string;
}
