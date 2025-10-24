import { useI18n } from "../../../hooks/useI18n";
import { Li, Ul } from "../../ui";

import { ContentItemProps } from "./Content.types";

export const ContentItem: React.FC<ContentItemProps> = ({ item }) => {
  const { t } = useI18n();

  if (typeof item === "string") {
    return <li>{t(`internshipPage.plan.${item}`)}</li>;
  }

  return (
    <Li>
      <span>{item.item}</span>
      {item.subItems && (
        <Ul>
          {item.subItems.map((nested, idx) => (
            <ContentItem item={nested} key={idx} />
          ))}
        </Ul>
      )}
    </Li>
  );
};
