import { RoutePaths } from "../../constans/paths";
import { useI18n } from "../../hooks/useI18n";

import { CustomLink, Li, Ul } from "../ui";

import styles from "./NavBar.module.scss";

function NavBar() {
  const { t } = useI18n();
  return (
    <nav>
      <Ul className={styles.navbar}>
        {/* <Li>
          <CustomLink to={RoutePaths.Projects}>
            {t("navBar.projects")}
          </CustomLink>
        </Li> */}
        <Li>
          <CustomLink to={RoutePaths.Practicum}>
            {t("navBar.practicum")}
          </CustomLink>
        </Li>
        <Li>
          <CustomLink to={RoutePaths.Internship}>
            {t("navBar.internship")}
          </CustomLink>
        </Li>
      </Ul>
    </nav>
  );
}

export default NavBar;
