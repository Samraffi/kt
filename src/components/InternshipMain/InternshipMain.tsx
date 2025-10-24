import { RoutePaths } from "../../constans/paths";
import { useI18n } from "../../hooks/useI18n";

import FrameColor from "../FrameColor/FrameColor";
import { Image, MoreLink, Title } from "../ui";

import styles from "./InternshipMain.module.scss";

function InternshipMain() {
  const { t } = useI18n();

  return (
    <FrameColor>
      <Image
        src={"../image/imageIntern.png"}
        alt={"internship"}
        className={styles.internshipMain__image}
      />
      <div className={styles.internshipMain__content}>
        <Title color="secondary">{t("mainPage.internship.title")}</Title>
        <p className={styles.internshipMain__description}>
          {t("mainPage.internship.description")}
        </p>
        <MoreLink to={RoutePaths.Internship} color="secondary" align="start">
          {t("mainPage.learnMore.internship")}
        </MoreLink>
      </div>
    </FrameColor>
  );
}
export default InternshipMain;
