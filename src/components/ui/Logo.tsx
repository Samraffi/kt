import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  to: string;
  className?: string;
  children?: ReactNode;
}

const Logo: React.FC<LogoProps> = ({ className, to, children }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default Logo;
