import { Projects } from "../../components";
import Container from "../../components/Container/Container";
import { Image, Title } from "../../components/ui";
import { useI18n } from "../../hooks/useI18n";

import styles from "./Projects.module.scss";

function ProjectsPage() {
  const { t } = useI18n();

  return (
    <Container>
      <div className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.info}>
            <Title size="big" className={styles.title}>
              {t("projectsPage.title")}
            </Title>
            <Title size="small" className={styles.subtitle}>
              {t("projectsPage.getToKnow")}
            </Title>
          </div>
          <Image
            className={styles.hexagons}
            src="/image/ProjectsHexagons.svg"
            alt="hexagons"
          />
          <Projects />
        </div>
      </div>
    </Container>
  );
}

export default ProjectsPage;
