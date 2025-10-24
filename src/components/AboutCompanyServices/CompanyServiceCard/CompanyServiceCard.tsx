import { CompanyServiceCardProps } from "./CompanyServiceCard.types";

import styles from "./CompanyServicesCard.module.scss";

export const CompanyServiceCard: React.FC<CompanyServiceCardProps> = ({
  color,
  className = "",
  children,
}) => {
  return (
    <div className={`${styles.card} ${styles[color]} ${className}`}>
      {children}
    </div>
  );
};
