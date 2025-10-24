import React from "react";

import { HexagonMarkProps } from "./HexagonMark.types";

import styles from "./HexagonMark.module.scss";

const HexagonMark: React.FC<HexagonMarkProps> = ({ color }) => {
  return (
    <svg
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles[color]}
        d="M21.2116 1.77069L26.6481 11.1864C27.1173 11.9996 27.1173 13.0005 26.6481 13.8137L21.2116 23.2294C20.7425 24.0426 19.8748 24.543 18.9365 24.543H8.06351C7.12518 24.543 6.25752 24.0426 5.78836 23.2294L0.351872 13.8137C-0.117291 13.0005 -0.117291 11.9996 0.351872 11.1864L5.78836 1.77069C6.25752 0.957471 7.12518 0.457031 8.06351 0.457031H18.9365C19.8748 0.45819 20.7425 0.958629 21.2116 1.77069Z"
      />
    </svg>
  );
};

export default HexagonMark;
