import { Form } from "formik";
import React from "react";

import { FormFieldProps } from "./FormField.types";

import styles from "./FormField.module.scss";

const FormField: React.FC<FormFieldProps> = ({ children }) => (
  <Form className={styles.formField}>{children}</Form>
);

export default FormField;
