import { useState } from "react";

import { useI18n } from "../../../hooks/useI18n";
import { HexagonBox } from "../../ui";

import { HexagonKey } from "./HexagonCards.types";

import styles from "./HexagonCards.module.scss";

export const HexagonCards = () => {
  const { t } = useI18n();

  const [clickedCards, setClickedCards] = useState<Record<HexagonKey, boolean>>(
    {
      left: false,
      top: false,
      bottom: false,
      right: false,
    }
  );

  const handleCardClick = (card: HexagonKey) => {
    setClickedCards((prev) => ({
      ...prev,
      [card]: !prev[card],
    }));
  };

  return (
    <div className={styles.cards__hexagons}>
      <div
        className={`${styles.card} ${styles.card__left} ${clickedCards.left ? styles.card__clickedLeft : ""}`}
        onClick={() => handleCardClick("left")}
      >
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.left} ${styles.front}`}
          fill
          borderColor="darkgreen"
        >
          {t("internshipPage.hexagons.daily")}
        </HexagonBox>
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.left} ${styles.back}`}
          fill
          borderColor="grey"
        >
          {t("internshipPage.hexagons.currentTasks")}
        </HexagonBox>
      </div>

      <div
        className={`${styles.card} ${styles.card__top} ${clickedCards.top ? styles.card__clickedTop : ""}`}
        onClick={() => handleCardClick("top")}
      >
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.top} ${styles.front}`}
          fill
          borderColor="green"
        >
          {t("internshipPage.hexagons.planning")}
        </HexagonBox>
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.top} ${styles.back}`}
          fill
          borderColor="grey"
        >
          {t("internshipPage.hexagons.weekTasks")}
        </HexagonBox>
      </div>

      <div
        className={`${styles.card} ${styles.card__bottom} ${clickedCards.bottom ? styles.card__clickedBottom : ""}`}
        onClick={() => handleCardClick("bottom")}
      >
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.bottom} ${styles.front}`}
          fill
          borderColor="darkestgreen"
        >
          {t("internshipPage.hexagons.review")}
        </HexagonBox>

        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.bottom} ${styles.back}`}
          fill
          borderColor="grey"
        >
          {t("internshipPage.hexagons.connection")}
        </HexagonBox>
      </div>

      <div
        className={`${styles.card} ${styles.card__right} ${clickedCards.right ? styles.card__clickedRight : ""}`}
        onClick={() => handleCardClick("right")}
      >
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.right} ${styles.front}`}
          fill
          borderColor="yellow"
        >
          {t("internshipPage.hexagons.demo")}
        </HexagonBox>
        <HexagonBox
          className={`${styles.cards__hexagon} ${styles.right} ${styles.back}`}
          fill
          borderColor="grey"
        >
          {t("internshipPage.hexagons.presentation")}
        </HexagonBox>
      </div>
    </div>
  );
};
