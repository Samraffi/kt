import React from "react";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  children,
  size = "",
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${className}`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
