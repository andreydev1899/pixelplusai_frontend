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
}

function FormControl({
  type = "text",
  name = "",
  label = "",
  placeholder = "",
  defaultValue = "",
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
        defaultValue={defaultValue}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        {...props}
      />
    </div>
  );
}

export default FormControl;
