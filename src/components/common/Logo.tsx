import clsx from "clsx";

import classes from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <div className={classes.root}>
      <h1
        className={clsx(
          "font-montserrat font-bold text-2xl text-center bg-logo-gradient fill-transparent bg-clip-text",
          className
        )}
      >
        PIXEL PLUS AI
      </h1>
    </div>
  );
}

export default Logo;
