import { CustomAnchorProps } from "./CustomAnchor.types";

import styles from "./CustomAnchor.module.scss";

const CustomAnchor: React.FC<CustomAnchorProps> = ({
  href,
  children,
  target = "_self",
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
      className={`${styles.anchor} ${className}`}
    >
      {children}
    </a>
  );
};

export default CustomAnchor;
