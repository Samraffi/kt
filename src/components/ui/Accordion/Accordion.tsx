import { AccordionProps } from "./Accordion.types";

import styles from "./Accordion.module.scss";

const Accordion: React.FC<AccordionProps> = ({
  expandedTitle,
  title,
  className,
  children,
  HeaderContent,
}) => {
  const isExpanded = title === expandedTitle;
  return (
    <div className={`${styles.accordion} ${className}`}>
      <div className={styles.accordion_header}>{HeaderContent}</div>
      <div
        className={`${styles.accordion_body} ${isExpanded ? `${styles.expanded}` : ""}`}
      >
        <div className={styles.accordion_content}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
