import React from "react";

import { InputFieldProps } from "./InputField.types";

import styles from "./InputField.module.scss";

const InputField: React.FC<InputFieldProps> = ({
  field,
  form,
  id,
  className,
  placeholder,
  ...props
}) => (
  <input
    {...field}
    type="input"
    id={id}
    className={styles.inputField}
    placeholder={placeholder}
    {...props}
  />
);

export default InputField;
