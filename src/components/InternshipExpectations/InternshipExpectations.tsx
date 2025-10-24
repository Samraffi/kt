import { useI18n } from "../../hooks/useI18n";

import { HexagonBox, Image, Title } from "../ui";
import { Plan } from "./Plan/Plan";

import styles from "./InternshipExpectations.module.scss";

const InternshipExpectations = () => {
  const { t } = useI18n();

  return (
    <div className={styles.expectations}>
      <div className={styles.expectations__container}>
        <div className={styles.expectations__info}>
          <div className={styles.expectations__titles}>
            <Title size="medium">{t("internshipPage.plan.expectations")}</Title>
            <Title size="small">{t("internshipPage.plan.timeline")}</Title>
          </div>
          <div className={styles.expectations__hexagons}>
            <HexagonBox
              className={styles.expectations__hexagon}
              borderColor="green"
            >
              <Image src="/image/calendar_icon.svg" alt="calendar" />
              <span>{t("internshipPage.plan.months")}</span>
            </HexagonBox>
            <HexagonBox
              className={styles.expectations__hexagon}
              borderColor="green"
            >
              <Image src="/image/clock_icon.svg" alt="clock" />
              <span>{t("internshipPage.plan.hours")}</span>
            </HexagonBox>
          </div>
        </div>
        <p className={styles.expectations__description}>
          {t("internshipPage.plan.info")}
        </p>
        <Plan />
        <p>{t("internshipPage.plan.important")}</p>
      </div>
    </div>
  );
};

export default InternshipExpectations;
