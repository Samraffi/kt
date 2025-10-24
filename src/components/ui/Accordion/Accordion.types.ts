import { PropsWithChildren, ReactNode } from "react";

export interface AccordionProps extends PropsWithChildren {
  expandedTitle: null | string;
  title: string | string;
  className?: string;
  HeaderContent: ReactNode;
}
