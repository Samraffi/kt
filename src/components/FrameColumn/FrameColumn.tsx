import React from "react";

import Frame from "../Frame/Frame";
import { FrameColumnProps } from "./FrameColor.types";

import styles from "./FrameColumn.module.scss";

const FrameColumn: React.FC<FrameColumnProps> = ({ children }) => {
  return <Frame className={styles.frameColumn}>{children}</Frame>;
};
export default FrameColumn;
