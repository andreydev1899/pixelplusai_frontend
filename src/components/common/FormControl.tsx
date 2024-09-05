import Input from "../forms/Input";

interface FormControlProps {
  type?: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

function FormControl({
  type = "text",
  label = "",
  placeholder = "",
  defaultValue = "",
  startAdornment,
  endAdornment,
}: FormControlProps) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <label className="text-sm">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
      />
    </div>
  );
}

export default FormControl;
