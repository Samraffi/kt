import { RoutePaths } from "../../constans/paths";
import { useI18n } from "../../hooks/useI18n";

import Frame from "../Frame/Frame";
import { MoreLink, Title } from "../ui";

import styles from "./AboutMain.module.scss";

function AboutMain() {
  const { t } = useI18n();
  return (
    <Frame>
      <div className={styles.title}>
        <Title size="big">PluhSoft</Title>
      </div>
      <div className={styles.about}>
        <p className={styles.about__description}>{t("mainPage.about")}</p>
        <MoreLink to={RoutePaths.About}>
          {t("mainPage.learnMore.about")}
        </MoreLink>
      </div>
    </Frame>
  );
}

export default AboutMain;
