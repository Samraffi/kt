import { useI18n } from "../../../hooks/useI18n";

import styles from "./Span.module.scss";

function Span() {
  const { t } = useI18n();
  return <span className={styles.span}>{t("mainPage.title.span")}</span>;
}

export default Span;
