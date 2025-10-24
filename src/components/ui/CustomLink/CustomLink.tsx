import { Link } from "react-router-dom";

import { CustomLinkProps } from "./CustomLink.types";

import styles from "./CustomLink.module.scss";

const CustomLink: React.FC<CustomLinkProps> = ({
  className,
  to,
  color = "primary",
  align = "center",
  children,
}) => {
  return (
    <Link
      className={`${styles.customLink} ${styles[color]} ${styles[align]} ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
