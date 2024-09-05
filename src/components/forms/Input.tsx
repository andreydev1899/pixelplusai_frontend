import clsx from "clsx";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder?: string;
  defaultValue?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

function Input({
  type,
  startAdornment,
  endAdornment,
  placeholder = "",
  defaultValue = "",
}: InputProps) {
  return (
    <div className="relative w-full">
      {startAdornment && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
          {startAdornment}
        </span>
      )}
      {endAdornment && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center">
          {endAdornment}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={clsx(
          "p-3 w-full text-sm text-primary-text placeholder:text-primary-text/80 border border-primary-border rounded-md outline-none",
          { "pl-10": startAdornment }
        )}
      />
    </div>
  );
}

export default Input;
