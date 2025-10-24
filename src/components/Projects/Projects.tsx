import { useState } from "react";

import { useI18n } from "../../hooks/useI18n";

import { Accordion } from "../ui";
import { Content } from "./Content/Content";
import { Header } from "./Header/Header";

import styles from "./Projects.module.scss";

const Projects = () => {
  const [expandedTitle, setExpandedTitle] = useState<null | string>(null);
  const { t } = useI18n();

  const projects = t("projectsPage.projects", { returnObjects: true });
  const safeProjects = Array.isArray(projects) ? projects : [];
  const handleExpand = (newTitle: string) => {
    if (newTitle === expandedTitle) {
      setExpandedTitle(null);
    } else {
      setExpandedTitle(newTitle);
    }
  };

  return (
    <>
      {safeProjects.map(({ title, descr, ...rest }) => (
        <div className={styles.accordion} key={title}>
          <Accordion
            className={styles.inner}
            title={title}
            expandedTitle={expandedTitle}
            HeaderContent={
              <Header
                title={title}
                expandedTitle={expandedTitle}
                descr={descr}
                onClick={() => handleExpand(title)}
              />
            }
          >
            <Content data={rest} />
          </Accordion>
        </div>
      ))}
    </>
  );
};

export default Projects;
