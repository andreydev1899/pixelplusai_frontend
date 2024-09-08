import { ChangeEvent, useEffect, useRef, useState } from "react";
import * as validator from "class-validator";
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
  rules?: any;
  errors?: string[];
  setErrors?: (errors: string[]) => void;
  formSubmitted?: boolean;
}

function Input({
  type,
  name = "",
  startAdornment,
  endAdornment,
  placeholder = "",
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  useEffect(() => {
    if (props.rules && props.value && props.errors && props.setErrors) {
      const errors = props.errors;
      const setErrors = props.setErrors;
      setIsDirty(true);
      Object.keys(props.rules).forEach((key) => {
        if (key === "validator") {
          const rule = props.rules[key] as string;
          if (rule === "email") {
            const message = "Field should be email.";
            if (!validator.isEmail(props.value)) {
              if (!errors.find((error) => error === message))
                setErrors([...new Set([...errors, message])]);
            } else {
              if (errors.find((error) => error === message))
                setErrors([...errors.filter((error) => error !== message)]);
            }
          }
        }
        if (key === "minLength") {
          const length = props.rules[key] as number;
          const message = `Field should be more than ${length} letters.`;
          if ((props.value?.length as number) < length) {
            if (!errors.find((error) => error === message))
              setErrors([...new Set([...errors, message])]);
          } else {
            if (errors.find((error) => error === message))
              setErrors([...errors.filter((error) => error !== message)]);
          }
        }
      });
    }
  }, [props.rules, props.value, props.errors, props.setErrors]);

  return (
    <div className="flex flex-col gap-y-0.5">
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
          ref={inputRef}
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
      {props.formSubmitted &&
        isDirty &&
        props.errors &&
        props.errors.map((error, index) => (
          <p key={index} className="text-danger text-xs">
            {error}
          </p>
        ))}
    </div>
  );
}

export default Input;
