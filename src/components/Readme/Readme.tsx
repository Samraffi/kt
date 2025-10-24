import H1 from "../H1/H1";
import H3 from "../H3/H3";
import Typography from "../Typography/Typography";
import { ReadmeDataProps } from "./Readme.types";

import styles from "./Readme.module.scss";

const Readme = ({ mainTitle, description, cards }: ReadmeDataProps) => {
  return (
    <div className={styles.center}>
      <div className={styles.content}>
        <H1 className={"gradientText"}>{mainTitle}</H1>
        <Typography className={"fs-19 mb-10"} text={description} />

        <div className={styles.cards}>
          {cards.map(({ icon, title, desc }, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{icon}</span>
              <H3>{title}</H3>
              <Typography text={desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readme;
