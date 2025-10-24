import type React from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export type TabsProps = {
  tabs: TabItem[];
  initialActiveId?: string;
  className?: string;
};
