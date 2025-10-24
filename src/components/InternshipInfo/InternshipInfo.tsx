import { useI18n } from "../../hooks/useI18n";

import { Image, Title } from "../ui";

import styles from "./InternshipInfo.module.scss";

const InternshipInfo = () => {
  const { t } = useI18n();

  return (
    <div className={styles.internship}>
      <div className={styles.internship__info}>
        <Title size="big">{t("internshipPage.title")}</Title>
        <p className={styles.internship__description}>
          {t("internshipPage.description")}
        </p>
      </div>
      <div className={styles.internship__img}>
        <Image
          className={styles.internship__img}
          src="/image/internship.png"
          alt="internship"
        />
      </div>
    </div>
  );
};

export default InternshipInfo;
