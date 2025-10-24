import React from "react";

import { TextareaFieldProps } from "./TextareaField.types";

import styles from "./TextareaField.module.scss";

const TextareaField: React.FC<TextareaFieldProps> = ({
  field,
  form,
  id,
  className,
  placeholder,
  ...props
}) => (
  <textarea
    {...field}
    id={id}
    className={styles.textareaField}
    placeholder={placeholder}
    {...props}
  />
);

export default TextareaField;
