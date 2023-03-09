import React, { forwardRef } from "react";
import cn from "classnames";
import Styles from "./Button.style.scss";

// variant = 'primary' | 'outlined'

const Button = (
  { className, children, variant = "primary", ...props },
  ref
) => {
  return (
    <button
      className={cn(Styles["button"], {
        [Styles["primary"]]: variant === "primary",
      })}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
