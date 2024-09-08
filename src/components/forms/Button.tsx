import { PropsWithChildren } from "react";
import clsx from "clsx";

type Variant = "contained" | "outlined" | "text";

interface ButtonProps extends PropsWithChildren {
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  variant = "contained",
  className = "",
  disabled = false,
  children,
  onClick = () => {},
}: ButtonProps) {
  const variantClasses = clsx(
    { "bg-primary text-primary-white": variant === "contained" },
    {
      "bg-none border border-primary-border text-primary-text":
        variant === "outlined",
    }
  );

  return (
    <button
      className={clsx(
        "py-3.5 w-full flex items-center justify-center gap-x-5 font-semibold text-sm leading-5 hover:opacity-90 active:opacity-80 rounded-[4px] disabled:bg-offline-gray disabled:cursor-not-allowed",
        variantClasses,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
