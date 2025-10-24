import { useState } from "react";

import { useI18n } from "../../../hooks/useI18n";
import { Accordion, HexagonMark } from "../../ui";

import Content from "../Content/Content";
import { Header } from "./Header/Header";
import { timelineData } from "./PlanData";

import styles from "./Plan.module.scss";

export const Plan = () => {
  const { t } = useI18n();
  const [expandedTitle, setExpandedTitle] = useState<null | string>(null);

  const handleExpand = (newTitle: string) => {
    if (newTitle === expandedTitle) {
      setExpandedTitle(null);
    } else {
      setExpandedTitle(newTitle);
    }
  };

  return (
    <div className={styles.plan}>
      {Object.entries(timelineData).map(([month, data]) => (
        <div key={month} className={styles.plan__item}>
          <div className={styles.plan__mark}>
            <HexagonMark color="yellow" />
          </div>
          <Accordion
            className={styles.accordion}
            title={t(`internshipPage.plan.${month}`)}
            expandedTitle={expandedTitle}
            HeaderContent={
              <Header
                title={t(`internshipPage.plan.${month}`)}
                expandedTitle={expandedTitle}
                handleExpand={handleExpand}
              />
            }
          >
            <Content data={data} />
          </Accordion>
        </div>
      ))}
    </div>
  );
};
