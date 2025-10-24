import { Image, Title } from "../ui";
import { Project } from "./ProjectCard.types";

import styles from "./ProjectCardMain.module.scss";

function ProjectCardMain({
  id,
  image,
  name,
  description,
  cardStyles,
}: Project) {
  return (
    <div className={`${styles.projectCardMain} ${styles[cardStyles]}`}>
      <div>
        <Image src={image} alt={name} />
      </div>
      <Title size="small">{name}</Title>
      <p className={styles.projectCardMain__description}>{description}</p>
    </div>
  );
}

export default ProjectCardMain;
