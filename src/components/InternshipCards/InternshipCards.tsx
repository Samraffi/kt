import { useI18n } from "../../hooks/useI18n";

import { Title } from "../ui";
import { HexagonCards } from "./HexagonCards/HexagonCards";

import styles from "./InternshipCards.module.scss";

const InternshipCards = () => {
  const { t } = useI18n();

  return (
    <div className={styles.hexagons}>
      <HexagonCards />
      <div className={styles.info}>
        <Title size="small">{t("internshipPage.hexagons.calls")}</Title>
        <p>{t("internshipPage.hexagons.callsInfo")}</p>
      </div>
    </div>
  );
};

export default InternshipCards;
