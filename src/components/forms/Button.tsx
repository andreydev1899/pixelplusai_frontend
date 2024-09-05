import { PropsWithChildren } from "react";
import clsx from "clsx";

type Variant = "contained" | "outlined" | "text";

interface ButtonProps extends PropsWithChildren {
  variant?: Variant;
  className?: string;
}

function Button({
  variant = "contained",
  className = "",
  children,
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
        "py-3.5 w-full flex items-center justify-center gap-x-5 font-semibold text-sm leading-5 hover:opacity-90 active:opacity-80 rounded-[4px]",
        variantClasses,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
