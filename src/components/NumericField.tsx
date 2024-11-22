import { TextField, TextFieldProps } from "@mui/material";
import { NumericFormat } from "react-number-format";

type NumericFieldProps = {
  value: number;
  prefix?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  decimalScale?: number;
  onChange?: (value?: number) => void;
};

export const NumericField = ({
  value,
  prefix,
  label,
  decimalScale,
  onChange,
  ...props
}: NumericFieldProps) => {
  return (
    <NumericFormat
      className="w-full"
      customInput={TextField}
      onValueChange={(e) => onChange?.(e.floatValue)}
      prefix={prefix}
      label={label}
      value={value}
      decimalScale={decimalScale}
      decimalSeparator={","}
      thousandSeparator={"."}
      {...props}
    />
  );
};
