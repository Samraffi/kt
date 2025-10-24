import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

import { useI18n } from "../../../hooks/useI18n";
import { businesses } from "../../ApplicationMain/businesses";

import { SelectFieldProps } from "./SelectField.types";

import styles from "./SelectField.module.scss";

const SelectField: React.FC<SelectFieldProps> = ({
  field,
  form,
  children,
  label,
  placeholder = "",
  ...props
}) => {
  const { t } = useI18n();

  return (
    <FormControl fullWidth variant="outlined">
      <Select
        {...field}
        {...props}
        placeholder={t("applicationMain.form.business")}
        className={styles.selectField}
      >
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {businesses.map((business) => (
          <MenuItem
            key={business}
            value={t(`applicationMain.form.${business}`)}
          >
            {t(`applicationMain.form.${business}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
