import { FieldProps } from "formik";

export interface TextareaFieldProps extends FieldProps {
  id: string;
  placeholder?: string;
  className?: string;
}
