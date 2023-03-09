import React, { useMemo } from "react";
import cn from "classnames";
import icons from "@constants/icons";
import Icon from "@sharedComponents/icon";
import Styles from "./Rate.style.scss";

const Rate = ({ rate }) => {
  const rateClassName = useMemo(() => {
    let colorRange = rate * 10 - ((rate * 10) % 5);
    if (colorRange > 45) {
      colorRange = "default";
    }
    if (colorRange < 10) {
      colorRange = 10;
    }
    const className = `color-${colorRange}`;
    return className;
  }, [rate]);

  return (
    <div className={cn(Styles["wrapper"], Styles[rateClassName])}>
      <span className={Styles["rate"]}>{rate}</span>
      <Icon name={icons.star} className={Styles["icon"]} />
    </div>
  );
};

export default Rate;
