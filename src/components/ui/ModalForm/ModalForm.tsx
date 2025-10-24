import { useI18n } from "../../../hooks/useI18n";

import Image from "../Image";
import { ModalFormProps } from "./ModalForm.types";

import styles from "./ModalForm.module.scss";

function ModalForm({ onClose }: ModalFormProps) {
  const { t } = useI18n();

  return (
    <div className={styles.modalForm}>
      <div className={styles.modalForm__close} onClick={onClose}>
        <Image src={"../image/close.svg"} alt={"close"} />
      </div>
      <div className={styles.modalForm__content}>
        <Image
          src={"../image/Done.svg"}
          alt={"done"}
          className={styles.modalForm__image}
        />
        <p className={styles.modalForm__title}>{t("modalForm.title")}</p>
        <p className={styles.modalForm__description}>
          {t("modalForm.description")}
        </p>
      </div>
    </div>
  );
}
export default ModalForm;
