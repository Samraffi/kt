import { useI18n } from "../../hooks/useI18n";

import { GreenButton, Image, Span, Title } from "../ui";

import styles from "./TopMain.module.scss";

function TopMain() {
  const { t } = useI18n();
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__block}>
          <div className={styles.main__title}>
            <Title size="big">
              {t("mainPage.title.h1")} <Span />
            </Title>
          </div>
          <GreenButton />
        </div>
        <Image
          src={"../image/hexagonsTop.svg"}
          alt={"hexagon"}
          className={styles.main__hexagons}
        />
        <Image
          src={"../image/hexagonTopMiddleGreen.svg"}
          alt={"hexagon"}
          className={styles.main__hexagonTopMiddleGreen}
        />
        <Image
          src={"../image/hexagonTopYellow.svg"}
          alt={"hexagon"}
          className={styles.main__hexagonTopYellow}
        />
        <Image
          src={"../image/hexagonTopDarkGreen.svg"}
          alt={"hexagon"}
          className={styles.main__hexagonTopDarkGreen}
        />
      </div>
    </div>
  );
}

export default TopMain;
