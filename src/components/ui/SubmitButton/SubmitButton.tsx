import { useI18n } from "../../../hooks/useI18n";

import Button from "../Button/Button";

import styles from "./SubmitButton.module.scss";

const SubmitButton = () => {
  const { t } = useI18n();
  return (
    <Button className={styles.submitButton} type={"submit"}>
      {t("applicationMain.form.button")}
    </Button>
  );
};

export default SubmitButton;
