import React from "react";
import { useInView } from "react-intersection-observer";

const VirtualScrollChild = ({ height, children, className }) => {
  const [ref, inView] = useInView();
  const style = {
    height: `${height}px`,
    overflow: "hidden",
  };
  return (
    <div className={className} style={style} ref={ref}>
      {inView ? children : null}
    </div>
  );
};

export default VirtualScrollChild;
