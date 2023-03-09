import React from "react";
import cn from "classnames";
import * as icons from "./components/Icons";
import Styles from "./Icon.style.scss";

const Icon = ({ name, color = "#404040", size, className, ...props }) => {
  const IconComponent = icons[name];
  return (
    <span
      className={cn(Styles["icon"], { [Styles[size]]: size }, className)}
      {...props}
    >
      <IconComponent fill={color} />
    </span>
  );
};

export default Icon;
