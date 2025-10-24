import CustomLink from "../CustomLink/CustomLink";
import { MoreLinkProps } from "./MoreLink.types";

import styles from "./MoreLink.module.scss";

const MoreLink: React.FC<MoreLinkProps> = ({ to, color, children, align }) => {
  return (
    <CustomLink className={styles.moreLink} to={to} color={color} align={align}>
      {children}
    </CustomLink>
  );
};

export default MoreLink;
