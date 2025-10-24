import { FieldProps } from "formik";

export interface InputFieldProps extends FieldProps {
  id?: string;
  placeholder?: string;
  className?: string;
}
