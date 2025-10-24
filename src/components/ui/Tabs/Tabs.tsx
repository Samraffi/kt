import clsx from "clsx";
import { useMemo, useState } from "react";

import { TabsProps } from "./Tabs.types";

import styles from "./Tabs.module.scss";

const Tabs = ({ tabs, initialActiveId, className }: TabsProps) => {
  const defaultActiveId = useMemo(
    () => initialActiveId || tabs[0]?.id,
    [initialActiveId, tabs]
  );
  const [activeId, setActiveId] = useState<string | undefined>(defaultActiveId);

  const activeTab = useMemo(
    () => tabs.find((t) => t.id === activeId) || tabs[0],
    [activeId, tabs]
  );

  return (
    <div className={clsx(styles.root, className)}>
      <div role="tablist" className={styles.nav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeId === tab.id}
            className={clsx(styles.tab, activeId === tab.id && styles.active)}
            onClick={() => setActiveId(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className={styles.panel}>
        {activeTab?.content}
      </div>
    </div>
  );
};

export default Tabs;
