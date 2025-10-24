import React from "react";

import Frame from "../Frame/Frame";
import { FrameColorProps } from "./FrameColor.types";

import styles from "./FrameColor.module.scss";

const FrameColor: React.FC<FrameColorProps> = ({ children }) => {
  return <Frame className={styles.frameColor}>{children}</Frame>;
};
export default FrameColor;
