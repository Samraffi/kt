import { telegram } from "../../constans/telegram";
import { useI18n } from "../../hooks/useI18n";

import { CustomAnchor, HexagonBox, Title } from "../ui";

import styles from "./AboutContacts.module.scss";

const AboutContacts = () => {
  const { t } = useI18n();

  return (
    <div className={styles.contacts}>
      <Title size="big">{t("aboutPage.contacts.title")}</Title>
      <div className={styles.contacts__items}>
        <HexagonBox className={styles.contacts__hexagon} borderColor="green">
          <p>{t("aboutPage.contacts.order")}</p>
          <CustomAnchor href="mailto:hr@pluhsoft.com" target="_blank">
            hr@pluhsoft.com
          </CustomAnchor>
        </HexagonBox>
        <HexagonBox className={styles.contacts__hexagon} borderColor="yellow">
          <p>{t("aboutPage.contacts.internship")}</p>
          <CustomAnchor href="mailto:hr@pluhsoft.com" target="_blank">
            hr@pluhsoft.com
          </CustomAnchor>
        </HexagonBox>
        <HexagonBox
          className={styles.contacts__hexagon}
          borderColor="darkgreen"
        >
          <p>{t("aboutPage.contacts.questionTG")}</p>
          <CustomAnchor href={`https://t.me/${telegram}`} target="_blank">
            {`@${telegram}`}
          </CustomAnchor>
        </HexagonBox>
      </div>
    </div>
  );
};

export default AboutContacts;
