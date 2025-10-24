import { RoutePaths } from "../../constans/paths";
import { projects } from "../../constans/project";
import { useI18n } from "../../hooks/useI18n";

import FrameColumn from "../FrameColumn/FrameColumn";
import ProjectCardMain from "../ProjectCardMain/ProjectCardMain";
import { MoreLink, Title } from "../ui";

import styles from "./ProjectsMain.module.scss";

function ProjectsMain() {
  const { t } = useI18n();
  return (
    <FrameColumn>
      <div className={styles.projects__titleBox}>
        <Title>{t("mainPage.projects")}</Title>
        <MoreLink to={RoutePaths.Projects}>
          {t("mainPage.learnMore.projects")}
        </MoreLink>
      </div>
      <div className={styles.projects__positionCards}>
        {projects.map((project) => (
          <ProjectCardMain
            key={project.id}
            id={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            cardStyles={project.cardStyles}
          />
        ))}
      </div>
    </FrameColumn>
  );
}
export default ProjectsMain;
