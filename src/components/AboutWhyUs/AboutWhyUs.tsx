import { useI18n } from "../../hooks/useI18n";

import { Title } from "../ui";
import { Description } from "./Description/Description";

import styles from "./AboutWhyUs.module.scss";

const AboutWhyUs = () => {
  const { t } = useI18n();

  return (
    <div className={styles.whyUs}>
      <Title size="big">{t("aboutPage.whyUs.title")}</Title>
      <div className={styles.whyUs__wrapper}>
        <Description
          title={t("aboutPage.whyUs.approach.title")}
          description={t("aboutPage.whyUs.approach.description")}
        />
        <Description
          title={t("aboutPage.whyUs.expertise.title")}
          description={t("aboutPage.whyUs.expertise.description")}
        />
        <Description
          title={t("aboutPage.whyUs.communication.title")}
          description={t("aboutPage.whyUs.communication.description")}
        />
      </div>
    </div>
  );
};

export default AboutWhyUs;
