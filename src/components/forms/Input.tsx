import { ChangeEvent, useRef, useState } from "react";
import clsx from "clsx";

interface InputProps {
  type: "text" | "email" | "password";
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type,
  name = "",
  startAdornment,
  endAdornment,
  placeholder = "",
  ...props
}: InputProps) {
  return (
    <div className="relative w-full flex flex-col gap-y-0.5">
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
        name={name}
        placeholder={placeholder}
        className={clsx(
          "p-3 w-full text-sm text-primary-text placeholder:text-primary-text/80 border border-primary-border rounded-md outline-none",
          { "pl-10": startAdornment }
        )}
        {...props}
      />
    </div>
  );
}

export default Input;
