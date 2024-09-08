import { ChangeEvent } from "react";

import Input from "../forms/Input";

interface FormControlProps {
  type?: "text" | "email" | "password";
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  rules?: any;
  errors?: string[];
  setErrors?: (errors: string[]) => void;
  formSubmitted?: boolean;
}

function FormControl({
  type = "text",
  name = "",
  label = "",
  placeholder = "",
  startAdornment,
  endAdornment,
  ...props
}: FormControlProps) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <label className="text-sm">{label}</label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        {...props}
      />
    </div>
  );
}

export default FormControl;
