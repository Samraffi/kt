import { useI18n } from "../../../hooks/useI18n";
import { Image, Li, Title, Ul } from "../../ui";

import { ContentProps } from "./Content.types";

import styles from "./Content.module.scss";

export const Content: React.FC<ContentProps> = ({ data }) => {
  const { t } = useI18n();

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <Title size="small" className={styles.title}>
          {t("projectsPage.problem")}
        </Title>
        <p>{data.problem}</p>
      </div>
      {data.solutions.map((solution, index) => (
        <div key={index} className={styles.main}>
          <div className={styles.solution}>
            <>
              {index === 0 && (
                <Title className={styles.solution__title} size="small">
                  {t("projectsPage.solutions")}
                </Title>
              )}
              <div className={styles.solution__info}>
                <div className={styles.solution__wrapper}>
                  <p className={styles.solution__number}>0{index + 1}</p>
                  <div className={styles.solution__text}>
                    {solution.solution}
                  </div>
                </div>
                <div className={styles.solution__images}>
                  <Image src="image/googlePlay.svg" alt="icon" />
                  <Image src="image/appStore.svg" alt="icon" />
                  <Image src="image/web.svg" alt="icon" />
                </div>
              </div>
            </>
          </div>
          <div
            className={`${styles.arrow} ${index === 0 ? styles.arrowFirst : ""}`}
          >
            {index === 0 && <></>}

            <Image src="/image/arrowResults.svg" alt="arrow" />
          </div>
          <div className={styles.results}>
            {index === 0 && (
              <Title className={styles.solution__title} size="small">
                {t("projectsPage.results")}
              </Title>
            )}
            <p>{t("projectsPage.companyGot")}</p>
            <Ul className={styles.results}>
              {solution.results.map((result) => (
                <Li key={result}>{result}</Li>
              ))}
            </Ul>
          </div>
        </div>
      ))}
    </div>
  );
};
