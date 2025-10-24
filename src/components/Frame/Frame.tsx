import React from "react";

import { FrameProps } from "./Frame.types";

import styles from "./Frame.module.scss";

const Frame: React.FC<FrameProps> = ({ className, children }) => {
  return <div className={`${styles.frame} ${className}`}>{children}</div>;
};
export default Frame;
