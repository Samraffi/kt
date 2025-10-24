import Li from "../Li/Li";
import { LiLangProps } from "./LiLang.types";

import styles from "./LiLang.module.scss";

const LiLang: React.FC<LiLangProps> = ({ children, onClick }) => {
  return (
    <Li className={styles.liLang} onClick={onClick}>
      {children}
    </Li>
  );
};

export default LiLang;
