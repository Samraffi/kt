import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Language } from "../../../enum/Language";

import LiLang from "../LiLang/LiLang";
import Ul from "../Ul/Ul";

import styles from "./LangButton.module.scss";

function LangButton() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={styles.langSwitcher}>
      <button className={styles.langSwitcher__button} onClick={toggleDropdown}>
        {i18n.language.toUpperCase()}
      </button>
      {isOpen && (
        <Ul className={styles.langSwitcher__languages}>
          <LiLang onClick={() => changeLanguage(Language.RU)}>RU</LiLang>
          <LiLang onClick={() => changeLanguage(Language.EN)}>EN</LiLang>
        </Ul>
      )}
    </div>
  );
}

export default LangButton;
