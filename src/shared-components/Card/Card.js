import React from "react";
import styles from "./Card.style.scss";
import cn from "classnames";

const Card = ({ className, children }) => {
  return <div className={cn(styles["card"], className)}>{children}</div>;
};

export default Card;
