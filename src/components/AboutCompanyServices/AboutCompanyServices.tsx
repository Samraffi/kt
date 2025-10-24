import { useI18n } from "../../hooks/useI18n";

import { Title } from "../ui";
import { CompanyServiceCard } from "./CompanyServiceCard/CompanyServiceCard";

import styles from "./AboutCompanyServices.module.scss";

const AboutCompanyServices = () => {
  const { t } = useI18n();

  return (
    <div className={styles.company}>
      <Title size="big">{t("aboutPage.company.title")}</Title>
      <div className={styles.company__wrapper}>
        <p>{t("aboutPage.company.description")}</p>
        <div className={styles.company__cards}>
          <div className={styles.wrapper}>
            <CompanyServiceCard color="green">
              <Title className={styles.title} as="h2" size="small">
                {t("aboutPage.company.cards.automation")}
              </Title>
            </CompanyServiceCard>

            <CompanyServiceCard className={styles.medium} color="yellow">
              <Title size="small">
                {t("aboutPage.company.cards.development")}
              </Title>
            </CompanyServiceCard>
          </div>
          <CompanyServiceCard className={styles.large} color="darkgreen">
            <Title className={styles.title} as="h2" size="small">
              {t("aboutPage.company.cards.internship")}
            </Title>
          </CompanyServiceCard>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyServices;
