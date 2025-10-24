import { useLocation, useNavigate } from "react-router-dom";

import { FormIds, RoutePaths } from "../../../constans/paths";
import { useI18n } from "../../../hooks/useI18n";

import Button from "../Button/Button";

import styles from "./GreenButton.module.scss";

const scrollIds: Partial<Record<RoutePaths, FormIds>> = {
  [RoutePaths.Home]: FormIds.Home,
  [RoutePaths.Internship]: FormIds.Internship,
} as const;

const GreenButton = () => {
  const { t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToForm = () => {
    const currentPath = location.pathname as RoutePaths;
    const formId = scrollIds[currentPath];

    if (formId) {
      // Если текущая страница имеет форму, то скроллим к ней
      const formElement = document.getElementById(formId);
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Если текущая страница не имеет формы, то переходим на домашнюю страницу и скроллим к главной форме
      navigate(RoutePaths.Home);
      // Используем setTimeout, чтобы убедиться, что навигация завершена перед скроллом
      setTimeout(() => {
        const mainFormElement = document.getElementById(FormIds.Home);
        if (mainFormElement) {
          mainFormElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <Button className={styles.greenButton} size="small" onClick={scrollToForm}>
      {t("mainPage.button")}
    </Button>
  );
};

export default GreenButton;
