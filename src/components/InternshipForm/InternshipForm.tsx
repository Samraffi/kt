import { useI18n } from "../../hooks/useI18n";

import { Title } from "../ui";
import { Form } from "./Form/Form";

import styles from "./InternshipForm.module.scss";

const InternshipForm = () => {
  const { t } = useI18n();

  return (
    <div className={styles.form} id="internshipForm">
      <Title className={styles.title} size="medium">
        {t("internshipPage.form.ready")}
      </Title>
      <p className={styles.subtitle}>{t("internshipPage.form.contacts")}</p>
      <Form />
    </div>
  );
};

export default InternshipForm;
