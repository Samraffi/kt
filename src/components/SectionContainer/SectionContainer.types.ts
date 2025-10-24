import { ReactNode } from "react";

export type SectionContainerProps = {
  variant?: string;
  tag: string;
  title: string;
  testId?: string;
  children: ReactNode;
};
