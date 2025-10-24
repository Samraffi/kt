import { useI18n } from "../../hooks/useI18n";

import { HexagonTitle, Image, Title } from "../ui";
import { resultItems } from "./ResultItems";

import styles from "./InternshipResults.module.scss";

const InternshipResults = () => {
  const { t } = useI18n();

  return (
    <div className={styles.results}>
      <div className={styles.results__container}>
        <div className={styles.results__info}>
          <Title size="medium">{t("internshipPage.results.title")}</Title>
          <Title size="small">{t("internshipPage.results.subtitle")}</Title>
          <div className={styles.results__info_items}>
            {resultItems.map((result) => (
              <HexagonTitle
                key={result}
                color="darkgreen"
                className={styles.results__info_item}
              >
                {t(`internshipPage.results.${result}`)}
              </HexagonTitle>
            ))}
          </div>
        </div>
        <Image
          className={styles.internship__img}
          src="/image/internshipResults.png"
          alt="internship"
        />
      </div>
    </div>
  );
};

export default InternshipResults;
