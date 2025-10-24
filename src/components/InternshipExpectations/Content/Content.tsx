import { useI18n } from "../../../hooks/useI18n";
import { Ul } from "../../ui";

import { ContentProps } from "./Content.types";
import { ContentItem } from "./ContentItem";

import styles from "./Content.module.scss";

const Content: React.FC<ContentProps> = ({ data }) => {
  const { t } = useI18n();

  return (
    <div>
      {data.map(({ weekNumber, title, items }, index) => (
        <div className={styles.content} key={index}>
          <p className={styles.content__week}>
            {t(`internshipPage.plan.${weekNumber}`)}
          </p>
          <p>{t(`internshipPage.plan.${title}`)}</p>

          <Ul>
            {items.map((item, i) => (
              <ContentItem item={item} key={i} />
            ))}
          </Ul>
        </div>
      ))}
    </div>
  );
};

export default Content;
